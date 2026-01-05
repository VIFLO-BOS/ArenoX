"use client";
import { authClient } from "@/app/lib/auth-client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema, SignInValues } from "@/app/model/signInSchema";



/* @ signin-page : user sign-in page with email/password and social authentication */
export default function SignInPage() {
  /* @ loading-state : manage loading and error states */
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  /* @ form-setup : configure react-hook-form with zod validation */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

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

  /* @ email-auth-handler : handle email/password authentication */
  const handleEmailAuth = async (data: SignInValues) => {
    setIsLoading(true);
    setError("");
    const trimEmail = data.email.trim();
    try {
      if (!trimEmail || !data.password) {
        setError("Please provide both email and password.");
        toast.error("Please provide both email and password.");
        setIsLoading(false);
        return;
      }

      await authClient.signIn.email({
        email: trimEmail,
        password: data.password,
        callbackURL: "/",
        fetchOptions: {
          onSuccess: () => {
            toast.success("login successfully");
            router.push("/");
          },
          onError: (ctx) => {
            setError(ctx.error.message);
            setIsLoading(false);
            toast.error(ctx.error.message);
          },
        },
      });
    } catch (error) {
      setError(
        `Authentication error: ${
          error instanceof Error ? error.message : "unknown error"
        }.`
      );
      toast.error(error instanceof Error ? error.message : "unknown error");
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-grow flex items-center justify-center bg-[linear-gradient(to_right,rgba(0,0,0,0.7),rgba(0,0,50,0.5)),url('https://i.pinimg.com/1200x/e7/bf/23/e7bf23137788c366a62be0baa10056ea.jpg')] bg-cover bg-center h-screen px-4 lg:px-20 text-white">
      <form
        className="ring-1 ring-white/20 shadow-2xl rounded-2xl p-8 w-full max-w-sm backdrop-blur-xl bg-black/40 border border-white/10"
        onSubmit={handleSubmit(handleEmailAuth)}
      >
        <h2 className="text-xl text-center font-semibold mb-2 text-white">
          Welcome back
        </h2>
        <p className="text-center text-gray-300 mb-8 max-w-xs mx-auto text-sm leading-relaxed">
          Log in to continue learning.
        </p>

        {/* Email */}

        <input
          type="email"
          placeholder="you@example.com"
          className="w-full mb-4 px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-white placeholder-gray-400 transition-all"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-400 text-sm mb-3">{errors.email.message}</p>
        )}
        {/* Password */}
        <input
          type="password"
          placeholder="••••••••"
          className="w-full mb-4 px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-white placeholder-gray-400 transition-all"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-400 text-sm mb-3">{errors.password.message}</p>
        )}
        <div className="flex items-center justify-between mb-6">
          <div>
            <a
              href="#"
              className="text-sm text-blue-400 hover:text-blue-300 hover:underline transition-colors"
            >
              Forgot password?
            </a>
          </div>

          {/* Remember Me */}
          <div className="flex items-center">
            <input
              id="remember"
              type="checkbox"
              className="mr-2 rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-blue-600 ring-offset-gray-800"
              {...register("rememberMe")}
            />
            <label
              htmlFor="remember"
              className="text-sm text-gray-300 cursor-pointer select-none"
            >
              Remember me
            </label>
          </div>
        </div>

        {/* Login button */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-xl mb-6 shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 transition-all duration-300 ${
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
              Logging in...
            </span>
          ) : (
            <p className="flex items-center justify-center gap-2">
              {" "}
              <i className="bi bi-box-arrow-in-right"></i> Log in
            </p>
          )}
        </button>

        {/* Error message */}
        {error ? (
          <div className="text-sm text-red-400 mb-4 text-center bg-red-500/10 p-2 rounded-lg border border-red-500/20">
            {error}
          </div>
        ) : null}

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-white/20" />
          <span className="px-3 text-gray-400 text-xs uppercase tracking-widest">
            or
          </span>
          <hr className="flex-grow border-white/20" />
        </div>

        {/* Social Logins */}
        <div className="flex space-x-3">
          <button
            type="button"
            className="w-1/2 flex items-center justify-center gap-2 rounded-xl py-2.5 text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
            onClick={() => handleSocialAuth("google")}
          >
            <i className="bi bi-google"></i>
            Google
          </button>
          <button
            type="button"
            className="w-1/2 flex items-center justify-center gap-2 rounded-xl py-2.5 text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
            onClick={() => handleSocialAuth("github")}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.033-1.415-4.033-1.415C4.422 17.545 3.633 17.2 3.633 17.2c-1.086-.744.082-.729.082-.729 1.2.086 1.832 1.233 1.832 1.233 1.067 1.83 2.8 1.302 3.487.996.107-.773.418-1.302.762-1.602-2.666-.304-5.466-1.334-5.466-5.933 0-1.311.469-2.383 1.236-3.223-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.52 11.52 0 0112 6.844c1.021.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.119 3.176.77.84 1.235 1.912 1.235 3.223 0 4.61-2.804 5.626-5.476 5.922.43.372.823 1.104.823 2.223v3.293c0 .32.192.694.801.576C20.565 21.796 24 17.297 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </button>
        </div>

        {/* Signup */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <a href="signup" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}
