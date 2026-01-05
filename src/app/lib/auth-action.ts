import { authClient } from "./auth-client";

// @ email-signup : handle user registration with email and password
export const signUp = async (email: string, password: string, name: string) => {
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

// @ social-auth : handle authentication with Google or GitHub
export const signInWithSocial = async (provider: "google" | "github") => {
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

// @ email-signin : handle user login with email and password
export const signIn = async (email: string, password: string) => {
  const { data, error } = await authClient.signIn.email({
    email,
    password,
    rememberMe: true,
    callbackURL: "/",
  });

  if (error) {
    return { data: null, error };
  }

  return { data, error: null };
};
