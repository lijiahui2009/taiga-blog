(function () {
  "use strict";

  const dictionaries = {
    "zh-CN": {},
    "zh-TW": {
      "首页": "首頁",
      "个人博客": "個人部落格",
      "大河墙": "大河牆",
      "九宫格工具": "九宮格工具",
      "关于本站": "關於本站",
      "这里是什么地方？": "這裡是什麼地方？",
      "为什么建立这个网站？": "為什麼建立這個網站？",
      "网站目前有哪些内容？": "網站目前有哪些內容？",
      "未来的发展方向": "未來的發展方向",
      "关于这个空间": "關於這個空間",
      "个人博客": "個人部落格",
      "匿名投稿、树洞和日常交流，让不同的想法有地方表达。": "匿名投稿、樹洞和日常交流，讓不同的想法有地方表達。",
      "发布文章、记录想法，保存值得分享的内容。": "發布文章、記錄想法，保存值得分享的內容。",
      "未来计划": "未來計畫",
      "个人资料库": "個人資料庫"
    },
    en: {
      "首页": "Home",
      "个人博客": "Personal Blog",
      "大河墙": "Taiga Wall",
      "九宫格工具": "Nine-grid Tool",
      "关于本站": "About",
      "关于本站 - 荷萌 HEMENG": "About - HEMENG",
      "关于本站": "About This Website",
      "这里是什么地方？": "What Is This Place?",
      "为什么建立这个网站？": "Why Was This Website Created?",
      "网站目前有哪些内容？": "What Does the Website Offer?",
      "未来的发展方向": "Future Plans",
      "关于这个空间": "About This Space",
      "一个个人博客，也是一个不断扩展的互联网空间。": "A personal blog and an expanding space on the internet.",
      "记录想法、整理资料、制作工具，让想法逐渐成为现实。": "Recording ideas, organizing information, and building tools.",
      "这里可以记录个人想法、分享文章、整理资料，": "This is a place to record thoughts, share articles, and organize information,",
      "也可以使用实用工具，或者与其他访客交流。": "use practical tools, and communicate with other visitors.",
      "个人博客": "Personal Blog",
      "大河墙": "Taiga Wall",
      "九宫格工具": "Nine-grid Tool",
      "个人资料库": "Personal Archive",
      "发布文章、记录想法，保存值得分享的内容。": "Publish articles, record ideas, and preserve things worth sharing.",
      "匿名投稿、树洞和日常交流，让不同的想法有地方表达。": "Anonymous submissions and everyday conversations.",
      "提供图片切割与九张图片合成功能。": "Split images or combine nine images into one.",
      "未来计划": "Planned",
      "一个持续建设中的个人互联网空间": "A personal space on the internet, continuously evolving."
    },
    ja: {
      "首页": "ホーム",
      "个人博客": "個人ブログ",
      "大河墙": "大河ウォール",
      "九宫格工具": "9分割ツール",
      "关于本站": "サイトについて",
      "关于本站 - 荷萌 HEMENG": "サイトについて - HEMENG",
      "这里是什么地方？": "ここはどんな場所？",
      "为什么建立这个网站？": "なぜこのサイトを作ったのか？",
      "网站目前有哪些内容？": "現在のコンテンツ",
      "未来的发展方向": "今後の展望",
      "关于这个空间": "この場所について",
      "一个个人博客，也是一个不断扩展的互联网空间。": "個人ブログであり、成長し続けるインターネット空間です。",
      "记录想法、整理资料、制作工具，让想法逐渐成为现实。": "考えを記録し、情報を整理し、ツールを作ります。",
      "个人资料库": "個人資料ライブラリ",
      "未来计划": "今後の予定",
      "发布文章、记录想法，保存值得分享的内容。": "記事を公開し、考えを記録し、共有したい内容を保存します。",
      "提供图片切割与九张图片合成功能。": "画像の分割と9枚の画像の結合機能を提供します。",
      "一个持续建设中的个人互联网空间": "成長を続ける個人のインターネット空間"
    },
    ko: {
      "首页": "홈",
      "个人博客": "개인 블로그",
      "大河墙": "타이가 월",
      "九宫格工具": "9분할 도구",
      "关于本站": "사이트 소개",
      "关于本站 - 荷萌 HEMENG": "사이트 소개 - HEMENG",
      "这里是什么地方？": "이곳은 어떤 곳인가요?",
      "为什么建立这个网站？": "왜 이 웹사이트를 만들었나요?",
      "网站目前有哪些内容？": "현재 어떤 콘텐츠가 있나요?",
      "未来的发展方向": "앞으로의 방향",
      "关于这个空间": "이 공간에 대하여",
      "一个个人博客，也是一个不断扩展的互联网空间。": "개인 블로그이자 계속 확장되는 인터넷 공간입니다.",
      "记录想法、整理资料、制作工具，让想法逐渐成为现实。": "생각을 기록하고 자료를 정리하며 도구를 만듭니다.",
      "个人资料库": "개인 자료실",
      "未来计划": "향후 계획",
      "发布文章、记录想法，保存值得分享的内容。": "글을 게시하고 생각을 기록하며 공유할 내용을 보관합니다.",
      "提供图片切割与九张图片合成功能。": "이미지 분할 및 9장 이미지 합치기 기능을 제공합니다.",
      "一个持续建设中的个人互联网空间": "계속 발전하는 개인 인터넷 공간"
    }
  };

  const originalTexts = new WeakMap();

  function getLanguage() {
    return window.HemengI18n
      ? window.HemengI18n.getLanguage()
      : "zh-CN";
  }

  function translateText(node, language) {
    if (!originalTexts.has(node)) {
      originalTexts.set(node, node.nodeValue);
    }

    const original = originalTexts.get(node);
    const key = original.trim();

    if (!key) return;

    const dictionary = dictionaries[language] || {};
    const translated = dictionary[key];

    if (translated) {
      const leading = original.match(/^\s*/)[0];
      const trailing = original.match(/\s*$/)[0];
      node.nodeValue = leading + translated + trailing;
    } else {
      node.nodeValue = original;
    }
  }

  function translatePage(language) {
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT
    );

    let node;

    while ((node = walker.nextNode())) {
      translateText(node, language);
    }

    document.documentElement.lang = language;

    const selector = document.getElementById("hemeng-about-language");

    if (selector) selector.value = language;
  }

  function createSelector() {
    const header = document.querySelector(".header-inner");

    if (!header || document.getElementById("hemeng-about-language")) {
      return;
    }

    const selector = document.createElement("select");
    selector.id = "hemeng-about-language";
    selector.setAttribute("aria-label", "选择语言");

    selector.style.cssText =
      "padding:9px 10px;border:1px solid #F0E3DE;" +
      "border-radius:9px;background:#FFF7F3;color:#956258;" +
      "font-size:12px;cursor:pointer;max-width:125px;";

    [
      ["zh-CN", "简体中文"],
      ["zh-TW", "繁體中文"],
      ["en", "English"],
      ["ja", "日本語"],
      ["ko", "한국어"]
    ].forEach(function (item) {
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

    header.appendChild(selector);
  }

  function initialize() {
    if (!window.HemengI18n) {
      console.error("荷萌语言核心未加载。");
      return;
    }

    createSelector();
    translatePage(getLanguage());

    window.addEventListener("hemeng-language-change", function (event) {
      translatePage(event.detail.language);
    });

    const observer = new MutationObserver(function (mutations) {
      const language = getLanguage();

      mutations.forEach(function (mutation) {
        mutation.addedNodes.forEach(function (added) {
          if (added.nodeType === Node.TEXT_NODE) {
            translateText(added, language);
          } else if (added.nodeType === Node.ELEMENT_NODE) {
            const walker = document.createTreeWalker(
              added,
              NodeFilter.SHOW_TEXT
            );

            let textNode;

            while ((textNode = walker.nextNode())) {
              translateText(textNode, language);
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
