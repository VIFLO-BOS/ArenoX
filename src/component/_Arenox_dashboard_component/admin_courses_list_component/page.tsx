"use client";
import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { course } from "@/utils/types/course/course";
import Link from "next/link";
import { useParams } from "next/navigation";

/* @ sort-config-interface : define sorting configuration type */

interface sortConfig {
  key: keyof course | null;
  dir: "asc" | "desc";
}
/* @ admin-courses-component : main admin courses management component with table, modals, and CRUD operations */

export default function Admin_courses() {
  const params = useParams();
  const dashboard = params.dashboard as string;

  /* @ courses-state : manage courses data and table display */
  const [courses, setcourses] = useState<course[]>([]);
  const [coursesToTable, setcourseToTable] = useState<course[]>([]);

  /* @ fetch-courses : fetch courses data from API on component mount */

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

  /* @ loading-state : manage page loading and error states */

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  /* @ modal-state : manage modal visibility for create, edit, and view operations */

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

  /* @ delete-handler : remove course from table */

  const handleDelete = (id: string) => {
    if (id) {
      setcourseToTable(
        coursesToTable.filter((item) => (item._id || item.id) !== id),
      );
    }
  };

  /* @ pagination : manage table pagination state and calculations */

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCourses = coursesToTable.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );
  const totalPages = Math.ceil(coursesToTable.length / itemsPerPage);

  /* @ filtering : filter courses by search query */

  const [query, setQuery] = useState("");
  const filteredData = currentCourses.filter((item) => {
    return (
      item.title.toLowerCase().includes(query.toLocaleLowerCase()) ||
      item.category.toLowerCase().includes(query.toLocaleLowerCase()) ||
      item.instructor.toLowerCase().includes(query.toLocaleLowerCase()) ||
      item.level.includes(query.toLocaleLowerCase())
    );
  });

  /* @ sorting : manage table sorting configuration */

  const [sortConfig, setSortConfig] = useState<sortConfig>({
    key: null,
    dir: "asc",
  });

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

  /* @ view-course-handler : handle viewing course details */

  const [courseDataToView, setcourseDataToView] = useState<course | null>(null);
  const handleViewCourseForm = (id: string) => {
    const selectCourses = sortedData.find(
      (item) => (item._id || item.id) === id,
    );
    if (selectCourses) {
      setcourseDataToView(selectCourses);
      openviewCourseForm();
    }
  };
  return (
    <>
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 mb-8 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex flex-wrap gap-4 items-center justify-between pb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Courses Record</h1>
            <p className="text-sm text-gray-500 mt-1">
              Manage and update course inventory
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <div className="relative group">
              <i className="bi bi-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors"></i>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search courses..."
                className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none w-full sm:w-64 transition-all"
              />
            </div>
            <button
              className="flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-lg shadow-blue-200 hover:-translate-y-0.5 transition-all duration-300"
              onClick={openCreateCourseForm}
            >
              <i className="bi bi-plus-lg text-sm"></i> Add Course
            </button>
          </div>
        </div>

        <div className="overflow-x-auto w-full">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 uppercase text-xs font-semibold border-b border-gray-200">
              <tr>
                <th className="px-6 py-4">S/N</th>
                <th
                  className="px-6 py-4 cursor-pointer hover:text-blue-600 transition-colors"
                  onClick={() => handleSort("title")}
                >
                  Course Title{" "}
                  <i className="bi bi-arrow-down-up text-[10px] ml-1"></i>
                </th>
                <th
                  className="px-6 py-4 cursor-pointer hover:text-blue-600 transition-colors"
                  onClick={() => handleSort("category")}
                >
                  Category
                </th>
                <th className="px-6 py-4">Instructor</th>
                <th className="px-6 py-4">Level</th>
                <th className="px-6 py-4">Duration</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4">Language</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {loading ? (
                <tr>
                  <td
                    colSpan={9}
                    className="p-12 text-center text-gray-500 animate-pulse"
                  >
                    Loading courses...
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td
                    colSpan={9}
                    className="p-12 text-center text-red-500 bg-red-50"
                  >
                    {error}
                  </td>
                </tr>
              ) : sortedData.length === 0 ? (
                <tr>
                  <td colSpan={9} className="p-12 text-center text-gray-400">
                    No courses found matching your search.
                  </td>
                </tr>
              ) : (
                sortedData.map((c, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-blue-50/20 transition-colors group"
                  >
                    <td className="px-6 py-4 text-gray-500 font-medium">
                      #{idx + 1}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="shrink-0 w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs shadow-sm group-hover:scale-105 transition-transform">
                          {c.title.slice(0, 2).toUpperCase()}
                        </div>
                        <span className="font-semibold text-gray-800">
                          {c.title}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600 font-medium bg-gray-50/50 rounded-lg m-2 w-fit">
                      {c.category}
                    </td>
                    <td className="px-6 py-4 text-gray-600">{c.instructor}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 rounded-md text-xs font-semibold ${
                          c.level === "Beginner"
                            ? "bg-green-100 text-green-700"
                            : c.level === "Intermediate"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                        }`}
                      >
                        {c.level}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{c.duration}h</td>
                    <td className="px-6 py-4 font-bold text-gray-800">
                      ${c.price}
                    </td>
                    <td className="px-6 py-4 text-gray-500">English</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <Link
                          href={`/${dashboard}/admin/courses/view/${c._id || c.id}`}
                          className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors shadow-sm"
                          title="View"
                        >
                          <i className="bi bi-eye-fill"></i>
                        </Link>
                        <Link
                          href={`/${dashboard}/admin/courses/edit/${c._id || c.id}`}
                          className="p-2 rounded-lg bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors shadow-sm"
                          title="Edit"
                        >
                          <i className="bi bi-pencil-fill"></i>
                        </Link>
                        <button
                          className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors shadow-sm"
                          onClick={() => handleDelete(c.id)}
                          title="Delete"
                        >
                          <i className="bi bi-trash-fill"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
            <tfoot className="bg-gray-50/50">
              <tr>
                <td colSpan={9} className="px-6 py-4">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-sm text-gray-500 font-medium">
                      Showing {currentPage * itemsPerPage - itemsPerPage + 1}-
                      {Math.min(currentPage * itemsPerPage, courses.length)} of{" "}
                      {courses.length}
                    </span>

                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          setCurrentPage((p) => Math.max(p - 1, 1))
                        }
                        disabled={currentPage === 1}
                        className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition-all"
                      >
                        Previous
                      </button>
                      <button
                        onClick={() =>
                          setCurrentPage((p) => Math.min(p + 1, totalPages))
                        }
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
}
