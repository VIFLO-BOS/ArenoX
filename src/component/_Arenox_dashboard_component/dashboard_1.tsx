"use client";
import { useSession, signOut, authClient } from "@/app/lib/auth-client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type Session = typeof authClient.$Infer.Session;

export default function Student_Dashboard({
  session: serverSession,
}: {
  session: Session | null;
}) {
  const { data: clientSession } = useSession();
  const session = serverSession || clientSession;
  const user = session?.user;
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-72 bg-white shadow-xl flex flex-col z-20 sticky top-0 h-screen">
        <div className="px-8 py-6 border-b border-gray-100">
          <h1 className="text-2xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            UX PILOT
          </h1>
        </div>

        <nav className="flex-1 px-4 py-6 overflow-y-auto custom-scrollbar">
          <ul className="space-y-1.5">
            <li className="flex items-center gap-3 bg-blue-50 text-blue-600 px-4 py-3 rounded-xl font-semibold transition-all shadow-sm">
              <i className="bi bi-grid-fill text-lg"></i> Dashboard
            </li>
            <li className="flex items-center gap-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 px-4 py-3 rounded-xl transition-all cursor-pointer font-medium">
              <i className="bi bi-book"></i> My Courses
            </li>
            <li className="flex items-center gap-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 px-4 py-3 rounded-xl transition-all cursor-pointer font-medium">
              <i className="bi bi-search"></i> Browse Courses
            </li>
            <li className="flex items-center gap-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 px-4 py-3 rounded-xl transition-all cursor-pointer font-medium">
              <i className="bi bi-calendar-event"></i> Schedule
            </li>
            <li className="flex items-center gap-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 px-4 py-3 rounded-xl transition-all cursor-pointer font-medium">
              <i className="bi bi-trophy"></i> Achievements
            </li>
            <li className="flex items-center gap-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 px-4 py-3 rounded-xl transition-all cursor-pointer font-medium">
              <i className="bi bi-people"></i> Study Groups
            </li>
            <li className="flex items-center gap-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 px-4 py-3 rounded-xl transition-all cursor-pointer font-medium">
              <i className="bi bi-graph-up"></i> Progress
            </li>
            <li className="flex items-center gap-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 px-4 py-3 rounded-xl transition-all cursor-pointer font-medium">
              <i className="bi bi-gear"></i> Settings
            </li>
            <li className="flex items-center gap-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 px-4 py-3 rounded-xl transition-all cursor-pointer font-medium">
              <i className="bi bi-question-circle"></i> Help & Support
            </li>
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-100">
          <div
            className="flex items-center gap-3 px-4 py-2 hover:bg-red-50 text-gray-600 hover:text-red-600 rounded-xl cursor-pointer transition-all font-medium group"
            onClick={handleSignOut}
          >
            <i className="bi bi-box-arrow-left text-lg group-hover:text-red-500 transition-colors"></i>
            <span>Logout</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 lg:p-12 overflow-y-auto">
        {/* Topbar */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Student Dashboard
            </h2>
            <p className="text-gray-500 mt-1">
              Welcome back,{" "}
              <span className="font-semibold text-blue-600">
                {user?.name || "Student"}
              </span>
              ! Continue your learning journey.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative group">
              <i className="bi bi-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors"></i>
              <input
                type="text"
                placeholder="Search courses..."
                className="pl-11 pr-4 py-2.5 bg-white border border-gray-200 rounded-2xl w-full md:w-80 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all shadow-sm"
              />
            </div>

            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
              <button className="relative p-2.5 text-gray-500 hover:bg-gray-100 rounded-xl transition-all hover:text-blue-600">
                <i className="bi bi-bell text-xl"></i>
                <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
              </button>
              <Image
                src={user?.image || "https://via.placeholder.com/40"}
                alt="Profile"
                width={45}
                height={45}
                className="w-11 h-11 rounded-full border-2 border-white shadow-md cursor-pointer hover:border-blue-100 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-blue-50 rounded-2xl text-blue-600 group-hover:scale-110 transition-transform">
                <i className="bi bi-book-fill text-xl"></i>
              </div>
            </div>
            <p className="text-gray-500 text-sm font-semibold uppercase tracking-wide">
              Courses Enrolled
            </p>
            <div className="flex items-baseline gap-2 mt-2">
              <h3 className="text-3xl font-bold text-gray-800">12</h3>
              <p className="text-green-600 text-xs font-bold bg-green-50 px-2 py-1 rounded-lg">
                +2 this month
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-600 group-hover:scale-110 transition-transform">
                <i className="bi bi-check-circle-fill text-xl"></i>
              </div>
            </div>
            <p className="text-gray-500 text-sm font-semibold uppercase tracking-wide">
              Completed
            </p>
            <div className="flex items-baseline gap-2 mt-2">
              <h3 className="text-3xl font-bold text-gray-800">8</h3>
              <p className="text-emerald-600 text-xs font-bold bg-emerald-50 px-2 py-1 rounded-lg">
                67% rate
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-purple-50 rounded-2xl text-purple-600 group-hover:scale-110 transition-transform">
                <i className="bi bi-clock-fill text-xl"></i>
              </div>
            </div>
            <p className="text-gray-500 text-sm font-semibold uppercase tracking-wide">
              Study Hours
            </p>
            <div className="flex items-baseline gap-2 mt-2">
              <h3 className="text-3xl font-bold text-gray-800">48</h3>
              <p className="text-green-600 text-xs font-bold bg-green-50 px-2 py-1 rounded-lg">
                +5.2 hrs
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-orange-50 rounded-2xl text-orange-600 group-hover:scale-110 transition-transform">
                <i className="bi bi-award-fill text-xl"></i>
              </div>
            </div>
            <p className="text-gray-500 text-sm font-semibold uppercase tracking-wide">
              Certificates
            </p>
            <div className="flex items-baseline gap-2 mt-2">
              <h3 className="text-3xl font-bold text-gray-800">6</h3>
              <p className="text-green-600 text-xs font-bold bg-green-50 px-2 py-1 rounded-lg">
                +1 new
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Continue Learning */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="font-bold text-xl text-gray-800 flex items-center gap-2">
              <i className="bi bi-play-circle-fill text-blue-600"></i> Continue
              Learning
            </h3>
            <div className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 group hover:border-blue-100">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-bold text-lg text-gray-800 group-hover:text-blue-600 transition-colors">
                    JavaScript Fundamentals
                  </p>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg">
                    75%
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-4 font-medium flex items-center gap-2">
                  <i className="bi bi-journal-text"></i> Lesson 5: Async
                  Programming
                </p>
                <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                  <div className="bg-blue-600 h-full w-3/4 rounded-full shadow-sm relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite]"></div>
                  </div>
                </div>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl text-sm font-semibold shadow-lg shadow-blue-500/20 hover:-translate-y-0.5 transition-all w-full sm:w-auto flex items-center justify-center gap-2">
                Continue <i className="bi bi-arrow-right"></i>
              </button>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 group hover:border-green-100">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-bold text-lg text-gray-800 group-hover:text-green-600 transition-colors">
                    UI/UX Design Basics
                  </p>
                  <span className="text-xs font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-lg">
                    40%
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-4 font-medium flex items-center gap-2">
                  <i className="bi bi-journal-text"></i> Module 2: Typography &
                  Color
                </p>
                <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full w-2/5 rounded-full shadow-sm"></div>
                </div>
              </div>
              <button className="bg-white border border-gray-200 text-gray-700 hover:bg-green-50 hover:text-green-700 hover:border-green-200 px-6 py-3 rounded-2xl text-sm font-semibold transition-all w-full sm:w-auto">
                Resume
              </button>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 group hover:border-purple-100">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-bold text-lg text-gray-800 group-hover:text-purple-600 transition-colors">
                    Data Analytics
                  </p>
                  <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2.5 py-1 rounded-lg">
                    20%
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-4 font-medium flex items-center gap-2">
                  <i className="bi bi-journal-text"></i> Intro to Python for
                  Data
                </p>
                <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                  <div className="bg-purple-500 h-full w-1/5 rounded-full shadow-sm"></div>
                </div>
              </div>
              <button className="bg-white border border-gray-200 text-gray-700 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-200 px-6 py-3 rounded-2xl text-sm font-semibold transition-all w-full sm:w-auto">
                Resume
              </button>
            </div>
          </div>

          {/* Right Side Widgets */}
          <div className="space-y-6">
            {/* Deadlines */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-800 flex items-center gap-2 mb-4">
                <i className="bi bi-calendar-check text-orange-500"></i>{" "}
                Upcoming Deadlines
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-between items-center bg-red-50 px-4 py-3 rounded-2xl border border-red-100">
                  <span className="font-medium text-gray-700 text-sm">
                    JavaScript Quiz
                  </span>
                  <span className="text-red-600 text-xs font-bold bg-red-100 px-2 py-1 rounded-md uppercase">
                    Urgent
                  </span>
                </li>
                <li className="flex justify-between items-center bg-amber-50 px-4 py-3 rounded-2xl border border-amber-100">
                  <span className="font-medium text-gray-700 text-sm">
                    Design Project
                  </span>
                  <span className="text-amber-600 text-xs font-bold bg-amber-100 px-2 py-1 rounded-md uppercase">
                    Soon
                  </span>
                </li>
                <li className="flex justify-between items-center bg-blue-50 px-4 py-3 rounded-2xl border border-blue-100">
                  <span className="font-medium text-gray-700 text-sm">
                    Analytics Report
                  </span>
                  <span className="text-blue-600 text-xs font-bold bg-blue-100 px-2 py-1 rounded-md uppercase">
                    Upcoming
                  </span>
                </li>
              </ul>
            </div>

            {/* Recent Activity */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-800 flex items-center gap-2 mb-4">
                <i className="bi bi-activity text-green-500"></i> Recent
                Activity
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-col items-center hidden sm:flex">
                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm border-2 border-white shadow-sm z-10">
                      <i className="bi bi-check-lg"></i>
                    </div>
                    <div className="w-0.5 h-full bg-gray-100 -mt-2"></div>
                  </div>
                  <div className="pb-4">
                    <p className="text-sm font-medium text-gray-800">
                      Completed Lesson
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Variables and Data Types
                    </p>
                    <p className="text-[10px] text-gray-400 mt-1">
                      2 hours ago
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-col items-center hidden sm:flex">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm border-2 border-white shadow-sm z-10">
                      <i className="bi bi-chat-left-text"></i>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      Posted in Forum
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      React Help Group
                    </p>
                    <p className="text-[10px] text-gray-400 mt-1">
                      5 hours ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
