import { authClient } from "./auth-client";

const baseUrl = process.env.NEXT_PUBLIC_BETTER_AUTH_URL;

// @ email-signup : handle user registration with email and password
export const signUp = async (email: string, password: string, name: string) => {
  const { data, error } = await authClient.signUp.email({
    email,
    password,
    name,
    callbackURL: `${baseUrl}/`,
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
    callbackURL: `${baseUrl}/`,
    newUserCallbackURL: `${baseUrl}/welcome`,
    errorCallbackURL: `${baseUrl}/error`,
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
    callbackURL: `${baseUrl}/`,
  });

  if (error) {
    return { data: null, error };
  }

  return { data, error: null };
};
  