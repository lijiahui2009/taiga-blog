
(() => {
  "use strict";

  const MAX_PACKAGE_SIZE = 300 * 1024 * 1024;
  const MAX_MEDIA_SIZE = 250 * 1024 * 1024;
  const MAX_MANIFEST_SIZE = 64 * 1024;
  const MAX_ENTRIES = 3;

  const REQUIRED_ENTRIES = [
    "manifest.json",
    "media/cover",
    "media/video"
  ];

  function fail(message) {
    throw new Error("HEMENG ZIP rejected: " + message);
  }

  function inspect(input) {
    if (!(input instanceof Uint8Array)) {
      fail("Input must be Uint8Array");
    }

    const bytes = input;
    const length = bytes.byteLength;

    if (length < 22 || length > MAX_PACKAGE_SIZE) {
      fail("Package size is invalid");
    }

    const view = new DataView(
      bytes.buffer,
      bytes.byteOffset,
      bytes.byteLength
    );

    const u16 = (p) => {
      if (p < 0 || p + 2 > length) {
        fail("Unexpected end of archive");
      }
      return view.getUint16(p, true);
    };

    const u32 = (p) => {
      if (p < 0 || p + 4 > length) {
        fail("Unexpected end of archive");
      }
      return view.getUint32(p, true);
    };

    function checkExtraFields(start, size) {
      const end = start + size;

      if (
        start < 0 ||
        size < 0 ||
        end > length
      ) {
        fail("Extra field is outside archive bounds");
      }

      let cursor = start;

      while (cursor < end) {
        if (cursor + 4 > end) {
          fail("Malformed extra field");
        }

        const id = u16(cursor);
        const fieldSize = u16(cursor + 2);

        cursor += 4;

        if (cursor + fieldSize > end) {
          fail("Malformed extra field size");
        }

        if (id === 0x0001) {
          fail("ZIP64 extra field is not supported");
        }

        cursor += fieldSize;
      }
    }

    // 查找 ZIP 文件结束记录
    const minEocd = Math.max(
      0,
      length - 22 - 65535
    );

    let eocd = -1;

    for (
      let p = length - 22;
      p >= minEocd;
      p--
    ) {
      if (u32(p) === 0x06054b50) {
        const commentLength = u16(p + 20);

        if (p + 22 + commentLength === length) {
          eocd = p;
          break;
        }
      }
    }

    if (eocd < 0) {
      fail("End of central directory not found");
    }

    const diskNumber = u16(eocd + 4);
    const centralDisk = u16(eocd + 6);
    const entriesOnDisk = u16(eocd + 8);
    const entryCount = u16(eocd + 10);
    const centralSize = u32(eocd + 12);
    const centralOffset = u32(eocd + 16);

    if (
      diskNumber !== 0 ||
      centralDisk !== 0 ||
      entriesOnDisk !== entryCount
    ) {
      fail("Multi-disk ZIP archives are not supported");
    }

    if (
      entryCount === 0xffff ||
      centralSize === 0xffffffff ||
      centralOffset === 0xffffffff
    ) {
      fail("ZIP64 archives are not supported in HEMENG 1.0");
    }

    if (entryCount !== MAX_ENTRIES) {
      fail("Unexpected number of archive entries");
    }

    if (
      centralOffset + centralSize !== eocd ||
      centralOffset > eocd
    ) {
      fail("Invalid central directory bounds");
    }

    const decoder = new TextDecoder("utf-8", {
      fatal: true
    });

    const entries = [];
    const names = new Set();

    let cursor = centralOffset;
    let totalMediaSize = 0;

    // 检查中央目录
    for (let i = 0; i < entryCount; i++) {
      if (
        cursor + 46 > eocd ||
        u32(cursor) !== 0x02014b50
      ) {
        fail("Invalid central directory entry");
      }

      const flags = u16(cursor + 8);
      const method = u16(cursor + 10);
      const crc = u32(cursor + 16);

      const compressedSize = u32(cursor + 20);
      const uncompressedSize = u32(cursor + 24);

      const nameLength = u16(cursor + 28);
      const extraLength = u16(cursor + 30);
      const entryCommentLength = u16(cursor + 32);

      const startDisk = u16(cursor + 34);
      const localOffset = u32(cursor + 42);

      const recordEnd =
        cursor +
        46 +
        nameLength +
        extraLength +
        entryCommentLength;

      if (
        recordEnd > eocd ||
        nameLength === 0
      ) {
        fail("Invalid entry metadata bounds");
      }

      if (startDisk !== 0) {
        fail("Split archive entry is not supported");
      }

      if (method !== 0 && method !== 8) {
        fail("Unsupported ZIP compression method");
      }

      // 允许 UTF-8 标志位。
      // Deflate 允许压缩选项 bits 1/2。
      // 其他标志位均拒绝，包括加密和数据描述符。
      const allowedFlags =
        0x0800 |
        (method === 8 ? 0x0006 : 0);

      if ((flags & ~allowedFlags) !== 0) {
        fail("Unsupported or encrypted ZIP entry flags");
      }

      if (
        compressedSize === 0xffffffff ||
        uncompressedSize === 0xffffffff ||
        localOffset === 0xffffffff
      ) {
        fail("ZIP64 entry is not supported");
      }

      // 读取文件名
      const nameBytes = bytes.subarray(
        cursor + 46,
        cursor + 46 + nameLength
      );

      let name;

      try {
        name = decoder.decode(nameBytes);
      } catch (_) {
        fail("Entry name is not valid UTF-8");
      }

      if (!REQUIRED_ENTRIES.includes(name)) {
        fail("Unexpected archive entry: " + name);
      }

      if (names.has(name)) {
        fail("Duplicate archive entry: " + name);
      }

      names.add(name);

      // 检查中央目录扩展字段
      const extraStart = cursor + 46 + nameLength;

      checkExtraFields(
        extraStart,
        extraLength
      );

      // Manifest 最大 64 KiB
      if (
        name === "manifest.json" &&
        uncompressedSize > MAX_MANIFEST_SIZE
      ) {
        fail("Manifest exceeds 64 KiB");
      }

      // 媒体总大小限制
      if (name !== "manifest.json") {
        if (uncompressedSize === 0) {
          fail("Media entry is empty");
        }

        totalMediaSize += uncompressedSize;

        if (totalMediaSize > MAX_MEDIA_SIZE) {
          fail("Declared media size exceeds 250 MiB");
        }
      }

      // 检查本地文件头
      if (
        localOffset + 30 > centralOffset ||
        u32(localOffset) !== 0x04034b50
      ) {
        fail("Invalid local file header");
      }

      const localFlags = u16(localOffset + 6);
      const localMethod = u16(localOffset + 8);
      const localCrc = u32(localOffset + 14);

      const localCompressedSize = u32(localOffset + 18);
      const localUncompressedSize = u32(localOffset + 22);

      const localNameLength = u16(localOffset + 26);
      const localExtraLength = u16(localOffset + 28);

      const localNameStart = localOffset + 30;
      const localExtraStart = localNameStart + localNameLength;

      const dataStart =
        localExtraStart + localExtraLength;

      if (
        localNameLength === 0 ||
        dataStart < localNameStart ||
        dataStart > centralOffset
      ) {
        fail("Invalid local header bounds");
      }

      const dataEnd = dataStart + compressedSize;

      if (
        dataEnd < dataStart ||
        dataEnd > centralOffset
      ) {
        fail("Compressed data is outside the archive data area");
      }

      if (
        localFlags !== flags ||
        localMethod !== method ||
        localCrc !== crc ||
        localCompressedSize !== compressedSize ||
        localUncompressedSize !== uncompressedSize
      ) {
        fail("Local and central directory metadata do not match");
      }

      if (localNameLength !== nameLength) {
        fail("Local filename length mismatch");
      }

      // 检查本地文件名
      let localName;

      try {
        localName = decoder.decode(
          bytes.subarray(
            localNameStart,
            localNameStart + localNameLength
          )
        );
      } catch (_) {
        fail("Local filename is not valid UTF-8");
      }

      if (localName !== name) {
        fail("Local and central filenames do not match");
      }

      // 检查本地扩展字段
      checkExtraFields(
        localExtraStart,
        localExtraLength
      );

      entries.push({
        name,
        localOffset,
        dataStart,
        dataEnd,
        compressedSize,
        uncompressedSize
      });

      cursor = recordEnd;
    }

    if (
      cursor !== eocd ||
      names.size !== MAX_ENTRIES
    ) {
      fail("Central directory size or entry set is invalid");
    }

    // 检查三个必需文件是否全部存在
    for (const required of REQUIRED_ENTRIES) {
      if (!names.has(required)) {
        fail("Missing required entry: " + required);
      }
    }

    // 检查 ZIP 文件区域是否重叠
    entries.sort(
      (a, b) => a.localOffset - b.localOffset
    );

    if (entries[0].localOffset !== 0) {
      fail("Unexpected data before first ZIP entry");
    }

    for (let i = 0; i < entries.length; i++) {
      const nextOffset =
        i + 1 < entries.length
          ? entries[i + 1].localOffset
          : centralOffset;

      if (entries[i].dataEnd > nextOffset) {
        fail("Overlapping ZIP entries");
      }
    }

    return {
      valid: true,
      entryCount,
      totalMediaSize,
      manifestSize: entries.find(
        entry => entry.name === "manifest.json"
      ).uncompressedSize
    };
  }

  window.HEMENGZipGuard = Object.freeze({
    inspect
  });

})();
