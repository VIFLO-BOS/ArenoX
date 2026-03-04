"use client";
import { authClient } from "@/app/lib/auth-client";
import { useTheme } from "@/utils/types/context/ThemeContext";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

/* @ admin-settings-component : admin settings page with profile, preferences, and security sections */

export default function Admin_setting() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [hasCredentialAccount, setHasCredentialAccount] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAccounts = async () => {
      try {
        const { data } = await authClient.listAccounts();
        const hasCredential = data?.some((account: any) => account.provider === "credential");
        setHasCredentialAccount(!!hasCredential);
      } catch {
        setHasCredentialAccount(true); // default to showing the form
      }
    };
    checkAccounts();
  }, []);

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword.trim().length < 6 || newPassword.trim().length > 8) {
      setError("Password must be between 6 and 8 characters");
      return;
    } else if (confirmPassword !== newPassword) {
      setError("Password do not match");
      return;
    }

    const { data, error: ApiError } = await authClient.changePassword({
      newPassword: newPassword.trim(),
      currentPassword: currentPassword.trim(),
      revokeOtherSessions: true,
    });

    if (ApiError) {
      setError(ApiError.message as string);
      toast.error(ApiError.message as string);
    } else {
      toast.success("Password changed successfully");
      setNewPassword("");
      setCurrentPassword("");
      setConfirmPassword("");
      setError("");
    }
  };

  const router = useRouter();
  const signout = async () => {
    await authClient.signOut();
    router.push("/");
  };

  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="w-full mx-auto space-y-8 px-4 rounded-lg h-screen bg-white dark:bg-[var(--bg-card)]">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-[var(--text-primary)]">Settings</h1>
        <p className="text-gray-500 dark:text-[var(--text-secondary)] text-sm mt-1">
          Manage your account preferences and security settings.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          {/* Security / Password Card */}
          {hasCredentialAccount === null ? (
            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 animate-pulse">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-4"></div>
              <div className="h-10 bg-gray-100 dark:bg-gray-700 rounded-xl mb-4"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-10 bg-gray-100 dark:bg-gray-700 rounded-xl"></div>
                <div className="h-10 bg-gray-100 dark:bg-gray-700 rounded-xl"></div>
              </div>
            </div>
          ) : hasCredentialAccount ? (
            <form onSubmit={handleChangePassword} className="bg-white dark:bg-[var(--bg-card)] border border-gray-100 dark:border-gray-700 rounded-2xl shadow-sm p-6">
              <h3 className="font-semibold text-gray-800 dark:text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <i className="bi bi-shield-lock text-orange-500"></i> Security
              </h3>

              <div className="grid grid-cols-1 gap-5 max-w-md">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-gray-700 dark:text-[var(--text-primary)] group-hover:text-blue-600 transition-colors">
                    Current Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-50 dark:bg-[var(--bg-section)] border border-gray-200 dark:border-gray-600 rounded-xl focus:bg-white dark:focus:bg-[var(--bg-card)] focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-gray-700 dark:text-[var(--text-primary)] group-hover:text-blue-600 transition-colors">
                      New Password
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full px-4 py-2.5 bg-gray-50 dark:bg-[var(--bg-section)] border border-gray-200 dark:border-gray-600 rounded-xl focus:bg-white dark:focus:bg-[var(--bg-card)] focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-gray-700 dark:text-[var(--text-primary)] group-hover:text-blue-600 transition-colors">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full px-4 py-2.5 bg-gray-50 dark:bg-[var(--bg-section)] border border-gray-200 dark:border-gray-600 rounded-xl focus:bg-white dark:focus:bg-[var(--bg-card)] focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col">
                {error && <p className="text-xs text-red-500 p-1 text-center">{error}</p>}
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-800 text-white font-medium rounded-xl shadow-lg shadow-gray-500/20 hover:-translate-y-0.5 transition-all"
                >
                  Update Password
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 text-sm text-yellow-700">
              <p>Password change is not available for account signed in with Google or GitHub.</p>
            </div>
          )}
        </div>

        {/* Right Column: Preferences */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm px-6 py-1.5 sticky top-6">
            <h3 className="font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <i className="bi bi-sliders text-purple-500"></i> Preferences
            </h3>

            <div className="space-y-6">
              <div className="flex items-center justify-between group cursor-pointer" onClick={toggleTheme}>
                <div>
                  <p className="text-sm font-medium group-hover:text-blue-600 transition-colors" style={{ color: "var(--text-secondary)" }}>
                    Dark Mode
                  </p>
                  <p className="text-xs text-gray-500" style={{ color: "var(--text-secondary)" }}>
                    Switch to {isDark ? "light" : "dark"} theme
                  </p>
                </div>
                <div className={`w-11 h-6 rounded-full relative transition-colors duration-300 ${isDark ? "bg-blue-600" : "bg-gray-200"}`}>
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300 ${isDark ? "right-1" : "left-1"}`}></div>
                </div>
              </div>

              <div className="flex items-center justify-between group cursor-pointer">
                <div>
                  <p className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">Notifications</p>
                  <p className="text-xs text-gray-500">Email and in-app alerts</p>
                </div>
                <div className="w-11 h-6 bg-gray-200 rounded-full relative transition-colors duration-300">
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300"></div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-50">
              <button onClick={() => signout()} className="btn-danger w-full flex items-center justify-center gap-2">
                <i className="bi bi-box-arrow-right"></i> Sign Out
              </button>
            </div>
          </div> {/* end preferences card wrapper */}
        </div> {/* end grid (left + right columns) */}
      </div> {/* end outer container */}
    </div>
  );
}