import { UserType } from "@/utils/data/fetchdata/userData";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

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
    role: "student",
    birthDate: "",
    gender: "",
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    
  });
  const [userData, setUserData] = useState<UserType | null>(null);
  const [error,setError] = useState<string | null>(null);
  const [loading,setLoading] = useState<boolean>(false);

  /* @ Fetch User Data : Fetch user data when userID changes */
  
  useEffect(() =>{
    // reset State
    setUserData(null);
    setError(null);
    setLoading(true);
      

    // Validation
    if(!userId || userId === "undefined" || userId.trim() === ""){
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
        const user  = data.data.find((user:UserType) => user._id === userId);
        setUserData(user);


      } catch (error: any) {
        if(error){
          error instanceof Error ? setError(error.message) : setError("An error occurred");
        }
        setLoading(false);
      }
    }
    fetchUser();
  }, [userId]);




/*Form Population: Populate form data when user data changes*/ 

useEffect(() => {
  if(userData){
    setFormData({
      firstname: userData?.firstName || "",
        lastname: userData?.lastName || "",
        username: userData?.login?.username || "",
        email: userData?.email || "",
        phone: userData?.phone || "",
        role: userData?.userType || "student",
        birthDate: userData?.birthDate || "",
        gender: "",
        street: userData?.address?.street || "",
        suite: userData?.address?.suite || "",
        city: userData?.address?.city || "",
        zipcode: userData?.address?.zipcode || "",
       
    })
  }
},[userData])
  
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

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-5xl mx-auto bg-white backdrop-blur-md border border-gray-200 p-5 rounded-3xl shadow-lg space-y-10 transition-all duration-300"
    >
      /* @ form-header : header with title and close button */
      <div className="flex items-center justify-between border-b border-gray-200 pb-4">
        <h2 className="text-3xl font-semibold text-gray-800">
          🧾 Edit User Information
        </h2>
        <button
          type="button"
          className="px-4 py-2  text-gray-700 rounded-lg hover:opacity-90 transition"
        >
          <i className="bi bi-x-lg text-xl"></i>
        </button>
      </div>

      /* @ form-sections : two-column layout for basic info and address */
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        /* @ basic-info-section : form fields for user's basic information and role */
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

        /* @ address-info-section : form fields for user's address details */
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
           
          </div>
        </section>
      </div>

      /* @ submit-button : save changes button */
      <div className="pt-4">
        <button
          type="submit"
          className="w-full bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition"
        >
          Save
        </button>
      </div>
    </form>
  );
}

