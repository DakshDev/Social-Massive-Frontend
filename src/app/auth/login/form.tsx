"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import _env from "@/config/env";
// import axios from "axios";
import Link from "next/link";

export default function LoginAccountForm() {
  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const from = e.currentTarget;
    return new FormData(from);
  };
  return (
    <div className="max-w-md w-full p-5 bg-accent/40 rounded-sm">
      <h1 className="text-2xl font-semibold text-center mb-5">Login Account</h1>
      <form onSubmit={formSubmitHandler} className="grid gap-2 text-sm">
        <Input type="email" name="email" placeholder="Email" />
        <Input type="password" name="password" placeholder="Password" />
        <Button type="submit">Sign in</Button>
      </form>
      <p className="text-center mt-2.5">
        Don&apos;t Have an account?&nbsp;
        <Link href="/auth/create" className="text-blue-500 hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}
