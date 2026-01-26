import { UserType } from "@/utils/data/fetchdata/userData";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Admin_dashboard_stats() {
  const [coursesLength, setCoursesLength] = useState(0);
  const [totalUserLength, setTotalUserLength] = useState(0);
  const [studentLength, setStudentLength] = useState(0);
  const [tutorLength, setTutorLength] = useState(0);
  const [revenueLength, setRevenueLength] = useState(0);
  const [completionRateLength, setCompletionRateLength] = useState(0);

  useEffect(() => {
    try {
      const fetchCourses = async () => {
        const [courseRes, userRes] = await Promise.all([
          fetch("/api/data/courses"),
          fetch("/api/data/users"),
        ]);
        const courses = await courseRes.json();
        const users = await userRes.json();
        console.log(users);
        console.log(courses);
        setCoursesLength(courses.data.length);
        setTotalUserLength(users.data.length);
        setStudentLength(
          users.data.filter((user: UserType) => user.role === "student").length,
        );
        setTutorLength(
          users.data.filter((user: UserType) => user.role === "instructor")
            .length,
        );
      };

      fetchCourses();
    } catch (err) {
      console.log(err);
      toast.error("Failed to fetch courses & users");
    }
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
        <div className="flex flex-col justify-between bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
          <div className="flex justify-between items-start mb-3">
            <div className="p-3 bg-sky-50 rounded-xl text-sky-600 group-hover:scale-110 transition-transform">
              <i className="bi bi-people-fill text-xl"></i>
            </div>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-lg">
              +12%
            </span>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mt-1">
              {totalUserLength}
            </h2>
            <p className="text-sm text-gray-500 font-medium">Total Users</p>
          </div>
        </div>

        <div className="flex flex-col justify-between bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
          <div className="flex justify-between items-start mb-3">
            <div className="p-3 bg-purple-50 rounded-xl text-purple-600 group-hover:scale-110 transition-transform">
              <i className="bi bi-person-video3 text-xl"></i>
            </div>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-lg">
              +5%
            </span>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mt-1">
              {tutorLength}
            </h2>
            <p className="text-sm text-gray-500 font-medium">Total Tutors</p>
          </div>
        </div>

        <div className="flex flex-col justify-between bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
          <div className="flex justify-between items-start mb-3">
            <div className="p-3 bg-green-50 rounded-xl text-green-600 group-hover:scale-110 transition-transform">
              <i className="bi bi-person-gear text-xl"></i>
            </div>
            <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-lg">
              Active
            </span>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mt-1">
              {studentLength}
            </h2>
            <p className="text-sm text-gray-500 font-medium">Total Students</p>
          </div>
        </div>

        <div className="flex flex-col justify-between bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
          <div className="flex justify-between items-start mb-3">
            <div className="p-3 bg-orange-50 rounded-xl text-orange-600 group-hover:scale-110 transition-transform">
              <i className="bi bi-book text-xl"></i>
            </div>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-lg">
              +24%
            </span>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mt-1">
              {coursesLength}
            </h2>
            <p className="text-sm text-gray-500 font-medium">Total Courses</p>
          </div>
        </div>

        <div className="flex flex-col justify-between bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
          <div className="flex justify-between items-start mb-3">
            <div className="p-3 bg-blue-50 rounded-xl text-blue-600 group-hover:scale-110 transition-transform">
              <i className="bi bi-graph-up-arrow text-xl"></i>
            </div>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg">
              High
            </span>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mt-1">87%</h2>
            <p className="text-sm text-gray-500 font-medium">Completion Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
}
