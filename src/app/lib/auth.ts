import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";
import connect from "./db";

let cachedAuth: ReturnType<typeof betterAuth> | null = null;
// @ auth-configuration : configure better-auth with database, user schema, providers, and plugins
export const getAuth = async () => {
  if (cachedAuth) {
    return cachedAuth;
  }

  // @ database-connection : establish connection to MongoDB database
  let mongodb;
  try {
    mongodb = await connect();
  } catch (error) {
    console.error("Failed to connect to MongoDB in getAuth:", error);
    throw error;
  }

  const authUrl = process.env.BETTER_AUTH_URL;
  const authSecret = process.env.BETTER_AUTH_SECRET;

  if (process.env.NODE_ENV === "production") {
    if (!authUrl)
      console.warn("WARNING: BETTER_AUTH_URL is missing in production");
    if (!authSecret)
      console.warn("WARNING: BETTER_AUTH_SECRET is missing in production");
  }

  cachedAuth = betterAuth({
    // @ database-adapter : setup MongoDB adapter for better-auth
    database: mongodbAdapter(mongodb.db),

    // Explicitly set secret and base URL for production stability
    secret: authSecret,
    baseURL: authUrl,

    // @ user-schema : define user model with additional role field for RBAC
    user: {
      additionalFields: {
        role: {
          type: "string",
          required: false,
          defaultValue: "student",
          input: false,
        },
      },
    },

    // @ email-password-auth : enable email and password authentication
    emailAndPassword: {
      enabled: true,
    },

    // @ social-providers : configure GitHub and Google OAuth providers
    socialProviders: {
      github: {
        clientId: process.env.GITHUB_CLIENT_ID as string,
        clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        authorization: {
          params: {
            prompt: "select_account",
          },
        },
      },

      google: {
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        authorization: {
          params: {
            prompt: "select_account",
          },
        },
      },
    },

    // @ plugins-and-config : setup Next.js cookies plugin, trusted origins, and experimental features
    plugins: [nextCookies()],
    trustedOrigins: authUrl ? [authUrl] : [],
    experimental: { joins: true },
  });

  return cachedAuth;
};
