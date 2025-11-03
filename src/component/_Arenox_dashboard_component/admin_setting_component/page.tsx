import React from "react";

export default function Admin_setting() {
  return (
    <div className="bg-white rounded-lg p-4 min-h-screen w-full">
      <div className="space-y-6">
        {/* Profile */}
        <div className="p-4 bg-gray-50 rounded-xl shadow">
          <h3 className="font-medium mb-3 text-sm">Profile Settings</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <input
              type="text"
              placeholder="Full Name"
              className="border rounded-lg p-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="border rounded-lg p-2"
            />
          </div>
          <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm">
            Save Changes
          </button>
        </div>

        {/* Preferences */}
        <div className="p-4 bg-gray-50 rounded-xl shadow">
          <h3 className="font-medium mb-3 text-sm">Preferences</h3>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" /> Enable dark mode
          </label>
          <label className="flex items-center gap-2 text-sm mt-2">
            <input type="checkbox" /> Receive email notifications
          </label>
        </div>

        {/* Security */}
        <div className="p-4 bg-gray-50 rounded-xl shadow">
          <h3 className="font-medium mb-3 text-sm">Security</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <input
              type="password"
              placeholder="New Password"
              className="border rounded-lg p-2"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="border rounded-lg p-2"
            />
          </div>
          <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm">
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
}
