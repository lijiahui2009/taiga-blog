
(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);

  const elements = {
    language: $("language"),
    coverInput: $("coverInput"),
    videoInput: $("videoInput"),
    coverPreview: $("coverPreview"),
    videoPreview: $("videoPreview"),
    playIcon: $("playIcon"),
    exportButton: $("exportButton"),
    resetButton: $("resetButton"),
    hemengInput: $("hemengInput"),
    openButton: $("openButton"),
    status: $("status") || $("createStatus")
  };

  const translations = {
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
      choose: "选择文件",
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
      statusReady: "请选择一张图片和一段视频。",
      statusCover: "图片已加载。",
      statusVideo: "视频已加载。",
      statusBoth: "图片和视频都已准备好，可以导出了。",
      statusExporting: "正在打包文件，请稍候……",
      statusExported: "HEMENG 文件已生成。",
      statusOpening: "正在打开 HEMENG 文件……",
      statusOpened: "HEMENG 文件已成功打开。",
      statusReset: "已清空。",
      statusInvalidImage: "请选择有效的图片文件。",
      statusInvalidVideo: "请选择有效的视频文件。",
      statusNeedBoth: "请先选择图片和视频。",
      statusTooLarge: "文件总大小超过限制，请选择较小的媒体文件。",
      statusNoZip: "打包组件未加载，请检查网络后刷新页面。",
      statusExportError: "导出失败，请检查文件后重试。",
      statusOpenError: "无法打开文件，请确认它是有效的 HEMENG 文件。",
      statusFileTooLarge: "HEMENG 文件太大，无法在浏览器中处理。",
      statusUnsupported: "当前浏览器无法播放这个视频格式。",
      statusPlayError: "视频无法播放，请检查视频文件格式。",
      statusUnknown: "发生未知错误。",
      statusLoading: "正在加载媒体文件……"
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
      choose: "選擇檔案",
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
      statusReady: "請選擇一張圖片和一段影片。",
      statusCover: "圖片已載入。",
      statusVideo: "影片已載入。",
      statusBoth: "圖片和影片都已準備好，可以匯出了。",
      statusExporting: "正在打包檔案，請稍候……",
      statusExported: "HEMENG 檔案已產生。",
      statusOpening: "正在開啟 HEMENG 檔案……",
      statusOpened: "HEMENG 檔案已成功開啟。",
      statusReset: "已清空。",
      statusInvalidImage: "請選擇有效的圖片檔案。",
      statusInvalidVideo: "請選擇有效的影片檔案。",
      statusNeedBoth: "請先選擇圖片和影片。",
      statusTooLarge: "檔案總大小超過限制，請選擇較小的媒體檔案。",
      statusNoZip: "打包元件未載入，請檢查網路後重新整理頁面。",
      statusExportError: "匯出失敗，請檢查檔案後重試。",
      statusOpenError: "無法開啟檔案，請確認它是有效的 HEMENG 檔案。",
      statusFileTooLarge: "HEMENG 檔案太大，無法在瀏覽器中處理。",
      statusUnsupported: "目前瀏覽器無法播放這個影片格式。",
      statusPlayError: "影片無法播放，請檢查影片檔案格式。",
      statusUnknown: "發生未知錯誤。",
      statusLoading: "正在載入媒體檔案……"
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
      choose: "Choose File",
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
      statusReady: "Choose an image and a video.",
      statusCover: "Image loaded.",
      statusVideo: "Video loaded.",
      statusBoth: "Both files are ready. You can export now.",
      statusExporting: "Packaging your file. Please wait...",
      statusExported: "HEMENG file created.",
      statusOpening: "Opening HEMENG file...",
      statusOpened: "HEMENG file opened successfully.",
      statusReset: "Cleared.",
      statusInvalidImage: "Please choose a valid image file.",
      statusInvalidVideo: "Please choose a valid video file.",
      statusNeedBoth: "Please choose both an image and a video first.",
      statusTooLarge: "The combined file size exceeds the limit. Please choose smaller files.",
      statusNoZip: "The packaging library did not load. Check your connection and refresh.",
      statusExportError: "Export failed. Check your files and try again.",
      statusOpenError: "Unable to open this file. Make sure it is a valid HEMENG file.",
      statusFileTooLarge: "This HEMENG file is too large to process in the browser.",
      statusUnsupported: "Your browser cannot play this video format.",
      statusPlayError: "Unable to play the video. Please check its format.",
      statusUnknown: "An unknown error occurred.",
      statusLoading: "Loading media files..."
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
      choose: "ファイルを選択",
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
      statusReady: "画像と動画を選択してください。",
      statusCover: "画像を読み込みました。",
      statusVideo: "動画を読み込みました。",
      statusBoth: "準備ができました。書き出しできます。",
      statusExporting: "ファイルを作成しています。お待ちください……",
      statusExported: "HEMENG ファイルを作成しました。",
      statusOpening: "HEMENG ファイルを開いています……",
      statusOpened: "HEMENG ファイルを開きました。",
      statusReset: "クリアしました。",
      statusInvalidImage: "有効な画像ファイルを選択してください。",
      statusInvalidVideo: "有効な動画ファイルを選択してください。",
      statusNeedBoth: "画像と動画の両方を選択してください。",
      statusTooLarge: "ファイルサイズが上限を超えています。",
      statusNoZip: "圧縮ライブラリを読み込めません。再読み込みしてください。",
      statusExportError: "書き出しに失敗しました。",
      statusOpenError: "有効な HEMENG ファイルではない可能性があります。",
      statusFileTooLarge: "ファイルが大きすぎるため、ブラウザで処理できません。",
      statusUnsupported: "この動画形式はブラウザで再生できません。",
      statusPlayError: "動画を再生できません。形式を確認してください。",
      statusUnknown: "不明なエラーが発生しました。",
      statusLoading: "メディアファイルを読み込んでいます……"
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
      choose: "파일 선택",
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
      statusReady: "이미지와 동영상을 선택하세요.",
      statusCover: "이미지를 불러왔습니다.",
      statusVideo: "동영상을 불러왔습니다.",
      statusBoth: "준비가 완료되었습니다. 내보낼 수 있습니다.",
      statusExporting: "파일을 압축하고 있습니다. 잠시 기다려 주세요...",
      statusExported: "HEMENG 파일을 만들었습니다.",
      statusOpening: "HEMENG 파일을 여는 중...",
      statusOpened: "HEMENG 파일을 성공적으로 열었습니다.",
      statusReset: "초기화했습니다.",
      statusInvalidImage: "올바른 이미지 파일을 선택하세요.",
      statusInvalidVideo: "올바른 동영상 파일을 선택하세요.",
      statusNeedBoth: "이미지와 동영상을 모두 선택하세요.",
      statusTooLarge: "파일 크기 제한을 초과했습니다.",
      statusNoZip: "압축 라이브러리를 불러오지 못했습니다. 새로고침하세요.",
      statusExportError: "내보내기에 실패했습니다.",
      statusOpenError: "올바른 HEMENG 파일인지 확인하세요.",
      statusFileTooLarge: "파일이 너무 커서 브라우저에서 처리할 수 없습니다.",
      statusUnsupported: "현재 브라우저에서 이 동영상 형식을 재생할 수 없습니다.",
      statusPlayError: "동영상을 재생할 수 없습니다. 형식을 확인하세요.",
      statusUnknown: "알 수 없는 오류가 발생했습니다.",
      statusLoading: "미디어 파일을 불러오는 중..."
    }
  };

  const MAX_MEDIA_SIZE = 250 * 1024 * 1024;
  const MAX_PACKAGE_SIZE = 300 * 1024 * 1024;

  let currentLanguage = "zh-CN";
  let coverFile = null;
  let videoFile = null;
  let coverUrl = null;
  let videoUrl = null;
  let isPlaying = false;

  function getLanguage() {
    try {
      const api = window.HemengI18n;
      if (api && typeof api.getLanguage === "function") {
        const value = api.getLanguage();
        if (translations[value]) return value;
      }
    } catch (_) {}

    const selected = elements.language?.value;
    if (translations[selected]) return selected;

    const saved = document.documentElement.lang;
    if (translations[saved]) return saved;

    return "zh-CN";
  }

  function t(key) {
    return translations[currentLanguage]?.[key]
      || translations["zh-CN"][key]
      || key;
  }

  function applyLanguage(language) {
    currentLanguage = translations[language] ? language : "zh-CN";

    document.documentElement.lang = currentLanguage;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      const value = t(key);
      if (value) element.textContent = value;
    });

    if (elements.language) {
      elements.language.value = currentLanguage;
    }

    if (elements.exportButton && !coverFile) {
      elements.exportButton.disabled = true;
    }

    updateStatus();
  }

  function setStatus(key) {
    if (elements.status) {
      elements.status.textContent = t(key);
    }
  }

  function updateStatus() {
    if (!coverFile && !videoFile) {
      setStatus("statusReady");
    } else if (coverFile && videoFile) {
      setStatus("statusBoth");
    } else if (coverFile) {
      setStatus("statusCover");
    } else {
      setStatus("statusVideo");
    }
  }

  function revokeUrl(url) {
    if (url) {
      try {
        URL.revokeObjectURL(url);
      } catch (_) {}
    }
  }

  function stopVideo() {
    if (elements.videoPreview) {
      elements.videoPreview.pause();
      elements.videoPreview.removeAttribute("src");
      elements.videoPreview.load();
      elements.videoPreview.hidden = true;
    }

    if (elements.coverPreview) {
      elements.coverPreview.hidden = !coverUrl;
    }

    if (elements.playIcon) {
      elements.playIcon.hidden = !coverUrl;
    }

    isPlaying = false;
  }

  function updateExportButton() {
    if (elements.exportButton) {
      elements.exportButton.disabled = !(coverFile && videoFile);
    }
  }

  function showCover() {
    if (elements.videoPreview) {
      elements.videoPreview.hidden = true;
    }

    if (elements.coverPreview) {
      elements.coverPreview.hidden = !coverUrl;
    }

    if (elements.playIcon) {
      elements.playIcon.hidden = !coverUrl;
    }

    isPlaying = false;
  }

  function showVideo() {
    if (!videoUrl || !elements.videoPreview) return;

    elements.coverPreview && (elements.coverPreview.hidden = true);

    if (elements.playIcon) {
      elements.playIcon.hidden = true;
    }

    elements.videoPreview.hidden = false;
    elements.videoPreview.src = videoUrl;
    elements.videoPreview.controls = true;
    elements.videoPreview.playsInline = true;

    isPlaying = true;

    const result = elements.videoPreview.play();

    if (result && typeof result.catch === "function") {
      result.catch(() => {
        showCover();
        setStatus("statusPlayError");
      });
    }
  }

  function setCover(file) {
    if (!file || !file.type.startsWith("image/")) {
      setStatus("statusInvalidImage");
      return;
    }

    revokeUrl(coverUrl);

    coverFile = file;
    coverUrl = URL.createObjectURL(file);

    if (elements.coverPreview) {
      elements.coverPreview.src = coverUrl;
      elements.coverPreview.hidden = false;
    }

    showCover();
    updateExportButton();
    updateStatus();
  }

  function setVideo(file) {
    if (!file) return;

    const validType = file.type.startsWith("video/");
    const validExtension = /\.(mp4|mov|webm|m4v|ogv)$/i.test(file.name);

    if (!validType && !validExtension) {
      setStatus("statusInvalidVideo");
      return;
    }

    revokeUrl(videoUrl);

    videoFile = file;
    videoUrl = URL.createObjectURL(file);

    if (elements.videoPreview) {
      elements.videoPreview.src = videoUrl;
      elements.videoPreview.hidden = true;
      elements.videoPreview.controls = true;
    }

    showCover();
    updateExportButton();
    updateStatus();
  }

  function getMime(file, fallback) {
    return file && file.type ? file.type : fallback;
  }

  function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");

    anchor.href = url;
    anchor.download = filename;

    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();

    setTimeout(() => revokeUrl(url), 1500);
  }

  function safeFilename(name, fallback) {
    const cleaned = String(name || "")
      .replace(/[\\/:*?"<>|]/g, "_")
      .replace(/^\.+/, "")
      .trim();

    return cleaned || fallback;
  }

  async function exportHemeng() {
    if (!coverFile || !videoFile) {
      setStatus("statusNeedBoth");
      return;
    }

    if (!window.fflate || typeof window.fflate.zipSync !== "function") {
      setStatus("statusNoZip");
      return;
    }

    if (coverFile.size + videoFile.size > MAX_MEDIA_SIZE) {
      setStatus("statusTooLarge");
      return;
    }

    try {
      elements.exportButton && (elements.exportButton.disabled = true);
      setStatus("statusExporting");

      const coverBytes = new Uint8Array(await coverFile.arrayBuffer());
      const videoBytes = new Uint8Array(await videoFile.arrayBuffer());

      const coverName = safeFilename(coverFile.name, "cover");
      const videoName = safeFilename(videoFile.name, "video");

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
          name: coverName,
          mimeType: getMime(coverFile, "image/jpeg")
        },
        video: {
          path: "media/video",
          name: videoName,
          mimeType: getMime(videoFile, "video/mp4")
        }
      };

      const encoder = new TextEncoder();

      const archive = {
        "manifest.json": encoder.encode(JSON.stringify(manifest, null, 2)),
        "media/cover": coverBytes,
        "media/video": videoBytes
      };

      const zipped = window.fflate.zipSync(archive, { level: 0 });

      const blob = new Blob([zipped], {
        type: "application/vnd.hemeng+zip"
      });

      downloadBlob(blob, "HEMENG-" + Date.now() + ".hemeng");

      setStatus("statusExported");
    } catch (error) {
      console.error("[HEMENG] Export error:", error);
      setStatus("statusExportError");
    } finally {
      updateExportButton();
    }
  }

  function validMediaPath(path) {
    return typeof path === "string"
      && path.startsWith("media/")
      && !path.startsWith("/")
      && !path.includes("..")
      && !path.includes("\\")
      && !path.includes("\0");
  }

  function validMime(mime, prefix, fallback) {
    return typeof mime === "string" && mime.startsWith(prefix)
      ? mime
      : fallback;
  }

  async function openHemeng(file) {
    if (!file) return;

    if (file.size > MAX_PACKAGE_SIZE) {
      setStatus("statusFileTooLarge");
      return;
    }

    if (!window.fflate || typeof window.fflate.unzipSync !== "function") {
      setStatus("statusNoZip");
      return;
    }

    try {
      setStatus("statusOpening");

      const buffer = await file.arrayBuffer();
      const archive = window.fflate.unzipSync(new Uint8Array(buffer));

      if (!archive["manifest.json"]) {
        throw new Error("Missing manifest");
      }

      const decoder = new TextDecoder();
      const manifest = JSON.parse(decoder.decode(archive["manifest.json"]));

      if (
        !manifest ||
        manifest.format !== "HEMENG" ||
        manifest.formatVersion !== "1.0" ||
        !manifest.cover ||
        !manifest.video ||
        !validMediaPath(manifest.cover.path) ||
        !validMediaPath(manifest.video.path)
      ) {
        throw new Error("Invalid manifest");
      }

      const coverBytes = archive[manifest.cover.path];
      const videoBytes = archive[manifest.video.path];

      if (
        !coverBytes ||
        !videoBytes ||
        coverBytes.length === 0 ||
        videoBytes.length === 0
      ) {
        throw new Error("Missing media");
      }

      const coverMime = validMime(
        manifest.cover.mimeType,
        "image/",
        "image/jpeg"
      );

      const videoMime = validMime(
        manifest.video.mimeType,
        "video/",
        "video/mp4"
      );

      const newCover = new Blob([coverBytes], { type: coverMime });
      const newVideo = new Blob([videoBytes], { type: videoMime });

      if (newCover.size + newVideo.size > MAX_MEDIA_SIZE) {
        throw new Error("Media too large");
      }

      revokeUrl(coverUrl);
      revokeUrl(videoUrl);

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

      if (elements.coverPreview) {
        elements.coverPreview.src = coverUrl;
      }

      if (elements.videoPreview) {
        elements.videoPreview.src = videoUrl;
        elements.videoPreview.controls = true;
        elements.videoPreview.playsInline = true;
      }

      showCover();
      updateExportButton();
      setStatus("statusOpened");
    } catch (error) {
      console.error("[HEMENG] Open error:", error);
      setStatus("statusOpenError");
    }
  }

  function resetAll() {
    stopVideo();

    revokeUrl(coverUrl);
    revokeUrl(videoUrl);

    coverFile = null;
    videoFile = null;
    coverUrl = null;
    videoUrl = null;

    if (elements.coverInput) elements.coverInput.value = "";
    if (elements.videoInput) elements.videoInput.value = "";
    if (elements.hemengInput) elements.hemengInput.value = "";

    if (elements.coverPreview) {
      elements.coverPreview.removeAttribute("src");
      elements.coverPreview.hidden = true;
    }

    if (elements.videoPreview) {
      elements.videoPreview.removeAttribute("src");
      elements.videoPreview.load();
      elements.videoPreview.hidden = true;
    }

    if (elements.playIcon) {
      elements.playIcon.hidden = true;
    }

    updateExportButton();
    setStatus("statusReset");
  }

  function bindEvents() {
    elements.coverInput?.addEventListener("change", (event) => {
      const file = event.target.files?.[0];
      if (file) setCover(file);
    });

    elements.videoInput?.addEventListener("change", (event) => {
      const file = event.target.files?.[0];
      if (file) setVideo(file);
    });

    elements.coverPreview?.addEventListener("click", () => {
      if (coverUrl && videoUrl && !isPlaying) {
        showVideo();
      }
    });

    elements.playIcon?.addEventListener("click", () => {
      if (coverUrl && videoUrl && !isPlaying) {
        showVideo();
      }
    });

    elements.videoPreview?.addEventListener("ended", () => {
      showCover();
    });

    elements.videoPreview?.addEventListener("error", () => {
      if (isPlaying) {
        showCover();
        setStatus("statusUnsupported");
      }
    });

    elements.exportButton?.addEventListener("click", exportHemeng);
    elements.resetButton?.addEventListener("click", resetAll);

    elements.openButton?.addEventListener("click", () => {
      elements.hemengInput?.click();
    });

    elements.hemengInput?.addEventListener("change", (event) => {
      const file = event.target.files?.[0];
      if (file) openHemeng(file);
    });

    elements.language?.addEventListener("change", (event) => {
      const language = event.target.value;

      try {
        if (
          window.HemengI18n &&
          typeof window.HemengI18n.setLanguage === "function"
        ) {
          window.HemengI18n.setLanguage(language);
        }
      } catch (error) {
        console.warn("[HEMENG] Language integration:", error);
      }

      applyLanguage(language);
    });

    window.addEventListener("hemeng-language-change", (event) => {
      const language = event.detail?.language
        || event.detail?.lang
        || getLanguage();

      applyLanguage(language);
    });

    // 防止播放图标遮挡封面图片的点击事件
    if (elements.playIcon) {
      elements.playIcon.style.pointerEvents = "none";
    }
  }

  function initialize() {
    bindEvents();

    if (elements.coverPreview) {
      elements.coverPreview.hidden = true;
    }

    if (elements.videoPreview) {
      elements.videoPreview.hidden = true;
    }

    if (elements.playIcon) {
      elements.playIcon.hidden = true;
    }

    updateExportButton();
    applyLanguage(getLanguage());

    console.log("[HEMENG] Creator initialized.");
  }

  initialize();
})();
