"use server";
import { auth } from "@/app/lib/auth";
import { headers } from "next/headers";

export const signUp = async (email: string, password: string, name: string) => {
  const result = await auth.api.signUpEmail({
    body: {
      email,
      password,
      name,
      callbackURL: "/signin",
    },
  });
  return {
    success: true,
    token: result.token,
    user: result.user,
    error: "error" in result ? (result.error instanceof Error ? result.error : undefined) : undefined,
  };
};

export const signIn = async (email: string, password: string) => {
  console.log("Signin request", email, password);
  const result = await auth.api.signInEmail({
    body: {
      email,
      password,
      callbackURL: "/",
    },
  });
  return {
    success: true,
    token: result.token,
    user: result.user,
    error: "error" in result ? (result.error instanceof Error ? result.error : undefined) : undefined,
  };
};

export const signOut = async () => {
  const result = await auth.api.signOut({ headers: await headers() });
  return result;
};
