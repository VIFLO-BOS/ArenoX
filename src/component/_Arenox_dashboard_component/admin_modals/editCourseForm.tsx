// import React from "react";

// /* @ edit-course-form-props : define props for edit course form */

// interface editCourseFormProps {
//   onClose: () => void;
// }

// /* @ edit-course-form : form component for editing existing course information */

// export default function Edit_course_form({ onClose }: editCourseFormProps) {
//   return (
//     <div>
//       <form className="max-w-5xl mx-auto bg-white backdrop-blur-md p-5 rounded-3xl shadow-lg space-y-10 transition-all duration-300">
//         {/* Header */}
//         <div className="flex items-center justify-between border-b border-gray-200 pb-4">
//           <h2 className="text-3xl font-semibold text-gray-900">
//             📕 Edit Course Info
//           </h2>
//           <button
//             type="button"
//             onClick={onClose}
//             className="px-4 py-2 text-gray-700 rounded-lg  hover:text-red-500 transition-all"
//           >
//             <i className="bi bi-x-lg text-xl"></i>
//           </button>
//         </div>

//         <div className="w-100">
//           <div className="flex flex-col gap-3">
//             <input
//               type="text"
//               name="title"
//               placeholder="Course Title"
//               className="w-full p-2 rounded border-b border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
//             />
//             <select
//               name="Category"
//               className="w-full py-2 px-1 rounded border-b text-gray-500 border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
//             >
//               <option value="">Course Category</option>
//               <option value="Data Science">Data Science</option>
//               <option value="Design">Design </option>
//               <option value="Development">Development</option>
//               <option value="Business">Business</option>
//               <option value="Management">Management</option>
//               <option value="Marketing">Marketing</option>
//             </select>
//             <input
//               type="text"
//               name="instructor"
//               placeholder="Instructor"
//               className="w-full p-2 rounded border-b border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
//             />
//             <input
//               type="text"
//               name="rting"
//               placeholder="Rating e.g @example 4.5"
//               className="w-full p-2 rounded border-b border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
//             />
//             <input
//               type="text"
//               name="time"
//               placeholder="Course Duration"
//               className="w-full p-2 rounded  border-b border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
//             />
//             <input
//               type="text"
//               name="price"
//               placeholder="Course Price"
//               className="w-full p-2 rounded border-b border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
//             />
//           </div>
//         </div>

//         {/* Submit */}
//         <div className="">
//           <button
//             type="submit"
//             className="w-full text-center  bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

