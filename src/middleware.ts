import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  // Get password from environment variable
  const STAGING_PASSWORD = import.meta.env.STAGING_PASSWORD;
  const { request, url } = context;

  // Only protect staging domain (and only if password is set)
  if (url.hostname === "stg.kiltech.co" && STAGING_PASSWORD) {
    const authHeader = request.headers.get("authorization");

    if (!authHeader) {
      return new Response("Authentication required", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Staging Area"',
        },
      });
    }

    // Decode base64 auth header
    const base64Credentials = authHeader.split(" ")[1];
    const credentials = atob(base64Credentials);
    const [username, password] = credentials.split(":");

    // Check password (username can be anything)
    if (password !== STAGING_PASSWORD) {
      return new Response("Invalid credentials", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Staging Area"',
        },
      });
    }
  }

  // Allow request to proceed
  return next();
});
