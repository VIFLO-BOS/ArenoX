"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";

export default function SignUpPage() {
  const [userRole, setUserRole] = useState<string>(" ");
  const roles: string[] = ["Admin", "Student", "Instructor"];
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    formData.set("role", userRole);

    try {
      const response = await fetch("/api/user", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        toast.success(result.message || "Registration successful !");

        if (formRef.current) {
          formRef.current.reset();
        }

        redirect("/signin");
      } else {
        const errorData = await response.json();
        toast.error(errorData.message);
      }
    } catch (error) {
      console.log("an error has occured", error);
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unknown error occurred.");
      }
    }
  };

  return (
    <div className="flex-grow flex items-center justify-center bg-[linear-gradient(rgba(0,0,0,0.25),rgba(0,0,0,0.8)),url('https://i.pinimg.com/1200x/e7/bf/23/e7bf23137788c366a62be0baa10056ea.jpg')] bg-cover bg-center h-screen px-4 lg:px-20 text-white">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="ring-1 ring-black/5 shadow-md rounded-2xl p-4 px-8 w-full max-w-sm backdrop-filter backdrop-blur-lg bg-white/10"
      >
        <h2 className="text-xl text-center font-semibold mb-2">
          Create your account
        </h2>

        {/* Roles */}
        <div className="py-2">
          <label className="text-xs">Select Account Type:</label>
          <div className="flex items-center gap-3">
            {roles.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  id={item}
                  name="role"
                  value={item}
                  checked={userRole === item}
                  onChange={() => setUserRole(item)}
                />
                <label htmlFor={item}>{item}</label>
              </div>
            ))}
          </div>
        </div>

        <input
          type="text"
          name="fullName"
          placeholder="Full name"
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="••••••••"
          minLength={8}
          maxLength={12}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <p className="text-gray-400 text-sm">
          Use 8+ characters with a mix of letters, numbers, and symbols.
        </p>

        {/* Privacy and Policy */}
        <div className="flex items-center my-4">
          <input
            id="terms"
            name="agreeToTerms"
            type="checkbox"
            className="mr-2"
          />
          <label htmlFor="terms" className="text-sm text-gray-200">
            I agree to the Terms and Privacy
          </label>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg mb-4"
        >
          Create Account
        </button>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-400 text-sm">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Logins - Add onClick handlers for real functionality */}
        <div className="flex space-x-3">
          <button
            type="button"
            className="w-1/2 flex items-center justify-center rounded-lg py-2 text-gray-100 hover:bg-blue-600 hover:border-0"
          >
            <i className="bi bi-google">&nbsp;</i>
            Google
          </button>
          <button
            type="button"
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
