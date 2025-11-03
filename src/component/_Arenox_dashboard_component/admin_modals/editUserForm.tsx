import React from "react";

interface EditUserFormProps {
  onClose: () => void;
}
export default function Edit_user_form({ onClose }: EditUserFormProps) {
  return (
    <form
      method="update"
      action="save"
      className="max-w-5xl mx-auto bg-white backdrop-blur-md border border-gray-200 p-5 rounded-3xl shadow-lg space-y-10 transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-4">
        <h2 className="text-3xl font-semibold text-gray-800">
          🧾 Edit User Information
        </h2>
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2  text-gray-700 rounded-lg hover:opacity-90 transition"
        >
          <i className="bi bi-x-lg text-xl"></i>
        </button>
      </div>

      {/* Two-column sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Basic Info */}
        <section className="bg-white p-2 rounded-2xl shadow-sm ring ring-black/5 hover:shadow-md transition">
          <h3 className="text-lg font-semibold text-gray-700 mb-5 border-b border-gray-200 pb-2">
            👤 Basic Info
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              className="w-full p-2 rounded border-b border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              className="w-full p-2 rounded border-b border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="w-full p-2 rounded border-b border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full p-2 rounded border-b border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            />
            <input
              type="tel"
              name="phone"
              placeholder="+2348101065034"
              className="w-full p-2 rounded border-b border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            />
            <select className="w-full p-2 rounded border-b border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none transition">
              <option>Choose Your Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              type="date"
              name="birthDate"
              className="w-full p-2 rounded border-b border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            />
          </div>
        </section>

        {/* Address Info */}
        <section className="bg-white p-2 rounded-2xl shadow-sm ring ring-black/5 hover:shadow-md transition">
          <h3 className="text-lg font-semibold text-gray-700 mb-5 border-b border-gray-200 pb-2">
            📍 Address Info
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="street"
              placeholder="Street"
              className="w-full p-2 rounded border-b border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            />
            <input
              type="text"
              name="suite"
              placeholder="Suite"
              className="w-full p-2 rounded border-b border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              className="w-full p-2 rounded border-b border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            />
            <input
              type="text"
              name="zipcode"
              placeholder="Zip Code"
              className="w-full p-2 rounded border-b border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            />
            <input
              type="text"
              name="lat"
              placeholder="Latitude"
              className="w-full p-2 rounded border-b border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            />
            <input
              type="text"
              name="lng"
              placeholder="Longitude"
              className="w-full p-2 rounded border-b border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            />
          </div>
        </section>
      </div>

      {/* Submit */}
      <div className="pt-4">
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition"
        >
          Save
        </button>
      </div>
    </form>
  );
}
