import React from "react";

/* @ admin-settings-component : admin settings page with profile, preferences, and security sections */

export default function Admin_setting() {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
        <p className="text-gray-500 text-sm mt-1">
          Manage your account preferences and security settings.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Profile */}
        <div className="lg:col-span-2 space-y-8">
          {/* Profile Card */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-50">
              <div className="w-16 h-16 rounded-full bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-blue-500/30">
                JD
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-800">John Doe</h2>
                <p className="text-sm text-gray-500">Administrator</p>
              </div>
              <button className="ml-auto px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors">
                Change Avatar
              </button>
            </div>

            <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <i className="bi bi-person-badge text-blue-500"></i> Personal
              Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue="John Doe"
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all text-gray-700"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue="admin@arenox.com"
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all text-gray-700"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all text-gray-700"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Role
                </label>
                <input
                  type="text"
                  value="Super Admin"
                  disabled
                  className="w-full px-4 py-2.5 bg-gray-100 border border-gray-200 rounded-xl text-gray-500 cursor-not-allowed"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-lg shadow-blue-500/20 hover:-translate-y-0.5 transition-all">
                Save Changes
              </button>
            </div>
          </div>

          {/* Security Card */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <i className="bi bi-shield-lock text-orange-500"></i> Security
            </h3>
            <div className="grid grid-cols-1 gap-5 max-w-md">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Current Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    New Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button className="px-6 py-2.5 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-xl shadow-lg shadow-gray-500/20 hover:-translate-y-0.5 transition-all">
                Update Password
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Preferences */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 sticky top-6">
            <h3 className="font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <i className="bi bi-sliders text-purple-500"></i> Preferences
            </h3>

            <div className="space-y-6">
              <div className="flex items-center justify-between group cursor-pointer">
                <div>
                  <p className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                    Dark Mode
                  </p>
                  <p className="text-xs text-gray-500">Switch to dark theme</p>
                </div>
                <div className="w-11 h-6 bg-gray-200 rounded-full relative transition-colors duration-300">
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300"></div>
                </div>
              </div>
              <div className="flex items-center justify-between group cursor-pointer">
                <div>
                  <p className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                    Notifications
                  </p>
                  <p className="text-xs text-gray-500">Email updates</p>
                </div>
                <div className="w-11 h-6 bg-blue-600 rounded-full relative transition-colors duration-300">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300"></div>
                </div>
              </div>
              <div className="flex items-center justify-between group cursor-pointer">
                <div>
                  <p className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                    2FA Auth
                  </p>
                  <p className="text-xs text-gray-500">Enhanced security</p>
                </div>
                <div className="w-11 h-6 bg-gray-200 rounded-full relative transition-colors duration-300">
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300"></div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-50">
              <button className="w-full py-2.5 text-red-600 bg-red-50 hover:bg-red-100 font-medium rounded-xl transition-colors flex items-center justify-center gap-2">
                <i className="bi bi-box-arrow-right"></i> Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
