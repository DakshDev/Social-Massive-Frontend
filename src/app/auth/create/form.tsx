"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import _env from "@/config/env";
import axios from "axios";
import Link from "next/link";

// ==========================================
const currentDate = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const years: number[] = [];
const initialYear = 1970;
const currentYear = currentDate.getFullYear();
for (let index = initialYear; index <= currentYear; index++) {
  years[index] = index;
}
const dates: number[] = [];
const initialDate = 1;
const finalDate = 31;
for (let index = initialDate; index <= finalDate; index++) {
  dates[index] = index;
}
// ==========================================

export default function CreateAccountForm() {
  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const from = e.currentTarget;
    const formData = new FormData(from);
    // Get Data
    const year = formData.get("year");
    const month = formData.get("month");
    const date = formData.get("date");
    const username = formData.get("username");
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const birth = new Date(`${year}-${month}-${date}`);

    // Validate Data
    if (!year || !month || !date) return;
    if (!username) return;
    if (!name) return;
    if (!email) return;
    if (!password) return;

    axios
      .post(`http://localhost:8080/api/auth/create`, {
        username,
        name,
        email,
        birth,
        password,
      })
      .then((resp) => {
        window.location.reload();
      })
      .catch((error) => {
        console.error(error.response?.data);
      });
  };
  return (
    <div className="max-w-md w-full p-5 bg-accent/40 rounded-sm">
      <h1 className="text-2xl font-semibold text-center mb-5">Create Account</h1>
      <form onSubmit={formSubmitHandler} className="grid gap-2 text-sm">
        <Input type="text" id="full-name" name="name" placeholder="Full Name" />
        <Input type="text" name="username" placeholder="Username" />
        <Input type="email" name="email" placeholder="Email" />
        <div className="grid grid-cols-3 gap-2 items-center">
          <SelectOptionUI name="year" placeholder="Year" options={years} />
          <SelectOptionUI name="month" placeholder="Month" options={months} />
          <SelectOptionUI name="date" placeholder="Date" options={dates} />
        </div>
        <Input type="password" name="password" placeholder="Password" />
        <Button type="submit">Sign up</Button>
      </form>
      <p className="text-center mt-2.5">
        Already Have an account?&nbsp;
        <Link href="/auth/login" className="text-blue-500 hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}

export function SelectOptionUI({ placeholder, options, name }: { placeholder: string; options: string[] | number[]; name: string }) {
  return (
    <Select name={name}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.length != 0 &&
            options.map((each) => (
              <SelectItem key={each} value={each.toString()} className="capitalize">
                {each}
              </SelectItem>
            ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
