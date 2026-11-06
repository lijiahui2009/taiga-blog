(function () {
  "use strict";

  const i18n = window.HemengI18n;
  if (!i18n) return;

  const translations = {
    "返回首页": {
      "zh-TW": "返回首頁",
      en: "Back to Home",
      ja: "ホームに戻る",
      ko: "홈으로 돌아가기"
    },
    "九宫格图片工具": {
      "zh-TW": "九宮格圖片工具",
      en: "Grid Image Tool",
      ja: "9分割画像ツール",
      ko: "9분할 이미지 도구"
    },
    "切割、排列与合成，让图片处理简单一点。": {
      "zh-TW": "切割、排列與合成，讓圖片處理更簡單。",
      en: "Split, arrange, and merge images with ease.",
      ja: "画像の分割・配置・結合を簡単に。",
      ko: "이미지 분할, 배열 및 합성을 간편하게."
    },
    "图片切割": {
      "zh-TW": "圖片切割",
      en: "Split Image",
      ja: "画像を分割",
      ko: "이미지 분할"
    },
    "分割图像": {
      "zh-CN": "图片切割",
      "zh-TW": "圖片切割",
      en: "Split Image",
      ja: "画像を分割",
      ko: "이미지 분할"
    },
    "图片合成": {
      "zh-TW": "圖片合成",
      en: "Merge Images",
      ja: "画像を結合",
      ko: "이미지 합성"
    },
    "一张图片切成九张": {
      "zh-TW": "一張圖片切成九張",
      en: "Split One Image into Nine",
      ja: "1枚の画像を9枚に分割",
      ko: "이미지 한 장을 아홉 장으로 분할"
    },
    "上传一张图片，自动切割成 3×3 九张图片。可以逐张预览和下载。": {
      "zh-TW": "上傳一張圖片，自動切割成 3×3 九張圖片。可以逐張預覽和下載。",
      en: "Upload one image and automatically split it into a 3×3 grid. Preview and download each piece.",
      ja: "画像を1枚アップロードすると、3×3の9枚に自動分割します。1枚ずつプレビュー・ダウンロードできます。",
      ko: "이미지 한 장을 업로드하면 3×3으로 자동 분할합니다. 각 이미지를 미리 보고 다운로드할 수 있습니다."
    },
    "选择图片": {
      "zh-TW": "選擇圖片",
      en: "Choose Image",
      ja: "画像を選択",
      ko: "이미지 선택"
    },
    "切割方式": {
      "zh-TW": "切割方式",
      en: "Split Method",
      ja: "分割方法",
      ko: "분할 방식"
    },
    "中心裁切为正方形": {
      "zh-TW": "中心裁切為正方形",
      en: "Center Crop to Square",
      ja: "中央を正方形に切り抜く",
      ko: "중앙을 정사각형으로 자르기"
    },
    "保留原图比例": {
      "zh-TW": "保留原圖比例",
      en: "Keep Original Ratio",
      ja: "元の縦横比を維持",
      ko: "원본 비율 유지"
    },
    "图片格式": {
      "zh-TW": "圖片格式",
      en: "Image Format",
      ja: "画像形式",
      ko: "이미지 형식"
    },
    "开始切割": {
      "zh-TW": "開始切割",
      en: "Start Splitting",
      ja: "分割を開始",
      ko: "분할 시작"
    },
    "等待上传图片。": {
      "zh-TW": "等待上傳圖片。",
      en: "Waiting for an image.",
      ja: "画像のアップロードを待っています。",
      ko: "이미지 업로드를 기다리는 중입니다."
    },
    "九张图片合成一张": {
      "zh-TW": "九張圖片合成一張",
      en: "Merge Nine Images into One",
      ja: "9枚の画像を1枚に結合",
      ko: "아홉 장의 이미지를 한 장으로 합성"
    },
    "按照 1 至 9 的顺序上传图片。系统会将九张图片排列成 3×3 九宫格，最终生成一张完整图片。": {
      "zh-TW": "按照 1 至 9 的順序上傳圖片。系統會將九張圖片排列成 3×3 九宮格，最後生成一張完整圖片。",
      en: "Upload images in order from 1 to 9. They will be arranged in a 3×3 grid and combined into one image.",
      ja: "1から9の順番で画像をアップロードしてください。3×3に配置して1枚の画像に結合します。",
      ko: "1번부터 9번까지 순서대로 이미지를 업로드하세요. 3×3으로 배열하여 한 장의 이미지로 합칩니다."
    },
    "输出格式": {
      "zh-TW": "輸出格式",
      en: "Output Format",
      ja: "出力形式",
      ko: "출력 형식"
    },
    "每格尺寸": {
      "zh-TW": "每格尺寸",
      en: "Cell Size",
      ja: "各マスのサイズ",
      ko: "칸 크기"
    },
    "合成九宫格": {
      "zh-TW": "合成九宮格",
      en: "Create Grid",
      ja: "グリッドを作成",
      ko: "격자 이미지 만들기"
    },
    "请依次上传九张图片。": {
      "zh-TW": "請依序上傳九張圖片。",
      en: "Please upload nine images in order.",
      ja: "9枚の画像を順番にアップロードしてください。",
      ko: "이미지 아홉 장을 순서대로 업로드하세요."
    },
    "下载合成图片": {
      "zh-TW": "下載合成圖片",
      en: "Download Merged Image",
      ja: "結合画像をダウンロード",
      ko: "합성 이미지 다운로드"
    },
    "清空图片": {
      "zh-TW": "清空圖片",
      en: "Clear Images",
      ja: "画像をクリア",
      ko: "이미지 지우기"
    },
    "荷萌 HEMENG · 九宫格图片工具": {
      "zh-TW": "荷萌 HEMENG · 九宮格圖片工具",
      en: "HEMENG · Grid Image Tool",
      ja: "HEMENG · 9分割画像ツール",
      ko: "HEMENG · 9분할 이미지 도구"
    },
    "图片仅在当前浏览器本地处理，不会上传服务器。": {
      "zh-TW": "圖片僅在目前瀏覽器本機處理，不會上傳伺服器。",
      en: "Images are processed locally in your browser and are never uploaded to a server.",
      ja: "画像はブラウザ内で処理され、サーバーにはアップロードされません。",
      ko: "이미지는 현재 브라우저에서만 처리되며 서버에 업로드되지 않습니다."
    },
    "图片读取失败": {
      "zh-TW": "圖片讀取失敗",
      en: "Failed to read image",
      ja: "画像の読み込みに失敗しました",
      ko: "이미지를 읽지 못했습니다"
    },
    "请先选择一张图片。": {
      "zh-TW": "請先選擇一張圖片。",
      en: "Please choose an image first.",
      ja: "先に画像を選択してください。",
      ko: "먼저 이미지를 선택하세요."
    },
    "图片不能超过 20MB。": {
      "zh-TW": "圖片不能超過 20MB。",
      en: "Image size cannot exceed 20MB.",
      ja: "画像サイズは20MB以下にしてください。",
      ko: "이미지 크기는 20MB를 초과할 수 없습니다."
    },
    "正在处理图片……": {
      "zh-TW": "正在處理圖片……",
      en: "Processing image…",
      ja: "画像を処理しています…",
      ko: "이미지를 처리하는 중…"
    },
    "图片导出失败。": {
      "zh-TW": "圖片匯出失敗。",
      en: "Failed to export image.",
      ja: "画像の書き出しに失敗しました。",
      ko: "이미지 내보내기에 실패했습니다."
    },
    "切割完成！共生成 9 张图片。": {
      "zh-TW": "切割完成！共生成 9 張圖片。",
      en: "Done! 9 images have been created.",
      ja: "完了！画像を9枚作成しました。",
      ko: "완료! 이미지 9장이 생성되었습니다."
    },
    "请先上传完整的九张图片。": {
      "zh-TW": "請先上傳完整的九張圖片。",
      en: "Please upload all nine images first.",
      ja: "先に9枚すべての画像をアップロードしてください。",
      ko: "먼저 이미지 아홉 장을 모두 업로드하세요."
    },
    "单张图片不能超过 20MB。": {
      "zh-TW": "單張圖片不能超過 20MB。",
      en: "Each image must be 20MB or smaller.",
      ja: "1枚あたりの画像サイズは20MB以下にしてください。",
      ko: "이미지 한 장의 크기는 20MB 이하여야 합니다."
    },
    "图片预览": {
      "zh-TW": "圖片預覽",
      en: "Image Preview",
      ja: "画像プレビュー",
      ko: "이미지 미리보기"
    },
    "图片导出失败，请尝试其他格式。": {
      "zh-TW": "圖片匯出失敗，請嘗試其他格式。",
      en: "Image export failed. Please try another format.",
      ja: "画像の書き出しに失敗しました。別の形式をお試しください。",
      ko: "이미지 내보내기에 실패했습니다. 다른 형식을 시도하세요."
    },
    "已清空，请重新上传九张图片。": {
      "zh-TW": "已清空，請重新上傳九張圖片。",
      en: "Cleared. Please upload nine images again.",
      ja: "クリアしました。9枚の画像を再度アップロードしてください。",
      ko: "초기화되었습니다. 이미지 아홉 장을 다시 업로드하세요."
    }
  };

  const dynamicPatterns = [
    {
      test: /^第\s*(\d+)\s*张$/,
      make: (n, lang) => ({
        "zh-TW": `第 ${n} 張`,
        en: `Image ${n}`,
        ja: `${n}枚目`,
        ko: `${n}번 이미지`
      }[lang])
    },
    {
      test: /^下载第\s*(\d+)\s*张$/,
      make: (n, lang) => ({
        "zh-TW": `下載第 ${n} 張`,
        en: `Download Image ${n}`,
        ja: `${n}枚目をダウンロード`,
        ko: `${n}번 이미지 다운로드`
      }[lang])
    },
    {
      test: /^已选择\s*(\d+)\s*\/\s*9\s*张图片。$/,
      make: (n, lang) => ({
        "zh-TW": `已選擇 ${n} / 9 張圖片。`,
        en: `${n} / 9 images selected.`,
        ja: `${n} / 9 枚の画像を選択しました。`,
        ko: `이미지 ${n} / 9장 선택됨.`
      }[lang])
    },
    {
      test: /^第\s*(\d+)\s*张图片读取失败。$/,
      make: (n, lang) => ({
        "zh-TW": `第 ${n} 張圖片讀取失敗。`,
        en: `Failed to read image ${n}.`,
        ja: `${n}枚目の画像を読み込めませんでした。`,
        ko: `${n}번 이미지 읽기에 실패했습니다.`
      }[lang])
    },
    {
      test: /^合成成功！最终图片尺寸：([\d,]+)\s*×\s*([\d,]+)。$/,
      make: (a, lang, b) => ({
        "zh-TW": `合成成功！最終圖片尺寸：${a} × ${b}。`,
        en: `Successfully merged! Final image size: ${a} × ${b}.`,
        ja: `結合しました！最終画像サイズ：${a} × ${b}。`,
        ko: `합성 성공! 최종 이미지 크기: ${a} × ${b}.`
      }[lang])
    }
  ];

  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();

  function translateText(value, language) {
    const clean = value.trim();
    if (!clean) return value;

    const entry = translations[clean];
    if (entry) {
      return value.replace(clean, entry[language] || clean);
    }

    for (const pattern of dynamicPatterns) {
      const match = clean.match(pattern.test);
      if (match) {
        const translated = pattern.make(match[1], language, match[2]);
        return value.replace(clean, translated || clean);
      }
    }

    const errorPrefix = "处理失败：";

    if (clean.startsWith(errorPrefix)) {
      const errorText = clean.slice(errorPrefix.length);
      const errorTranslation = translations[errorText];
      const translatedError =
        errorTranslation && errorTranslation[language]
          ? errorTranslation[language]
          : errorText;

      const translatedPrefix = {
        "zh-CN": "处理失败：",
        "zh-TW": "處理失敗：",
        en: "Processing failed: ",
        ja: "処理に失敗しました：",
        ko: "처리에 실패했습니다: "
      }[language] || errorPrefix;

      return translatedPrefix + translatedError;
    }

    return value;
  }

  function isProtected(element) {
    return !!element.closest(
      "script, style, input, textarea, canvas, .hemeng-language-select"
    );
  }

  function translateNode(node, language) {
    if (!node) return;

    if (node.nodeType === Node.TEXT_NODE) {
      if (!node.parentElement || isProtected(node.parentElement)) return;

      if (!originalText.has(node)) {
        originalText.set(node, node.nodeValue);
      }

      const original = originalText.get(node);
      const translated = translateText(original, language);

      if (node.nodeValue !== translated) {
        node.nodeValue = translated;
      }

      return;
    }

    if (node.nodeType !== Node.ELEMENT_NODE) return;

    const element = node;

    if (isProtected(element)) return;

    const attributes = ["placeholder", "title", "aria-label", "alt"];
    let saved = originalAttributes.get(element);

    if (!saved) {
      saved = {};
      originalAttributes.set(element, saved);
    }

    attributes.forEach(function (attribute) {
      if (!element.hasAttribute(attribute)) return;

      if (!(attribute in saved)) {
        saved[attribute] = element.getAttribute(attribute);
      }

      const translated = translateText(saved[attribute], language);

      if (element.getAttribute(attribute) !== translated) {
        element.setAttribute(attribute, translated);
      }
    });

    Array.from(element.childNodes).forEach(function (child) {
      translateNode(child, language);
    });
  }

  function setText(element, original) {
    if (!element) return;

    element.textContent = original;

    const textNode = element.firstChild;

    if (textNode && textNode.nodeType === Node.TEXT_NODE) {
      originalText.set(textNode, original);
      textNode.nodeValue = translateText(original, i18n.getLanguage());
    }
  }

  function addLanguageSelector() {
    const nav = document.querySelector(".site-nav");

    if (!nav || nav.querySelector(".hemeng-language-select")) return;

    const select = document.createElement("select");
    select.className = "hemeng-language-select";
    select.setAttribute("aria-label", "Language");

    select.style.cssText = [
      "padding:9px 11px",
      "border:1px solid #f0dfd9",
      "border-radius:999px",
      "background:#fff",
      "color:#493936",
      "font-size:12px",
      "cursor:pointer",
      "max-width:125px"
    ].join(";");

    i18n.getLanguages().forEach(function (language) {
      const option = document.createElement("option");
      option.value = language.code;
      option.textContent = language.name;
      select.appendChild(option);
    });

    select.value = i18n.getLanguage();

    select.addEventListener("change", function () {
      i18n.setLanguage(select.value);
    });

    nav.appendChild(select);
  }

  function applyLanguage(language) {
    const root = document.querySelector(".container");
    if (!root) return;

    document.documentElement.lang = language;

    const titles = {
      "zh-CN": "九宫格工具 - 荷萌 HEMENG",
      "zh-TW": "九宮格工具 - 荷萌 HEMENG",
      en: "Grid Image Tool - HEMENG",
      ja: "9分割画像ツール - HEMENG",
      ko: "9분할 이미지 도구 - HEMENG"
    };

    document.title = titles[language] || titles["zh-CN"];

    translateNode(root, language);

    const selector = document.querySelector(".hemeng-language-select");
    if (selector) selector.value = language;
  }

  function init() {
    addLanguageSelector();
    applyLanguage(i18n.getLanguage());

    window.addEventListener("hemeng-language-change", function (event) {
      applyLanguage(event.detail.language);
    });
  }

  window.HemengNineGridI18n = {
    translateText,
    setText
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
