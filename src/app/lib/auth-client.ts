"use client";

import { createAuthClient } from "better-auth/react";

export const getAuthClient = () => {
  if (typeof window === "undefined") {
    throw new Error("getAuthClient() can only be used on the client");
  }

  return createAuthClient({
    baseURL: window.location.origin,
  });
};
