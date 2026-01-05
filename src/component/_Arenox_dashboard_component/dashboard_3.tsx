import React from "react";
import Image from "next/image";

export default function aInstructor_Dashboard2() {
  return (
    <div className="flex min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Sidebar */}
      <aside className="w-72 bg-white shadow-xl flex flex-col z-20">
        <div className="px-8 py-6 border-b border-gray-100">
          <h1 className="text-2xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            UX PILOT
          </h1>
        </div>
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">
            <li className="flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-600 rounded-xl font-semibold transition-all shadow-sm">
              <i className="bi bi-grid-fill text-lg"></i> Dashboard
            </li>
            <li className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-xl transition-all cursor-pointer">
              <i className="bi bi-people text-lg"></i> Students
            </li>
            <li className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-xl transition-all cursor-pointer">
              <i className="bi bi-book text-lg"></i> Courses
            </li>
            <li className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-xl transition-all cursor-pointer">
              <i className="bi bi-person-video3 text-lg"></i> Instructors
            </li>
            <li className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-xl transition-all cursor-pointer">
              <i className="bi bi-bar-chart-fill text-lg"></i> Reports
            </li>
            <li className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-xl transition-all cursor-pointer">
              <i className="bi bi-gear-fill text-lg"></i> Settings
            </li>
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors">
            <i className="bi bi-box-arrow-left text-red-500 text-lg"></i>
            <span className="text-gray-600 font-medium">Logout</span>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Navbar */}
        <header className="flex items-center justify-between px-8 py-5 bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-10 border-b border-gray-100">
          <div className="relative">
            <i className="bi bi-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
            <input
              type="text"
              placeholder="Search anything..."
              className="pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full w-80 focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none transition-all shadow-sm"
            />
          </div>
          <div className="flex items-center gap-6">
            <button className="relative p-2 text-gray-500 hover:text-blue-600 transition-colors">
              <i className="bi bi-bell text-xl"></i>
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-gray-800">Admin User</p>
                <p className="text-xs text-gray-500">Super Admin</p>
              </div>
              <Image
                src="https://i.pravatar.cc/150?img=12"
                alt="Admin"
                width={40}
                height={40}
                className="rounded-full ring-2 ring-gray-100 shadow-sm object-cover"
              />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 p-8 space-y-8 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {/* Stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 group">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">
                    Total Students
                  </p>
                  <h2 className="text-3xl font-bold text-gray-800">2,847</h2>
                </div>
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:scale-110 transition-transform">
                  <i className="bi bi-people-fill text-xl"></i>
                </div>
              </div>
              <div className="mt-4 flex items-center text-xs font-medium text-green-600">
                <i className="bi bi-arrow-up-right mr-1"></i> +12.5% from last
                month
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 group">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">
                    Active Courses
                  </p>
                  <h2 className="text-3xl font-bold text-gray-800">156</h2>
                </div>
                <div className="p-3 bg-purple-50 text-purple-600 rounded-xl group-hover:scale-110 transition-transform">
                  <i className="bi bi-book-half text-xl"></i>
                </div>
              </div>
              <div className="mt-4 flex items-center text-xs font-medium text-green-600">
                <i className="bi bi-arrow-up-right mr-1"></i> +4 new this week
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 group">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">
                    Total Revenue
                  </p>
                  <h2 className="text-3xl font-bold text-gray-800">$84,350</h2>
                </div>
                <div className="p-3 bg-green-50 text-green-600 rounded-xl group-hover:scale-110 transition-transform">
                  <i className="bi bi-cash-stack text-xl"></i>
                </div>
              </div>
              <div className="mt-4 flex items-center text-xs font-medium text-green-600">
                <i className="bi bi-arrow-up-right mr-1"></i> +8.2% growth
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 group">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">
                    Completion Rate
                  </p>
                  <h2 className="text-3xl font-bold text-gray-800">87%</h2>
                </div>
                <div className="p-3 bg-orange-50 text-orange-600 rounded-xl group-hover:scale-110 transition-transform">
                  <i className="bi bi-trophy-fill text-xl"></i>
                </div>
              </div>
              <div className="mt-4 flex items-center text-xs font-medium text-blue-600">
                <i className="bi bi-info-circle mr-1"></i> Top 5% industry
              </div>
            </div>
          </div>

          {/* Graphs Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Revenue Growth */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-lg text-gray-800">
                  Revenue Growth
                </h3>
                <button className="text-gray-400 hover:text-gray-600">
                  <i className="bi bi-three-dots-vertical"></i>
                </button>
              </div>

              <div className="relative h-64 w-full flex items-end justify-between px-2 gap-4">
                {/* Simulated Bar Chart */}
                {[40, 65, 30, 85, 55, 90].map((h, i) => (
                  <div
                    key={i}
                    className="w-full bg-gray-100 rounded-t-xl relative group h-full flex items-end"
                  >
                    <div
                      className={`w-full bg-blue-500 rounded-t-xl transition-all duration-500 hover:bg-blue-600 relative group-hover:shadow-lg shadow-blue-200`}
                      style={{ height: `${h}%` }}
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        ${h}k
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4 text-xs font-medium text-gray-400 uppercase tracking-wide">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
              </div>
            </div>

            {/* Students by Course */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-lg text-gray-800">
                  Students by Course
                </h3>
                <button className="text-gray-400 hover:text-gray-600">
                  <i className="bi bi-filter"></i> Filter
                </button>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <i className="bi bi-filetype-js text-yellow-500"></i>{" "}
                      JavaScript
                    </span>
                    <span className="text-sm font-bold text-gray-900">74%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-yellow-500 h-full rounded-full w-3/4 shadow-sm"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <i className="bi bi-filetype-py text-blue-500"></i> Python
                    </span>
                    <span className="text-sm font-bold text-gray-900">66%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full rounded-full w-2/3 shadow-sm"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <i className="bi bi-filetype-jsx text-cyan-500"></i> React
                    </span>
                    <span className="text-sm font-bold text-gray-900">50%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-cyan-500 h-full rounded-full w-1/2 shadow-sm"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <i className="bi bi-server text-green-500"></i> Node.js
                    </span>
                    <span className="text-sm font-bold text-gray-900">33%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-green-500 h-full rounded-full w-1/3 shadow-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <h3 className="font-bold text-lg text-gray-800">
                Recent Enrollments
              </h3>
              <button className="text-blue-600 text-sm font-semibold hover:underline">
                View All
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50/50 text-gray-500 uppercase tracking-wider font-semibold text-xs border-b border-gray-100">
                  <tr>
                    <th className="px-6 py-4">Student</th>
                    <th className="px-6 py-4">Course</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-blue-50/30 transition-colors group cursor-pointer">
                    <td className="px-6 py-4 font-medium text-gray-800 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-xs ring-2 ring-white shadow-sm">
                        JD
                      </div>
                      John Doe
                    </td>
                    <td className="px-6 py-4 text-gray-600">React Basics</td>
                    <td className="px-6 py-4 text-gray-500">2025-09-15</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-600 border border-green-200 shadow-sm">
                        Active
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50/30 transition-colors group cursor-pointer">
                    <td className="px-6 py-4 font-medium text-gray-800 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs ring-2 ring-white shadow-sm">
                        JS
                      </div>
                      Jane Smith
                    </td>
                    <td className="px-6 py-4 text-gray-600">Python Advanced</td>
                    <td className="px-6 py-4 text-gray-500">2025-09-12</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-600 border border-yellow-200 shadow-sm">
                        Pending
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50/30 transition-colors group cursor-pointer">
                    <td className="px-6 py-4 font-medium text-gray-800 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs ring-2 ring-white shadow-sm">
                        ML
                      </div>
                      Michael Lee
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      JavaScript Essentials
                    </td>
                    <td className="px-6 py-4 text-gray-500">2025-09-10</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-600 border border-red-200 shadow-sm">
                        Canceled
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
