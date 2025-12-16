import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/app/lib/auth";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const session = await auth.api.getSession({
    headers: req.headers,
  });
  if (!session) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  const role = session.user.role;
  if (!role) return NextResponse.redirect(new URL("/signin", req.url));

  if (role === "admin" && pathname !== "/dashboard/admin") {
    return NextResponse.redirect(new URL("/dashboard/admin", req.url));
  }

  if (role === "instructor" && pathname !== "/dashboard/instructor") {
    return NextResponse.redirect(new URL("/dashboard/instructor", req.url));
  }

  if (role === "student" && pathname !== "/dashboard/student") {
    return NextResponse.redirect(new URL("/dashboard/student", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
