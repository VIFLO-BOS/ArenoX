"use client";
import { useEffect, useMemo, useState } from "react";
import Admin_modal from "../admin_modals/admin_modal";
import Course_form_modal from "../admin_modals/courseForm";
import Edit_course_form from "../admin_modals/editCourseForm";
import View_book_modal from "../admin_modals/viewCoursePage";
import toast from "react-hot-toast";
import { course } from "@/utils/types/course/course";

interface sortConfig {
  key: keyof course | null;
  dir: "asc" | "desc";
}
export default function Admin_courses() {
  // this is to fetch the data
  const [courses, setcourses] = useState<course[]>([]);
  const [coursesToTable, setcourseToTable] = useState<course[]>([]);

  useEffect(() => {
    let cancelled = false;
    async function fetchCourse() {
      try {
        const res = await fetch("/api/data/courses");
        const result = await res.json();
        if (!cancelled) {
          setcourses(result.data || []);
          setcourseToTable(result.data || []);
        }
      } catch (error) {
        if (!cancelled) {
          if (error instanceof Error) {
            toast.error(error.message);
          } else {
            toast.error("An unknown error occurred during fetch!");
          }
        }
      }
    }
    fetchCourse();
    return () => {
      cancelled = true;
    };
  }, []);

  // Page Loading State
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (window.onload) {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  try {
    // Simulate data fetching
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  } catch (err) {
    console.error(err);
    setError("Failed to load user data.");
  }

  const [isCreateCourseForm, setisCreateCourseForm] = useState(false);
  const [isEditCourseForm, setisEditCourseForm] = useState(false);
  const [isviewCourseModal, setisviewCourseModal] = useState(false);
  const openCreateCourseForm = () => setisCreateCourseForm(true);
  const openEditCourseForm = () => setisEditCourseForm(true);
  const openviewCourseForm = () => setisviewCourseModal(true);
  const closeModal = () => {
    setisCreateCourseForm(false);
    setisEditCourseForm(false);
    setisviewCourseModal(false);
  };

  // delete functionalities
  const handleDelete = (id: string) => {
    // const courseToDelete = courses.filter((item) => item.id === id);
    if (id) {
      setcourseToTable(coursesToTable.filter((item) => item.id !== id));
    }
  };

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCourses = coursesToTable.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(coursesToTable.length / itemsPerPage);

  // table filtering functionalities
  const [query, setQuery] = useState("");
  const filteredData = currentCourses.filter((item) => {
    return (
      item.title.toLowerCase().includes(query.toLocaleLowerCase()) ||
      item.category.toLowerCase().includes(query.toLocaleLowerCase()) ||
      item.instructor.toLowerCase().includes(query.toLocaleLowerCase()) ||
      item.level.includes(query.toLocaleLowerCase())
    );
  });

  // sorting courses
  const [sortConfig, setSortConfig] = useState<sortConfig>({
    key: null,
    dir: "asc",
  });

  // handling sort functions
  const handleSort = (key: keyof course) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig.key === key && sortConfig.dir === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, dir: direction });
  };

  const sortedData = useMemo(() => {
    if (!sortConfig.key) {
      return filteredData;
    }

    const data = [...filteredData];

    data.sort((a, b) => {
      const key = sortConfig.key as keyof course;
      const A = (a[key] ?? "").toString().toLowerCase();
      const B = (b[key] ?? "").toString().toLowerCase();
      if (A < B) return sortConfig.dir === "asc" ? -1 : 1;
      if (A > B) return sortConfig.dir === "asc" ? 1 : -1;
      return 0;
    });
    return data;
  }, [filteredData, sortConfig]);

  // function to view user details
  //  get the user data
  const [courseDataToView, setcourseDataToView] = useState<course | null>(null);
  const handleViewCourseForm = (id: string) => {
    const selectCourses = sortedData.find((item) => item.id === id);
    if (selectCourses) {
      setcourseDataToView(selectCourses);
      openviewCourseForm();
    }
  };
  return (
    <>
      <div className="bg-white backdrop-blur-md border border-gray-200 rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg mb-5">
        <div className="bg-white p-4 border-b border-gray-100 flex flex-wrap gap-2 items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Courses Record</h1>
            <p className="text-gray-600 mt-1">Manage all available courses</p>
          </div>
          <div className="flex items-center gap-1 bg-white text-gray-500 ring ring-black/5 rounded px-2 py-1 w-full sm:w-72">
            <i className="bi bi-search"></i>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, email or role..."
              className="outline-0 w-60"
            />
          </div>
          <div className="flex items-center gap-5">
            <button
              className="ring ring-black/5 px-2 bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-102 transition-all duration-300 ease-in-out py-1 rounded"
              onClick={openCreateCourseForm}
            >
              <i className="bi bi-person-add">&nbsp;</i>Add Course
            </button>
          </div>
        </div>

        <div className="overflow-x-auto w-full">
          <table className="w-full min-w-[600px] text-sm text-gray-700">
            <thead className="bg-sky-100 text-gray-600 uppercase text-xs border-b border-gray-200 sticky top-0 z-10">
              <tr>
                <th className="p-4 text-gray-600 text-left text-xs font-semibold">
                  S/N
                </th>
                <th className="p-4 text-gray-600 text-left text-xs font-semibold">
                  Course Title
                </th>
                <th className="p-4 text-gray-600 text-left text-xs font-semibold">
                  Category
                </th>
                <th className="p-4 text-gray-600 text-left text-xs font-semibold">
                  Instructor
                </th>
                <th className="p-4 text-gray-600 text-left text-xs font-semibold">
                  Level
                </th>
                <th className="p-4 text-gray-600 text-left text-xs font-semibold">
                  Duration
                </th>
                <th className="p-4 text-gray-600 text-left text-xs font-semibold">
                  Price
                </th>
                <th className="p-4 text-gray-600 text-left text-xs font-semibold">
                  Langauge
                </th>
                <th className="p-4 text-gray-600 text-center text-xs font-semibold">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td
                    colSpan={7}
                    className="p-8 whitespace-normal text-center text-gray-500 italic animate-pulse"
                  >
                    Loading...
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td
                    colSpan={7}
                    className="p-8 whitespace-normal text-center text-red-600"
                  >
                    {error}
                  </td>
                </tr>
              ) : sortedData.length === 0 ? (
                <tr>
                  <td
                    colSpan={7}
                    className="p-8  whitespace-normal text-center text-gray-500"
                  >
                    No courses found.
                  </td>
                </tr>
              ) : sortedData.length > 0 ? (
                sortedData &&
                sortedData.map((c, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-4 py-2 whitespace-normal text-left border-b-gray-200 text-gray-600">
                      {idx + 1}
                    </td>
                    <td
                      className="flex items-center px-4 py-2 whitespace-normal font-medium text-left border-b-gray-200 text-gray-600"
                      onClick={() => handleSort("title")}
                    >
                      <span className="w-10 h-10 bg-indigo-100 text-indigo-500 text-medium rounded-full flex items-center justify-center mr-3">
                        {c.title
                          .split(" ")
                          .slice(0, 3)
                          .map((n) => n[0])
                          .join("")}
                      </span>
                      <span>{c.title}</span>
                    </td>
                    <td
                      className="px-4 py-2 whitespace-normal font-medium text-left border-b-gray-200 text-gray-600"
                      onClick={() => handleSort("category")}
                    >
                      {c.category}
                    </td>
                    <td className="px-4 py-2 whitespace-normal font-medium text-left border-b-gray-200 text-gray-600">
                      {c.instructor}
                    </td>
                    <td className="px-4 py-2 whitespace-normal font-medium text-left border-b-gray-200 text-gray-600">
                      {c.level}
                    </td>
                    <td className="px-4 py-2 whitespace-normal font-medium text-left border-b-gray-200 text-gray-600">
                      {c.duration}hrs
                    </td>

                    <td className="px-4 py-2 whitespace-normal font-medium text-left border-b-gray-200 text-gray-600">
                      ${c.price}
                    </td>
                    <td className="px-4 py-2 whitespace-normal font-medium text-left border-b-gray-200 text-gray-600">
                      Language
                    </td>
                    <td className="px-4 py-2 whitespace-normal font-medium text-left border-b-gray-200 flex items-center space-x-2">
                      <button
                        className="p-2 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-200 transition"
                        onClick={() => handleViewCourseForm(c.id)}
                      >
                        <i className="bi bi-eye"></i>
                      </button>
                      <button
                        className="p-2 rounded-md bg-orange-50 text-orange-600 hover:bg-orange-200 transition"
                        onClick={() => openEditCourseForm()}
                      >
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button
                        className="p-2 rounded-md bg-red-50 text-red-600 hover:bg-red-200 transition"
                        onClick={() => handleDelete(c.id)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                "No data found"
              )}
            </tbody>
            <tfoot className="mt-2">
              <tr>
                <td colSpan={7} className="px-4 py-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Showing {currentPage * itemsPerPage - itemsPerPage + 1} to{" "}
                      {Math.min(currentPage * itemsPerPage, courses.length)} of{" "}
                      {courses.length} courses
                    </span>

                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <button
                        onClick={() =>
                          setCurrentPage((prev) => Math.max(prev - 1, 1))
                        }
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md disabled:opacity-50"
                      >
                        {"<"}
                      </button>
                      <button
                        onClick={() =>
                          setCurrentPage((prev) =>
                            Math.min(prev + 1, totalPages)
                          )
                        }
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md disabled:opacity-50"
                      >
                        {">"}
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <Admin_modal isOpen={isCreateCourseForm} onClose={closeModal}>
        <Course_form_modal onClose={closeModal} />
      </Admin_modal>
      <Admin_modal isOpen={isEditCourseForm} onClose={closeModal}>
        <Edit_course_form onClose={closeModal} />
      </Admin_modal>
      <Admin_modal isOpen={isviewCourseModal} onClose={closeModal}>
        <View_book_modal
          courseDataToView={courseDataToView as any}
          editBook={openEditCourseForm}
          onClose={closeModal}
        />
      </Admin_modal>
    </>
  );
}
