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
        console.log(userData.image);

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
      className="max-h-[85vh] overflow-y-auto px-4 pb-10 bg-slate-50/50 rounded-xl"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="max-w-7xl mx-auto space-y-6 pt-4">
        {/* Header Section */}
        <div className="bg-linear-to-br from-white to-blue-50/40 rounded-2xl shadow-sm border border-blue-100/50 p-6 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-bl-full -mr-16 -mt-16 blur-xl"></div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative w-32 h-32 rounded-full p-1 bg-white shadow-md ring-4 ring-blue-50">
              <Image
                src={userData?.image?.trim() || "/images/avatar.png"}
                width={150}
                height={150}
                alt="User Profile"
                className="rounded-full w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute bottom-1 right-2 w-5 h-5 bg-green-500 border-4 border-white rounded-full shadow-sm"></div>
          </div>

          <div className="flex-1 text-center md:text-left z-10 space-y-1">
            <h1 className="text-3xl font-extrabold text-[#01012e] tracking-tight">
              {userData?.name || "Unknown User"}
            </h1>
            <p className="text-blue-600/70 font-bold text-sm">
              @{userData?.username || "username"}
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-[10px] font-black uppercase tracking-widest border border-blue-200/50">
                {userData?.role || "Student"}
              </span>
              {userData?.emailVerified ? (
                <span className="px-3 py-1 bg-green-50 text-green-700 rounded-lg text-[10px] font-black border border-green-100 flex items-center gap-1 uppercase tracking-widest">
                  <i className="bi bi-check-circle-fill"></i> Verified
                </span>
              ) : (
                <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-lg text-[10px] font-black border border-amber-100 flex items-center gap-1 uppercase tracking-widest">
                  <i className="bi bi-exclamation-circle-fill"></i> Unverified
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3 z-10">
            <Link href={`/dashboard/admin/edituser/${userData?._id}`}>
              <button className="bg-blue-50 border border-blue-100 text-blue-700 hover:bg-blue-600 hover:text-white px-5 py-2.5 rounded-xl font-bold transition-all duration-300 shadow-sm flex items-center gap-2">
                <i className="bi bi-pencil"></i>
              </button>
            </Link>
            <Link href="/dashboard/admin/userlist">
              <button className="bg-red-50 hover:bg-red-500 text-red-600 hover:text-white px-4 py-2.5 rounded-xl border border-red-100 transition-all duration-300 shadow-sm">
                <i className="bi bi-x-lg"></i>
              </button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Personal & Bio */}
          <div className="space-y-6">
            {/* Bio */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden group hover:shadow-md transition-shadow">
              <div className="bg-slate-50 border-b border-slate-100 px-6 py-3">
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <i className="bi bi-card-text text-blue-500"></i> Biography
                </h3>
              </div>
              <div className="p-6">
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  {userData?.bio || "No biography provided."}
                </p>
              </div>
            </div>

            {/* Personal Info */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden group hover:shadow-md transition-shadow">
              <div className="bg-slate-50 border-b border-slate-100 px-6 py-3">
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <i className="bi bi-person text-purple-500"></i> Personal Info
                </h3>
              </div>
              <div className="p-6 space-y-4">
                {[
                  { label: "Email", value: userData?.email, icon: "envelope" },
                  { label: "Phone", value: userData?.phone, icon: "telephone" },
                  {
                    label: "Birth Date",
                    value: userData?.birthDate,
                    icon: "calendar3",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-blue-600/60 uppercase tracking-wider">
                      {item.label}
                    </span>
                    <span className="text-sm text-slate-700 font-semibold">
                      {item.value || "NA"}
                    </span>
                  </div>
                ))}
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-blue-600/60 uppercase tracking-wider">
                    Website
                  </span>
                  <a
                    href="#"
                    className="text-blue-600 font-bold text-sm hover:text-blue-800 transition-colors"
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
              {/* Address Section */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden group hover:shadow-md transition-shadow">
                <div className="bg-slate-50 border-b border-slate-100 px-6 py-3">
                  <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <i className="bi bi-geo-alt text-orange-500"></i> Location
                  </h3>
                </div>
                <div className="p-6 space-y-5">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-blue-600/60 uppercase tracking-wider">
                      Street
                    </span>
                    <p className="bg-slate-50/80 p-3 rounded-xl text-sm font-semibold text-slate-700 border border-slate-100">
                      {userData?.street || "NA"}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-blue-600/60 uppercase tracking-wider">
                        City
                      </span>
                      <p className="bg-slate-50/80 p-3 rounded-xl text-sm font-semibold text-slate-700 border border-slate-100">
                        {userData?.city || "NA"}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-blue-600/60 uppercase tracking-wider">
                        Zip Code
                      </span>
                      <p className="bg-slate-50/80 p-3 rounded-xl text-sm font-semibold text-slate-700 border border-slate-100">
                        {userData?.zipcode || "NA"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security/Login Info Section */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden group hover:shadow-md transition-shadow">
                <div className="bg-slate-50 border-b border-slate-100 px-6 py-3">
                  <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <i className="bi bi-shield-lock text-emerald-500"></i>{" "}
                    Security
                  </h3>
                </div>
                <div className="p-6 space-y-4">
                  {[
                    { label: "UUID", value: userData?._id, mono: true },
                    { label: "Username", value: userData?.username },
                    { label: "Registered Since", value: userData?.createdAt },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center bg-slate-50/50 p-3 rounded-xl border border-slate-100/50"
                    >
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                        {item.label}
                      </span>
                      <span
                        className={`text-[#01012e] font-bold text-xs ${item.mono ? "font-mono text-[10px] truncate max-w-[120px]" : ""}`}
                      >
                        {item.value || "NA"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Company Info Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden group hover:shadow-md transition-shadow">
              <div className="bg-slate-50 border-b border-slate-100 px-6 py-3">
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <i className="bi bi-building text-indigo-500"></i>{" "}
                  Professional Affiliation
                </h3>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    label: "Company",
                    value: userData?.company,
                    accent: "blue",
                  },
                  {
                    label: "Catch Phrase",
                    value: userData?.catchPhrase,
                    accent: "indigo",
                    italic: true,
                  },
                  {
                    label: "Strategy",
                    value: userData?.strategy,
                    accent: "purple",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-linear-to-br from-blue-50/50 to-indigo-50/30 p-5 rounded-2xl border border-blue-100/40 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-blue-100/20 rounded-full -mr-8 -mt-8"></div>
                    <p className="text-[10px] font-black text-blue-600/70 uppercase tracking-widest mb-3">
                      {item.label}
                    </p>
                    <p
                      className={`text-slate-800 font-bold text-sm leading-relaxed ${item.italic ? "italic font-medium" : ""}`}
                    >
                      {item.value || "No data available."}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
