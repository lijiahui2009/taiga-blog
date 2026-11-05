(function () {
  "use strict";

  const translations = {
    "zh-CN": {
      "个人博客": "个人博客",
      "记录想法、技术、生活与值得保存的信息。": "记录想法、技术、生活与值得保存的信息。",
      "把值得留下的内容，慢慢整理成自己的空间。": "把值得留下的内容，慢慢整理成自己的空间。",
      "← 返回荷萌首页": "← 返回荷萌首页",
      "搜索文章标题、内容或分类……": "搜索文章标题、内容或分类……",
      "文章列表": "文章列表",
      "正在加载文章……": "正在加载文章……",
      "← 返回文章列表": "← 返回文章列表",
      "个人博客 · 独立记录 · 持续更新": "个人博客 · 独立记录 · 持续更新",
      "没有找到相关文章。": "没有找到相关文章。",
      "全部": "全部",
      "发布时间：": "发布时间：",
      "正在从数据库读取文章……": "正在从数据库读取文章……",
      "日期未知": "日期未知",
      "本站公告": "本站公告",
      "个人记录": "个人记录",
      "技术": "技术"
    },

    "zh-TW": {
      "个人博客": "個人部落格",
      "记录想法、技术、生活与值得保存的信息。": "記錄想法、技術、生活與值得保存的資訊。",
      "把值得留下的内容，慢慢整理成自己的空间。": "把值得留下的內容，慢慢整理成自己的空間。",
      "← 返回荷萌首页": "← 返回荷萌首頁",
      "搜索文章标题、内容或分类……": "搜尋文章標題、內容或分類……",
      "文章列表": "文章列表",
      "正在加载文章……": "正在載入文章……",
      "← 返回文章列表": "← 返回文章列表",
      "个人博客 · 独立记录 · 持续更新": "個人部落格 · 獨立記錄 · 持續更新",
      "没有找到相关文章。": "找不到相關文章。",
      "全部": "全部",
      "发布时间：": "發佈時間：",
      "正在从数据库读取文章……": "正在從資料庫讀取文章……",
      "日期未知": "日期未知",
      "本站公告": "本站公告",
      "个人记录": "個人記錄",
      "技术": "技術"
    },

    "en": {
      "个人博客": "Personal Blog",
      "记录想法、技术、生活与值得保存的信息。": "Thoughts, technology, life, and information worth keeping.",
      "把值得留下的内容，慢慢整理成自己的空间。": "A personal space for collecting and organizing meaningful things.",
      "← 返回荷萌首页": "← Back to HEMENG Home",
      "搜索文章标题、内容或分类……": "Search titles, content, or categories...",
      "文章列表": "Articles",
      "正在加载文章……": "Loading articles...",
      "← 返回文章列表": "← Back to Articles",
      "个人博客 · 独立记录 · 持续更新": "Personal Blog · Independent Notes · Updated Regularly",
      "没有找到相关文章。": "No matching articles found.",
      "全部": "All",
      "发布时间：": "Published: ",
      "正在从数据库读取文章……": "Loading articles from database...",
      "日期未知": "Date unknown",
      "本站公告": "Announcements",
      "个人记录": "Personal Notes",
      "技术": "Technology"
    },

    "ja": {
      "个人博客": "個人ブログ",
      "记录想法、技术、生活与值得保存的信息。": "考え、技術、日常、そして残しておきたい情報を記録します。",
      "把值得留下的内容，慢慢整理成自己的空间。": "残しておきたい内容を、自分の場所に少しずつ整理します。",
      "← 返回荷萌首页": "← HEMENG ホームへ戻る",
      "搜索文章标题、内容或分类……": "記事のタイトル・内容・カテゴリを検索...",
      "文章列表": "記事一覧",
      "正在加载文章……": "記事を読み込んでいます...",
      "← 返回文章列表": "← 記事一覧へ戻る",
      "个人博客 · 独立记录 · 持续更新": "個人ブログ · 独立した記録 · 定期更新",
      "没有找到相关文章。": "該当する記事が見つかりません。",
      "全部": "すべて",
      "发布时间：": "公開日：",
      "正在从数据库读取文章……": "データベースから記事を読み込んでいます...",
      "日期未知": "日付不明",
      "本站公告": "お知らせ",
      "个人记录": "個人記録",
      "技术": "技術"
    },

    "ko": {
      "个人博客": "개인 블로그",
      "记录想法、技术、生活与值得保存的信息。": "생각, 기술, 일상과 보관할 가치가 있는 정보를 기록합니다.",
      "把值得留下的内容，慢慢整理成自己的空间。": "간직할 만한 내용을 나만의 공간에 조금씩 정리합니다.",
      "← 返回荷萌首页": "← HEMENG 홈으로",
      "搜索文章标题、内容或分类……": "제목, 내용 또는 카테고리 검색...",
      "文章列表": "게시글 목록",
      "正在加载文章……": "게시글을 불러오는 중...",
      "← 返回文章列表": "← 게시글 목록으로",
      "个人博客 · 独立记录 · 持续更新": "개인 블로그 · 독립적인 기록 · 지속적인 업데이트",
      "没有找到相关文章。": "관련 게시글을 찾을 수 없습니다.",
      "全部": "전체",
      "发布时间：": "게시 날짜: ",
      "正在从数据库读取文章……": "데이터베이스에서 게시글을 불러오는 중...",
      "日期未知": "날짜 알 수 없음",
      "本站公告": "사이트 공지",
      "个人记录": "개인 기록",
      "技术": "기술"
    }
  };

  const originalTexts = new WeakMap();

  function getLanguage() {
    return window.HemengI18n
      ? window.HemengI18n.getLanguage()
      : "zh-CN";
  }

  function translateTextNode(node, language) {
    if (!originalTexts.has(node)) {
      originalTexts.set(node, node.nodeValue);
    }

    const original = originalTexts.get(node);
    const trimmed = original.trim();

    if (!trimmed) return;

    const dictionary = translations[language] || translations["zh-CN"];
    let translated = dictionary[trimmed];

    if (!translated && trimmed.startsWith("发布时间：")) {
      translated =
        (dictionary["发布时间："] || "发布时间：") +
        trimmed.slice("发布时间：".length);
    }

    if (translated) {
      const leading = original.match(/^\s*/)[0];
      const trailing = original.match(/\s*$/)[0];
      node.nodeValue = leading + translated + trailing;
    } else {
      node.nodeValue = original;
    }
  }

  function translatePage(language) {
    const dictionary = translations[language] || translations["zh-CN"];

    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT
    );

    let node;

    while ((node = walker.nextNode())) {
      translateTextNode(node, language);
    }

    const search = document.getElementById("searchInput");

    if (search) {
      if (!search.dataset.originalPlaceholder) {
        search.dataset.originalPlaceholder = search.placeholder;
      }

      search.placeholder =
        dictionary[search.dataset.originalPlaceholder] ||
        search.dataset.originalPlaceholder;
    }

    document.documentElement.lang = language;
    document.title =
      dictionary["个人博客"] + " - 荷萌 HEMENG";

    const selector = document.getElementById("hemeng-blog-language");

    if (selector && selector.value !== language) {
      selector.value = language;
    }
  }

  function createLanguageSelector() {
    const topbar = document.querySelector(".topbar");

    if (!topbar || document.getElementById("hemeng-blog-language")) {
      return;
    }

    const selector = document.createElement("select");

    selector.id = "hemeng-blog-language";
    selector.setAttribute("aria-label", "选择语言");

    selector.style.cssText = [
      "padding:9px 10px",
      "border:1px solid #f0e3de",
      "border-radius:9px",
      "background:#fffaf7",
      "color:#956258",
      "font-size:12px",
      "max-width:125px",
      "cursor:pointer"
    ].join(";");

    const languages = [
      ["zh-CN", "简体中文"],
      ["zh-TW", "繁體中文"],
      ["en", "English"],
      ["ja", "日本語"],
      ["ko", "한국어"]
    ];

    languages.forEach(function (item) {
      const option = document.createElement("option");
      option.value = item[0];
      option.textContent = item[1];
      selector.appendChild(option);
    });

    selector.addEventListener("change", function () {
      if (window.HemengI18n) {
        window.HemengI18n.setLanguage(selector.value);
      }
    });

    topbar.appendChild(selector);
  }

  function initialize() {
    if (!window.HemengI18n) {
      console.error("荷萌语言核心尚未加载。");
      return;
    }

    createLanguageSelector();
    translatePage(getLanguage());

    window.addEventListener("hemeng-language-change", function (event) {
      translatePage(event.detail.language);
    });

    const observer = new MutationObserver(function (mutations) {
      const language = getLanguage();

      mutations.forEach(function (mutation) {
        mutation.addedNodes.forEach(function (added) {
          if (added.nodeType === Node.TEXT_NODE) {
            translateTextNode(added, language);
          } else if (added.nodeType === Node.ELEMENT_NODE) {
            const walker = document.createTreeWalker(
              added,
              NodeFilter.SHOW_TEXT
            );

            let node;

            while ((node = walker.nextNode())) {
              translateTextNode(node, language);
            }
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize);
  } else {
    initialize();
  }
})();
