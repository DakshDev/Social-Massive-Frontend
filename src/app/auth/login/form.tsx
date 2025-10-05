"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import _env from "@/config/env";
import axios, { AxiosError } from "axios";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import { useCallback, useMemo, useState } from "react";

export default function LoginAccountForm() {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  // Error State
  const [emailError, setEmailError] = useState<string | null | true>(null);
  const [passwordError, setPasswordError] = useState<string | null | true>(null);

  // Validataion
  const validation = useCallback(() => {
    let result = true;
    // Email
    if (!email) {
      setEmailError(true);
      result = false;
    } else if (!email.includes("@") || !email.includes(".")) {
      setEmailError("email without (@) or (.) isn't valid");
      result = false;
    }
    // Password
    if (!password) {
      setPasswordError(true);
      result = false;
    }
    return result;
  }, [email, password]);

  // Reset on Change
  useMemo(() => email && setEmailError(null), [email]);
  useMemo(() => password && setPasswordError(null), [password]);

  // Form Submission
  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = validation();
    if (!result) return;

    const data = {
      email,
      password,
    };
    axios
      .post(`${_env.backend_api_origin}/api/auth/login`, data, {
        withCredentials: true,
      })
      .then(() => window.location.reload())
      .catch((err) => {
        if (err instanceof AxiosError) {
          return toast.error(err.response?.data.error || "Invalid login credentials");
        }
        toast.error("Unknown Error");
      });
  };
  return (
    <div className='max-w-md w-full p-5 bg-accent/40 rounded-sm'>
      <ToastContainer
        limit={1}
        hideProgressBar={true}
      />
      <h1 className='text-2xl font-semibold text-center mb-5'>Login Account</h1>
      <form
        autoComplete='off'
        onSubmit={formSubmitHandler}
        className='grid gap-2 text-sm'
      >
        <div>
          <Input
            onChange={(e) => setEmail(e.currentTarget.value)}
            type='text'
            name='email'
            placeholder='Email'
            className={`${emailError == true && "placeholder:text-red-400"}`}
          />
          {typeof emailError == "string" && <p className='text-red-400 lowercase'>{emailError}</p>}
        </div>
        <div>
          <Input
            onChange={(e) => setPassword(e.currentTarget.value)}
            type='password'
            name='password'
            placeholder='Password'
            className={`${passwordError == true && "placeholder:text-red-400"}`}
          />
          {typeof passwordError == "string" && <p className='text-red-400 lowercase'>{passwordError}</p>}
        </div>

        <Button type='submit'>Sign in</Button>
      </form>
      <p className='text-center mt-2.5'>
        Don&apos;t Have an account?&nbsp;
        <Link
          href='/auth/create'
          className='text-blue-500 hover:underline'
        >
          Sign up
        </Link>
      </p>
    </div>
  );
}
