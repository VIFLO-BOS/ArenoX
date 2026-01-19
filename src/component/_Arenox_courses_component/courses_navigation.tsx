"use client";
import {
  Code,
  Briefcase,
  Palette,
  Megaphone,
  BarChart,
  Database,
} from "lucide-react";

export default function Course_navigation() {
  const categories = [
    {
      name: "Development",
      count: 1234,
      bg: "bg-indigo-100",
      icon: <Code size={16} />,
    },
    {
      name: "Business",
      count: 1234,
      bg: "bg-green-100",
      icon: <Briefcase size={16} />,
    },
    {
      name: "Design",
      count: 1234,
      bg: "bg-purple-100",
      icon: <Palette size={16} />,
    },
    {
      name: "Marketing",
      count: 1234,
      bg: "bg-red-100",
      icon: <Megaphone size={16} />,
    },
    {
      name: "Management",
      count: 1234,
      bg: "bg-yellow-100",
      icon: <BarChart size={16} />,
    },
    {
      name: "Data Science",
      count: 1234,
      bg: "bg-blue-100",
      icon: <Database size={16} />,
    },
  ];

  return (
    <div className="my-16 mx-4 lg:mx-20">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-3 text-gray-900">
          Browse Top Categories
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Find the perfect courses for your learning goals.
        </p>
      </div>

      {/* Categories */}
      <div className="my-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mx-auto">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-center items-center gap-4 bg-white border border-gray-100 shadow-sm p-6 rounded-2xl cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className={`flex items-center justify-center ${cat.bg} h-14 w-14 rounded-full group-hover:scale-110 transition-transform duration-300`}
              >
                {cat.icon}
              </div>
              <p className="flex flex-col items-center text-center">
                <span className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {cat.name}
                </span>
                <span className="text-xs text-gray-500 mt-1">
                  {cat.count} courses
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white shadow-md border border-gray-100 rounded-xl py-5 px-6 mt-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <h4 className="font-bold text-gray-800">All Courses</h4>
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
            1200 results
          </span>
        </div>

        <div className="flex flex-wrap gap-3">
          <select className="border border-gray-200 bg-gray-50 hover:bg-white rounded-lg p-2.5 text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all cursor-pointer">
            <option>All Courses</option>
            <option>Development</option>
            <option>Management</option>
            <option>Design</option>
            <option>Data Science</option>
            <option>Business</option>
            <option>Marketing</option>
          </select>

          <select className="border border-gray-200 bg-gray-50 hover:bg-white rounded-lg p-2.5 text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all cursor-pointer">
            <option>All Levels</option>
            <option>Beginners</option>
            <option>Intermediate</option>
            <option>Experts</option>
          </select>

          <select className="border border-gray-200 bg-gray-50 hover:bg-white rounded-lg p-2.5 text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all cursor-pointer">
            <option>Sort by</option>
            <option>Popularity</option>
            <option>Newly Added</option>
          </select>
        </div>
      </div>
    </div>
  );
}
