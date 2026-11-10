
(() => {
  "use strict";

  const $ = id => document.getElementById(id);

  const el = {
    language: $("language"),
    coverInput: $("coverInput"),
    videoInput: $("videoInput"),
    coverPreview: $("coverPreview"),
    videoPreview: $("videoPreview"),
    playIcon: $("playIcon"),
    empty: $("empty"),
    coverMeta: $("coverMeta"),
    videoMeta: $("videoMeta"),
    previewState: $("previewState"),
    exportButton: $("exportButton"),
    resetButton: $("resetButton"),
    hemengInput: $("hemengInput"),
    openButton: $("openButton"),
    createStatus: $("createStatus"),
    openStatus: $("openStatus")
  };

  const keys = [
    "title","intro","create","createDesc","cover","video","empty",
    "caption","export","reset","open","openDesc","openButton","how",
    "s1","s1d","s2","s2d","s3","s3d","waiting","noCover","noVideo",
    "ready","coverLoaded","videoLoaded","bothLoaded","exporting",
    "exported","opening","opened","resetDone","invalidImage",
    "invalidVideo","needBoth","tooLarge","noZip","exportError",
    "openError","packageTooLarge","unsupported","playError",
    "zipRejected","mediaTooLarge"
  ];

  const translations = {
    "zh-CN": [
      "HEMENG 图片视频制作器","让一张图片拥有动态体验。","创建 HEMENG 文件",
      "选择一张图片和一段视频，制作交互式媒体文件。","封面图片","视频文件",
      "选择图片和视频后，这里会显示预览","点击图片即可在原位置播放视频",
      "导出 .hemeng 文件","清空","打开 HEMENG 文件",
      "导入之前制作的 .hemeng 文件。","选择并打开文件","使用方法",
      "选择图片和视频","图片作为默认封面，点击后播放视频。",
      "点击图片预览","确认视频能否在图片原位置正常播放。",
      "导出并分享","生成 .hemeng 文件，之后可以重新导入查看。",
      "等待素材","尚未选择图片","尚未选择视频","请先选择一张图片和一段视频。",
      "图片已加载。","视频已加载。","图片和视频都已准备好，可以导出了。",
      "正在打包文件，请稍候……","HEMENG 文件已生成。","正在打开 HEMENG 文件……",
      "HEMENG 文件已成功打开。","已清空。","请选择有效的图片文件。",
      "请选择有效的视频文件。","请先选择图片和视频。",
      "文件总大小超过限制，请选择较小的媒体文件。",
      "压缩组件未加载，请检查网络后刷新页面。",
      "导出失败，请检查文件后重试。",
      "无法打开文件，请确认它是有效的 HEMENG 文件。",
      "HEMENG 文件太大，无法在浏览器中处理。",
      "当前浏览器无法播放这个视频格式。","视频无法播放，请检查视频文件格式。",
      "ZIP 结构检查未通过，文件已拒绝打开。",
      "文件中的媒体总大小超过 250 MiB。"
    ],
    "zh-TW": [
      "HEMENG 圖片影片製作器","讓一張圖片擁有動態體驗。","建立 HEMENG 檔案",
      "選擇一張圖片和一段影片，製作互動式媒體檔案。","封面圖片","影片檔案",
      "選擇圖片和影片後，這裡會顯示預覽","點擊圖片即可在原位置播放影片",
      "匯出 .hemeng 檔案","清空","開啟 HEMENG 檔案",
      "匯入之前製作的 .hemeng 檔案。","選擇並開啟檔案","使用方法",
      "選擇圖片和影片","圖片作為預設封面，點擊後播放影片。",
      "點擊圖片預覽","確認影片能否在圖片原位置正常播放。",
      "匯出並分享","產生 .hemeng 檔案，之後可以重新匯入查看。",
      "等待素材","尚未選擇圖片","尚未選擇影片","請先選擇一張圖片和一段影片。",
      "圖片已載入。","影片已載入。","圖片和影片都已準備好，可以匯出了。",
      "正在打包檔案，請稍候……","HEMENG 檔案已產生。","正在開啟 HEMENG 檔案……",
      "HEMENG 檔案已成功開啟。","已清空。","請選擇有效的圖片檔案。",
      "請選擇有效的影片檔案。","請先選擇圖片和影片。",
      "檔案總大小超過限制，請選擇較小的媒體檔案。",
      "壓縮元件未載入，請檢查網路後重新整理。",
      "匯出失敗，請檢查檔案後重試。",
      "無法開啟檔案，請確認它是有效的 HEMENG 檔案。",
      "HEMENG 檔案太大，無法在瀏覽器中處理。",
      "目前瀏覽器無法播放這個影片格式。","影片無法播放，請檢查影片格式。",
      "ZIP 結構檢查未通過，檔案已拒絕開啟。",
      "檔案中的媒體總大小超過 250 MiB。"
    ],
    en: [
      "HEMENG Image & Video Creator","Give a still image an interactive experience.",
      "Create a HEMENG File","Choose an image and a video to create an interactive media file.",
      "Cover Image","Video File","Your preview will appear here after selecting an image and video.",
      "Click the image to play the video in the same position.","Export .hemeng File","Clear",
      "Open a HEMENG File","Import a previously created .hemeng file.",
      "Choose and Open File","How It Works","Choose an image and a video",
      "The image becomes the cover. The video plays when clicked.",
      "Preview the interaction","Check that the video plays in the same position as the image.",
      "Export and share","Create a .hemeng file and import it again whenever you want.",
      "Waiting for media","No image selected","No video selected","Choose an image and a video.",
      "Image loaded.","Video loaded.","Both files are ready. You can export now.",
      "Packaging your file. Please wait...","HEMENG file created.","Opening HEMENG file...",
      "HEMENG file opened successfully.","Cleared.","Please choose a valid image file.",
      "Please choose a valid video file.","Please choose both an image and a video first.",
      "The combined file size exceeds the limit. Choose smaller files.",
      "The ZIP library did not load. Check your connection and refresh.",
      "Export failed. Check your files and try again.",
      "Unable to open this file. Make sure it is a valid HEMENG file.",
      "This HEMENG file is too large to process in the browser.",
      "Your browser cannot play this video format.",
      "Unable to play the video. Please check its format.",
      "ZIP structure validation failed. The file was rejected.",
      "The total media size exceeds 250 MiB."
    ],
    ja: [
      "HEMENG 画像・動画クリエイター","静止画にインタラクティブな体験を。",
      "HEMENG ファイルを作成","画像と動画を選択して、インタラクティブなメディアファイルを作成します。",
      "カバー画像","動画ファイル","画像と動画を選択すると、ここにプレビューが表示されます。",
      "画像をクリックすると同じ場所で動画が再生されます。",
      ".hemeng ファイルを書き出す","クリア","HEMENG ファイルを開く",
      "以前作成した .hemeng ファイルを読み込みます。",
      "ファイルを選択して開く","使い方","画像と動画を選択",
      "画像がカバーになり、クリックすると動画が再生されます。",
      "動作をプレビュー","画像と同じ位置で動画が再生されることを確認します。",
      "書き出して共有",".hemeng ファイルを作成し、いつでも再度読み込めます。",
      "素材を待っています","画像が選択されていません","動画が選択されていません",
      "画像と動画を選択してください。","画像を読み込みました。","動画を読み込みました。",
      "準備ができました。書き出しできます。",
      "ファイルを作成しています。お待ちください……",
      "HEMENG ファイルを作成しました。","HEMENG ファイルを開いています……",
      "HEMENG ファイルを開きました。","クリアしました。",
      "有効な画像ファイルを選択してください。","有効な動画ファイルを選択してください。",
      "画像と動画の両方を選択してください。","ファイルサイズが上限を超えています。",
      "圧縮ライブラリを読み込めません。再読み込みしてください。",
      "書き出しに失敗しました。","有効な HEMENG ファイルではない可能性があります。",
      "ファイルが大きすぎるため、ブラウザで処理できません。",
      "この動画形式はブラウザで再生できません。","動画を再生できません。形式を確認してください。",
      "ZIP 構造の検証に失敗しました。ファイルを拒否しました。",
      "メディアの合計サイズが 250 MiB を超えています。"
    ],
    ko: [
      "HEMENG 이미지 및 동영상 제작기","정적인 이미지에 인터랙티브한 경험을 더하세요.",
      "HEMENG 파일 만들기","이미지와 동영상을 선택하여 인터랙티브 미디어 파일을 만듭니다.",
      "커버 이미지","동영상 파일","이미지와 동영상을 선택하면 여기에 미리보기가 표시됩니다.",
      "이미지를 클릭하면 같은 위치에서 동영상이 재생됩니다.",
      ".hemeng 파일 내보내기","초기화","HEMENG 파일 열기",
      "이전에 만든 .hemeng 파일을 가져옵니다.","파일 선택 및 열기","사용 방법",
      "이미지와 동영상 선택","이미지는 기본 커버가 되고 클릭하면 동영상이 재생됩니다.",
      "동작 미리보기","이미지와 같은 위치에서 동영상이 재생되는지 확인합니다.",
      "내보내기 및 공유",".hemeng 파일을 만들고 언제든 다시 가져올 수 있습니다.",
      "미디어 대기 중","이미지를 선택하지 않았습니다","동영상을 선택하지 않았습니다",
      "이미지와 동영상을 선택하세요.","이미지를 불러왔습니다.","동영상을 불러왔습니다.",
      "준비가 완료되었습니다. 내보낼 수 있습니다.",
      "파일을 압축하고 있습니다. 잠시 기다려 주세요...",
      "HEMENG 파일을 만들었습니다.","HEMENG 파일을 여는 중...",
      "HEMENG 파일을 성공적으로 열었습니다.","초기화했습니다.",
      "올바른 이미지 파일을 선택하세요.","올바른 동영상 파일을 선택하세요.",
      "이미지와 동영상을 모두 선택하세요.","파일 크기 제한을 초과했습니다.",
      "압축 라이브러리를 불러오지 못했습니다. 새로고침하세요.",
      "내보내기에 실패했습니다.","올바른 HEMENG 파일인지 확인하세요.",
      "파일이 너무 커서 브라우저에서 처리할 수 없습니다.",
      "현재 브라우저에서 이 동영상 형식을 재생할 수 없습니다.",
      "동영상을 재생할 수 없습니다. 형식을 확인하세요.",
      "ZIP 구조 검증에 실패했습니다. 파일을 거부했습니다.",
      "미디어 총 크기가 250 MiB를 초과했습니다."
    ]
  };

  const dict = {};
  for (const [lang, values] of Object.entries(translations)) {
    dict[lang] = {};
    keys.forEach((key, index) => dict[lang][key] = values[index]);
  }

  const MAX_MEDIA_SIZE = 250 * 1024 * 1024;
  const MAX_PACKAGE_SIZE = 300 * 1024 * 1024;
  const MAX_MANIFEST_SIZE = 64 * 1024;

  const REQUIRED_ENTRIES = [
    "manifest.json",
    "media/cover",
    "media/video"
  ];

  let language = "zh-CN";
  let coverFile = null;
  let videoFile = null;
  let coverUrl = null;
  let videoUrl = null;
  let playing = false;

  function tr(key) {
    return dict[language]?.[key] || dict["zh-CN"][key] || key;
  }

  function getLanguage() {
    try {
      const api = window.HemengI18n;
      if (api && typeof api.getLanguage === "function") {
        const value = api.getLanguage();
        if (dict[value]) return value;
      }
    } catch (_) {}

    if (dict[el.language?.value]) return el.language.value;
    if (dict[document.documentElement.lang]) return document.documentElement.lang;
    return "zh-CN";
  }

  function setStatus(message, target = "create") {
    const node = target === "open" ? el.openStatus : el.createStatus;
    if (node) node.textContent = tr(message);
  }

  function formatSize(bytes) {
    if (!Number.isFinite(bytes)) return "";
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  }

  function updatePreviewState() {
    if (!el.previewState) return;

    if (playing) {
      el.previewState.textContent = ({
        en:"Playing video",ja:"動画を再生中",ko:"동영상 재생 중",
        "zh-TW":"正在播放影片","zh-CN":"正在播放视频"
      })[language];
    } else if (coverFile && videoFile) {
      el.previewState.textContent = ({
        en:"Ready to preview",ja:"プレビュー準備完了",
        ko:"미리보기 준비 완료","zh-TW":"已準備預覽","zh-CN":"已准备预览"
      })[language];
    } else {
      el.previewState.textContent = tr("waiting");
    }
  }

  function updateStatus() {
    if (!coverFile && !videoFile) setStatus("ready");
    else if (coverFile && videoFile) setStatus("bothLoaded");
    else if (coverFile) setStatus("coverLoaded");
    else setStatus("videoLoaded");
  }

  function updateExportButton() {
    if (el.exportButton) {
      el.exportButton.disabled = !(coverFile && videoFile);
    }
  }

  function revoke(url) {
    if (url) URL.revokeObjectURL(url);
  }

  function applyLanguage(value) {
    language = dict[value] ? value : "zh-CN";
    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach(node => {
      const key = node.getAttribute("data-i18n");
      if (dict[language][key]) node.textContent = tr(key);
    });

    if (el.language) el.language.value = language;

    if (el.coverMeta) {
      el.coverMeta.textContent = coverFile
        ? coverFile.name + " · " + formatSize(coverFile.size)
        : tr("noCover");
    }

    if (el.videoMeta) {
      el.videoMeta.textContent = videoFile
        ? videoFile.name + " · " + formatSize(videoFile.size)
        : tr("noVideo");
    }

    updatePreviewState();
    updateStatus();
    updateExportButton();
  }

  function showCover() {
    playing = false;

    if (el.videoPreview) {
      el.videoPreview.pause();
      el.videoPreview.hidden = true;
    }

    if (el.coverPreview) el.coverPreview.hidden = !coverUrl;
    if (el.playIcon) el.playIcon.hidden = !coverUrl;
    if (el.empty) el.empty.hidden = !!coverUrl;

    updatePreviewState();
  }

  function playVideo() {
    if (!coverUrl || !videoUrl || !el.videoPreview) return;

    playing = true;

    if (el.coverPreview) el.coverPreview.hidden = true;
    if (el.playIcon) el.playIcon.hidden = true;
    if (el.empty) el.empty.hidden = true;

    el.videoPreview.hidden = false;
    el.videoPreview.src = videoUrl;
    el.videoPreview.controls = true;
    el.videoPreview.playsInline = true;

    updatePreviewState();

    const result = el.videoPreview.play();

    if (result && typeof result.catch === "function") {
      result.catch(error => {
        console.warn("[HEMENG] Playback error:", error);
        showCover();
        setStatus("playError");
      });
    }
  }

  function setCover(file) {
    if (!file || !file.type.startsWith("image/")) {
      setStatus("invalidImage");
      return;
    }

    revoke(coverUrl);
    coverFile = file;
    coverUrl = URL.createObjectURL(file);

    if (el.coverPreview) {
      el.coverPreview.src = coverUrl;
      el.coverPreview.hidden = false;
    }

    if (el.coverMeta) {
      el.coverMeta.textContent = file.name + " · " + formatSize(file.size);
    }

    showCover();
    updateStatus();
    updateExportButton();
  }

  function setVideo(file) {
    if (!file) return;

    const validType = file.type.startsWith("video/");
    const validExtension = /\.(mp4|mov|webm|m4v|ogv)$/i.test(file.name);

    if (!validType && !validExtension) {
      setStatus("invalidVideo");
      return;
    }

    revoke(videoUrl);
    videoFile = file;
    videoUrl = URL.createObjectURL(file);

    if (el.videoPreview) {
      el.videoPreview.src = videoUrl;
      el.videoPreview.hidden = true;
      el.videoPreview.controls = true;
    }

    if (el.videoMeta) {
      el.videoMeta.textContent = file.name + " · " + formatSize(file.size);
    }

    showCover();
    updateStatus();
    updateExportButton();
  }

  function safeFilename(name, fallback) {
    const value = String(name || "")
      .replace(/[\\/:*?"<>|]/g, "_")
      .replace(/^\.+/, "")
      .trim();

    return value || fallback;
  }

  function download(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();

    setTimeout(() => revoke(url), 1500);
  }

  async function exportHemeng() {
    if (!coverFile || !videoFile) {
      setStatus("needBoth");
      return;
    }

    if (!window.fflate || typeof window.fflate.zipSync !== "function") {
      setStatus("noZip");
      return;
    }

    if (coverFile.size + videoFile.size > MAX_MEDIA_SIZE) {
      setStatus("tooLarge");
      return;
    }

    try {
      el.exportButton.disabled = true;
      setStatus("exporting");

      const coverBytes = new Uint8Array(await coverFile.arrayBuffer());
      const videoBytes = new Uint8Array(await videoFile.arrayBuffer());

      const manifest = {
        format: "HEMENG",
        formatVersion: "1.0",
        createdAt: new Date().toISOString(),
        experience: {
          type: "image-video",
          interaction: "click-image-to-play-in-place",
          returnToCoverOnEnded: true
        },
        cover: {
          path: "media/cover",
          name: safeFilename(coverFile.name, "cover"),
          mimeType: coverFile.type || "image/jpeg"
        },
        video: {
          path: "media/video",
          name: safeFilename(videoFile.name, "video"),
          mimeType: videoFile.type || "video/mp4"
        }
      };

      const manifestBytes = new TextEncoder().encode(
        JSON.stringify(manifest, null, 2)
      );

      if (manifestBytes.byteLength > MAX_MANIFEST_SIZE) {
        throw new Error("Manifest too large");
      }

      const archive = {
        "manifest.json": manifestBytes,
        "media/cover": coverBytes,
        "media/video": videoBytes
      };

      const zipped = window.fflate.zipSync(archive, { level: 0 });

      if (zipped.byteLength > MAX_PACKAGE_SIZE) {
        throw new Error("Package too large");
      }

      download(
        new Blob([zipped], { type: "application/vnd.hemeng+zip" }),
        "HEMENG-" + Date.now() + ".hemeng"
      );

      setStatus("exported");
    } catch (error) {
      console.error("[HEMENG] Export error:", error);
      setStatus("exportError");
    } finally {
      updateExportButton();
    }
  }

  function validManifest(manifest) {
    if (!manifest || typeof manifest !== "object") return false;

    if (
      manifest.format !== "HEMENG" ||
      manifest.formatVersion !== "1.0"
    ) return false;

    if (
      typeof manifest.createdAt !== "string" ||
      !Number.isFinite(Date.parse(manifest.createdAt))
    ) return false;

    if (
      !manifest.experience ||
      manifest.experience.type !== "image-video" ||
      manifest.experience.interaction !== "click-image-to-play-in-place" ||
      manifest.experience.returnToCoverOnEnded !== true
    ) return false;

    if (
      !manifest.cover ||
      manifest.cover.path !== "media/cover" ||
      typeof manifest.cover.name !== "string" ||
      !manifest.cover.name.trim() ||
      typeof manifest.cover.mimeType !== "string" ||
      !manifest.cover.mimeType.startsWith("image/")
    ) return false;

    if (
      !manifest.video ||
      manifest.video.path !== "media/video" ||
      typeof manifest.video.name !== "string" ||
      !manifest.video.name.trim() ||
      typeof manifest.video.mimeType !== "string" ||
      !manifest.video.mimeType.startsWith("video/")
    ) return false;

    return true;
  }

  async function openHemeng(file) {
    if (!file) return;

    if (file.size > MAX_PACKAGE_SIZE) {
      setStatus("packageTooLarge", "open");
      return;
    }

    if (
      !window.fflate ||
      typeof window.fflate.unzipSync !== "function" ||
      !window.HEMENGZipGuard ||
      typeof window.HEMENGZipGuard.inspect !== "function"
    ) {
      setStatus("noZip", "open");
      return;
    }

    let newCoverUrl = null;
    let newVideoUrl = null;

    try {
      setStatus("opening", "open");

      const bytes = new Uint8Array(await file.arrayBuffer());

      // 第一步：在解压之前检查 ZIP 结构和声明大小
      const zipReport = window.HEMENGZipGuard.inspect(bytes);

      // 第二步：只有预检通过，才允许解压
      const archive = window.fflate.unzipSync(bytes);

      // 第三步：检查解压后的文件集合
      const archiveNames = Object.keys(archive).sort();
      const expectedNames = [...REQUIRED_ENTRIES].sort();

      if (
        archiveNames.length !== expectedNames.length ||
        archiveNames.some((name, index) => name !== expectedNames[index])
      ) {
        throw new Error("ZIP_REJECTED");
      }

      const manifestBytes = archive["manifest.json"];
      const coverBytes = archive["media/cover"];
      const videoBytes = archive["media/video"];

      if (!manifestBytes || !coverBytes?.length || !videoBytes?.length) {
        throw new Error("MISSING_MEDIA");
      }

      // 第四步：核对 manifest 实际大小
      if (
        manifestBytes.byteLength !== zipReport.manifestSize ||
        manifestBytes.byteLength > MAX_MANIFEST_SIZE
      ) {
        throw new Error("ZIP_REJECTED");
      }

      // 第五步：核对媒体实际大小
      const actualMediaSize =
        coverBytes.byteLength + videoBytes.byteLength;

      if (actualMediaSize !== zipReport.totalMediaSize) {
        throw new Error("ZIP_REJECTED");
      }

      if (actualMediaSize > MAX_MEDIA_SIZE) {
        throw new Error("MEDIA_TOO_LARGE");
      }

      const manifest = JSON.parse(
        new TextDecoder().decode(manifestBytes)
      );

      if (!validManifest(manifest)) {
        throw new Error("INVALID_MANIFEST");
      }

      const coverMime = manifest.cover.mimeType;
      const videoMime = manifest.video.mimeType;

      const newCover = new Blob([coverBytes], { type: coverMime });
      const newVideo = new Blob([videoBytes], { type: videoMime });

      if (newCover.size + newVideo.size !== zipReport.totalMediaSize) {
        throw new Error("ZIP_REJECTED");
      }

      const newCoverFile = new File(
        [newCover],
        safeFilename(manifest.cover.name, "cover"),
        { type: coverMime }
      );

      const newVideoFile = new File(
        [newVideo],
        safeFilename(manifest.video.name, "video"),
        { type: videoMime }
      );

      newCoverUrl = URL.createObjectURL(newCoverFile);
      newVideoUrl = URL.createObjectURL(newVideoFile);

      // 验证图片可以解码，再替换当前素材
      const probe = new Image();
      probe.src = newCoverUrl;

      await new Promise((resolve, reject) => {
        probe.onload = resolve;
        probe.onerror = () => reject(new Error("INVALID_IMAGE"));
      });

      revoke(coverUrl);
      revoke(videoUrl);

      coverFile = newCoverFile;
      videoFile = newVideoFile;
      coverUrl = newCoverUrl;
      videoUrl = newVideoUrl;

      newCoverUrl = null;
      newVideoUrl = null;

      if (el.coverPreview) el.coverPreview.src = coverUrl;
      if (el.videoPreview) el.videoPreview.src = videoUrl;

      if (el.coverMeta) {
        el.coverMeta.textContent =
          coverFile.name + " · " + formatSize(coverFile.size);
      }

      if (el.videoMeta) {
        el.videoMeta.textContent =
          videoFile.name + " · " + formatSize(videoFile.size);
      }

      showCover();
      updateExportButton();
      setStatus("opened", "open");
      updateStatus();

    } catch (error) {
      console.error("[HEMENG] Open error:", error);

      revoke(newCoverUrl);
      revoke(newVideoUrl);

      if (
        error.message === "ZIP_REJECTED" ||
        String(error.message).startsWith("HEMENG ZIP rejected:")
      ) {
        setStatus("zipRejected", "open");
      } else if (error.message === "MEDIA_TOO_LARGE") {
        setStatus("mediaTooLarge", "open");
      } else {
        setStatus("openError", "open");
      }
    }
  }

  function resetAll() {
    if (el.videoPreview) {
      el.videoPreview.pause();
      el.videoPreview.removeAttribute("src");
      el.videoPreview.load();
    }

    revoke(coverUrl);
    revoke(videoUrl);

    coverFile = null;
    videoFile = null;
    coverUrl = null;
    videoUrl = null;
    playing = false;

    if (el.coverInput) el.coverInput.value = "";
    if (el.videoInput) el.videoInput.value = "";
    if (el.hemengInput) el.hemengInput.value = "";

    if (el.coverPreview) {
      el.coverPreview.removeAttribute("src");
      el.coverPreview.hidden = true;
    }

    if (el.videoPreview) {
      el.videoPreview.removeAttribute("src");
      el.videoPreview.hidden = true;
    }

    if (el.playIcon) el.playIcon.hidden = true;
    if (el.empty) el.empty.hidden = false;

    if (el.coverMeta) el.coverMeta.textContent = tr("noCover");
    if (el.videoMeta) el.videoMeta.textContent = tr("noVideo");

    updateExportButton();
    updatePreviewState();
    setStatus("resetDone");
  }

  function bindEvents() {
    el.coverInput?.addEventListener("change", event => {
      const file = event.target.files?.[0];
      if (file) setCover(file);
    });

    el.videoInput?.addEventListener("change", event => {
      const file = event.target.files?.[0];
      if (file) setVideo(file);
    });

    el.coverPreview?.addEventListener("click", playVideo);
    el.playIcon?.addEventListener("click", playVideo);

    el.videoPreview?.addEventListener("ended", showCover);

    el.videoPreview?.addEventListener("error", () => {
      if (playing) {
        showCover();
        setStatus("unsupported");
      }
    });

    el.exportButton?.addEventListener("click", exportHemeng);
    el.resetButton?.addEventListener("click", resetAll);

    el.openButton?.addEventListener("click", () => {
      el.hemengInput?.click();
    });

    el.hemengInput?.addEventListener("change", event => {
      const file = event.target.files?.[0];
      if (file) openHemeng(file);
    });

    el.language?.addEventListener("change", event => {
      const value = event.target.value;

      try {
        if (
          window.HemengI18n &&
          typeof window.HemengI18n.setLanguage === "function"
        ) {
          window.HemengI18n.setLanguage(value);
        }
      } catch (error) {
        console.warn("[HEMENG] Language integration:", error);
      }

      applyLanguage(value);
    });

    window.addEventListener("hemeng-language-change", event => {
      const value = event.detail?.language ||
        event.detail?.lang ||
        getLanguage();

      applyLanguage(value);
    });
  }

  function initialize() {
    bindEvents();

    if (el.coverPreview) el.coverPreview.hidden = true;
    if (el.videoPreview) el.videoPreview.hidden = true;
    if (el.playIcon) el.playIcon.hidden = true;
    if (el.empty) el.empty.hidden = false;

    applyLanguage(getLanguage());
    updateExportButton();

    console.log("[HEMENG] Creator initialized.");
  }

  initialize();
})();
