
function json(data, status = 200) {
  return Response.json(data, {
    status,
    headers: {
      "Cache-Control": "no-store"
    }
  });
}

// 获取全部投稿，包括待审核、已通过和已拒绝
export async function onRequestGet({ env }) {
  try {
    const { results } = await env.DB.prepare(`
      SELECT
        id,
        category,
        nickname,
        is_anonymous,
        content,
        status,
        review_note,
        created_at,
        updated_at
      FROM wall_posts
      ORDER BY
        CASE status
          WHEN 'pending' THEN 0
          WHEN 'approved' THEN 1
          ELSE 2
        END,
        created_at DESC
      LIMIT 500
    `).all();

    return json({
      success: true,
      posts: results
    });
  } catch {
    return json({
      success: false,
      message: "读取投稿失败"
    }, 500);
  }
}

// 审核投稿
export async function onRequestPut({ request, env }) {
  try {
    const body = await request.json();

    const id = Number(body.id);
    const status = body.status;

    const reviewNote = typeof body.review_note === "string"
      ? body.review_note.trim().slice(0, 500)
      : "";

    if (!Number.isInteger(id) || id <= 0) {
      return json({
        success: false,
        message: "投稿编号无效"
      }, 400);
    }

    if (!["approved", "rejected", "pending"].includes(status)) {
      return json({
        success: false,
        message: "审核状态无效"
      }, 400);
    }

    const result = await env.DB.prepare(`
      UPDATE wall_posts
      SET
        status = ?,
        review_note = ?,
        updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `).bind(status, reviewNote, id).run();

    if (!result.meta.changes) {
      return json({
        success: false,
        message: "投稿不存在"
      }, 404);
    }

    return json({
      success: true,
      message: "审核状态已更新"
    });
  } catch {
    return json({
      success: false,
      message: "审核操作失败"
    }, 500);
  }
}

// 删除投稿
export async function onRequestDelete({ request, env }) {
  try {
    const body = await request.json();
    const id = Number(body.id);

    if (!Number.isInteger(id) || id <= 0) {
      return json({
        success: false,
        message: "投稿编号无效"
      }, 400);
    }

    const result = await env.DB.prepare(`
      DELETE FROM wall_posts WHERE id = ?
    `).bind(id).run();

    if (!result.meta.changes) {
      return json({
        success: false,
        message: "投稿不存在"
      }, 404);
    }

    return json({
      success: true,
      message: "投稿已删除"
    });
  } catch {
    return json({
      success: false,
      message: "删除投稿失败"
    }, 500);
  }
}
