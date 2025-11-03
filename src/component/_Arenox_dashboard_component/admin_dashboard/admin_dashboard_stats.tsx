import React from "react";

export default function Admin_dashboard_stats() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
        <div className="flex items-center justify-between bg-sky-100 p-6 rounded-lg shadow">
          <div>
            <p className="text-sm text-gray-500 ">Total Students</p>
            <h2 className="text-2xl font-bold text-gray-800">2,847</h2>
          </div>
          <div className="relative inline-block text-sky-600 text-medium">
            <i className="bi bi-person text-4xl"></i>
            <i className="bi bi-mortarboard-fill absolute top-[-0.25em] right-[-0.25em] text-[0.75em] "></i>
          </div>
        </div>

        <div className="flex items-center justify-between bg-purple-100 p-6 rounded-lg shadow">
          <div>
            {" "}
            <p className="text-sm text-gray-500">Total Tutor</p>
            <h2 className="text-2xl font-bold text-gray-800">2,847</h2>
          </div>
          <div>
            <i className="bi bi-person text-purple-500 text-4xl"></i>
          </div>
        </div>

        <div className="flex items-center justify-between bg-green-100 p-6 rounded-lg shadow">
          <div>
            <p className="text-sm text-gray-600">Active Courses</p>
            <h2 className="text-2xl font-bold text-gray-800">156</h2>
          </div>
          <div>
            <i className="bi bi-journal-bookmark text-green-500 text-3xl"></i>
          </div>
        </div>

        <div className="flex items-center justify-between bg-orange-100 p-6 rounded-lg shadow">
          <div>
            <p className="text-sm text-gray-500">Revenue</p>
            <h2 className="text-2xl font-bold text-gray-800">$84,350</h2>
          </div>
          <div>
            <i className="bi bi-cash-coin text-3xl text-orange-500"></i>{" "}
          </div>
        </div>

        <div className="flex items-center justify-between bg-blue-100 p-6 rounded-lg shadow">
          <div>
            <p className="text-sm text-gray-500">Completion Rate</p>
            <h2 className="text-2xl font-bold text-gray-800">87%</h2>
          </div>
          <div>
            <i className="bi bi-speedometer2 text-blue-600 text-3xl"></i>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
