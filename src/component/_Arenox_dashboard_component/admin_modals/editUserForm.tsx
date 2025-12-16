import { UserType } from "@/utils/data/fetchdata/userData";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

interface EditUserFormProps {
  onClose: () => void;
  user?: UserType | null;
}

export default function Edit_user_form({ onClose, user }: EditUserFormProps) {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phone: "",
    role: "student",
    birthDate: "",
    gender: "",
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    lat: "",
    lng: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        firstname: user.firstname || "",
        lastname: user.lastname || "",
        username: user.login?.username || "",
        email: user.email || "",
        phone: user.phone || "",
        role: user.userType || "student", // Mapping userType to role
        birthDate: user.birthDate || "",
        gender: "", // Not in UserType currently
        street: user.address?.street || "",
        suite: user.address?.suite || "",
        city: user.address?.city || "",
        zipcode: user.address?.zipcode || "",
        lat: user.address?.geo?.lat || "",
        lng: user.address?.geo?.lng || "",
      });
    }
  }, [user]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user?.id) return;

    try {
      const res = await fetch("/api/user", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: user.id,
          // Add other fields if the API supports them in the future
          ...formData,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("User updated successfully");
        onClose();
        // Optional: Trigger a refresh of the user list here if needed
        // Since we don't have a callback for refresh, the list might be stale
        window.location.reload();
      } else {
        toast.error(data.message || "Failed to update user");
      }
    } catch (error) {
      toast.error("An error occurred");
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
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
            <section className="bg-white p-2 rounded-2xl shadow-sm ring ring-black/5 hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-700 mb-5 border-b border-gray-200 pb-2">
                🔑 Permissions
              </h3>
              <div className="gap-4">
                <label className="block text-sm font-medium text-gray-700">
                  Role
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full p-2 rounded border-b border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                >
                  <option value="student">Student</option>
                  <option value="instructor">Instructor</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </section>
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              placeholder="First Name"
              className="w-full p-2 rounded border-b border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            />
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-full p-2 rounded border-b border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            />
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full p-2 rounded border-b border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full p-2 rounded border-b border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+2348101065034"
              className="w-full p-2 rounded border-b border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-2 rounded border-b border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            >
              <option value="">Choose Your Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
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
              value={formData.street}
              onChange={handleChange}
              placeholder="Street"
              className="w-full p-2 rounded border-b border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            />
            <input
              type="text"
              name="suite"
              value={formData.suite}
              onChange={handleChange}
              placeholder="Suite"
              className="w-full p-2 rounded border-b border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              className="w-full p-2 rounded border-b border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            />
            <input
              type="text"
              name="zipcode"
              value={formData.zipcode}
              onChange={handleChange}
              placeholder="Zip Code"
              className="w-full p-2 rounded border-b border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            />
            <input
              type="text"
              name="lat"
              value={formData.lat}
              onChange={handleChange}
              placeholder="Latitude"
              className="w-full p-2 rounded border-b border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            />
            <input
              type="text"
              name="lng"
              value={formData.lng}
              onChange={handleChange}
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
