export async function onRequestGet(context) {
  try {
    const { results } = await context.env.DB
      .prepare(`
        SELECT
          id,
          title,
          slug,
          summary,
          content,
          category,
          status,
          created_at,
          updated_at
        FROM posts
        WHERE status = 'published'
        ORDER BY created_at DESC
      `)
      .all();

    return Response.json({
      success: true,
      posts: results
    });
  } catch (error) {
    return Response.json({
      success: false,
      error: "读取文章失败"
    }, { status: 500 });
  }
}
