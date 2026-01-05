import { getAuth } from "@/app/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";
import { NextRequest } from "next/server";

// @ auth-handlers : export POST and GET handlers for better-auth authentication routes
// Lazy-load auth to avoid database connection at build time
export async function GET(request: NextRequest) {
  const auth = await getAuth();
  const handler = toNextJsHandler(auth);
  return handler.GET(request);
}

export async function POST(request: NextRequest) {
  const auth = await getAuth();
  const handler = toNextJsHandler(auth);
  return handler.POST(request);
}
