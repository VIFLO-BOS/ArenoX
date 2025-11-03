import React from "react";
import { motion,easeInOut } from "framer-motion";

export default function Pricing_hero_section() {
  return (
    <div className="w-full  mb-10">
      <div className="flex flex-col items-center justify-center h-100  bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.8)),url('/images/background/09.jpg')] bg-cover bg-center bg-no-repeat ">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, ease: easeInOut }}
          className="text-center text-5xl text-white mb-3"
        >
          Simple, Transparent Princing
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, ease: easeInOut }}
          className="text-center text-gray-300 mb-3 px-10 lg:px-20"
        >
          Choose a plan that fits your learning journey. Switch or cancel
          anytime. All plans access on web and mobile, progress tracking, and
          community support,
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, ease: easeInOut }}
          className="flex justify-center gap-4 bg-sky-100 p-1  rounded-3xl ring-1 ring-black/5"
        >
          <p className="bg-blue-600 text-white p-2 px-3  rounded-3xl">
            Monthly
          </p>
          <div className="flex items-center flex-nowrap gap-1">
            <span>Yearly</span>
            <p className="w-1 h-1 bg-gray-800 rounded-full"></p>{" "}
            <span className="pe-2">Save20%</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
