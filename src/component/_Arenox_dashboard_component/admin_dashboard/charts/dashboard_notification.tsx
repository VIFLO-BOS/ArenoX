import React from 'react'

export default function Dashboard_notification() {
  return (
    <div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold text-gray-700 mb-4">Notifications</h3>
        <div className="overflow-x-auto h-62">
          <table className="min-w-full text-sm text-left text-gray-600 border">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-2 border">Icon</th>
                <th className="px-4 py-2 border">Message</th>
                <th className="px-4 py-2 border">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border text-lg">📢</td>
                <td className="px-4 py-2 border">New student registered</td>
                <td className="px-4 py-2 border font-medium">John Doe</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border text-lg">⚠️</td>
                <td className="px-4 py-2 border">Course deadline approaching</td>
                <td className="px-4 py-2 border font-medium">Python Basics</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border text-lg">💰</td>
                <td className="px-4 py-2 border">Revenue milestone reached</td>
                <td className="px-4 py-2 border font-medium">$80,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}
