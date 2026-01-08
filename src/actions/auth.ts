// src/actions/auth.ts
"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SignJWT } from "jose";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";
import { turso } from "@/lib/turso";

const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET || "secret");

export async function login(prevState: any, formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  // 1. Check if user exists
  const user = await prisma.user.findUnique({
    where: { username },
  });

  const resultSet = await turso.execute({
    sql: "SELECT * FROM Users WHERE username = ?",
    args: [username],
  });

  console.log("resultSet", resultSet.rows);

  if (resultSet.rows.length === 0) {
    return { error: "Invalid username or password" };
  }

  const userRows = JSON.parse(JSON.stringify(resultSet.rows[0]));

  // 2. Verify password
  const isPasswordValid = await bcrypt.compare(
    password,
    userRows.password_hash
  );

  if (!isPasswordValid) {
    return { error: "Incorrect password" };
  }

  // 3. Create Session JWT
  const token = await new SignJWT({
    userId: userRows.id,
    username: userRows.username,
  })
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
