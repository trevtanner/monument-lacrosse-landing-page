// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET || "secret");

export async function middleware(request: NextRequest) {
  const session = request.cookies.get("session")?.value;

  // If no session exists, redirect to login
  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    // Verify the token
    await jwtVerify(session, SECRET_KEY);
    return NextResponse.next();
  } catch (err) {
    // If verification fails, redirect to login
    console.log(err);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// Configure which routes to protect
export const config = {
  matcher: ["/admin/:path*"], // Protects all routes under /admin
};
