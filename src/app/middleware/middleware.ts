import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { getAuth } from "@/app/lib/auth";
import { userSession } from "@/utils/types/session";

// @ middleware-function : protect dashboard routes with authentication and role-based access control
export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // @ skip middleware for system paths and images
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }
  // @ session-check : verify user is authenticated
  const auth = await getAuth();
  const session = await auth.api.getSession({
    headers: req.headers,
  });
  if (!session) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  // @ role-validation : ensure user has a valid role assigned
  const user = session.user as userSession;
  const role = user.role;
  if (!role) return NextResponse.redirect(new URL("/signin", req.url));

  // @ role-based-routing : redirect users to their appropriate dashboard based on role
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

// @ middleware-config : apply middleware only to dashboard routes
export const config = {
  matcher: ["/dashboard/:path*"],
};
