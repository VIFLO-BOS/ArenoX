import React from "react";

export default function Admin_dashboard_stats() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
        <div className="flex flex-col justify-between bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
          <div className="flex justify-between items-start mb-3">
            <div className="p-3 bg-sky-50 rounded-xl text-sky-600 group-hover:scale-110 transition-transform">
              <i className="bi bi-people-fill text-xl"></i>
            </div>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-lg">
              +12%
            </span>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mt-1">2,847</h2>
            <p className="text-sm text-gray-500 font-medium">Total Students</p>
          </div>
        </div>

        <div className="flex flex-col justify-between bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
          <div className="flex justify-between items-start mb-3">
            <div className="p-3 bg-purple-50 rounded-xl text-purple-600 group-hover:scale-110 transition-transform">
              <i className="bi bi-person-video3 text-xl"></i>
            </div>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-lg">
              +5%
            </span>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mt-1">142</h2>
            <p className="text-sm text-gray-500 font-medium">Total Tutors</p>
          </div>
        </div>

        <div className="flex flex-col justify-between bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
          <div className="flex justify-between items-start mb-3">
            <div className="p-3 bg-green-50 rounded-xl text-green-600 group-hover:scale-110 transition-transform">
              <i className="bi bi-journal-check text-xl"></i>
            </div>
            <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-lg">
              Active
            </span>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mt-1">156</h2>
            <p className="text-sm text-gray-500 font-medium">Active Courses</p>
          </div>
        </div>

        <div className="flex flex-col justify-between bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
          <div className="flex justify-between items-start mb-3">
            <div className="p-3 bg-orange-50 rounded-xl text-orange-600 group-hover:scale-110 transition-transform">
              <i className="bi bi-wallet2 text-xl"></i>
            </div>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-lg">
              +24%
            </span>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mt-1">$84k</h2>
            <p className="text-sm text-gray-500 font-medium">Total Revenue</p>
          </div>
        </div>

        <div className="flex flex-col justify-between bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
          <div className="flex justify-between items-start mb-3">
            <div className="p-3 bg-blue-50 rounded-xl text-blue-600 group-hover:scale-110 transition-transform">
              <i className="bi bi-graph-up-arrow text-xl"></i>
            </div>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg">
              High
            </span>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mt-1">87%</h2>
            <p className="text-sm text-gray-500 font-medium">Completion Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
}
