import { getAuthClient } from "./auth-client";

/**
 * Email Sign Up
 */

export const signUp = async (
  email: string,
  password: string,
  name: string
) => {
  const authClient = getAuthClient();
  const { data, error } = await authClient.signUp.email({
    email,
    password,
    name,
    callbackURL: "/",
  });

  if (error) {
    return { data: null, error };
  }

  return { data, error: null };
};

/**
 * Social Auth (Works for both Sign Up and Sign In)
 */
export const signInWithSocial = async (provider: "google" | "github") => {
  const authClient = getAuthClient();
  const { data, error } = await authClient.signIn.social({
    provider,
    callbackURL: "/",
    newUserCallbackURL: "/welcome",
    errorCallbackURL: "/error",
    disableRedirect: true,
  });

  if (error) {
    return { data: null, error };
  }

  return { data, error: null };
};

/**
 * Email Sign In
 */
export const signIn = async (email: string, password: string) => {
  const authClient = getAuthClient();
  const { data, error } = await authClient.signIn.email({
    email,
    password,
    rememberMe: true,
    callbackURL: "/dashboard",
  });

  if (error) {
    return { data: null, error };
  }

  return { data, error: null };
};
