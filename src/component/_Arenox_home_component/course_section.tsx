"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Courses_categories_section() {
  const categories = [
    {
      name: "Programming & Development",
      desc: "Learn to code websites, apps, and software from scratch, using tools trusted by industry leaders.",
      url: "https://i.pinimg.com/1200x/b8/70/f0/b870f0abbf1459f066614a76bc7ae66b.jpg",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Business & Entrepreneurship",
      desc: "Build a profitable business, manage teams effectively, and develop growth strategies.",
      url: "https://i.pinimg.com/736x/6e/e9/18/6ee918d6bad713109da451d783c45126.jpg",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Design & Creativity",
      desc: "Master graphic design, branding, and digital content creation to make your ideas visually stunning.",
      url: "https://i.pinimg.com/736x/63/95/9d/63959d39985fe45e664e45a76bd489e8.jpg",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Data Science & Analytics",
      desc: "Unlock the power of data with tools like Excel, SQL, and Python to drive informed decisions.",
      url: "https://i.pinimg.com/736x/db/cc/50/dbcc50a4b3179023dff5543f5ad88e75.jpg",
      rating: "⭐⭐⭐⭐⭐",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-6 lg:px-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Find Your Perfect{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
            Learning Path
          </span>
        </h1>
        <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
          Every learner has unique goals. Our courses are grouped into
          specialized categories to help you master the right skills for your
          career.
        </p>
      </motion.div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full"
          >
            {/* Image */}
            <div className="relative overflow-hidden h-40">
              <Image
                width={400}
                height={400}
                src={item.url}
                alt={item.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <div className="mb-4">
                <h2 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                  {item.name}
                </h2>
                <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                <span className="text-[10px] font-semibold bg-blue-50 text-blue-600 px-2 py-1 rounded-md border border-blue-100 uppercase tracking-wide">
                  16 Weeks
                </span>
                <span className="text-[10px] font-semibold bg-orange-50 text-orange-600 px-2 py-1 rounded-md border border-orange-100 uppercase tracking-wide">
                  Intermediate
                </span>
              </div>

              {/* Actions */}
              <div className="grid grid-cols-2 gap-3 mt-auto">
                <button className="text-xs font-semibold bg-gray-900 text-white py-2.5 rounded-lg hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200">
                  Explore
                </button>
                <button className="text-xs font-semibold bg-white text-gray-700 border border-gray-200 py-2.5 rounded-lg hover:bg-gray-50 hover:text-blue-600 transition-colors">
                  Syllabus
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
