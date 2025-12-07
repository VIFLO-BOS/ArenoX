"use server";
import { headers } from "next/headers";
import { auth } from "./auth";


/**
 * Get the current user session.
 * Returns null if no active session exists.
 */
export async function getSession() {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    return session;
  } catch (error) {
    console.error("Failed to get session:", error);
    return null;
  }
}

/**
 * Require an active session. Use this in protected routes.
 * Redirects to /signin if no session found.
 */
export async function requireSession() {
  const session = await getSession();
  if (!session) {
    const { redirect } = await import("next/navigation");
    redirect("/signin");
  }
  return session;
}




