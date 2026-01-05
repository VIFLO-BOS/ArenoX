import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";
import connect from "./db";

// @ database-connection : establish connection to MongoDB database
const mongodb = await connect();

// @ auth-configuration : configure better-auth with database, user schema, providers, and plugins
export const auth = betterAuth({
  // @ database-adapter : setup MongoDB adapter for better-auth
  database: mongodbAdapter(mongodb.db),

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
<<<<<<< HEAD
  trustedOrigins: [process.env.BETTER_AUTH_URL as string],
=======
>>>>>>> 9c844d249e78ad451b468d536b7ca31bb80f67f7
  experimental: { joins: true },
});
