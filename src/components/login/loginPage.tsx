"use client";
import { login } from "@/actions/auth";
import { useActionState, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [state, action, isPending] = useActionState(login, undefined);

  return (
    <div className="container mx-auto px-12 py-16 bg-slate-200">
      <Card className="w-full max-w-sm m-auto">
        <CardHeader>
          <CardTitle>North Springs Lax Admin Login</CardTitle>
        </CardHeader>
        <CardContent className="px-4">
          <form action={action}>
            <div className="flex flex-col gap-6">
              {state?.error && (
                <div className="text-sm text-red-500 font-medium text-center">
                  {state.error}
                </div>
              )}
              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Username"
                  required
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" name="password" type="password" required />
              </div>
            </div>
            <div className="mt-6">
              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? "Logging in..." : "Login"}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2"></CardFooter>
      </Card>
    </div>
  );
}
