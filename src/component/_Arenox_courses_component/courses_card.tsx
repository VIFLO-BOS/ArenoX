import Image from "next/image";
import { useState } from "react";
import { coursesDetails } from "@/utils/data/coursesData/courses";
import { motion } from "framer-motion";

export default function Courses_card() {
  const [currentPage, setcurrentPage] = useState(1);
  const itemsPerPage = 8;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCourses = coursesDetails.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(coursesDetails.length / itemsPerPage);

  const [isHeartRed, setisHeartRed] = useState(
    new Array(coursesDetails.length).fill(false)
  );

  const toggleHeartColor = (index: number) => {
    const newHeartRed = [...isHeartRed];
    newHeartRed[index] = !newHeartRed[index];
    setisHeartRed(newHeartRed);
  };

  return (
    <div className="my-12 px-4 sm:px-6 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {currentCourses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group flex flex-col justify-between bg-white shadow-sm hover:shadow-xl border border-gray-100 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300"
          >
            <div className="relative overflow-hidden">
              <Image
                src={course.courseImageUrl}
                alt={course.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              <div
                className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm w-9 h-9 flex items-center justify-center rounded-full shadow-sm cursor-pointer hover:bg-white transition-colors"
                onClick={() => toggleHeartColor(index)}
              >
                <i
                  className={`bi bi-heart-fill ${
                    isHeartRed[index]
                      ? "text-red-500"
                      : "text-gray-300 hover:text-red-500"
                  } transition-colors text-lg`}
                ></i>
              </div>
            </div>

            <div className="px-5 pt-5 pb-2 flex-grow">
              <span
                className={`${
                  course.bgColor || "bg-blue-100"
                } text-gray-700 font-bold text-[10px] px-2 py-1 rounded uppercase tracking-wider`}
              >
                {course.category}
              </span>
              <h3 className="text-base font-semibold mt-3 mb-2 line-clamp-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                {course.title}
              </h3>
              <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">
                {course.paragraph}
              </p>
            </div>

            <div className="px-5 py-3 border-t border-gray-50 mt-auto">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={course.tutor.imageUrl}
                  alt={course.tutor.name}
                  width={30}
                  height={30}
                  className="w-8 h-8 object-cover rounded-full ring-2 ring-white shadow-sm"
                />
                <p className="text-gray-600 text-sm font-medium">
                  {course.tutor.name}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <i className="bi bi-star-fill text-yellow-400"></i>
                  <span className="font-bold text-gray-700">
                    {course.rating}
                  </span>
                  <span>(1.2k)</span>
                </div>
                <div className="flex items-center gap-1">
                  <i className="bi bi-clock"></i>
                  <span>{course.hrs} hrs</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex gap-2 items-end">
                  <span className="text-xl font-bold text-gray-900">
                    ${course.price}
                  </span>
                  <span className="text-gray-400 text-xs line-through mb-1">
                    $99.9
                  </span>
                </div>

                <button className="bg-orange-50 text-orange-600 hover:bg-orange-600 hover:text-white py-2 px-4 rounded-lg font-semibold text-xs transition-all duration-300">
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center flex-wrap gap-2 mt-12">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setcurrentPage(i + 1)}
            className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold shadow-sm transition-all duration-300 ${
              currentPage === i + 1
                ? "bg-blue-600 text-white shadow-blue-200"
                : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
