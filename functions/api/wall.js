const CATEGORIES = [
  "表白墙",
  "树洞",
  "日常分享",
  "建议反馈",
  "二次元交流",
  "提问求助",
  "资源推荐",
  "自由投稿"
];

const LANGUAGES = [
  "zh-CN",
  "zh-TW",
  "en",
  "ja",
  "ko"
];

function json(data, status = 200) {
  return Response.json(data, {
    status,
    headers: {
      "Cache-Control": "no-store"
    }
  });
}

// 公开读取：只允许查看审核通过的投稿
export async function onRequestGet({ env }) {
  try {
    const { results } = await env.DB.prepare(`
      SELECT
        id,
        category,
        nickname,
        is_anonymous,
        content,
        created_at,
        language,
        language_source
      FROM wall_posts
      WHERE status = 'approved'
      ORDER BY created_at DESC
      LIMIT 100
    `).all();

    return json({
      success: true,
      posts: results
    });
  } catch {
    return json({
      success: false,
      message: "读取大河墙内容失败"
    }, 500);
  }
}

// 访客投稿：所有内容默认进入待审核
export async function onRequestPost({ request, env }) {
  try {
    const origin = request.headers.get("Origin");

    if (!origin || origin !== new URL(request.url).origin) {
      return json({
        success: false,
        message: "请求来源不正确"
      }, 403);
    }

    const body = await request.json();

    // 隐藏的反垃圾字段
    if (body.website) {
      return json({
        success: true,
        message: "投稿已提交，等待审核"
      });
    }

    const category = typeof body.category === "string"
      ? body.category.trim()
      : "";

    const content = typeof body.content === "string"
      ? body.content.trim()
      : "";

    const isAnonymous = body.is_anonymous === true;

    const nickname = isAnonymous
      ? ""
      : (typeof body.nickname === "string"
          ? body.nickname.trim()
          : "");

    // 语言标记：只接受网站支持的语言
    const requestedLanguage = typeof body.language === "string"
      ? body.language.trim()
      : "";

    const language = LANGUAGES.includes(requestedLanguage)
      ? requestedLanguage
      : "unknown";

    const languageSource = language === "unknown"
      ? "unknown"
      : "user";

    if (!CATEGORIES.includes(category)) {
      return json({
        success: false,
        message: "投稿板块无效"
      }, 400);
    }

    if (!content || content.length < 2 || content.length > 3000) {
      return json({
        success: false,
        message: "正文需要在 2 至 3000 字符之间"
      }, 400);
    }

    if (!isAnonymous && (!nickname || nickname.length > 30)) {
      return json({
        success: false,
        message: "昵称不能为空，且不能超过 30 个字符"
      }, 400);
    }

    await env.DB.prepare(`
      INSERT INTO wall_posts (
        category,
        nickname,
        is_anonymous,
        content,
        status,
        language,
        language_source
      )
      VALUES (?, ?, ?, ?, 'pending', ?, ?)
    `).bind(
      category,
      nickname,
      isAnonymous ? 1 : 0,
      content,
      language,
      languageSource
    ).run();

    return json({
      success: true,
      message: "投稿成功，请等待管理员审核"
    });

  } catch {
    return json({
      success: false,
      message: "投稿失败，请稍后再试"
    }, 500);
  }
}
