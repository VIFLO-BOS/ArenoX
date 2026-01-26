"use client";
import { useState, useEffect } from "react";
import { coursesTypes } from "@/utils/types/course/course";
import toast from "react-hot-toast";
import { UserType } from "@/utils/data/fetchdata/userData";
import Image from "next/image";
import Link from "next/link";

export default function View_course({ courseId }: { courseId: string }) {
  const [courseInfo, setCourseInfo] = useState<coursesTypes | null>(null);
  const [instructorInfo, setInstructorInfo] = useState<UserType[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingInstructor, setLoadingInstructor] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [errorInstructor, setErrorInstructor] = useState<string | null>(null);

  useEffect(() => {
    // Resset when courseId changes
    setCourseInfo(null);
    setLoading(true);
    setError(null);

    // Guard: prevent fetch if courseId is missing or invalid
    if (!courseId || courseId === "undefined" || courseId.trim() === "") {
      setError("Invalid course ID");
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
          // Optional: cache settings
          cache: "no-store", // fresh data every time
        });

        if (!response.ok) {
          const errorText = await response.text();
          toast.error(errorText);
          throw new Error(
            `Course not found (${response.status}): ${errorText}`,
          );
        }
        const data = await response.json();
        const courseInfo = data.data.find(
          (course: any) => course._id === courseId,
        );
        console.log(courseInfo);
        console.log(courseInfo.courseImageUrl);

        setCourseInfo(courseInfo);
      } catch (err: any) {
        console.error("Fetch error:", err);
        setError(err.message || "Failed to load course");
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseId]); // Only re-run when courseId changes

  // THIS IS TO FETCH THE INSTRUCTOR
  useEffect(() => {
    const fetchInstructor = async () => {
      try {
        const response = await fetch(`/api/data/users`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          // Optional: cache settings
          cache: "no-store", // fresh data every time
        });

        if (!response.ok) {
          const errorText = await response.text();
          toast.error(errorText);
          throw new Error(`User not found (${response.status}): ${errorText}`);
        }
        const data = await response.json();
        const instructorInfo = data.data.filter(
          (user: any) => user.role === "instructor",
        );
        console.log(instructorInfo);

        setInstructorInfo(instructorInfo);
      } catch (err: any) {
        console.error("Fetch error:", err);
        setErrorInstructor(err.message || "Failed to load course");
      } finally {
        setLoadingInstructor(false);
      }
    };
    fetchInstructor();
  }, []); // Only re-run when courseId changes

  // This is to get the user who is the tutor of the course


  // Render states
  if (loading)
    return <p className="text-center py-8">Loading course data...</p>;

  if (error)
    return <p className="text-center py-8 text-red-600">Error: {error}</p>;

  if (!courseInfo)
    return <p className="text-center py-8">No course data found</p>;

  // render instructor
  if (loadingInstructor)
    return <p className="text-center py-8">Loading instructor data...</p>;

  if (errorInstructor)
    return (
      <p className="text-center py-8 text-red-600">Error: {errorInstructor}</p>
    );

  if (!instructorInfo)
    return <p className="text-center py-8">No instructor data found</p>;

  return (
    <div className="flex flex-col gap-6 bg-slate-50/50 p-4 rounded-xl">
      <div className="bg-linear-to-br from-white to-blue-50/40 w-full h-auto rounded-xl shadow-sm border border-blue-100/50 p-6">
        <div className="flex items-center gap-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <Image
              src={courseInfo?.courseImageUrl}
              alt="Course Image"
              width={400}
              height={400}
              className="relative w-50 h-40 object-cover rounded-full border-4 border-white shadow-md"
              priority
            />
          </div>
          <div className="flex justify-between w-full">
            <div className="space-y-2">
              <h1 className="text-2xl font-extrabold text-[#01012e] tracking-tight">
                {courseInfo?.title}
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
                <p className="text-sm text-slate-600">
                  <span className="font-semibold text-blue-900/70">
                    Paragraph:{" "}
                  </span>
                  {courseInfo?.paragraph}
                </p>
                <p className="text-sm text-slate-600">
                  <span className="font-semibold text-blue-900/70">
                    Category:{" "}
                  </span>
                  {courseInfo?.category}
                </p>
                <p className="text-sm text-slate-600">
                  <span className="font-semibold text-blue-900/70">
                    Price:{" "}
                  </span>
                  <span className="text-green-600 font-bold">
                    ${courseInfo?.price}
                  </span>
                </p>
                <p className="text-sm text-slate-600">
                  <span className="font-semibold text-blue-900/70">
                    Duration:{" "}
                  </span>
                  {courseInfo?.hrs} hrs
                </p>
                <p className="text-sm text-slate-600">
                  <span className="font-semibold text-blue-900/70">
                    Language:{" "}
                  </span>
                  {courseInfo?.language}
                </p>
                <p className="text-sm text-slate-600">
                  <span className="font-semibold text-blue-900/70">
                    Level:{" "}
                  </span>
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-md text-xs font-bold uppercase italic">
                    {courseInfo?.level || "Null"}
                  </span>
                </p>
                <p className="text-sm text-slate-600">
                  <span className="font-semibold text-blue-900/70">
                    Rating:{" "}
                  </span>
                  <span className="text-amber-500 font-bold">
                    ★ {courseInfo?.rating}
                  </span>
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 z-10">
                <Link href={`/dashboard/admin/courses/edit/${courseInfo?._id}`}>
                  <button className="text-blue-700 bg-blue-50 hover:bg-blue-600 hover:text-white px-4 py-2.5 rounded-xl font-bold transition-all duration-300 shadow-sm border border-blue-100 flex items-center gap-2">
                    <i className="bi bi-pencil"></i>
                  </button>
                </Link>
                <Link href="/dashboard/admin/courses">
                  <button className="bg-red-50 hover:bg-red-500 text-red-600 hover:text-white px-4 py-2.5 rounded-xl font-bold transition-all duration-300 shadow-sm border border-red-100">
                    <i className="bi bi-x-lg"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Tutor Section */}
      <div className="w-full space-y-4">
        <div className="px-6 py-4 bg-linear-to-r from-blue-900 to-[#01012e] shadow-md rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src={courseInfo.tutor.imageUrl}
              alt="Tutor Image"
              width={100}
              height={100}
              className="w-12 h-12 object-cover rounded-full border-2 border-blue-400/50"
              priority
            />
            <div>
              <p className="font-bold text-blue-100 leading-tight">
                {courseInfo.tutor.name}
              </p>
              <p className="text-[10px] text-blue-300/70 font-mono tracking-wider">
                {courseInfo._id}
              </p>
            </div>
          </div>
          <h1 className="font-black text-white text-lg tracking-widest uppercase">
            Course Tutor
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              label: "Personal Info",
              items: [
                { key: "Name", value: courseInfo.tutor.name },
                { key: "Designation", value: courseInfo.tutor.designation },
                { key: "Credentials", value: courseInfo.tutor.credentials },
              ],
            },
            {
              label: "Biography & Experience",
              items: [
                { key: "Bio", value: courseInfo.tutor.bio },
                { key: "Experiences", value: courseInfo.tutor.experiences.join(", ") },
              ],
            },
            {
              label: "Expertise & Availability",
              items: [
                { key: "Skills", value: courseInfo.tutor.skills.join(", ") },
                { key: "Languages", value: courseInfo.tutor.languages.join(", ") },
                { key: "Availability", value: courseInfo.tutor.availability },
              ],
            },
          ].map((section, idx) => (
            <div
              key={idx}
              className="bg-white shadow-sm border border-slate-200/60 rounded-xl overflow-hidden group hover:shadow-md transition-shadow"
            >
              <div className="bg-slate-50 border-b border-slate-100 px-6 py-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  {section.label}
                </span>
              </div>
              <div className="p-6 space-y-4">
                {section.items.map((item, i) => (
                  <div key={i} className="space-y-1">
                    <span className="block text-[10px] font-bold text-blue-600/60 uppercase tracking-wider">
                      {item.key}
                    </span>
                    <p className="text-sm text-slate-700 font-medium leading-relaxed">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Course Content Section */}
      <div className="w-full space-y-4 mb-5">
        <div className="px-6 py-4 bg-linear-to-r from-[#01012e] to-blue-900 shadow-sm border border-slate-200/60 rounded-xl flex items-center justify-between">
          <h1 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-1.5 h-6  rounded-full"></span>
            Course Description
          </h1>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200/60 px-8 py-6 text-justify relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full -mr-16 -mt-16 blur-3xl text-blue-100/10"></div>
          <p className="text-slate-600 leading-relaxed relative z-10">
            {courseInfo?.description}
          </p>
        </div>
      </div>
    </div>
  );
}
