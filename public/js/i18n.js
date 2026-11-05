
(function () {
  "use strict";

  const STORAGE_KEY = "hemeng-language";
  const OLD_WALL_KEY = "hemeng-wall-language";

  const SUPPORTED_LANGUAGES = [
    "zh-CN",
    "zh-TW",
    "en",
    "ja",
    "ko"
  ];

  const LANGUAGE_NAMES = {
    "zh-CN": "简体中文",
    "zh-TW": "繁體中文",
    "en": "English",
    "ja": "日本語",
    "ko": "한국어"
  };

  function normalizeLanguage(language) {
    if (!language) return null;

    const value = String(language).toLowerCase();

    if (value.startsWith("zh-tw") ||
        value.startsWith("zh-hk") ||
        value.startsWith("zh-mo")) {
      return "zh-TW";
    }

    if (value.startsWith("zh")) return "zh-CN";
    if (value.startsWith("ja")) return "ja";
    if (value.startsWith("ko")) return "ko";
    if (value.startsWith("en")) return "en";

    return null;
  }

  function detectLanguage() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      const oldWallLanguage = localStorage.getItem(OLD_WALL_KEY);

      const preferred =
        normalizeLanguage(saved) ||
        normalizeLanguage(oldWallLanguage);

      if (preferred) return preferred;
    } catch (error) {
      // 浏览器限制本地存储时继续使用系统语言
    }

    const browserLanguages =
      navigator.languages ||
      [navigator.language || "en"];

    for (const language of browserLanguages) {
      const matched = normalizeLanguage(language);
      if (matched) return matched;
    }

    return "en";
  }

  let currentLanguage = detectLanguage();

  function setLanguage(language) {
    const normalized = normalizeLanguage(language);

    if (!normalized) return false;

    currentLanguage = normalized;

    try {
      localStorage.setItem(STORAGE_KEY, normalized);
      localStorage.setItem(OLD_WALL_KEY, normalized);
    } catch (error) {
      // 不影响当前页面使用
    }

    document.documentElement.lang = normalized;

    window.dispatchEvent(
      new CustomEvent("hemeng-language-change", {
        detail: { language: normalized }
      })
    );

    return true;
  }

  function getLanguage() {
    return currentLanguage;
  }

  function getLanguages() {
    return SUPPORTED_LANGUAGES.map(function (code) {
      return {
        code: code,
        name: LANGUAGE_NAMES[code]
      };
    });
  }

  window.HemengI18n = {
    getLanguage: getLanguage,
    setLanguage: setLanguage,
    detectLanguage: detectLanguage,
    getLanguages: getLanguages,
    normalizeLanguage: normalizeLanguage
  };

  document.documentElement.lang = currentLanguage;

  window.addEventListener("storage", function (event) {
    if (
      event.key === STORAGE_KEY ||
      event.key === OLD_WALL_KEY
    ) {
      const language = normalizeLanguage(event.newValue);

      if (language) {
        currentLanguage = language;
        document.documentElement.lang = language;

        window.dispatchEvent(
          new CustomEvent("hemeng-language-change", {
            detail: { language: language }
          })
        );
      }
    }
  });
})();
