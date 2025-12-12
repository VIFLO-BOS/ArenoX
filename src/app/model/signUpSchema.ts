import { z } from "zod";

export const signUpSchema = z
  .object({
    firstName: z
      .string()
      .nonempty({ message: "first name field is required" })
      .min(3, { message: "first name must be at least 6 characters long" }),
    lastName: z
      .string()
      .nonempty({ message: "last name field is required" })
      .min(3, { message: "last name must be at least 6 characters long" }),
    email: z
      .email({ message: "invalid email" })
      .nonempty({ message: "email field is required" }),
    password: z
      .string()
      .nonempty({ message: "password field is required" })
      .min(8, { message: "password must be at least 8 characters long" })
      .regex(/[A-Z]/, {
        message: "password must contain at least one uppercase letter",
      }),

    confirmPassword: z
      .string()
      .nonempty({ message: "confirm password field is required" })
      .min(8, {
        message: "confirm password must be at least 8 characters long",
      })
      .regex(/[A-Z]/, {
        message: "confirm password must contain at least one uppercase letter",
      }),

    agreeToTerms: z.literal(true, {
      error: () => ({ message: "You must agree to the terms and conditions!" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// Export the typescript types inferred from the schemas

export type SignUpValues = z.infer<typeof signUpSchema>;
