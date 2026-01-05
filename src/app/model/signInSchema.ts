import { z } from "zod";

// @ signin-schema : define validation schema for sign-in form with email, password, and remember-me fields
export const signInSchema = z.object({
  email: z
    .email({ message: "invalid email" })
    .nonempty({ message: "email field is required" }),
  password: z
    .string()
    .nonempty({ message: "password field is required" })
    .min(8, { message: "password must be at least 8 characters long" }),
  rememberMe: z.boolean().optional(),
});

// @ type-export : export TypeScript type inferred from schema
export type SignInValues = z.infer<typeof signInSchema>;
