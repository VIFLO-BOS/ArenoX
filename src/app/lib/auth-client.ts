"use client";

import { createAuthClient } from "better-auth/react";
import type { getAuth } from "./auth";
import { inferAdditionalFields } from "better-auth/client/plugins";

// @ auth-client-config : create and configure authentication client with base URL and plugins
export const authClient = createAuthClient({
  baseURL: "/api" ,
  plugins: [inferAdditionalFields<typeof getAuth>()],
});

// @ exports : export authentication methods for use in client components
export const { signIn, signUp, useSession, signOut } = authClient;
