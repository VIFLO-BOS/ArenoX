import React, { useRef } from "react";
import toast from "react-hot-toast";

interface courseFormModalProps {
  onClose: () => void;
}
export default function Course_form_modal({ onClose }: courseFormModalProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("/api/courses", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        toast.success(result.message || "Course Registered successfully");

        if (formRef.current) {
          formRef.current.reset();
        }

      } else {
        const errorData = await response.json();
        toast.error(errorData.message);
      }
    } catch (error) {
      console.log("Error submitting course form:", error);
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("an unknown error occured.");
      }
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto bg-white backdrop-blur-md p-5 rounded-3xl shadow-lg space-y-10 transition-all duration-300 overflow-y-scroll  h-[80vh]"
        ref={formRef}
        style={{ scrollbarWidth: "none" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-2">
          <h2 className="text-3xl font-semibold text-gray-900">
            📕 Basic Info
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-gray-700 rounded-lg hover:text-red-500  transition-all"
          >
            <i className="bi bi-x-lg text-xl"></i>
          </button>
        </div>

        <div className="w-100">
          <div className="flex flex-col gap-3">
            <input
              type="text"
              name="title"
              placeholder="Course Title"
              required
              className="w-full  p-1 rounded border-b border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            />
            <select
              name="category"
              required
              className="w-full py-2 px-1 rounded border-b  border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            >
              <option value="">Course Category</option>
              <option value="Data Science">Data Science</option>
              <option value="Design">Design </option>
              <option value="Development">Development</option>
              <option value="Business">Business</option>
              <option value="Management">Management</option>
              <option value="Marketing">Marketing</option>
            </select>
            <input
              type="text"
              name="instructor"
              required
              placeholder="Instructor"
              className="w-full  p-1 rounded border-b text-gray-400 border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            />
            <input
              type="text"
              name="duration"
              required
              placeholder="Rating e.g @example 1hr"
              className="w-full  p-1 rounded border-b border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            />
            <input
              type="text"
              name="level"
              required
              placeholder="Course level"
              className="w-full  p-1 rounded  border-b border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            />
            <input
              type="text"
              name="price"
              required
              placeholder="Course Price"
              className="w-full  p-1 rounded border-b border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            />
            <input
              type="text"
              name="language"
              required
              placeholder="Language"
              className="w-full  p-1 rounded border-b border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            />
          </div>
        </div>

        {/* Submit */}
        <div className="">
          <button
            type="submit"
            className="w-full text-center  bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-2 rounded-xl font-semibold shadow-md hover:shadow-lg transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
