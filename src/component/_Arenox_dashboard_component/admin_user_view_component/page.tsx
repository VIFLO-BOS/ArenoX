"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

// Define the structure of user data
interface UserData {
  name: string;
  email: string;
  _id: string;
  emailVerifield: boolean;
  createdAt: string;
  [key: string]: any;
}

export default function View_user({ userId }: { userId: string }) {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Reset state when userId changes
    setUserData(null);
    setError(null);
    setLoading(true);

    // Guard: prevent fetch if userId is missing or invalid
    if (!userId || userId === "undefined" || userId.trim() === "") {
      setError("Invalid user ID");
      setLoading(false);
      return;
    }

    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/data/users`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          // Optional: cache settings
          cache: "no-store", // fresh data every time
        });

        if (!response.ok) {
          const errorText = await response.text();
          toast.error(errorText);
          throw new Error(`User not found (${response.status}): ${errorText}`);
        }
        const data = await response.json();
        const userData = data.data.find((user: any) => user._id === userId);
        console.log(userData);

        setUserData(userData);
      } catch (err: any) {
        console.error("Fetch error:", err);
        setError(err.message || "Failed to load user");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]); // Only re-run when userId changes

  // Render states
  if (loading) return <p className="text-center py-8">Loading user data...</p>;

  if (error)
    return <p className="text-center py-8 text-red-600">Error: {error}</p>;

  if (!userData) return <p className="text-center py-8">No user data found</p>;

  return (
    <div
      className="max-h-[85vh] overflow-y-auto px-1 pb-10"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 opacity-50"></div>

          <div className="relative">
            <div className="w-32 h-32 rounded-full p-1 bg-white shadow-lg ring-4 ring-blue-50">
              <Image
              src={userData?.avatar}
                width={150}
                height={150}
                alt="User Profile"
                className="rounded-full w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute bottom-1 right-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
          </div>

          <div className="flex-1 text-center md:text-left z-10">
            <h1 className="text-2xl font-bold text-gray-900">
              {userData?.name || "Unknown User"}
            </h1>
            <p className="text-gray-500 font-medium mb-3">
              @{userData?.username || "username"}
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wide border border-blue-100">
                {userData?.role || "Student"}
              </span>
              {userData?.emailVerified ? (
                <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-semibold border border-green-100 flex items-center gap-1">
                  <i className="bi bi-check-circle-fill"></i> Verified
                </span>
              ) : (
                <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-semibold border border-amber-100 flex items-center gap-1">
                  <i className="bi bi-exclamation-circle-fill"></i> Unverified
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3 z-10">
            <Link href={`/dashboard/admin/edituser/${userData?._id}`}>
              <button className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-blue-600 px-5 py-2.5 rounded-xl font-medium transition-all shadow-sm flex items-center gap-2">
                <i className="bi bi-pencil"></i> Edit Profile
              </button>
            </Link>
            <Link href="/dashboard/admin/userlist">
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-600 px-4 py-2.5 rounded-xl transition-all">
                <i className="bi bi-x-lg"></i>
              </button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Personal & Bio */}
          <div className="space-y-6">
            {/* Bio */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <i className="bi bi-card-text text-blue-500"></i> Biography
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {userData?.bio || "NA"} 
              </p>
            </div>

            {/* Personal Info */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <i className="bi bi-person text-purple-500"></i> Personal Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                  <span className="text-gray-500 text-sm">Email</span>
                  <span className="text-gray-900 font-medium text-sm">
                    {userData?.email || "NA"}
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                  <span className="text-gray-500 text-sm">Phone</span>
                  <span className="text-gray-900 font-medium text-sm">
                    {userData?.phone || "NA"}
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                  <span className="text-gray-500 text-sm">Birth Date</span>
                  <span className="text-gray-900 font-medium text-sm">
                    {userData?.birthDate || "NA"}
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                  <span className="text-gray-500 text-sm">Website</span>
                  <a
                    href="#"
                    className="text-blue-600 font-medium text-sm hover:underline"
                  >
                    {userData?.website || "NA"}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Middle & Right Columns: Address & System Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Address */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <i className="bi bi-geo-alt text-orange-500"></i> Address
                </h3>
                <div className="space-y-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-gray-400 uppercase font-semibold">
                      Street
                    </span>
                    <span className="text-gray-700 font-medium bg-gray-50 p-2 rounded-lg">
                      {userData?.street || "NA"}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs text-gray-400 uppercase font-semibold">
                        City
                      </span>
                      <span className="text-gray-700 font-medium bg-gray-50 p-2 rounded-lg">
                        {userData?.city || "NA"}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs text-gray-400 uppercase font-semibold">
                        Zip Code
                      </span>
                      <span className="text-gray-700 font-medium bg-gray-50 p-2 rounded-lg">
                        {userData?.zipcode || "NA"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Login Info */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <i className="bi bi-shield-lock text-emerald-500"></i>{" "}
                  Security
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center bg-gray-50 p-3 rounded-xl">
                    <span className="text-gray-500 text-sm">UUID</span>
                    <span className="text-gray-900 font-mono text-xs truncate max-w-[150px]">
                      {userData?._id || "NA"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center bg-gray-50 p-3 rounded-xl">
                    <span className="text-gray-500 text-sm">Username</span>
                    <span className="text-gray-900 font-medium text-sm">
                      {userData?.username || "NA"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center bg-gray-50 p-3 rounded-xl">
                    <span className="text-gray-500 text-sm">Registered</span>
                    <span className="text-gray-900 font-medium text-sm">
                      {userData?.createdAt || "NA"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Info */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <i className="bi bi-building text-indigo-500"></i> Company
                Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                  <p className="text-indigo-600 text-xs font-bold uppercase mb-1">
                    Company
                  </p>
                  <p className="text-gray-800 font-semibold">
                    {userData?.company || "NA"}
                  </p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                  <p className="text-indigo-600 text-xs font-bold uppercase mb-1">
                    Catch Phrase
                  </p>
                  <p className="text-gray-800 italic">
                    {userData?.catchPhrase || "NA"}
                  </p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                  <p className="text-indigo-600 text-xs font-bold uppercase mb-1">
                    Strategy
                  </p>
                  <p className="text-gray-800 font-medium">{userData?.strategy || "NA"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
