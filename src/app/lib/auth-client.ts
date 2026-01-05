"use client";

import { createAuthClient } from "better-auth/react";
import type { auth } from "./auth";
import { inferAdditionalFields } from "better-auth/client/plugins";

// @ auth-client-config : create and configure authentication client with base URL and plugins
export const authClient = createAuthClient({
  plugins: [inferAdditionalFields<typeof auth>()],
});

// @ exports : export authentication methods for use in client components
export const { signIn, signUp, useSession, signOut } = authClient;
