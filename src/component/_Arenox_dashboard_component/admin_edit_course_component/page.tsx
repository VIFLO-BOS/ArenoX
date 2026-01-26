"use client";
import { coursesTypes } from "@/utils/types/course/course";
import { upload } from "@vercel/blob/client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

export default function Edit_course_form({ courseId }: { courseId: string }) {
  console.log(courseId);
  /* @ State Vairable : Decla)ring ALL state variable */
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    paragraph: "",
    instructor: "",
    hrs: 0,
    courseImageUrl: "",
    category: "",
    language: "",
    price: "",
    level: "",
    rating: "",
  });
  //   state for user image
  const [avatarUrl, setAvatarUrl] = useState<string>("");
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  //   state for user data
  const [courseData, setCourseData] = useState<coursesTypes | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  /* @ Fetch User Data : Fetch user data when userID changes */
  useEffect(() => {
    // reset State
    setCourseData(null);
    setError(null);
    setLoading(true);

    // Validation
    if (!courseId || courseId === "undefined" || courseId.trim() === "") {
      setError("Invalid user ID");
      setLoading(false);
      return;
    }

    const fetchCourse = async () => {
      try {
        const response = await fetch(`/api/data/courses`, {
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
        const course = data.data.find(
          (course: coursesTypes) => course._id === courseId,
        );
        setCourseData(course);
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
    fetchCourse();
  }, [courseId]);

  /* @ Form Population : Populate form data when user data changes */
  useEffect(() => {
    if (courseData) {
      setFormData({
        title: courseData?.title || "",
        description: courseData?.description || "",
        paragraph: courseData?.paragraph || "",
        instructor: courseData?.tutor?.name || "",
        courseImageUrl: courseData?.courseImageUrl || "",
        category: courseData?.category || "",
        language: courseData?.language || "",
        price: courseData?.price || "",
        level: courseData?.level || "",
        hrs: courseData?.hrs || 0,
        rating: courseData?.rating || "",
      });
      setAvatarUrl(courseData?.courseImageUrl || "");
    }
  }, [courseData]);

  /* @ handle-change : update form state when input values change */

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
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
    if (!courseData?._id) return;

    try {
      const res = await fetch("/api/course", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: courseData._id,
          ...formData,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Course updated successfully");
        window.location.reload();
      } else {
        toast.error(data.message || "Failed to update course");
      }
    } catch (error) {
      toast.error("An error occurred");
      console.error(error);
    }
  };

  /* @ loading-state : show loading skeleton while fetching user data */
  if (loading) {
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 md:p-8 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <i className="bi bi-exclamation-triangle text-red-600 text-2xl"></i>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Loading....</h2>
      </div>
    </div>;
  }

  /* @ error-state : show error message if user data fetch fails */
  if (error) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 md:p-8 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="bi bi-exclamation-triangle text-red-600 text-2xl"></i>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Error Loading Course
          </h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <Link
            href={`/dashboard/admin/courses/view/${courseData?._id}`}
            className="inline-block bg-linear-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
          >
            Back to Course view
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
                  Edit Course
                </h1>
                <p className="text-gray-500 text-xs md:text-sm mt-1">
                  Update Course information
                </p>
              </div>
              <Link
                href={`/dashboard/admin/courses/view/${courseId}`}
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
                  {avatarUrl || formData.courseImageUrl ? (
                    <img
                      src={avatarUrl || formData.courseImageUrl}
                      alt="User avatar"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-linear-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
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

            {/* @ form-sections : organized sections for course information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* @ left-column : main course details */}
              <div className="space-y-6">
                <div className="p-6 border border-gray-200 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                      <i className="bi bi-journal-text text-blue-600"></i>
                    </div>
                    Course Details
                  </h3>
                  <div className="space-y-4">
                    {/* @ title-input */}
                    <div className="relative">
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder=" "
                        className="peer w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300"
                      />
                      <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600 transition-all duration-300">
                        Course Title
                      </label>
                    </div>

                    {/* @ category-input */}
                    <div className="relative">
                      <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        placeholder=" "
                        className="peer w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300"
                      />
                      <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600 transition-all duration-300">
                        Category
                      </label>
                    </div>

                    {/* @ language-input */}
                    <div className="relative">
                      <input
                        type="text"
                        name="language"
                        value={formData.language}
                        onChange={handleChange}
                        placeholder=" "
                        className="peer w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300"
                      />
                      <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600 transition-all duration-300">
                        Language
                      </label>
                    </div>

                    {/* @ description-input */}
                    <div className="relative mb-5">
                      <textarea
                        name="paragraph"
                        value={formData.paragraph}
                        onChange={handleChange}
                        rows={5}
                        placeholder=" "
                        className="peer w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 resize-none"
                      />
                      <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600 transition-all duration-300">
                        Short Description
                      </label>
                    </div>

                    {/* @ paragraph-input */}
                    <div className="relative mb-5">
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={10}
                        placeholder=" "
                        className="peer w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 resize-none"
                      />
                      <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600 transition-all duration-300">
                        Detailed Description
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* @ right-column : metadata and specifics */}
              <div className="space-y-6">
                <div className="p-6 border border-gray-200 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center">
                      <i className="bi bi-sliders text-purple-600"></i>
                    </div>
                    Course Specifics
                  </h3>
                  <div className="space-y-4">
                    {/* @ instructor-input */}
                    <div className="relative">
                      <input
                        type="text"
                        name="instructor"
                        value={formData.instructor}
                        onChange={handleChange}
                        placeholder=" "
                        className="peer w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-300"
                      />
                      <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-600 transition-all duration-300">
                        Instructor Name
                      </label>
                    </div>

                    {/* @ level-selector */}
                    <div className="relative">
                      <select
                        name="level"
                        value={formData.level}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-300 appearance-none bg-white"
                      >
                        <option value="">Select Level</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                      </select>
                      <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-500">
                        Level
                      </label>
                      <i className="bi bi-chevron-down absolute right-4 top-4 text-gray-400 pointer-events-none"></i>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {/* @ hours-input */}
                      <div className="relative">
                        <input
                          type="number"
                          name="hrs"
                          value={formData.hrs}
                          onChange={handleChange}
                          placeholder=" "
                          className="peer w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-300"
                        />
                        <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-600 transition-all duration-300">
                          Duration (Hrs)
                        </label>
                      </div>

                      {/* @ rating-input */}
                      <div className="relative">
                        <input
                          type="number"
                          step="0.1"
                          max="5"
                          name="rating"
                          value={formData.rating}
                          onChange={handleChange}
                          placeholder=" "
                          className="peer w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-300"
                        />
                        <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-600 transition-all duration-300">
                          Rating
                        </label>
                      </div>
                    </div>

                    {/* @ price-input */}
                    <div className="relative">
                      <input
                        type="text"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder=" "
                        className="peer w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-300"
                      />
                      <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-600 transition-all duration-300">
                        Price ($)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* @ action-buttons : save and cancel buttons */}
            <div className="flex gap-4 pt-4">
              <Link
                href={`/dashboard/admin/courses/view/${courseId}`}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-4 rounded-xl font-semibold transition-all duration-300 text-center"
              >
                Cancel
              </Link>
              {/* @ save-button : submit button to save all user changes */}
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
