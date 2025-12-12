import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";
import connect from "./db";

const mongodb = await connect();

export const auth = betterAuth({
  database: mongodbAdapter(mongodb.db),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  plugins: [nextCookies()],
  trustedOrigins: [
    "http://192.168.42.174:3000",
    "http://192.168.137.227:3000",
    "http://localhost:3000",
  ],
  experimental: { joins: true },
});
