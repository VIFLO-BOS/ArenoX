"use client";

import { createAuthClient } from "better-auth/react";
import type { getAuth } from "./auth";
import { inferAdditionalFields } from "better-auth/client/plugins";

// @ auth-client-config : create and configure authentication client with base URL and plugins
const authBaseUrl = process.env.NEXT_PUBLIC_BETTER_AUTH_URL;

if (
  process.env.NODE_ENV === "production" &&
  (!authBaseUrl || authBaseUrl.includes("localhost"))
) {
  console.warn(
    "CRITICAL: NEXT_PUBLIC_BETTER_AUTH_URL is missing or set to localhost in production."
  );
}

export const authClient = createAuthClient({
  baseURL: authBaseUrl,
  plugins: [inferAdditionalFields<typeof getAuth>()],
});

// @ exports : export authentication methods for use in client components
export const { signIn, signUp, useSession, signOut } = authClient;
