
const PUBLIC_KEYS = [
  "site_name",
  "site_subtitle",
  "home_notice",
  "about_intro",
  "wall_notice",
  "maintenance_mode",
  "maintenance_message"
];

export async function onRequest(context) {
  const { request, env } = context;

  const headers = {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  };

  if (request.method !== "GET") {
    return new Response(
      JSON.stringify({
        success: false,
        message: "只允许读取设置"
      }),
      { status: 405, headers }
    );
  }

  try {
    const result = await env.DB
      .prepare("SELECT key, value FROM site_settings")
      .all();

    const settings = {};

    for (const item of result.results || []) {
      if (PUBLIC_KEYS.includes(item.key)) {
        settings[item.key] = item.value;
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        settings
      }),
      { status: 200, headers }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "读取网站设置失败"
      }),
      { status: 500, headers }
    );
  }
}
