"use client";

import { createAuthClient } from "better-auth/react";
import { auth } from "./auth";

export const authClient = createAuthClient({
  baseURL:
    typeof window === "undefined"
      ? "http://localhost:3000"
      : window.location.origin,
});

export const { signIn, signUp, useSession, signOut } = authClient;
