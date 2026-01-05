"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* @ type-definitions : define types for users, courses, and enrollments */

type User = {
  id: string;
  name: string;
  email: string;
};

type Course = {
  id: string;
  title: string;
};

type Enrollment = {
  id: string;
  userId: string;
  courseId: string;
  status: "active" | "completed" | "pending";
  enrolledAt: string;
};

/* @ mock-data : sample data for users, courses, and enrollments */

const MOCK_USERS: User[] = [
  { id: "u1", name: "Alice Johnson", email: "alice@example.com" },
  { id: "u2", name: "Bob Smith", email: "bob@example.com" },
  { id: "u3", name: "Charlie Brown", email: "charlie@example.com" },
];

const MOCK_COURSES: Course[] = [
  { id: "c1", title: "JavaScript for Beginners" },
  { id: "c2", title: "React Fundamentals" },
];

const MOCK_ENROLLMENTS: Enrollment[] = [
  {
    id: "e1",
    userId: "u1",
    courseId: "c1",
    status: "active",
    enrolledAt: "2025-09-01",
  },
  {
    id: "e2",
    userId: "u2",
    courseId: "c2",
    status: "completed",
    enrolledAt: "2025-07-21",
  },
  {
    id: "e3",
    userId: "u3",
    courseId: "c1",
    status: "pending",
    enrolledAt: "2025-10-01",
  },
];

/* @ status-config : styling configuration for different enrollment statuses */

const STATUS_CONFIG = {
  active: {
    bg: "bg-emerald-100",
    text: "text-emerald-800",
    border: "border-emerald-200",
  },
  completed: {
    bg: "bg-blue-100",
    text: "text-blue-800",
    border: "border-blue-200",
  },
  pending: {
    bg: "bg-amber-100",
    text: "text-amber-800",
    border: "border-amber-200",
  },
};

/* @ admin-enrollment-component : enrollment management component with search, filter, and sort */

export default function Admin_enrollment() {
  /* @ filter-state : manage search, filter, and sort state */

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<
    "all" | "active" | "completed" | "pending"
  >("all");
  const [sortBy, setSortBy] = useState<"name" | "course" | "status" | "date">(
    "name"
  );

  /* @ enrollment-data : combine enrollment data with user and course information */

  const enrollments = MOCK_ENROLLMENTS.map((en) => {
    const user = MOCK_USERS.find((u) => u.id === en.userId);
    const course = MOCK_COURSES.find((c) => c.id === en.courseId);
    return {
      ...en,
      userName: user?.name ?? "Unknown",
      userEmail: user?.email ?? "N/A",
      courseTitle: course?.title ?? "N/A",
    };
  });

  /* @ filtered-sorted-data : apply search, filter, and sort to enrollments */

  const filteredEnrollments = enrollments
    .filter((en) => {
      const matchesSearch =
        en.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        en.courseTitle.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus =
        filterStatus === "all" || en.status === filterStatus;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.userName.localeCompare(b.userName);
        case "course":
          return a.courseTitle.localeCompare(b.courseTitle);
        case "status":
          return a.status.localeCompare(b.status);
        case "date":
          return (
            new Date(a.enrolledAt).getTime() - new Date(b.enrolledAt).getTime()
          );
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4 p-2">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Enrollments</h1>
            <p className="text-gray-600 mt-1">
              Manage student course enrollments
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-sm text-gray-600">
              Total:{" "}
              <span className="font-semibold text-indigo-600">
                {enrollments.length}
              </span>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg shadow-sm hover:bg-indigo-700 transition-colors"
            >
              + Add Enrollment
            </motion.button>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white mb-6">
          <div className="px-2">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md w-full">
                <input
                  type="text"
                  placeholder="Search students or courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                />
                <i className="bi bi-search absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"></i>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-2">
                {(["all", "active", "completed", "pending"] as const).map(
                  (status) => (
                    <motion.button
                      key={status}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setFilterStatus(status)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
                        filterStatus === status
                          ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20"
                          : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </motion.button>
                  )
                )}
              </div>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    setSortBy(
                      e.target.value as "name" | "course" | "status" | "date"
                    )
                  }
                  className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none appearance-none pr-8 cursor-pointer"
                >
                  <option value="name">Sort by Name</option>
                  <option value="course">Sort by Course</option>
                  <option value="status">Sort by Status</option>
                  <option value="date">Sort by Date</option>
                </select>
                <i className="bi bi-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500 pointer-events-none"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Table */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="overflow-x-auto w-full">
            <table className="w-full min-w-[600px] text-sm text-gray-700">
              <thead className="bg-gray-50 text-gray-600 uppercase text-xs border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold tracking-wider">
                    S/N
                  </th>
                  <th className="px-6 py-4 text-left font-semibold tracking-wider">
                    Student
                  </th>
                  <th className="px-6 py-4 text-left font-semibold tracking-wider">
                    Course
                  </th>
                  <th className="px-6 py-4 text-left font-semibold tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left font-semibold tracking-wider">
                    Enrolled
                  </th>
                  <th className="px-6 py-4 text-right font-semibold tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <AnimatePresence>
                <tbody>
                  {filteredEnrollments.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-6 py-12 text-center">
                        <div className="text-gray-500 flex flex-col items-center">
                          <i className="bi bi-inbox text-4xl text-gray-300 mb-3"></i>
                          <p className="text-sm font-medium">
                            No enrollments found
                          </p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    filteredEnrollments.map((en, index) => (
                      <motion.tr
                        key={en.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="hover:bg-gray-50 transition-colors duration-150"
                      >
                        <td className="px-6 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {index + 1}
                          </div>
                        </td>
                        <td className="px-6 py-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                              <span className="text-indigo-600 font-semibold text-sm">
                                {en.userName
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </span>
                            </div>
                            <div>
                              <div className="font-medium text-gray-900 ">
                                {en.userName}
                              </div>
                              <div className="text-sm text-gray-500">
                                {en.userEmail}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-2 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {en.courseTitle}
                          </div>
                        </td>
                        <td className="px-6 py-2 whitespace-nowrap">
                          <span
                            className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                              STATUS_CONFIG[en.status].bg
                            } ${STATUS_CONFIG[en.status].text} ${
                              STATUS_CONFIG[en.status].border
                            }`}
                          >
                            {en.status.charAt(0).toUpperCase() +
                              en.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                          {new Date(en.enrolledAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-2 whitespace-nowrap text-right">
                          <div className="flex justify-end gap-2">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-3 py-1.5 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors"
                            >
                              View
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-3 py-1.5 text-xs font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
                            >
                              Unenroll
                            </motion.button>
                          </div>
                        </td>
                      </motion.tr>
                    ))
                  )}
                </tbody>
              </AnimatePresence>
            </table>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
