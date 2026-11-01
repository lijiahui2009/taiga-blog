const ALLOWED_KEYS = [
  "site_name",
  "site_subtitle",
  "home_notice",
  "maintenance_mode",
  "maintenance_message",
  "about_intro",
  "wall_notice"
];

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store"
    }
  });
}

export async function onRequest(context) {
  const { request, env } = context;

  if (!env.DB) {
    return json({ success: false, message: "数据库未连接" }, 500);
  }

  if (request.method === "GET") {
    try {
      const result = await env.DB
        .prepare("SELECT key, value FROM site_settings")
        .all();

      const settings = {};

      for (const item of result.results || []) {
        settings[item.key] = item.value;
      }

      return json({ success: true, settings });
    } catch (error) {
      return json({ success: false, message: "读取设置失败" }, 500);
    }
  }

  if (request.method === "PUT") {
    try {
      const body = await request.json();

      if (!body || typeof body !== "object" || Array.isArray(body)) {
        return json({ success: false, message: "提交的数据格式错误" }, 400);
      }

      const entries = Object.entries(body);

      if (entries.length === 0) {
        return json({ success: false, message: "没有需要保存的设置" }, 400);
      }

      if (entries.length > ALLOWED_KEYS.length) {
        return json({ success: false, message: "设置项目过多" }, 400);
      }

      for (const [key, value] of entries) {
        if (!ALLOWED_KEYS.includes(key)) {
          return json({ success: false, message: "包含不允许修改的设置项" }, 400);
        }

        if (typeof value !== "string" || value.length > 5000) {
          return json({ success: false, message: "设置内容格式错误或过长" }, 400);
        }
      }

      const statements = entries.map(([key, value]) =>
        env.DB.prepare(`
          INSERT INTO site_settings (key, value, updated_at)
          VALUES (?, ?, CURRENT_TIMESTAMP)
          ON CONFLICT(key) DO UPDATE SET
            value = excluded.value,
            updated_at = CURRENT_TIMESTAMP
        `).bind(key, value)
      );

      await env.DB.batch(statements);

      return json({ success: true, message: "设置保存成功" });
    } catch (error) {
      return json({ success: false, message: "保存设置失败" }, 500);
    }
  }

  return json({ success: false, message: "不支持的请求方式" }, 405);
}
