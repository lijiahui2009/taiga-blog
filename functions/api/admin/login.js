
async function createSignature(value, secret) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(value)
  );

  return btoa(
    String.fromCharCode(...new Uint8Array(signature))
  )
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

async function hashPassword(value) {
  const result = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(value)
  );

  return new Uint8Array(result);
}

function equalBytes(a, b) {
  if (a.length !== b.length) return false;

  let difference = 0;

  for (let i = 0; i < a.length; i++) {
    difference |= a[i] ^ b[i];
  }

  return difference === 0;
}

export async function onRequestPost(context) {
  const { request, env } = context;

  if (!env.ADMIN_PASSWORD || !env.SESSION_SECRET) {
    return Response.json(
      { success: false, message: "服务器配置不完整" },
      { status: 500 }
    );
  }

  const origin = request.headers.get("Origin");

  if (origin !== new URL(request.url).origin) {
    return Response.json(
      { success: false, message: "请求来源无效" },
      { status: 403 }
    );
  }

  let body;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      { success: false, message: "请求格式错误" },
      { status: 400 }
    );
  }

  const password =
    typeof body.password === "string"
      ? body.password
      : "";

  if (
    password.length === 0 ||
    password.length > 256
  ) {
    return Response.json(
      { success: false, message: "密码错误" },
      { status: 401 }
    );
  }

  const submittedHash = await hashPassword(password);
  const correctHash = await hashPassword(env.ADMIN_PASSWORD);

  if (!equalBytes(submittedHash, correctHash)) {
    return Response.json(
      { success: false, message: "密码错误" },
      { status: 401 }
    );
  }

  const expires = Date.now() + 8 * 60 * 60 * 1000;
  const payload = `${expires}.${crypto.randomUUID()}`;

  const signature = await createSignature(
    payload,
    env.SESSION_SECRET
  );

  const token = `${payload}.${signature}`;

  return Response.json(
    { success: true, message: "登录成功" },
    {
      headers: {
        "Set-Cookie":
          `__Host-admin_session=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=28800`,
        "Cache-Control": "no-store"
      }
    }
  );
}
