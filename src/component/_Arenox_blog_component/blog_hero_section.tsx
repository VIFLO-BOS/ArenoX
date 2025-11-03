import React from "react";
import { Button } from "@headlessui/react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Blog_hero_section() {
  return (
    <div className="flex flex-wrap items-center justify-center lg:grid lg:grid-cols-2 gap-15 px-13 lg:px-20 py-10 ">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className=" lg:block"
      >
        <Image
          width={1200}
          height={400}
          src="/images/student-img/team-2.jpg"
          alt="student-img"
          loading="lazy"
          className="w-full h-80 object-cover rounded"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className=""
      >
        <span className="bg-sky-100  py-1 flex justify-center mx-auto lg:justify-start lg:mx-0 text-sm text-blue-950 font-medium px-2.5 rounded-2xl w-30">
          <span>⭐Featured </span>
        </span>
        <h1 className="text-5xl sm:px-10 lg:px-0 text-center lg:text-start lg:text-5xl font-medium my-3">
          Master AI-powered Study Habits: A Practical Guide
        </h1>
        <p className="text-center lg:text-start text-gray-600 mb-3">
          Discover actionable strategies to enhance your learning with AI tools,
          from smart note-taking to spaced repetition workflows.
        </p>

        <div className="flex items-center justify-center mt-5 lg:justify-start gap-5 ">
          <Button className="p-2 lg:py-2 lg:px-3 shadow rounded-lg ring-1 ring-black/5 lg:w-full bg-blue-500 text-white">
            <i className="bi bi-book"></i> Read More..
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
