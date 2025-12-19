"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { signUp } from "@/app/lib/auth-action";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, SignUpValues } from "@/app/model/signUpSchema";
import { authClient } from "@/app/lib/auth-client";

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      agreeToTerms: false as unknown as true,
    },
  });

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSocialAuth = async (provider: "google" | "github") => {
    setIsLoading(true);
    setError("");

    try {
      await authClient.signIn.social({
        provider: provider,
        callbackURL: "/",
      });
    } catch (error) {
      setError(
        `error authenticating ${provider}: ${
          error instanceof Error ? error.message : "unknown error"
        } .`
      );
      setIsLoading(false);
    }
  };
  const handleFormSubmit = async (data: SignUpValues) => {
    setIsLoading(true);

    const { firstName, lastName, email, password, agreeToTerms } = data;
    const fullName = `${firstName} ${lastName}`;

    try {
      if (!fullName || !email || !password) {
        toast.error("Please fill in all required fields");
        return;
      }

      if (!agreeToTerms) {
        toast.error("You must agree to the Terms and Privacy");
        return;
      }

      const result = await signUp(email, password, fullName);

      if (result.error) {
        toast.error(result.error?.message || "Registration failed");
        return;
      }

      toast.success("Registration successful! Redirecting...");

      reset();

      setTimeout(() => {
        router.push("/signin");
      }, 1000);
    } catch (error) {
      console.error("Sign-up error:", error);
      toast.error("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-grow flex items-center justify-center bg-[linear-gradient(rgba(0,0,0,0.25),rgba(0,0,0,0.8)),url('https://i.pinimg.com/1200x/e7/bf/23/e7bf23137788c366a62be0baa10056ea.jpg')] bg-cover bg-center h-screen px-4 lg:px-20 text-white">
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="ring-1 ring-black/5 shadow-md rounded-2xl p-4 px-8 w-full max-w-sm backdrop-filter backdrop-blur-lg bg-white/10"
      >
        <h2 className="text-xl text-center font-semibold mb-2">
          Create your account
        </h2>

        <input
          type="text"
          placeholder="First name"
          {...register("firstName")}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />
        {errors.firstName && (
          <p className="text-red-400 text-sm mb-3">
            {errors.firstName.message}
          </p>
        )}
        <input
          type="text"
          placeholder="Last name"
          {...register("lastName")}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />
        {errors.lastName && (
          <p className="text-red-400 text-sm mb-3">{errors.lastName.message}</p>
        )}
        <input
          type="email"
          placeholder="you@example.com"
          {...register("email")}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />
        {errors.email && (
          <p className="text-red-400 text-sm mb-3">{errors.email.message}</p>
        )}
        <input
          type="password"
          placeholder="password"
          {...register("password")}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />
        {errors.password && (
          <p className="text-red-400 text-sm mb-3">{errors.password.message}</p>
        )}
        <input
          type="password"
          placeholder="confirmPassword"
          {...register("confirmPassword")}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />
        {errors.confirmPassword && (
          <p className="text-red-400 text-sm mb-3">
            {errors.confirmPassword.message}
          </p>
        )}
        <p></p>
        <p className="text-gray-400 text-sm">
          Use 8+ characters with a mix of letters, numbers, and symbols.
        </p>

        {/* Privacy and Policy */}
        <div className="flex items-center my-4">
          <input
            id="terms"
            type="checkbox"
            {...register("agreeToTerms")}
            className="mr-2"
          />
          <label htmlFor="terms" className="text-sm text-gray-200">
            I agree to the Terms and Privacy
          </label>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg mb-4 ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? (
            <span className="flex items-center">
              <svg
                className="animate-spin h-5 w-5 mr-2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
              Creating account...
            </span>
          ) : (
            "Create Account"
          )}
        </button>

        {/* Error message */}
        {error ? (
          <div className="text-sm text-red-400 mb-4 text-center">{error}</div>
        ) : null}

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-400 text-sm">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Logins - Add onClick handlers for real functionality */}
        <div className="flex space-x-3">
          <button
            type="button"
            onClick={() => handleSocialAuth("google")}
            disabled={isLoading}
            className="w-1/2 flex items-center justify-center rounded-lg py-2 text-gray-100 hover:bg-blue-600 hover:border-0"
          >
            <i className="bi bi-google">&nbsp;</i>
            Google
          </button>
          <button
            type="button"
            onClick={() => handleSocialAuth("github")}
            disabled={isLoading}
            className="w-1/2 flex items-center justify-center rounded-lg py-2 text-gray-100 hover:bg-blue-600 hover:border-0"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.033-1.415-4.033-1.415C4.422 17.545 3.633 17.2 3.633 17.2c-1.086-.744.082-.729.082-.729 1.2.086 1.832 1.233 1.832 1.233 1.067 1.83 2.8 1.302 3.487.996.107-.773.418-1.302.762-1.602-2.666-.304-5.466-1.334-5.466-5.933 0-1.311.469-2.383 1.236-3.223-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.52 11.52 0 0112 6.844c1.021.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.119 3.176.77.84 1.235 1.912 1.235 3.223 0 4.61-2.804 5.626-5.476 5.922.43.372.823 1.104.823 2.223v3.293c0 .32.192.694.801.576C20.565 21.796 24 17.297 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-2">
          I have an account already? &nbsp;
          <Link href="/signin" className="text-blue-600 hover:underline">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}
