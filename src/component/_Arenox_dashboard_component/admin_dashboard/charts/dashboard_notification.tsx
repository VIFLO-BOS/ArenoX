import React from "react";

export default function Dashboard_notification() {
  return (
    <div>
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full">
        <h3 className="font-bold text-lg text-gray-800 mb-6">Notifications</h3>
        <div className="overflow-x-auto h-64 scrollbar-thin scrollbar-thumb-gray-200">
          <table className="min-w-full text-sm text-left text-gray-600">
            <thead className="bg-gray-50 text-gray-700 font-semibold sticky top-0">
              <tr>
                <th className="px-5 py-3 rounded-l-lg">Type</th>
                <th className="px-5 py-3">Message</th>
                <th className="px-5 py-3 rounded-r-lg">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-blue-50/50 transition-colors">
                <td className="px-5 py-4 text-xl">📢</td>
                <td className="px-5 py-4 font-medium text-gray-800">
                  New student registered
                </td>
                <td className="px-5 py-4 text-blue-600 font-medium bg-blue-50/30 rounded-lg m-2">
                  John Doe
                </td>
              </tr>
              <tr className="hover:bg-yellow-50/50 transition-colors">
                <td className="px-5 py-4 text-xl">⚠️</td>
                <td className="px-5 py-4 font-medium text-gray-800">
                  Course deadline approaching
                </td>
                <td className="px-5 py-4 text-yellow-600 font-medium bg-yellow-50/30 rounded-lg m-2">
                  Python Basics
                </td>
              </tr>
              <tr className="hover:bg-green-50/50 transition-colors">
                <td className="px-5 py-4 text-xl">💰</td>
                <td className="px-5 py-4 font-medium text-gray-800">
                  Revenue milestone reached
                </td>
                <td className="px-5 py-4 text-green-600 font-medium bg-green-50/30 rounded-lg m-2">
                  $80,000
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
