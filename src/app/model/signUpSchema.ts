import { z } from "zod";

// @ signup-schema : define validation schema for sign-up form with name, email, password, and terms acceptance
export const signUpSchema = z
  .object({
    // @ name-fields : validate first and last name with minimum length requirements
    firstName: z
      .string()
      .nonempty({ message: "first name field is required" })
      .min(3, { message: "first name must be at least 6 characters long" }),
    lastName: z
      .string()
      .nonempty({ message: "last name field is required" })
      .min(3, { message: "last name must be at least 6 characters long" }),

    // @ email-field : validate email format and required status
    email: z
      .email({ message: "invalid email" })
      .nonempty({ message: "email field is required" }),

    // @ password-field : validate password with length and uppercase requirements
    password: z
      .string()
      .nonempty({ message: "password field is required" })
      .min(8, { message: "password must be at least 8 characters long" })
      .regex(/[A-Z]/, {
        message: "password must contain at least one uppercase letter",
      }),

    // @ confirm-password-field : validate password confirmation with same requirements
    confirmPassword: z
      .string()
      .nonempty({ message: "confirm password field is required" })
      .min(8, {
        message: "confirm password must be at least 8 characters long",
      })
      .regex(/[A-Z]/, {
        message: "confirm password must contain at least one uppercase letter",
      }),

    // @ terms-field : ensure user accepts terms and conditions
    agreeToTerms: z.literal(true, {
      error: () => ({ message: "You must agree to the terms and conditions!" }),
    }),
  })
  // @ password-match-validation : ensure password and confirm password fields match
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// @ type-export : export TypeScript type inferred from schema
export type SignUpValues = z.infer<typeof signUpSchema>;
