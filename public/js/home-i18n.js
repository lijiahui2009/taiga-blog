(function () {
  "use strict";

  const i18n = window.HemengI18n;

  if (!i18n) {
    console.error("荷萌语言核心未加载。");
    return;
  }

  const translations = {
    "zh-CN": {
      "首页": "首页",
      "个人博客": "个人博客",
      "大河墙": "大河墙",
      "九宫格": "九宫格",
      "二维码": "二维码",
      "关于本站": "关于本站",
      "荷萌首页": "荷萌首页",
      "荷萌 HEMENG 品牌徽章": "荷萌 HEMENG 品牌徽章",
      "个人博客 · 数字资料库 · 在线工具 · 兴趣分享": "个人博客 · 数字资料库 · 在线工具 · 兴趣分享",
      "一个属于自己的互联网空间": "一个属于自己的互联网空间",
      "EXPLORE HEMENG": "EXPLORE HEMENG",
      "探索荷萌": "探索荷萌",
      "记录想法，整理资料，发现有趣的工具。": "记录想法，整理资料，发现有趣的工具。",
      "记录个人想法、日常观察、知识整理与文章分享。": "记录个人想法、日常观察、知识整理与文章分享。",
      "进入博客 →": "进入博客 →",
      "一个自由交流的空间，支持日常分享与匿名投稿。": "一个自由交流的空间，支持日常分享与匿名投稿。",
      "进入大河墙 →": "进入大河墙 →",
      "九宫格工具": "九宫格工具",
      "图片九宫格切割、九张图片合成等实用功能。": "图片九宫格切割、九张图片合成等实用功能。",
      "使用工具 →": "使用工具 →",
      "二维码工具": "二维码工具",
      "生成二维码、识别二维码，为日常使用提供便利。": "生成二维码、识别二维码，为日常使用提供便利。",
      "关于荷萌": "关于荷萌",
      "了解品牌的建立初衷、设计理念与未来发展方向。": "了解品牌的建立初衷、设计理念与未来发展方向。",
      "了解更多 →": "了解更多 →",
      "个人资料库": "个人资料库",
      "整理人物资料、图片与背景信息，逐步建设专属资料空间。": "整理人物资料、图片与背景信息，逐步建设专属资料空间。",
      "持续建设中": "持续建设中",
      "LATEST ARTICLES": "LATEST ARTICLES",
      "最近文章": "最近文章",
      "看看最近记录了哪些想法与内容。": "看看最近记录了哪些想法与内容。",
      "正在读取文章……": "正在读取文章……",
      "查看全部文章 →": "查看全部文章 →",
      "ONLINE TOOLS": "ONLINE TOOLS",
      "实用工具": "实用工具",
      "无需安装，打开网页即可使用。": "无需安装，打开网页即可使用。",
      "九宫格图片工具": "九宫格图片工具",
      "图片切割、九张图片合成与下载。": "图片切割、九张图片合成与下载。",
      "二维码生成、识别与网页分享。": "二维码生成、识别与网页分享。",
      "SITE UPDATES": "SITE UPDATES",
      "网站动态": "网站动态",
      "记录荷萌的建设与完善过程。": "记录荷萌的建设与完善过程。",
      "首页体验持续优化": "首页体验持续优化",
      "逐步完善首页布局、内容展示与移动端浏览体验。": "逐步完善首页布局、内容展示与移动端浏览体验。",
      "在线工具逐步完善": "在线工具逐步完善",
      "持续改进九宫格与二维码等网页工具。": "持续改进九宫格与二维码等网页工具。",
      "持续进行": "持续进行",
      "荷萌仍在建设中": "荷萌仍在建设中",
      "博客、资料整理与更多功能将逐步完善。": "博客、资料整理与更多功能将逐步完善。",
      "ABOUT OUR SPACE": "ABOUT OUR SPACE",
      "一个不断生长的互联网空间": "一个不断生长的互联网空间",
      "荷萌是一个持续建设中的个人综合站。\n它既是个人博客，也是一个可以容纳各种工具、\n资料和交流功能的互联网空间。\n\n希望这里能够成为记录想法、探索兴趣和分享知识的地方。": "荷萌是一个持续建设中的个人综合站。\n它既是个人博客，也是一个可以容纳各种工具、\n资料和交流功能的互联网空间。\n\n希望这里能够成为记录想法、探索兴趣和分享知识的地方。",
      "了解荷萌 →": "了解荷萌 →",
      "一个持续建设中的个人互联网空间": "一个持续建设中的个人互联网空间",
      "发布时间未知": "发布时间未知",
      "目前还没有已发布的文章。": "目前还没有已发布的文章。",
      "未分类": "未分类",
      "未命名文章": "未命名文章",
      "暂无文章摘要。": "暂无文章摘要。",
      "最近文章暂时无法加载，请稍后重试。": "最近文章暂时无法加载，请稍后重试。",
      "重新加载": "重新加载",
      "工具": "工具",
      "工具中心": "工具中心",
      "打开工具中心 →": "打开工具中心 →",
      "九宫格、二维码以及后续新增的工具，都将在这里统一整理。": "九宫格、二维码以及后续新增的工具，都将在这里统一整理。",
      "AI 图片实验室": "AI 图片实验室",
      "探索 AI 图片优化、画面修复、局部重绘与创意处理。": "探索 AI 图片优化、画面修复、局部重绘与创意处理。",
      "进入实验室 →": "进入实验室 →",
      "HEMENG 交互式媒体格式": "HEMENG 交互式媒体格式",
      "一种将图片、视频与交互体验整合在一起的独立媒体格式。": "一种将图片、视频与交互体验整合在一起的独立媒体格式。",
      "了解 HEMENG →": "了解 HEMENG →",
      "个人博客 · 在线工具 · 兴趣分享": "个人博客 · 在线工具 · 兴趣分享",
      "Language": "语言"
    },

    "zh-TW": {
      "首页": "首頁",
      "个人博客": "個人部落格",
      "大河墙": "大河牆",
      "九宫格": "九宮格",
      "二维码": "QR Code",
      "关于本站": "關於本站",
      "荷萌首页": "荷萌首頁",
      "荷萌 HEMENG 品牌徽章": "荷萌 HEMENG 品牌徽章",
      "个人博客 · 数字资料库 · 在线工具 · 兴趣分享": "個人部落格 · 數位資料庫 · 線上工具 · 興趣分享",
      "一个属于自己的互联网空间": "一個屬於自己的網路空間",
      "EXPLORE HEMENG": "探索荷萌",
      "探索荷萌": "探索荷萌",
      "记录想法，整理资料，发现有趣的工具。": "記錄想法、整理資料，發現有趣的工具。",
      "记录个人想法、日常观察、知识整理与文章分享。": "記錄個人想法、日常觀察、知識整理與文章分享。",
      "进入博客 →": "進入部落格 →",
      "一个自由交流的空间，支持日常分享与匿名投稿。": "一個自由交流的空間，支援日常分享與匿名投稿。",
      "进入大河墙 →": "進入大河牆 →",
      "九宫格工具": "九宮格工具",
      "图片九宫格切割、九张图片合成等实用功能。": "圖片九宮格切割、九張圖片合成等實用功能。",
      "使用工具 →": "使用工具 →",
      "二维码工具": "QR Code 工具",
      "生成二维码、识别二维码，为日常使用提供便利。": "產生 QR Code、辨識 QR Code，讓日常使用更加便利。",
      "关于荷萌": "關於荷萌",
      "了解品牌的建立初衷、设计理念与未来发展方向。": "了解品牌的創立初衷、設計理念與未來發展方向。",
      "了解更多 →": "了解更多 →",
      "个人资料库": "個人資料庫",
      "整理人物资料、图片与背景信息，逐步建设专属资料空间。": "整理人物資料、圖片與背景資訊，逐步建立專屬資料空間。",
      "持续建设中": "持續建置中",
      "LATEST ARTICLES": "最新文章",
      "最近文章": "最新文章",
      "看看最近记录了哪些想法与内容。": "看看最近記錄了哪些想法與內容。",
      "正在读取文章……": "正在讀取文章……",
      "查看全部文章 →": "查看所有文章 →",
      "ONLINE TOOLS": "線上工具",
      "实用工具": "實用工具",
      "无需安装，打开网页即可使用。": "無需安裝，開啟網頁即可使用。",
      "九宫格图片工具": "九宮格圖片工具",
      "图片切割、九张图片合成与下载。": "圖片切割、九張圖片合成與下載。",
      "二维码生成、识别与网页分享。": "QR Code 產生、辨識與網頁分享。",
      "SITE UPDATES": "網站動態",
      "网站动态": "網站動態",
      "记录荷萌的建设与完善过程。": "記錄荷萌的建置與完善過程。",
      "首页体验持续优化": "首頁體驗持續最佳化",
      "逐步完善首页布局、内容展示与移动端浏览体验。": "逐步完善首頁版面、內容展示與行動裝置瀏覽體驗。",
      "在线工具逐步完善": "線上工具逐步完善",
      "持续改进九宫格与二维码等网页工具。": "持續改進九宮格與 QR Code 等網頁工具。",
      "持续进行": "持續進行",
      "荷萌仍在建设中": "荷萌仍在建置中",
      "博客、资料整理与更多功能将逐步完善。": "部落格、資料整理與更多功能將逐步完善。",
      "ABOUT OUR SPACE": "關於我們的空間",
      "一个不断生长的互联网空间": "一個持續成長的網路空間",
      "了解荷萌 →": "了解荷萌 →",
      "一个持续建设中的个人互联网空间": "一個持續建置中的個人網路空間",
      "发布时间未知": "發布時間未知",
      "目前还没有已发布的文章。": "目前還沒有已發布的文章。",
      "未分类": "未分類",
      "未命名文章": "未命名文章",
      "暂无文章摘要。": "暫無文章摘要。",
      "最近文章暂时无法加载，请稍后重试。": "最新文章暫時無法載入，請稍後再試。",
      "重新加载": "重新載入",
      "工具": "工具",
      "工具中心": "工具中心",
      "打开工具中心 →": "開啟工具中心 →",
      "九宫格、二维码以及后续新增的工具，都将在这里统一整理。": "九宮格、QR Code 以及後續新增的工具，都會在這裡統一整理。",
      "AI 图片实验室": "AI 圖片實驗室",
      "探索 AI 图片优化、画面修复、局部重绘与创意处理。": "探索 AI 圖片最佳化、畫面修復、局部重繪與創意處理。",
      "进入实验室 →": "進入實驗室 →",
      "HEMENG 交互式媒体格式": "HEMENG 互動式媒體格式",
      "一种将图片、视频与交互体验整合在一起的独立媒体格式。": "一種整合圖片、影片與互動體驗的獨立媒體格式。",
      "了解 HEMENG →": "了解 HEMENG →",
      "个人博客 · 在线工具 · 兴趣分享": "個人部落格 · 線上工具 · 興趣分享",
      "Language": "語言"
    },

    "en": {
      "首页": "Home",
      "个人博客": "Personal Blog",
      "大河墙": "Taiga Wall",
      "九宫格": "Nine-grid",
      "二维码": "QR Code",
      "关于本站": "About",
      "荷萌首页": "HEMENG Home",
      "荷萌 HEMENG 品牌徽章": "HEMENG brand emblem",
      "个人博客 · 数字资料库 · 在线工具 · 兴趣分享": "Personal Blog · Digital Library · Online Tools · Interests",
      "一个属于自己的互联网空间": "A personal space on the internet",
      "EXPLORE HEMENG": "EXPLORE HEMENG",
      "探索荷萌": "Explore HEMENG",
      "记录想法，整理资料，发现有趣的工具。": "Record ideas, organize information, and discover useful tools.",
      "记录个人想法、日常观察、知识整理与文章分享。": "A place for personal thoughts, observations, knowledge, and articles.",
      "进入博客 →": "Visit Blog →",
      "一个自由交流的空间，支持日常分享与匿名投稿。": "An open space for sharing thoughts and anonymous submissions.",
      "进入大河墙 →": "Visit Taiga Wall →",
      "九宫格工具": "Nine-grid Tool",
      "图片九宫格切割、九张图片合成等实用功能。": "Split images into a grid or combine nine images into one.",
      "使用工具 →": "Open Tool →",
      "二维码工具": "QR Code Tool",
      "生成二维码、识别二维码，为日常使用提供便利。": "Create and scan QR codes for everyday use.",
      "关于荷萌": "About HEMENG",
      "了解品牌的建立初衷、设计理念与未来发展方向。": "Learn about the idea, design, and future direction behind HEMENG.",
      "了解更多 →": "Learn More →",
      "个人资料库": "Personal Archive",
      "整理人物资料、图片与背景信息，逐步建设专属资料空间。": "Organize profiles, images, and background information in a personal archive.",
      "持续建设中": "In Development",
      "LATEST ARTICLES": "LATEST ARTICLES",
      "最近文章": "Recent Articles",
      "看看最近记录了哪些想法与内容。": "See what has been shared recently.",
      "正在读取文章……": "Loading articles…",
      "查看全部文章 →": "View All Articles →",
      "ONLINE TOOLS": "ONLINE TOOLS",
      "实用工具": "Useful Tools",
      "无需安装，打开网页即可使用。": "No installation required. Use directly in your browser.",
      "九宫格图片工具": "Nine-grid Image Tool",
      "图片切割、九张图片合成与下载。": "Split images, combine nine images, and download the result.",
      "二维码生成、识别与网页分享。": "Generate and scan QR codes, and share web links.",
      "SITE UPDATES": "SITE UPDATES",
      "网站动态": "Site Updates",
      "记录荷萌的建设与完善过程。": "Follow the development of HEMENG.",
      "首页体验持续优化": "Homepage Improvements",
      "逐步完善首页布局、内容展示与移动端浏览体验。": "Improving the homepage layout, content, and mobile browsing experience.",
      "在线工具逐步完善": "Online Tools Improvements",
      "持续改进九宫格与二维码等网页工具。": "Continuously improving the nine-grid and QR code tools.",
      "持续进行": "Ongoing",
      "荷萌仍在建设中": "HEMENG Is Still Growing",
      "博客、资料整理与更多功能将逐步完善。": "The blog, archive, and more features will continue to grow.",
      "ABOUT OUR SPACE": "ABOUT OUR SPACE",
      "一个不断生长的互联网空间": "A Growing Space on the Internet",
      "荷萌是一个持续建设中的个人综合站。\n它既是个人博客，也是一个可以容纳各种工具、\n资料和交流功能的互联网空间。\n\n希望这里能够成为记录想法、探索兴趣和分享知识的地方。": "HEMENG is a personal website that is continuously evolving.\nIt is a blog, as well as a space for tools,\nresources, and communication.\n\nMay it become a place to record ideas, explore interests, and share knowledge.",
      "了解荷萌 →": "About HEMENG →",
      "一个持续建设中的个人互联网空间": "A personal space on the internet, always evolving",
      "发布时间未知": "Date unavailable",
      "目前还没有已发布的文章。": "There are no published articles yet.",
      "未分类": "Uncategorized",
      "未命名文章": "Untitled article",
      "暂无文章摘要。": "No summary available.",
      "最近文章暂时无法加载，请稍后重试。": "Recent articles could not be loaded. Please try again later.",
      "重新加载": "Reload",
      "工具": "Tools",
      "工具中心": "Tool Center",
      "打开工具中心 →": "Open Tool Center →",
      "九宫格、二维码以及后续新增的工具，都将在这里统一整理。": "Nine-grid, QR code, and future tools will all be organized here.",
      "AI 图片实验室": "AI Image Lab",
      "探索 AI 图片优化、画面修复、局部重绘与创意处理。": "Explore AI image enhancement, visual repair, inpainting, and creative editing.",
      "进入实验室 →": "Enter the Lab →",
      "HEMENG 交互式媒体格式": "HEMENG Interactive Media Format",
      "一种将图片、视频与交互体验整合在一起的独立媒体格式。": "An independent media format combining images, video, and interactive experiences.",
      "了解 HEMENG →": "Discover HEMENG →",
      "个人博客 · 在线工具 · 兴趣分享": "Personal Blog · Online Tools · Interests",
      "Language": "Language"
    },

    "ja": {
      "首页": "ホーム",
      "个人博客": "個人ブログ",
      "大河墙": "大河ウォール",
      "九宫格": "9分割ツール",
      "二维码": "QRコード",
      "关于本站": "このサイトについて",
      "荷萌首页": "荷萌ホーム",
      "荷萌 HEMENG 品牌徽章": "荷萌 HEMENG ブランドロゴ",
      "个人博客 · 数字资料库 · 在线工具 · 兴趣分享": "個人ブログ · デジタル資料庫 · オンラインツール · 趣味の共有",
      "一个属于自己的互联网空间": "自分だけのインターネット空間",
      "EXPLORE HEMENG": "EXPLORE HEMENG",
      "探索荷萌": "荷萌を探索する",
      "记录想法，整理资料，发现有趣的工具。": "考えを記録し、情報を整理し、便利なツールを見つけましょう。",
      "记录个人想法、日常观察、知识整理与文章分享。": "日々の考えや観察、知識、記事を記録します。",
      "进入博客 →": "ブログへ →",
      "一个自由交流的空间，支持日常分享与匿名投稿。": "日常の共有や匿名投稿ができる自由な交流スペースです。",
      "进入大河墙 →": "大河ウォールへ →",
      "九宫格工具": "9分割ツール",
      "图片九宫格切割、九张图片合成等实用功能。": "画像の9分割や、9枚の画像を1枚にまとめる機能です。",
      "使用工具 →": "ツールを使う →",
      "二维码工具": "QRコードツール",
      "生成二维码、识别二维码，为日常使用提供便利。": "QRコードの作成と読み取りができます。",
      "关于荷萌": "荷萌について",
      "了解品牌的建立初衷、设计理念与未来发展方向。": "設立の目的、デザイン理念、今後の方向性を紹介します。",
      "了解更多 →": "詳しく見る →",
      "个人资料库": "個人資料庫",
      "整理人物资料、图片与背景信息，逐步建设专属资料空间。": "人物情報、画像、背景情報を整理する個人資料スペースです。",
      "持续建设中": "開発中",
      "LATEST ARTICLES": "LATEST ARTICLES",
      "最近文章": "最新記事",
      "看看最近记录了哪些想法与内容。": "最近公開された内容をご覧ください。",
      "正在读取文章……": "記事を読み込んでいます…",
      "查看全部文章 →": "すべての記事を見る →",
      "ONLINE TOOLS": "ONLINE TOOLS",
      "实用工具": "便利なツール",
      "无需安装，打开网页即可使用。": "インストール不要。ブラウザからすぐに利用できます。",
      "九宫格图片工具": "画像9分割ツール",
      "图片切割、九张图片合成与下载。": "画像の分割、9枚の画像の結合、ダウンロード。",
      "二维码生成、识别与网页分享。": "QRコードの作成・読み取り・リンク共有。",
      "SITE UPDATES": "SITE UPDATES",
      "网站动态": "サイトの更新情報",
      "记录荷萌的建设与完善过程。": "荷萌の開発と改善の記録です。",
      "首页体验持续优化": "ホームページの改善",
      "逐步完善首页布局、内容展示与移动端浏览体验。": "ページ構成、コンテンツ表示、モバイル表示を改善しています。",
      "在线工具逐步完善": "オンラインツールの改善",
      "持续改进九宫格与二维码等网页工具。": "画像9分割やQRコードなどのツールを改善しています。",
      "持续进行": "継続中",
      "荷萌仍在建设中": "荷萌は開発中です",
      "博客、资料整理与更多功能将逐步完善。": "ブログや資料庫などの機能を順次追加していきます。",
      "ABOUT OUR SPACE": "ABOUT OUR SPACE",
      "一个不断生长的互联网空间": "成長し続けるインターネット空間",
      "荷萌是一个持续建设中的个人综合站。\n它既是个人博客，也是一个可以容纳各种工具、\n资料和交流功能的互联网空间。\n\n希望这里能够成为记录想法、探索兴趣和分享知识的地方。": "荷萌は現在も開発を続けている個人総合サイトです。\n個人ブログであり、さまざまなツールや資料、\n交流機能を備えたインターネット空間でもあります。\n\n考えを記録し、興味を探求し、知識を共有する場所を目指しています。",
      "了解荷萌 →": "荷萌について →",
      "一个持续建设中的个人互联网空间": "成長を続ける個人インターネット空間",
      "发布时间未知": "公開日不明",
      "目前还没有已发布的文章。": "公開された記事はまだありません。",
      "未分类": "未分類",
      "未命名文章": "無題の記事",
      "暂无文章摘要。": "概要はありません。",
      "最近文章暂时无法加载，请稍后重试。": "記事を読み込めませんでした。しばらくしてから再試行してください。",
      "重新加载": "再読み込み",
      "工具": "ツール",
      "工具中心": "ツールセンター",
      "打开工具中心 →": "ツールセンターを開く →",
      "九宫格、二维码以及后续新增的工具，都将在这里统一整理。": "9分割ツール、QRコード、今後追加されるツールをここにまとめます。",
      "AI 图片实验室": "AI画像ラボ",
      "探索 AI 图片优化、画面修复、局部重绘与创意处理。": "AIによる画像の高画質化、修復、部分的な描き直し、クリエイティブ編集を体験できます。",
      "进入实验室 →": "ラボに入る →",
      "HEMENG 交互式媒体格式": "HEMENG インタラクティブメディア形式",
      "一种将图片、视频与交互体验整合在一起的独立媒体格式。": "画像、動画、インタラクティブな体験を統合する独立したメディア形式です。",
      "了解 HEMENG →": "HEMENGについて →",
      "个人博客 · 在线工具 · 兴趣分享": "個人ブログ · オンラインツール · 趣味の共有",
      "Language": "言語"
    },

    "ko": {
      "首页": "홈",
      "个人博客": "개인 블로그",
      "大河墙": "타이가 월",
      "九宫格": "9분할 도구",
      "二维码": "QR 코드",
      "关于本站": "사이트 소개",
      "荷萌首页": "荷萌 홈",
      "荷萌 HEMENG 品牌徽章": "荷萌 HEMENG 브랜드 엠블럼",
      "个人博客 · 数字资料库 · 在线工具 · 兴趣分享": "개인 블로그 · 디지털 자료실 · 온라인 도구 · 관심사 공유",
      "一个属于自己的互联网空间": "나만의 인터넷 공간",
      "EXPLORE HEMENG": "EXPLORE HEMENG",
      "探索荷萌": "荷萌 둘러보기",
      "记录想法，整理资料，发现有趣的工具。": "생각을 기록하고 자료를 정리하며 유용한 도구를 찾아보세요.",
      "记录个人想法、日常观察、知识整理与文章分享。": "개인적인 생각과 일상, 지식, 글을 기록합니다.",
      "进入博客 →": "블로그 방문 →",
      "一个自由交流的空间，支持日常分享与匿名投稿。": "일상 공유와 익명投稿을 지원하는 자유로운 소통 공간입니다.",
      "进入大河墙 →": "타이가 월 방문 →",
      "九宫格工具": "9분할 도구",
      "图片九宫格切割、九张图片合成等实用功能。": "이미지 9분할 및 9장의 이미지를 하나로 합치는 기능입니다.",
      "使用工具 →": "도구 사용 →",
      "二维码工具": "QR 코드 도구",
      "生成二维码、识别二维码，为日常使用提供便利。": "QR 코드를 생성하고 인식할 수 있습니다.",
      "关于荷萌": "荷萌 소개",
      "了解品牌的建立初衷、设计理念与未来发展方向。": "브랜드의 시작, 디자인 철학과 앞으로의 방향을 소개합니다.",
      "了解更多 →": "자세히 보기 →",
      "个人资料库": "개인 자료실",
      "整理人物资料、图片与背景信息，逐步建设专属资料空间。": "인물 정보, 이미지, 배경 자료를 정리하는 개인 자료 공간입니다.",
      "持续建设中": "개발 중",
      "LATEST ARTICLES": "LATEST ARTICLES",
      "最近文章": "최근 게시글",
      "看看最近记录了哪些想法与内容。": "최근에 기록한 생각과 콘텐츠를 확인해 보세요.",
      "正在读取文章……": "게시글을 불러오는 중…",
      "查看全部文章 →": "전체 게시글 보기 →",
      "ONLINE TOOLS": "ONLINE TOOLS",
      "实用工具": "유용한 도구",
      "无需安装，打开网页即可使用。": "설치할 필요 없이 브라우저에서 바로 사용할 수 있습니다.",
      "九宫格图片工具": "이미지 9분할 도구",
      "图片切割、九张图片合成与下载。": "이미지 분할, 9장 합치기 및 다운로드.",
      "二维码生成、识别与网页分享。": "QR 코드 생성, 인식 및 링크 공유.",
      "SITE UPDATES": "SITE UPDATES",
      "网站动态": "사이트 업데이트",
      "记录荷萌的建设与完善过程。": "荷萌의 개발과 개선 과정을 기록합니다.",
      "首页体验持续优化": "홈페이지 개선",
      "逐步完善首页布局、内容展示与移动端浏览体验。": "홈페이지 구성, 콘텐츠 표시 및 모바일 환경을 개선하고 있습니다.",
      "在线工具逐步完善": "온라인 도구 개선",
      "持续改进九宫格与二维码等网页工具。": "9분할 및 QR 코드 도구를 지속적으로 개선하고 있습니다.",
      "持续进行": "진행 중",
      "荷萌仍在建设中": "荷萌은 계속 개발 중입니다",
      "博客、资料整理与更多功能将逐步完善。": "블로그, 자료실 및 다양한 기능을 계속 추가할 예정입니다.",
      "ABOUT OUR SPACE": "ABOUT OUR SPACE",
      "一个不断生长的互联网空间": "계속 성장하는 인터넷 공간",
      "荷萌是一个持续建设中的个人综合站。\n它既是个人博客，也是一个可以容纳各种工具、\n资料和交流功能的互联网空间。\n\n希望这里能够成为记录想法、探索兴趣和分享知识的地方。": "荷萌은 계속 개발 중인 개인 종합 사이트입니다.\n개인 블로그이자 다양한 도구와 자료,\n소통 기능을 담을 수 있는 인터넷 공간입니다.\n\n생각을 기록하고 관심사를 탐구하며 지식을 나누는 공간이 되기를 바랍니다.",
      "了解荷萌 →": "荷萌 소개 →",
      "一个持续建设中的个人互联网空间": "계속 발전하는 개인 인터넷 공간",
      "发布时间未知": "게시 날짜 없음",
      "目前还没有已发布的文章。": "아직 게시된 글이 없습니다.",
      "未分类": "미분류",
      "未命名文章": "제목 없는 글",
      "暂无文章摘要。": "요약이 없습니다.",
      "最近文章暂时无法加载，请稍后重试。": "최근 게시글을 불러올 수 없습니다. 잠시 후 다시 시도해 주세요.",
      "重新加载": "새로고침",
      "工具": "도구",
      "工具中心": "도구 센터",
      "打开工具中心 →": "도구 센터 열기 →",
      "九宫格、二维码以及后续新增的工具，都将在这里统一整理。": "9분할 도구, QR 코드 및 앞으로 추가될 도구를 이곳에 모아 정리합니다.",
      "AI 图片实验室": "AI 이미지 실험실",
      "探索 AI 图片优化、画面修复、局部重绘与创意处理。": "AI 이미지 향상, 화면 복원, 부분 수정 및 창의적인 편집 기능을 살펴보세요.",
      "进入实验室 →": "실험실 열기 →",
      "HEMENG 交互式媒体格式": "HEMENG 인터랙티브 미디어 형식",
      "一种将图片、视频与交互体验整合在一起的独立媒体格式。": "이미지, 동영상 및 인터랙티브 경험을 하나로 결합하는 독립 미디어 형식입니다.",
      "了解 HEMENG →": "HEMENG 알아보기 →",
      "个人博客 · 在线工具 · 兴趣分享": "개인 블로그 · 온라인 도구 · 관심사 공유",
      "Language": "언어"
    }
  };

  function normalizeText(value) {
    return String(value).replace(/\s+/g, " ").trim();
  }

  function prepareDictionary(language) {
    const source = translations[language] || translations.en;
    const dictionary = {};

    Object.keys(source).forEach(function (key) {
      dictionary[normalizeText(key)] = source[key];
    });

    return dictionary;
  }

  const originalTexts = new WeakMap();

  function translateTextNode(node, dictionary) {
    if (!node || !node.nodeValue || !node.nodeValue.trim()) {
      return;
    }

    if (!originalTexts.has(node)) {
      originalTexts.set(node, node.nodeValue);
    }

    const original = originalTexts.get(node);
    const key = normalizeText(original);
    const translated = dictionary[key];

    if (translated === undefined) {
      node.nodeValue = original;
      return;
    }

    const leading = original.match(/^\s*/)[0];
    const trailing = original.match(/\s*$/)[0];

    node.nodeValue = leading + translated + trailing;
  }

  function translateSubtree(root, dictionary) {
    if (!root) return;

    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function (node) {
          const parent = node.parentElement;

          if (!parent) {
            return NodeFilter.FILTER_REJECT;
          }

          if (
            parent.closest("script, style, select, option, textarea, input")
          ) {
            return NodeFilter.FILTER_REJECT;
          }

          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    let node;

    while ((node = walker.nextNode())) {
      translateTextNode(node, dictionary);
    }
  }

  function translatePage(language) {
    const dictionary = prepareDictionary(language);

    document.documentElement.lang = language;

    translateSubtree(document.body, dictionary);

    document.querySelectorAll("[aria-label]").forEach(function (element) {
      if (!element.dataset.originalAriaLabel) {
        element.dataset.originalAriaLabel =
          element.getAttribute("aria-label");
      }

      const original = element.dataset.originalAriaLabel;
      const translated = dictionary[normalizeText(original)];

      element.setAttribute(
        "aria-label",
        translated === undefined ? original : translated
      );
    });
  }

  function createLanguageSelector() {
    const header = document.querySelector(".header-inner");

    if (!header || document.getElementById("hemengLanguageSelect")) {
      return;
    }

    const select = document.createElement("select");

    select.id = "hemengLanguageSelect";
    select.setAttribute("aria-label", "Language");

    select.style.cssText = [
      "padding:8px 11px",
      "border:1px solid #f2ded5",
      "border-radius:18px",
      "background:#fff",
      "color:#956258",
      "font-size:12px",
      "cursor:pointer",
      "outline:none",
      "flex-shrink:0"
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

    header.appendChild(select);
  }

  function observeDynamicContent() {
    const observer = new MutationObserver(function (mutations) {
      const dictionary = prepareDictionary(i18n.getLanguage());

      mutations.forEach(function (mutation) {
        mutation.addedNodes.forEach(function (node) {
          if (node.nodeType === Node.TEXT_NODE) {
            translateTextNode(node, dictionary);
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            translateSubtree(node, dictionary);
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  function initialize() {
    createLanguageSelector();

    translatePage(i18n.getLanguage());

    observeDynamicContent();

    window.addEventListener("hemeng-language-change", function (event) {
      const language = event.detail.language;
      const select = document.getElementById("hemengLanguageSelect");

      if (select) {
        select.value = language;
      }

      translatePage(language);
    });
  }

  initialize();
})();
