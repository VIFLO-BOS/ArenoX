"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { coursesDetails } from "@/utils/data/coursesData/courses";

export default function Feature_Course_section() {
  const courses = coursesDetails.slice(0, 4);
  const [isHeartRed, setIsHeartRed] = useState(
    new Array(courses.length).fill(false)
  );
  const toggleHeartColor = (index: number) => {
    const newHeartRed = [...isHeartRed];
    newHeartRed[index] = !newHeartRed[index];
    setIsHeartRed(newHeartRed);
  };

  return (
    <div className="py-20 px-6 lg:px-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center md:text-left mb-12 flex flex-col md:flex-row items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">
              Top Rated
            </span>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Popular Courses Loved by Learners
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              These are the courses our learners can’t stop talking about.
              Tried, tested, and proven to deliver real results.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg shadow-orange-200 transition-all duration-300">
              Become a Tutor
            </button>
            <button className="bg-white border border-gray-200 text-gray-700 hover:text-blue-600 hover:border-blue-200 font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center gap-2 group">
              Browse All{" "}
              <i className="bi bi-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </button>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col justify-between bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={course.courseImageUrl}
                  alt={course.title}
                  width={400}
                  height={400}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <button
                  className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm w-9 h-9 flex items-center justify-center rounded-full shadow-sm hover:bg-white transition-colors"
                  onClick={() => toggleHeartColor(index)}
                >
                  <i
                    className={`bi ${
                      isHeartRed[index]
                        ? "bi-heart-fill text-red-500"
                        : "bi-heart text-gray-400 hover:text-red-500"
                    } transition-colors`}
                  ></i>
                </button>
                <span
                  className={`absolute top-3 left-3 ${
                    course.bgColor || "bg-blue-600"
                  } text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm`}
                >
                  {course.category}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3 text-xs text-gray-500">
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

                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>

                <p className="text-gray-500 text-sm line-clamp-2 mb-4 leading-relaxed">
                  {course.paragraph}
                </p>

                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      src={course.tutor.imageUrl}
                      alt={course.tutor.name}
                      width={30}
                      height={30}
                      className="w-8 h-8 object-cover rounded-full ring-2 ring-white shadow-sm"
                    />
                    <p className="text-gray-600 text-sm font-medium truncate max-w-[80px]">
                      {course.tutor.name}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-gray-900">
                      ${course.price}
                    </span>
                    <span className="text-gray-400 text-xs line-through">
                      $99
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-5 pb-5">
                <button className="w-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-2.5 rounded-xl transition-all duration-300">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
