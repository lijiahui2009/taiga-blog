
(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);

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

  const dict = {
    "zh-CN": {
      title: "HEMENG 图片视频制作器",
      intro: "让一张图片拥有动态体验。",
      create: "创建 HEMENG 文件",
      createDesc: "选择一张图片和一段视频，制作交互式媒体文件。",
      cover: "封面图片",
      video: "视频文件",
      empty: "选择图片和视频后，这里会显示预览",
      caption: "点击图片即可在原位置播放视频",
      export: "导出 .hemeng 文件",
      reset: "清空",
      open: "打开 HEMENG 文件",
      openDesc: "导入之前制作的 .hemeng 文件。",
      openButton: "选择并打开文件",
      how: "使用方法",
      s1: "选择图片和视频",
      s1d: "图片将作为默认封面，视频将在点击图片后播放。",
      s2: "点击图片预览",
      s2d: "确认视频能否在图片原位置正常播放。",
      s3: "导出并分享",
      s3d: "生成 .hemeng 文件，之后可以重新导入查看。",
      waiting: "等待素材",
      noCover: "尚未选择图片",
      noVideo: "尚未选择视频",
      ready: "请选择一张图片和一段视频。",
      coverLoaded: "图片已加载。",
      videoLoaded: "视频已加载。",
      bothLoaded: "图片和视频都已准备好，可以导出了。",
      exporting: "正在打包文件，请稍候……",
      exported: "HEMENG 文件已生成。",
      opening: "正在打开 HEMENG 文件……",
      opened: "HEMENG 文件已成功打开。",
      resetDone: "已清空。",
      invalidImage: "请选择有效的图片文件。",
      invalidVideo: "请选择有效的视频文件。",
      needBoth: "请先选择图片和视频。",
      tooLarge: "文件总大小超过限制，请选择较小的媒体文件。",
      noZip: "打包组件未加载，请检查网络后刷新页面。",
      exportError: "导出失败，请检查文件后重试。",
      openError: "无法打开文件，请确认它是有效的 HEMENG 文件。",
      packageTooLarge: "HEMENG 文件太大，无法在浏览器中处理。",
      unsupported: "当前浏览器无法播放这个视频格式。",
      playError: "视频无法播放，请检查视频文件格式。"
    },

    "zh-TW": {
      title: "HEMENG 圖片影片製作器",
      intro: "讓一張圖片擁有動態體驗。",
      create: "建立 HEMENG 檔案",
      createDesc: "選擇一張圖片和一段影片，製作互動式媒體檔案。",
      cover: "封面圖片",
      video: "影片檔案",
      empty: "選擇圖片和影片後，這裡會顯示預覽",
      caption: "點擊圖片即可在原位置播放影片",
      export: "匯出 .hemeng 檔案",
      reset: "清空",
      open: "開啟 HEMENG 檔案",
      openDesc: "匯入之前製作的 .hemeng 檔案。",
      openButton: "選擇並開啟檔案",
      how: "使用方法",
      s1: "選擇圖片和影片",
      s1d: "圖片將作為預設封面，影片將在點擊圖片後播放。",
      s2: "點擊圖片預覽",
      s2d: "確認影片能否在圖片原位置正常播放。",
      s3: "匯出並分享",
      s3d: "產生 .hemeng 檔案，之後可以重新匯入查看。",
      waiting: "等待素材",
      noCover: "尚未選擇圖片",
      noVideo: "尚未選擇影片",
      ready: "請選擇一張圖片和一段影片。",
      coverLoaded: "圖片已載入。",
      videoLoaded: "影片已載入。",
      bothLoaded: "圖片和影片都已準備好，可以匯出了。",
      exporting: "正在打包檔案，請稍候……",
      exported: "HEMENG 檔案已產生。",
      opening: "正在開啟 HEMENG 檔案……",
      opened: "HEMENG 檔案已成功開啟。",
      resetDone: "已清空。",
      invalidImage: "請選擇有效的圖片檔案。",
      invalidVideo: "請選擇有效的影片檔案。",
      needBoth: "請先選擇圖片和影片。",
      tooLarge: "檔案總大小超過限制，請選擇較小的媒體檔案。",
      noZip: "打包元件未載入，請檢查網路後重新整理頁面。",
      exportError: "匯出失敗，請檢查檔案後重試。",
      openError: "無法開啟檔案，請確認它是有效的 HEMENG 檔案。",
      packageTooLarge: "HEMENG 檔案太大，無法在瀏覽器中處理。",
      unsupported: "目前瀏覽器無法播放這個影片格式。",
      playError: "影片無法播放，請檢查影片檔案格式。"
    },

    en: {
      title: "HEMENG Image & Video Creator",
      intro: "Give a still image an interactive experience.",
      create: "Create a HEMENG File",
      createDesc: "Choose an image and a video to create an interactive media file.",
      cover: "Cover Image",
      video: "Video File",
      empty: "Your preview will appear here after selecting an image and video.",
      caption: "Click the image to play the video in the same position.",
      export: "Export .hemeng File",
      reset: "Clear",
      open: "Open a HEMENG File",
      openDesc: "Import a previously created .hemeng file.",
      openButton: "Choose and Open File",
      how: "How It Works",
      s1: "Choose an image and a video",
      s1d: "The image becomes the default cover. The video plays when the image is clicked.",
      s2: "Preview the interaction",
      s2d: "Check that the video plays in the same position as the image.",
      s3: "Export and share",
      s3d: "Create a .hemeng file and import it again whenever you want.",
      waiting: "Waiting for media",
      noCover: "No image selected",
      noVideo: "No video selected",
      ready: "Choose an image and a video.",
      coverLoaded: "Image loaded.",
      videoLoaded: "Video loaded.",
      bothLoaded: "Both files are ready. You can export now.",
      exporting: "Packaging your file. Please wait...",
      exported: "HEMENG file created.",
      opening: "Opening HEMENG file...",
      opened: "HEMENG file opened successfully.",
      resetDone: "Cleared.",
      invalidImage: "Please choose a valid image file.",
      invalidVideo: "Please choose a valid video file.",
      needBoth: "Please choose both an image and a video first.",
      tooLarge: "The combined file size exceeds the limit. Please choose smaller files.",
      noZip: "The packaging library did not load. Check your connection and refresh.",
      exportError: "Export failed. Check your files and try again.",
      openError: "Unable to open this file. Make sure it is a valid HEMENG file.",
      packageTooLarge: "This HEMENG file is too large to process in the browser.",
      unsupported: "Your browser cannot play this video format.",
      playError: "Unable to play the video. Please check its format."
    },

    ja: {
      title: "HEMENG 画像・動画クリエイター",
      intro: "静止画にインタラクティブな体験を。",
      create: "HEMENG ファイルを作成",
      createDesc: "画像と動画を選択して、インタラクティブなメディアファイルを作成します。",
      cover: "カバー画像",
      video: "動画ファイル",
      empty: "画像と動画を選択すると、ここにプレビューが表示されます。",
      caption: "画像をクリックすると同じ場所で動画が再生されます。",
      export: ".hemeng ファイルを書き出す",
      reset: "クリア",
      open: "HEMENG ファイルを開く",
      openDesc: "以前作成した .hemeng ファイルを読み込みます。",
      openButton: "ファイルを選択して開く",
      how: "使い方",
      s1: "画像と動画を選択",
      s1d: "画像がカバーになり、クリックすると動画が再生されます。",
      s2: "動作をプレビュー",
      s2d: "画像と同じ位置で動画が再生されることを確認します。",
      s3: "書き出して共有",
      s3d: ".hemeng ファイルを作成し、いつでも再度読み込めます。",
      waiting: "素材を待っています",
      noCover: "画像が選択されていません",
      noVideo: "動画が選択されていません",
      ready: "画像と動画を選択してください。",
      coverLoaded: "画像を読み込みました。",
      videoLoaded: "動画を読み込みました。",
      bothLoaded: "準備ができました。書き出しできます。",
      exporting: "ファイルを作成しています。お待ちください……",
      exported: "HEMENG ファイルを作成しました。",
      opening: "HEMENG ファイルを開いています……",
      opened: "HEMENG ファイルを開きました。",
      resetDone: "クリアしました。",
      invalidImage: "有効な画像ファイルを選択してください。",
      invalidVideo: "有効な動画ファイルを選択してください。",
      needBoth: "画像と動画の両方を選択してください。",
      tooLarge: "ファイルサイズが上限を超えています。",
      noZip: "圧縮ライブラリを読み込めません。再読み込みしてください。",
      exportError: "書き出しに失敗しました。",
      openError: "有効な HEMENG ファイルではない可能性があります。",
      packageTooLarge: "ファイルが大きすぎるため、ブラウザで処理できません。",
      unsupported: "この動画形式はブラウザで再生できません。",
      playError: "動画を再生できません。形式を確認してください。"
    },

    ko: {
      title: "HEMENG 이미지 및 동영상 제작기",
      intro: "정적인 이미지에 새로운 인터랙티브 경험을 더하세요.",
      create: "HEMENG 파일 만들기",
      createDesc: "이미지와 동영상을 선택하여 인터랙티브 미디어 파일을 만듭니다.",
      cover: "커버 이미지",
      video: "동영상 파일",
      empty: "이미지와 동영상을 선택하면 여기에 미리보기가 표시됩니다.",
      caption: "이미지를 클릭하면 같은 위치에서 동영상이 재생됩니다.",
      export: ".hemeng 파일 내보내기",
      reset: "초기화",
      open: "HEMENG 파일 열기",
      openDesc: "이전에 만든 .hemeng 파일을 가져옵니다.",
      openButton: "파일 선택 및 열기",
      how: "사용 방법",
      s1: "이미지와 동영상 선택",
      s1d: "이미지는 기본 커버가 되고 클릭하면 동영상이 재생됩니다.",
      s2: "동작 미리보기",
      s2d: "이미지와 같은 위치에서 동영상이 재생되는지 확인합니다.",
      s3: "내보내기 및 공유",
      s3d: ".hemeng 파일을 만들고 언제든 다시 가져올 수 있습니다.",
      waiting: "미디어 대기 중",
      noCover: "이미지를 선택하지 않았습니다",
      noVideo: "동영상을 선택하지 않았습니다",
      ready: "이미지와 동영상을 선택하세요.",
      coverLoaded: "이미지를 불러왔습니다.",
      videoLoaded: "동영상을 불러왔습니다.",
      bothLoaded: "준비가 완료되었습니다. 내보낼 수 있습니다.",
      exporting: "파일을 압축하고 있습니다. 잠시 기다려 주세요...",
      exported: "HEMENG 파일을 만들었습니다.",
      opening: "HEMENG 파일을 여는 중...",
      opened: "HEMENG 파일을 성공적으로 열었습니다.",
      resetDone: "초기화했습니다.",
      invalidImage: "올바른 이미지 파일을 선택하세요.",
      invalidVideo: "올바른 동영상 파일을 선택하세요.",
      needBoth: "이미지와 동영상을 모두 선택하세요.",
      tooLarge: "파일 크기 제한을 초과했습니다.",
      noZip: "압축 라이브러리를 불러오지 못했습니다. 새로고침하세요.",
      exportError: "내보내기에 실패했습니다.",
      openError: "올바른 HEMENG 파일인지 확인하세요.",
      packageTooLarge: "파일이 너무 커서 브라우저에서 처리할 수 없습니다.",
      unsupported: "현재 브라우저에서 이 동영상 형식을 재생할 수 없습니다.",
      playError: "동영상을 재생할 수 없습니다. 형식을 확인하세요."
    }
  };

  const MAX_MEDIA_SIZE = 250 * 1024 * 1024;
  const MAX_PACKAGE_SIZE = 300 * 1024 * 1024;

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

  function applyLanguage(value) {
    language = dict[value] ? value : "zh-CN";
    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach((node) => {
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

  function formatSize(bytes) {
    if (!Number.isFinite(bytes)) return "";
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  }

  function updatePreviewState() {
    if (!el.previewState) return;

    if (playing) {
      el.previewState.textContent = language === "en" ? "Playing video" :
        language === "ja" ? "動画を再生中" :
        language === "ko" ? "동영상 재생 중" :
        language === "zh-TW" ? "正在播放影片" : "正在播放视频";
    } else if (coverFile && videoFile) {
      el.previewState.textContent = language === "en" ? "Ready to preview" :
        language === "ja" ? "プレビュー準備完了" :
        language === "ko" ? "미리보기 준비 완료" :
        language === "zh-TW" ? "已準備預覽" : "已准备预览";
    } else {
      el.previewState.textContent = tr("waiting");
    }
  }

  function updateStatus() {
    if (!coverFile && !videoFile) {
      setStatus("ready");
    } else if (coverFile && videoFile) {
      setStatus("bothLoaded");
    } else if (coverFile) {
      setStatus("coverLoaded");
    } else {
      setStatus("videoLoaded");
    }
  }

  function updateExportButton() {
    if (el.exportButton) {
      el.exportButton.disabled = !(coverFile && videoFile);
    }
  }

  function revoke(url) {
    if (url) URL.revokeObjectURL(url);
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
      result.catch((error) => {
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

      const archive = {
        "manifest.json": new TextEncoder().encode(
          JSON.stringify(manifest, null, 2)
        ),
        "media/cover": coverBytes,
        "media/video": videoBytes
      };

      const zipped = window.fflate.zipSync(archive, { level: 0 });

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

  function validPath(path) {
    return typeof path === "string"
      && path.startsWith("media/")
      && !path.startsWith("/")
      && !path.includes("..")
      && !path.includes("\\")
      && !path.includes("\0");
  }

  async function openHemeng(file) {
    if (!file) return;

    if (file.size > MAX_PACKAGE_SIZE) {
      setStatus("packageTooLarge", "open");
      return;
    }

    if (!window.fflate || typeof window.fflate.unzipSync !== "function") {
      setStatus("noZip", "open");
      return;
    }

    try {
      setStatus("opening", "open");

      const bytes = new Uint8Array(await file.arrayBuffer());
      const archive = window.fflate.unzipSync(bytes);

      if (!archive["manifest.json"]) {
        throw new Error("Missing manifest");
      }

      const manifest = JSON.parse(
        new TextDecoder().decode(archive["manifest.json"])
      );

      if (
        !manifest ||
        manifest.format !== "HEMENG" ||
        manifest.formatVersion !== "1.0" ||
        !manifest.cover ||
        !manifest.video ||
        !validPath(manifest.cover.path) ||
        !validPath(manifest.video.path)
      ) {
        throw new Error("Invalid manifest");
      }

      const coverBytes = archive[manifest.cover.path];
      const videoBytes = archive[manifest.video.path];

      if (!coverBytes?.length || !videoBytes?.length) {
        throw new Error("Missing media");
      }

      const coverMime = typeof manifest.cover.mimeType === "string"
        && manifest.cover.mimeType.startsWith("image/")
        ? manifest.cover.mimeType : "image/jpeg";

      const videoMime = typeof manifest.video.mimeType === "string"
        && manifest.video.mimeType.startsWith("video/")
        ? manifest.video.mimeType : "video/mp4";

      const newCover = new Blob([coverBytes], { type: coverMime });
      const newVideo = new Blob([videoBytes], { type: videoMime });

      if (newCover.size + newVideo.size > MAX_MEDIA_SIZE) {
        throw new Error("Media too large");
      }

      revoke(coverUrl);
      revoke(videoUrl);

      coverFile = new File(
        [newCover],
        safeFilename(manifest.cover.name, "cover"),
        { type: coverMime }
      );

      videoFile = new File(
        [newVideo],
        safeFilename(manifest.video.name, "video"),
        { type: videoMime }
      );

      coverUrl = URL.createObjectURL(coverFile);
      videoUrl = URL.createObjectURL(videoFile);

      if (el.coverPreview) el.coverPreview.src = coverUrl;
      if (el.videoPreview) el.videoPreview.src = videoUrl;

      if (el.coverMeta) {
        el.coverMeta.textContent = coverFile.name + " · " + formatSize(coverFile.size);
      }

      if (el.videoMeta) {
        el.videoMeta.textContent = videoFile.name + " · " + formatSize(videoFile.size);
      }

      showCover();
      updateExportButton();
      setStatus("opened", "open");
      updateStatus();
    } catch (error) {
      console.error("[HEMENG] Open error:", error);
      setStatus("openError", "open");
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
    el.coverInput?.addEventListener("change", (event) => {
      const file = event.target.files?.[0];
      if (file) setCover(file);
    });

    el.videoInput?.addEventListener("change", (event) => {
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

    el.hemengInput?.addEventListener("change", (event) => {
      const file = event.target.files?.[0];
      if (file) openHemeng(file);
    });

    el.language?.addEventListener("change", (event) => {
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

    window.addEventListener("hemeng-language-change", (event) => {
      const value = event.detail?.language
        || event.detail?.lang
        || getLanguage();

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

