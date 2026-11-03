
function json(data, status = 200) {
  return Response.json(data, {
    status,
    headers: {
      "Cache-Control": "no-store"
    }
  });
}

const MAX_CONTENT_LENGTH = 3000;
const SHARE_DAYS = 30;
const ID_PATTERN = /^[a-f0-9]{32}$/;

// 创建分享
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

    // 简单反垃圾字段
    if (body.website) {
      return json({
        success: true,
        message: "分享创建成功"
      });
    }

    const content = typeof body.content === "string"
      ? body.content.trim()
      : "";

    if (!content || content.length > MAX_CONTENT_LENGTH) {
      return json({
        success: false,
        message: "内容需要在 1 至 3000 个字符之间"
      }, 400);
    }

    // 生成不可预测的随机 ID
    const bytes = new Uint8Array(16);
    crypto.getRandomValues(bytes);

    const id = Array.from(bytes)
      .map(byte => byte.toString(16).padStart(2, "0"))
      .join("");

    const now = Math.floor(Date.now() / 1000);
    const expiresAt = now + SHARE_DAYS * 24 * 60 * 60;

    await env.DB.prepare(`
      INSERT INTO qr_shares (
        id,
        content,
        created_at,
        expires_at
      )
      VALUES (?, ?, ?, ?)
    `).bind(
      id,
      content,
      now,
      expiresAt
    ).run();

    const shareUrl = new URL(
      `/share/?id=${id}`,
      request.url
    ).toString();

    return json({
      success: true,
      id,
      shareUrl,
      expiresAt,
      message: "分享创建成功"
    });

  } catch {
    return json({
      success: false,
      message: "创建分享失败，请稍后再试"
    }, 500);
  }
}

// 读取分享
export async function onRequestGet({ request, env }) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id") || "";

    if (!ID_PATTERN.test(id)) {
      return json({
        success: false,
        message: "分享链接无效"
      }, 400);
    }

    const now = Math.floor(Date.now() / 1000);

    const result = await env.DB.prepare(`
      SELECT content, created_at, expires_at
      FROM qr_shares
      WHERE id = ?
        AND expires_at > ?
      LIMIT 1
    `).bind(id, now).first();

    if (!result) {
      return json({
        success: false,
        message: "分享不存在或已经过期"
      }, 404);
    }

    return json({
      success: true,
      content: result.content,
      createdAt: result.created_at,
      expiresAt: result.expires_at
    });

  } catch {
    return json({
      success: false,
      message: "读取分享失败，请稍后再试"
    }, 500);
  }
}
