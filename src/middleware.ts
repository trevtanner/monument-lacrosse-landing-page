// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET || "secret");

export async function middleware(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  const isApiRoute = request.nextUrl.pathname.startsWith("/api");
  const isLoginRoute = request.nextUrl.pathname === "/login";

  // If no session exists, redirect to login
  if (!session) {
    if (isLoginRoute) {
      return NextResponse.next();
    }
    if (isApiRoute) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    // Verify the token
    await jwtVerify(session, SECRET_KEY);
    if (isLoginRoute) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
    return NextResponse.next();
  } catch (err) {
    // If verification fails, redirect to login
    console.log(err);
    if (isLoginRoute) {
      return NextResponse.next();
    }
    if (isApiRoute) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// Configure which routes to protect
export const config = {
  matcher: ["/admin/:path*", "/api/:path*", "/login"], // Protects all routes under /admin and all API routes
};
