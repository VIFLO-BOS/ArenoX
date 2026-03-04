"use client"
import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChangePassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const res = await fetch("/api/auth/forget-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "something went wrong");
        return;
      }

      setMessage(data.message);
    } catch (error) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grow flex items-center justify-center bg-[linear-gradient(to_right,rgba(0,0,0,0.7),rgba(0,0,50,0.5)),url('https://i.pinimg.com/1200x/e7/bf/23/e7bf23137788c366a62be0baa10056ea.jpg')] bg-cover bg-center h-screen px-4 lg:px-20 text-white">
      <div className="ring-1 ring-white/20 shadow-2xl rounded-2xl p-8 w-full max-w-sm backdrop-blur-xl bg-black/40 border border-white/10">
        <h2 className="text-2xl font-bold mb-2">Forget Password</h2>
        <p className="text-gray-400 text-sm mb-6">
          Enter your email address, and we'll send you a link to reset it.
        </p>

        <form onSubmit={handleChangePassword}>
          <div className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-xl focus:bg-gray-900/70 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                placeholder="email address"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || !email}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "sending..." : "send reset link"}
            </button>

            {message && (
              <p className="text-green-400 text-center text-sm mt-3">{message}</p>
            )}
            {error && <p className="text-red-400 text-sm mt-3">{error}</p>}
          </div>
        </form>

        {/* Back to Login */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Remember your password?{" "}
          <Link
            href="/signin"
            className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
          >
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
}
