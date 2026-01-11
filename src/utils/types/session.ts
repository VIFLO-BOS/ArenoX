export interface RightMenuClientProps {
  // The auth library returns a session-like object; keep this flexible
  // to avoid tight coupling to the adapter's exact shape.
  session: Record<string, unknown> | null;
}


// types/auth.d.ts (or inside auth.ts)
export interface userSession {
  id: string;
  email: string;
  emailVerified: boolean;
  name: string;
  image?: string | null | undefined;
  role?: "student" | "admin" | "instructor";
}