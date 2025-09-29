import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const data = req.cookies.get("token");

  if ((req.nextUrl.pathname.startsWith("/auth/create") && req.nextUrl.pathname.endsWith("/auth/create")) || (req.nextUrl.pathname.startsWith("/auth/login") && req.nextUrl.pathname.endsWith("/auth/login"))) {
    if (data && data.name) return NextResponse.redirect(new URL("/", req.url));
    return NextResponse.next();
  }
  if (!data) return NextResponse.redirect(new URL("/auth/create", req.url));
  return NextResponse.next();
}
