// src/actions/auth.ts
"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SignJWT } from "jose";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";

const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET || "secret");

export async function login(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  // 1. Check if user exists
  const user = await prisma.user.findUnique({
    where: { username },
  });

  if (!user) {
    // In a real app, return an error state to display on the form
    console.error("User not found");
    return;
  }

  // 2. Verify password
  const isPasswordValid = await bcrypt.compare(password, user.password_hash);

  if (!isPasswordValid) {
    console.error("Invalid password");
    return;
  }

  // 3. Create Session JWT
  const token = await new SignJWT({ userId: user.id, username: user.username })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("24h")
    .sign(SECRET_KEY);

  // 4. Set Cookie
  (
    await // 4. Set Cookie
    cookies()
  ).set("session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24, // 1 day
    path: "/",
  });

  // 5. Redirect to protected route
  redirect("/admin");
}
