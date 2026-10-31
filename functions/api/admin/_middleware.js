async function verifyToken(token, secret) {
  try {
    const parts = token.split(".");

    if (parts.length !== 3) return false;

    const [expires, nonce, signature] = parts;
    const expiry = Number(expires);

    if (!Number.isFinite(expiry) || expiry <= Date.now()) {
      return false;
    }

    if (!nonce || !signature) return false;

    const payload = `${expires}.${nonce}`;

    const key = await crypto.subtle.importKey(
      "raw",
      new TextEncoder().encode(secret),
      {
        name: "HMAC",
        hash: "SHA-256"
      },
      false,
      ["verify"]
    );

    const base64 = signature
      .replace(/-/g, "+")
      .replace(/_/g, "/");

    const binary = atob(
      base64 + "=".repeat((4 - base64.length % 4) % 4)
    );

    const signatureBytes = Uint8Array.from(
      binary,
      char => char.charCodeAt(0)
    );

    return await crypto.subtle.verify(
      "HMAC",
      key,
      signatureBytes,
      new TextEncoder().encode(payload)
    );
  } catch {
    return false;
  }
}

export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  // 登录接口不需要已有登录凭证
  if (
    url.pathname === "/api/admin/login" &&
    request.method === "POST"
  ) {
    return context.next();
  }

  if (!env.SESSION_SECRET) {
    return Response.json(
      { success: false, message: "服务器配置不完整" },
      { status: 500 }
    );
  }

  const cookie = request.headers.get("Cookie") || "";

  const sessionCookie = cookie
    .split(";")
    .map(item => item.trim())
    .find(item => item.startsWith("__Host-admin_session="));

  const token = sessionCookie
    ? sessionCookie.slice("__Host-admin_session=".length)
    : "";

  const valid = await verifyToken(
    token,
    env.SESSION_SECRET
  );

  if (!valid) {
    return Response.json(
      { success: false, message: "请先登录管理员账号" },
      { status: 401 }
    );
  }

  return context.next();
}
