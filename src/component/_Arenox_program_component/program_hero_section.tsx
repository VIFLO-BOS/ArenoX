import { Button } from "@headlessui/react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface FilterButton {
  name: string;
  pathname: string;
}

export default function Program_hero_section() {
  const filterBtn: FilterButton[] = [
    { name: "Filter", pathname: "filter" },
    { name: "Certification", pathname: "certification" },
    { name: "Bootcamp", pathname: "bootcamp" },
    { name: "Degree", pathname: "degree" },
  ];
  return (
    <div className="flex items-center justify-center lg:grid lg:grid-cols-2 px-6 lg:px-24 py-16 gap-12 bg-white">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
        className="lg:pr-10"
      >
        <div className="lg:w-full">
          <h1 className="text-4xl sm:px-10 lg:px-0 text-center lg:text-start lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
            Find the right <span className="text-blue-600">program</span> for
            your career.
          </h1>
          <p className="text-center lg:text-start text-gray-600 mb-8 text-lg font-light leading-relaxed">
            Explore our structured learning programs across Bootcamps,
            Certifications, and Degrees. Filter by level, duration, and learning
            format to match your schedule.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
          {filterBtn.map((x, i) => {
            return (
              <Button
                key={i}
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-200 border 
                  ${
                    i === 0
                      ? "bg-gray-900 text-white border-gray-900 shadow-md hover:bg-gray-800"
                      : "bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
                  }`}
              >
                {i === 0 && <i className="bi bi-sliders mr-2"></i>}
                {x.name}
              </Button>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="hidden lg:block relative"
      >
        <div className="absolute inset-0 bg-linear-to-tr from-blue-600/20 to-orange-500/20 rounded-2xl transform translate-x-4 translate-y-4 -z-10 blur-xl"></div>
        <Image
          width={600}
          height={600}
          src="/images/banner/mahila.png"
          alt="student-img"
          loading="lazy"
          className="w-full h-auto object-cover rounded-2xl shadow-2xl ring-1 ring-gray-900/5"
        />
      </motion.div>
    </div>
  );
}
