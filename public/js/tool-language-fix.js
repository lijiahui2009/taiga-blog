(() => {
  "use strict";

  const core = window.HemengI18n;
  if (!core) return;

  const dictionaries = {
    "zh-CN": {
      choose: "选择文件",
      noFile: "尚未选择文件",
      qrExport: "二维码已生成，但图片导出失败，请重试。",
      qrTooLong: "生成失败，内容可能过长或格式不受支持。",
      qrLoading: "正在准备……",
      qrWaiting: "等待生成",
      qrExpired: "已过期",
      gridError: "处理失败：",
      gridImageError: "图片读取失败。",
      gridSelected: "已选择"
    },
    "zh-TW": {
      choose: "選擇檔案",
      noFile: "尚未選擇檔案",
      qrExport: "QR Code 已產生，但圖片匯出失敗，請重試。",
      qrTooLong: "產生失敗，內容可能過長或格式不受支援。",
      qrLoading: "準備中……",
      qrWaiting: "等待產生",
      qrExpired: "已過期",
      gridError: "處理失敗：",
      gridImageError: "圖片讀取失敗。",
      gridSelected: "已選擇"
    },
    en: {
      choose: "Choose File",
      noFile: "No file selected",
      qrExport: "QR code created, but image export failed. Please try again.",
      qrTooLong: "Generation failed. The content may be too long or unsupported.",
      qrLoading: "Preparing...",
      qrWaiting: "Waiting to generate",
      qrExpired: "Expired",
      gridError: "Processing failed: ",
      gridImageError: "Failed to read image.",
      gridSelected: "Selected"
    },
    ja: {
      choose: "ファイルを選択",
      noFile: "ファイルが選択されていません",
      qrExport: "QRコードは生成されましたが、画像の書き出しに失敗しました。もう一度お試しください。",
      qrTooLong: "生成に失敗しました。内容が長すぎるか、対応していない形式です。",
      qrLoading: "準備中……",
      qrWaiting: "生成待ち",
      qrExpired: "期限切れ",
      gridError: "処理に失敗しました：",
      gridImageError: "画像の読み込みに失敗しました。",
      gridSelected: "選択済み"
    },
    ko: {
      choose: "파일 선택",
      noFile: "선택된 파일 없음",
      qrExport: "QR 코드가 생성되었지만 이미지 내보내기에 실패했습니다. 다시 시도하세요.",
      qrTooLong: "생성에 실패했습니다. 내용이 너무 길거나 지원하지 않는 형식일 수 있습니다.",
      qrLoading: "준비 중...",
      qrWaiting: "생성 대기 중",
      qrExpired: "만료됨",
      gridError: "처리 실패: ",
      gridImageError: "이미지를 읽지 못했습니다.",
      gridSelected: "선택됨"
    }
  };

  const extra = {
    "二维码已生成，但图片导出失败，请重试。": "qrExport",
    "生成失败，内容可能过长或格式不受支持。": "qrTooLong",
    "正在准备……": "qrLoading",
    "等待生成": "qrWaiting",
    "已过期": "qrExpired",
    "图片读取失败。": "gridImageError"
  };

  let language = core.getLanguage();
  const fileInputs = new WeakMap();
  const originalText = new WeakMap();

  function t(key) {
    return dictionaries[language]?.[key] ||
      dictionaries.en[key] || key;
  }

  function translateText(text) {
    const clean = text.trim();
    if (!clean) return text;

    if (extra[clean]) {
      return text.replace(clean, t(extra[clean]));
    }

    return text;
  }

  function translateNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const original = originalText.get(node) ?? node.nodeValue;
      originalText.set(node, original);

      const translated = translateText(original);

      if (node.nodeValue !== translated) {
        node.nodeValue = translated;
      }
      return;
    }

    if (node.nodeType !== Node.ELEMENT_NODE) return;

    if (
      node.matches("input, textarea, select, .hemeng-file-picker") ||
      node.closest(".hemeng-file-picker")
    ) {
      return;
    }

    Array.from(node.childNodes).forEach(translateNode);
  }

  function createFilePicker(input) {
    if (fileInputs.has(input)) return;
    if (!input.isConnected) return;

    const wrapper = document.createElement("div");
    wrapper.className = "hemeng-file-picker";

    wrapper.style.cssText = `
      display:flex;
      align-items:center;
      justify-content:center;
      gap:12px;
      flex-wrap:wrap;
      width:100%;
      margin:8px 0;
    `;

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = t("choose");

    button.style.cssText = `
      border:1px solid #e8c9c0;
      border-radius:10px;
      padding:10px 17px;
      background:#fff0eb;
      color:#956258;
      font-size:13px;
      font-weight:650;
      cursor:pointer;
    `;

    const filename = document.createElement("span");
    filename.textContent = t("noFile");
    filename.style.cssText = `
      color:#927d78;
      font-size:12px;
      overflow-wrap:anywhere;
    `;

    const parent = input.parentNode;
    if (!parent) return;

    parent.insertBefore(wrapper, input);
    wrapper.appendChild(button);
    wrapper.appendChild(filename);
    wrapper.appendChild(input);

    input.style.display = "none";

    button.addEventListener("click", () => input.click());

    input.addEventListener("change", () => {
      filename.textContent = input.files?.length
        ? Array.from(input.files).map(file => file.name).join(", ")
        : t("noFile");
    });

    fileInputs.set(input, { button, filename });
  }

  function updateFilePickers() {
    document.querySelectorAll('input[type="file"]').forEach(input => {
      if (!fileInputs.has(input)) {
        createFilePicker(input);
      }

      const elements = fileInputs.get(input);
      if (!elements) return;

      elements.button.textContent = t("choose");

      if (!input.files?.length) {
        elements.filename.textContent = t("noFile");
      }
    });
  }

  function applyLanguage() {
    language = core.getLanguage();
    document.documentElement.lang = language;

    translateNode(document.body);
    updateFilePickers();
  }

  function init() {
    applyLanguage();

    const observer = new MutationObserver(records => {
      records.forEach(record => {
        record.addedNodes.forEach(node => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            if (node.matches('input[type="file"]')) {
              createFilePicker(node);
            }

            node.querySelectorAll?.('input[type="file"]').forEach(createFilePicker);
          }

          translateNode(node);
        });

        if (record.type === "characterData") {
          translateNode(record.target);
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    });

    window.addEventListener("hemeng-language-change", applyLanguage);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
