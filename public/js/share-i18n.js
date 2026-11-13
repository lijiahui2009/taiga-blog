(() => {
  const core = window.HemengI18n;
  if (!core) return;

  const languages = {
    "zh-CN": {
      name: "简体中文",
      title: "分享内容",
      description: "有人通过荷萌分享了这段内容。你可以在这里查看，也可以复制保存。",
      loading: "正在读取分享内容……",
      invalid: "分享链接无效，请检查二维码或链接。",
      expired: "内容不存在或已经过期。",
      formatError: "分享内容格式异常，暂时无法显示。",
      networkError: "网络连接失败，请稍后刷新重试。",
      timeTitle: "分享时间信息",
      created: "创作时间",
      expires: "到期时间",
      remaining: "剩余有效时间",
      expiredTime: "已过期",
      copy: "复制内容",
      copied: "已复制",
      copyFailed: "复制失败，请手动选择文字",
      home: "返回荷萌首页",
      notice: "内容由分享者提供，请自行判断其真实性。",
      validity: "分享链接有效期为 30 天。"
    },
    "zh-TW": {
      name: "繁體中文",
      title: "分享內容",
      description: "有人透過荷萌分享了這段內容。你可以在這裡查看，也可以複製保存。",
      loading: "正在讀取分享內容……",
      invalid: "分享連結無效，請檢查 QR Code 或連結。",
      expired: "內容不存在或已經過期。",
      formatError: "分享內容格式異常，暫時無法顯示。",
      networkError: "網路連線失敗，請稍後重新整理。",
      timeTitle: "分享時間資訊",
      created: "創作時間",
      expires: "到期時間",
      remaining: "剩餘有效時間",
      expiredTime: "已過期",
      copy: "複製內容",
      copied: "已複製",
      copyFailed: "複製失敗，請手動選取文字",
      home: "返回荷萌首頁",
      notice: "內容由分享者提供，請自行判斷其真實性。",
      validity: "分享連結有效期限為 30 天。"
    },
    en: {
      name: "English",
      title: "Shared Content",
      description: "Someone shared this content through HEMENG. You can view it here or copy it.",
      loading: "Loading shared content…",
      invalid: "Invalid share link. Please check the QR code or URL.",
      expired: "The content does not exist or has expired.",
      formatError: "The shared content has an invalid format.",
      networkError: "Network connection failed. Please refresh and try again.",
      timeTitle: "Sharing Information",
      created: "Created",
      expires: "Expiration",
      remaining: "Time Remaining",
      expiredTime: "Expired",
      copy: "Copy Content",
      copied: "Copied",
      copyFailed: "Copy failed. Please select the text manually.",
      home: "Back to HEMENG Home",
      notice: "Content is provided by the sharer. Please judge its accuracy independently.",
      validity: "Share links are valid for 30 days."
    },
    ja: {
      name: "日本語",
      title: "共有コンテンツ",
      description: "HEMENGを通じて共有されたコンテンツです。ここで確認したり、コピーしたりできます。",
      loading: "共有コンテンツを読み込んでいます……",
      invalid: "共有リンクが無効です。QRコードまたはリンクを確認してください。",
      expired: "コンテンツが存在しないか、有効期限が切れています。",
      formatError: "共有コンテンツの形式が正しくありません。",
      networkError: "ネットワーク接続に失敗しました。再読み込みしてください。",
      timeTitle: "共有時間情報",
      created: "作成日時",
      expires: "有効期限",
      remaining: "残り時間",
      expiredTime: "期限切れ",
      copy: "内容をコピー",
      copied: "コピーしました",
      copyFailed: "コピーに失敗しました。手動で選択してください。",
      home: "HEMENGトップページへ",
      notice: "内容は共有者によって提供されています。情報の正確性をご自身でご判断ください。",
      validity: "共有リンクの有効期間は30日間です。"
    },
    ko: {
      name: "한국어",
      title: "공유 콘텐츠",
      description: "HEMENG을 통해 공유된 콘텐츠입니다. 여기에서 확인하거나 복사할 수 있습니다.",
      loading: "공유 콘텐츠를 불러오는 중……",
      invalid: "공유 링크가 유효하지 않습니다. QR 코드 또는 링크를 확인하세요.",
      expired: "콘텐츠가 존재하지 않거나 만료되었습니다.",
      formatError: "공유 콘텐츠 형식이 올바르지 않습니다.",
      networkError: "네트워크 연결에 실패했습니다. 새로고침 후 다시 시도하세요.",
      timeTitle: "공유 시간 정보",
      created: "생성 시간",
      expires: "만료 시간",
      remaining: "남은 유효 시간",
      expiredTime: "만료됨",
      copy: "콘텐츠 복사",
      copied: "복사됨",
      copyFailed: "복사에 실패했습니다. 텍스트를 직접 선택하세요.",
      home: "HEMENG 홈으로 돌아가기",
      notice: "콘텐츠는 공유자가 제공한 것입니다. 정확성을 직접 판단해 주세요.",
      validity: "공유 링크는 30일 동안 유효합니다."
    }
  };

  const originalMessages = {
    "分享链接无效，请检查二维码或链接。": "invalid",
    "内容不存在或已经过期。": "expired",
    "分享内容格式异常，暂时无法显示。": "formatError",
    "网络连接失败，请稍后刷新重试。": "networkError",
    "正在读取分享内容……": "loading"
  };

  let currentLanguage = core.getLanguage();

  function getLocale(language) {
    return {
      "zh-CN": "zh-CN",
      "zh-TW": "zh-TW",
      en: "en-US",
      ja: "ja-JP",
      ko: "ko-KR"
    }[language] || "en-US";
  }

  function t(key) {
    return languages[currentLanguage]?.[key] ||
      languages.en[key] || key;
  }

  function addLanguageSelector() {
    if (document.getElementById("hemengShareLanguage")) return;

    const selector = document.createElement("select");
    selector.id = "hemengShareLanguage";
    selector.setAttribute("aria-label", "Language");

    selector.style.cssText = `
      padding: 8px 11px;
      border: 1px solid #F0E3DE;
      border-radius: 9px;
      background: #FFFFFF;
      color: #956258;
      font-size: 12px;
      outline: none;
      cursor: pointer;
    `;

    Object.entries(languages).forEach(([code, item]) => {
      const option = document.createElement("option");
      option.value = code;
      option.textContent = item.name;
      selector.appendChild(option);
    });

    selector.value = currentLanguage;

    selector.addEventListener("change", () => {
      core.setLanguage(selector.value);
    });

    document.querySelector(".brand")?.appendChild(selector);
  }

  function translatePage() {
    const lang = languages[currentLanguage];
    if (!lang) return;

    document.documentElement.lang = currentLanguage;

    document.querySelector("h1").textContent = lang.title;

    const description = document.querySelector(".description");
    description.replaceChildren();

    description.textContent = lang.description;

    document.querySelector(".share-time-title").textContent = lang.timeTitle;

    const labels = document.querySelectorAll(".time-label");
    if (labels[0]) labels[0].textContent = lang.created;
    if (labels[1]) labels[1].textContent = lang.expires;
    if (labels[2]) labels[2].textContent = lang.remaining;

    document.getElementById("copyBtn").textContent = lang.copy;

    document.querySelector(".home").textContent = lang.home;

    const footer = document.querySelector(".footer");
    footer.childNodes[0].textContent = lang.notice;
    footer.childNodes[2].textContent = lang.validity;

    const status = document.getElementById("status");
    const statusKey = originalMessages[status.textContent.trim()];

    if (statusKey) {
      status.textContent = lang[statusKey];
    }

    const countdown = document.getElementById("countdown");

    if (countdown.textContent === "已过期") {
      countdown.textContent = lang.expiredTime;
    }

    const selector = document.getElementById("hemengShareLanguage");
    if (selector) selector.value = currentLanguage;
  }

  function watchDynamicText() {
  const status = document.getElementById("status");
  const countdown = document.getElementById("countdown");
  const copyBtn = document.getElementById("copyBtn");

  const observer = new MutationObserver(() => {
    const lang = languages[currentLanguage];

    const statusKey = originalMessages[status.textContent.trim()];
    if (statusKey) {
      const translated = lang[statusKey];
      if (status.textContent !== translated) {
        status.textContent = translated;
      }
    }

    if (countdown.textContent === "已过期") {
      if (countdown.textContent !== lang.expiredTime) {
        countdown.textContent = lang.expiredTime;
      }
    }

    if (copyBtn.textContent === "已复制") {
      if (copyBtn.textContent !== lang.copied) {
        copyBtn.textContent = lang.copied;
      }
    }

    if (copyBtn.textContent === "复制失败，请手动选择文字") {
      if (copyBtn.textContent !== lang.copyFailed) {
        copyBtn.textContent = lang.copyFailed;
      }
    }
  });

  observer.observe(status, {
    childList: true,
    characterData: true,
    subtree: true
  });

  observer.observe(countdown, {
    childList: true,
    characterData: true,
    subtree: true
  });

  observer.observe(copyBtn, {
    childList: true,
    characterData: true,
    subtree: true
  });
}

  function init() {
    addLanguageSelector();
    translatePage();
    watchDynamicText();
  }

  window.addEventListener("hemeng-language-change", event => {
    currentLanguage = event.detail?.language || core.getLanguage();
    translatePage();
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
