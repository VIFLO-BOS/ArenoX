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

/* @ signup-page : user registration page with email/password and social authentication */

export default function SignUpPage() {
  /* @ form-setup : configure react-hook-form with zod validation */

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
  /* @ loading-state : manage loading and error states */

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /* @ social-auth-handler : handle Google and GitHub authentication */

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
  /* @ form-submit-handler : handle user registration with email/password */

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
    <div className="grow flex items-center justify-center bg-[linear-gradient(to_right,rgba(0,0,0,0.7),rgba(0,0,50,0.5)),url('https://i.pinimg.com/1200x/e7/bf/23/e7bf23137788c366a62be0baa10056ea.jpg')] bg-cover bg-center h-screen px-4 lg:px-20 text-white">
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="ring-1 ring-white/20 shadow-2xl rounded-2xl p-6 w-full max-w-sm backdrop-blur-xl bg-black/40 border border-white/10"
      >
        <h2 className="text-lg text-center font-semibold mb-4 text-white">
          Create Account
        </h2>

        <div className="grid grid-cols-2 gap-3 mb-3">
          <div>
            <input
              type="text"
              placeholder="First name"
              {...register("firstName")}
              className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-white placeholder-gray-400 transition-all text-sm"
            />
            {errors.firstName && (
              <p className="text-red-400 text-xs mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Last name"
              {...register("lastName")}
              className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-white placeholder-gray-400 transition-all text-sm"
            />
            {errors.lastName && (
              <p className="text-red-400 text-xs mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        <input
          type="email"
          placeholder="you@example.com"
          {...register("email")}
          className="w-full mb-3 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-white placeholder-gray-400 transition-all text-sm"
        />
        {errors.email && (
          <p className="text-red-400 text-xs mb-2">{errors.email.message}</p>
        )}
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          className="w-full mb-3 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-white placeholder-gray-400 transition-all text-sm"
        />
        {errors.password && (
          <p className="text-red-400 text-xs mb-2">{errors.password.message}</p>
        )}
        <input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
          className="w-full mb-3 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-white placeholder-gray-400 transition-all text-sm"
        />
        {errors.confirmPassword && (
          <p className="text-red-400 text-xs mb-2">
            {errors.confirmPassword.message}
          </p>
        )}

        <p className="text-gray-400 text-xs mb-3">
          Use 8+ characters with a mix of letters, numbers & symbols.
        </p>

        {/* Privacy and Policy */}
        <div className="flex items-center mb-4">
          <input
            id="terms"
            type="checkbox"
            {...register("agreeToTerms")}
            className="mr-2 rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-blue-600 ring-offset-gray-800 w-4 h-4"
          />
          <label
            htmlFor="terms"
            className="text-xs text-gray-300 cursor-pointer select-none"
          >
            I agree to the Terms and Privacy
          </label>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-xl mb-4 shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 transition-all duration-300 text-sm ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? (
            <span className="flex items-center">
              <svg
                className="animate-spin h-4 w-4 mr-2"
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
              Creating...
            </span>
          ) : (
            "Create Account"
          )}
        </button>

        {/* Error message */}
        {error ? (
          <div className="text-xs text-red-400 mb-3 text-center bg-red-500/10 p-2 rounded-lg border border-red-500/20">
            {error}
          </div>
        ) : null}

        <div className="flex items-center mb-4">
          <hr className="grow border-white/20" />
          <span className="px-3 text-gray-400 text-[10px] uppercase tracking-widest">
            or
          </span>
          <hr className="grow border-white/20" />
        </div>

        {/* Social Logins - Add onClick handlers for real functionality */}
        <div className="flex space-x-3 mb-4">
          <button
            type="button"
            onClick={() => handleSocialAuth("google")}
            disabled={isLoading}
            className="w-1/2 flex items-center justify-center gap-2 rounded-xl py-2 text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 text-sm"
          >
            <i className="bi bi-google text-sm"></i>
            Google
          </button>
          <button
            type="button"
            onClick={() => handleSocialAuth("github")}
            disabled={isLoading}
            className="w-1/2 flex items-center justify-center gap-2 rounded-xl py-2 text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 text-sm"
          >
            <i className="bi bi-github text-sm"></i>
            GitHub
          </button>
        </div>

        <p className="text-center text-xs text-gray-500">
          Already have an account? &nbsp;
          <Link href="/signin" className="text-blue-600 hover:underline">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}
