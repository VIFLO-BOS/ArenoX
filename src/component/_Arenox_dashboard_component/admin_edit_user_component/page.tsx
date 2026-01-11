"use client";
import { UserType } from "@/utils/data/fetchdata/userData";
import { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { upload } from "@vercel/blob/client";
import Link from "next/link";

/* @ form-props-interface : define props for edit user form component */

interface EditUserFormProps {
  userId?: string | null;
}

/* @ edit-user-form : form component for editing existing user information */

export default function Edit_user_form({ userId }: EditUserFormProps) {
  /* @ State Vairable : Declaring ALL state variable */
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    role: "student",
    birthDate: "",
    gender: "",
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    image: "",
  });
  //   state for user image
  const [avatarUrl, setAvatarUrl] = useState<string>("");
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  //   state for user data
  const [userData, setUserData] = useState<UserType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  /* @ Fetch User Data : Fetch user data when userID changes */

  useEffect(() => {
    // reset State
    setUserData(null);
    setError(null);
    setLoading(true);

    // Validation
    if (!userId || userId === "undefined" || userId.trim() === "") {
      setError("Invalid user ID");
      setLoading(false);
      return;
    }

    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/data/users`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        const user = data.data.find((user: UserType) => user._id === userId);
        setUserData(user);
        setLoading(false);
      } catch (error: any) {
        if (error) {
          error instanceof Error
            ? setError(error.message)
            : setError("An error occurred");
        }
        setLoading(false);
        setUploading(false);
      }
    };
    fetchUser();
  }, [userId]);

  /*Form Population: Populate form data when user data changes*/

  useEffect(() => {
    if (userData) {
      setFormData({
        firstname: userData?.firstName || "",
        lastname: userData?.lastName || "",
        username: userData?.username || "",
        email: userData?.email || "",
        phone: userData?.phone || "",
        website: userData?.website || "",
        role: userData?.role|| "student",
        birthDate: userData?.birthDate || "",
        gender: userData?.gender || "",
        street: userData?.address?.street || "",
        suite: userData?.address?.suite || "",
        city: userData?.address?.city || "",
        zipcode: userData?.address?.zipcode || "",
        image: userData?.image || "",
      });
      setAvatarUrl(userData?.image || "");
    }
  }, [userData]);

  /* @ handle-change : update form state when input values change */

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /*@ handle_avatar_Upload: the function to upload avatar*/
  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLElement>) => {
    e?.preventDefault();

    if (!inputFileRef?.current?.files) {
      toast.error("No image file selected");
      return;
    }

    const file = inputFileRef.current.files[0];

    //     validate file size (5mb max)

    if (file.size > 5 * 1024 * 1024) {
      toast.error("File size must be less than 5mb");
      return;
    }

    setUploading(true);

    try {
      const newBlob = await upload(file.name, file, {
        access: "public",
        handleUploadUrl: "/api/avatar/upload",
      });

      setAvatarUrl(newBlob.url);
      setFormData((prev) => ({ ...prev, avatar: newBlob.url }));
      toast.success("Avatar upload successfully!");
    } catch (error) {
      console.error("Upload image error:", error);
      toast.error("Failed to upload avatar");
    } finally {
      setUploading(false);
    }
  };

  /* @ handle-submit : submit updated user data to API */

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userData?._id) return;

    try {
      const res = await fetch("/api/user", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: userData._id,
          ...formData,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("User updated successfully");
        window.location.reload();
      } else {
        toast.error(data.message || "Failed to update user");
      }
    } catch (error) {
      toast.error("An error occurred");
      console.error(error);
    }
  };

  /* @ loading-state : show loading skeleton while fetching user data */
  if (loading) {
    return <div>Loading...</div>;
  }

  /* @ error-state : show error message if user data fetch fails */
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 md:p-8 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="bi bi-exclamation-triangle text-red-600 text-2xl"></i>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Error Loading User
          </h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <Link
            href="/dashboard/admin/userlist"
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
          >
            Back to User List
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen ">
      <div className="mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* @ form-header : clean header with title and close button */}
          <div className="bg-white px-6 py-5 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-gray-800">
                  Edit User Profile
                </h1>
                <p className="text-gray-500 text-xs md:text-sm mt-1">
                  Update user information and settings
                </p>
              </div>
              <Link
                href="/dashboard/admin/userlist"
                className="w-10 h-10 bg-gray-50 hover:bg-gray-100 rounded-full flex items-center justify-center transition-all duration-300 group shadow-sm border border-gray-200"
              >
                <i className="bi bi-x-lg text-gray-500 group-hover:rotate-90 transition-transform duration-300"></i>
              </Link>
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-8">
            {/* @ avatar-section : circular avatar preview with upload functionality */}
            <div className="flex flex-col items-center">
              <div className="relative group">
                <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-blue-100 shadow-lg">
                  {avatarUrl || formData.image ? (
                    <img
                      src={avatarUrl || formData.image}
                      alt="User avatar"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
                      <i className="bi bi-person text-white text-5xl"></i>
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => inputFileRef.current?.click()}
                  disabled={uploading}
                  className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {uploading ? (
                    <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <i className="bi bi-camera text-white text-2xl"></i>
                  )}
                </button>
              </div>
              <input
                type="file"
                ref={inputFileRef}
                accept="image/jpeg,image/png,image/webp,image/gif"
                onChange={handleAvatarUpload}
                className="hidden"
                disabled={uploading}
              />
              <p className="text-sm text-gray-500 mt-3">
                {uploading
                  ? "Uploading..."
                  : "Click avatar to upload new photo"}
              </p>
            </div>

            {/* @ form-sections : organized sections for user information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* @ basic-info-section : personal information fields */}
              <div className="space-y-6">
                <div className="p-6 border border-gray-200 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                      <i className="bi bi-person-badge text-blue-600"></i>
                    </div>
                    Personal Information
                  </h3>
                  <div className="space-y-4">
                    {/* @ firstname-input : text input for user's first name */}
                    <div className="relative">
                      <input
                        type="text"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                        placeholder=" "
                        className="peer w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300"
                      />
                      <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600 transition-all duration-300">
                        First Name
                      </label>
                    </div>

                    {/* @ lastname-input : text input for user's last name */}
                    <div className="relative">
                      <input
                        type="text"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                        placeholder=" "
                        className="peer w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300"
                      />
                      <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600 transition-all duration-300">
                        Last Name
                      </label>
                    </div>

                    {/* @ username-input : text input for user's unique username */}
                    <div className="relative">
                      <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder=" "
                        className="peer w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300"
                      />
                      <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600 transition-all duration-300">
                        Username
                      </label>
                    </div>

                    {/* @ birthdate-input : date picker for user's date of birth */}
                    <div className="relative">
                      <input
                        type="date"
                        name="birthDate"
                        value={formData.birthDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300"
                      />
                      <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-500">
                        Birth Date
                      </label>
                    </div>

                    {/* @ gender-selector : dropdown to select user's gender */}
                    <div className="relative">
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 appearance-none bg-white"
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                      <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-500">
                        Gender
                      </label>
                      <i className="bi bi-chevron-down absolute right-4 top-4 text-gray-400 pointer-events-none"></i>
                    </div>
                  </div>
                </div>

                {/* @ role-section : user role and permissions */}
                <div className="p-6 border border-gray-200 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center">
                      <i className="bi bi-shield-check text-purple-600"></i>
                    </div>
                    Role & Permissions
                  </h3>
                  {/* @ role-selector : dropdown to assign user role */}
                  <div className="relative">
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-300 appearance-none bg-white"
                    >
                      <option value="student">Student</option>
                      <option value="instructor">Instructor</option>
                      <option value="admin">Admin</option>
                    </select>
                    <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-500">
                      User Role
                    </label>
                    <i className="bi bi-chevron-down absolute right-4 top-4 text-gray-400 pointer-events-none"></i>
                  </div>
                </div>
              </div>

              {/* @ contact-info-section : contact and address information */}
              <div className="space-y-6">
                <div className="p-6 border border-gray-200 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                      <i className="bi bi-envelope text-green-600"></i>
                    </div>
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    {/* @ email-input : email input for user's email address */}
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder=" "
                        className="peer w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all duration-300"
                      />
                      <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-green-600 transition-all duration-300">
                        Email Address
                      </label>
                    </div>

                    {/* @ phone-input : telephone input for user's phone number */}
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder=" "
                        className="peer w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all duration-300"
                      />
                      <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-green-600 transition-all duration-300">
                        Phone Number
                      </label>
                    </div>

                    {/* @ website-input : text input for user's website URL */}
                    <div className="relative">
                      <input
                        type="text"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder=" "
                        className="peer w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all duration-300"
                      />
                      <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-green-600 transition-all duration-300">
                        Website
                      </label>
                    </div>
                  </div>
                </div>

                {/* @ address-info-section : address details */}
                <div className="p-6 border border-gray-200 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center">
                      <i className="bi bi-geo-alt text-orange-600"></i>
                    </div>
                    Address Information
                  </h3>
                  <div className="space-y-4">
                    {/* @ street-input : text input for user's street address */}
                    <div className="relative">
                      <input
                        type="text"
                        name="street"
                        value={formData.street}
                        onChange={handleChange}
                        placeholder=" "
                        className="peer w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-300"
                      />
                      <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-orange-600 transition-all duration-300">
                        Street Address
                      </label>
                    </div>

                    {/* @ suite-input : text input for user's apartment/suite number */}
                    <div className="relative">
                      <input
                        type="text"
                        name="suite"
                        value={formData.suite}
                        onChange={handleChange}
                        placeholder=" "
                        className="peer w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-300"
                      />
                      <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-orange-600 transition-all duration-300">
                        Suite/Apt
                      </label>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {/* @ city-input : text input for user's city */}
                      <div className="relative">
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder=" "
                          className="peer w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-300"
                        />
                        <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-orange-600 transition-all duration-300">
                          City
                        </label>
                      </div>

                      {/* @ zipcode-input : text input for user's postal/zip code */}
                      <div className="relative">
                        <input
                          type="text"
                          name="zipcode"
                          value={formData.zipcode}
                          onChange={handleChange}
                          placeholder=" "
                          className="peer w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-300"
                        />
                        <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-orange-600 transition-all duration-300">
                          Zip Code
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* @ action-buttons : save and cancel buttons */}
            <div className="flex gap-4 pt-4">
              <Link
                href="/dashboard/admin/userlist"
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-4 rounded-xl font-semibold transition-all duration-300 text-center"
              >
                Cancel
              </Link>
              {/* @ save-button : submit button to save all user changes */}
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                    Saving...
                  </>
                ) : (
                  <>
                    <i className="bi bi-check-circle"></i>
                    Save Changes
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
