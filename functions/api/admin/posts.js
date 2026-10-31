
function json(data, status = 200) {
  return Response.json(data, {
    status,
    headers: {
      "Cache-Control": "no-store"
    }
  });
}

function getString(value, maxLength) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function makeSlug() {
  return "post-" + Date.now() + "-" +
    crypto.randomUUID().slice(0, 8);
}

function validStatus(status) {
  return status === "draft" || status === "published";
}

// 获取全部文章，包括草稿
export async function onRequestGet({ env }) {
  try {
    const { results } = await env.DB
      .prepare(`
        SELECT id, title, slug, summary, content,
               category, status, created_at, updated_at
        FROM posts
        ORDER BY updated_at DESC
      `)
      .all();

    return json({
      success: true,
      posts: results
    });
  } catch {
    return json({
      success: false,
      message: "读取文章失败"
    }, 500);
  }
}

// 新建文章
export async function onRequestPost({ request, env }) {
  try {
    const body = await request.json();

    const title = getString(body.title, 200);
    const summary = getString(body.summary, 1000);
    const content = getString(body.content, 100000);
    const category = getString(body.category, 50) || "未分类";
    const status = body.status || "draft";
    const slug = getString(body.slug, 150) || makeSlug();

    if (!title) {
      return json({
        success: false,
        message: "文章标题不能为空"
      }, 400);
    }

    if (!validStatus(status)) {
      return json({
        success: false,
        message: "文章状态无效"
      }, 400);
    }

    const result = await env.DB
      .prepare(`
        INSERT INTO posts
          (title, slug, summary, content, category, status)
        VALUES (?, ?, ?, ?, ?, ?)
      `)
      .bind(title, slug, summary, content, category, status)
      .run();

    return json({
      success: true,
      message: "文章创建成功",
      id: result.meta.last_row_id
    });
  } catch {
    return json({
      success: false,
      message: "创建失败，请检查文章内容或网址标识是否重复"
    }, 500);
  }
}

// 修改文章
export async function onRequestPut({ request, env }) {
  try {
    const body = await request.json();

    const id = Number(body.id);
    const title = getString(body.title, 200);
    const summary = getString(body.summary, 1000);
    const content = getString(body.content, 100000);
    const category = getString(body.category, 50) || "未分类";
    const status = body.status;
    const slug = getString(body.slug, 150);

    if (!Number.isInteger(id) || id <= 0 || !title || !slug) {
      return json({
        success: false,
        message: "文章信息不完整"
      }, 400);
    }

    if (!validStatus(status)) {
      return json({
        success: false,
        message: "文章状态无效"
      }, 400);
    }

    const result = await env.DB
      .prepare(`
        UPDATE posts
        SET title = ?,
            slug = ?,
            summary = ?,
            content = ?,
            category = ?,
            status = ?,
            updated_at = CURRENT_TIMESTAMP
        WHERE id = ?
      `)
      .bind(title, slug, summary, content, category, status, id)
      .run();

    if (!result.meta.changes) {
      return json({
        success: false,
        message: "文章不存在"
      }, 404);
    }

    return json({
      success: true,
      message: "文章修改成功"
    });
  } catch {
    return json({
      success: false,
      message: "修改失败，请检查网址标识是否重复"
    }, 500);
  }
}

// 删除文章
export async function onRequestDelete({ request, env }) {
  try {
    const body = await request.json();
    const id = Number(body.id);

    if (!Number.isInteger(id) || id <= 0) {
      return json({
        success: false,
        message: "文章编号无效"
      }, 400);
    }

    const result = await env.DB
      .prepare("DELETE FROM posts WHERE id = ?")
      .bind(id)
      .run();

    if (!result.meta.changes) {
      return json({
        success: false,
        message: "文章不存在"
      }, 404);
    }

    return json({
      success: true,
      message: "文章删除成功"
    });
  } catch {
    return json({
      success: false,
      message: "删除失败"
    }, 500);
  }
}
