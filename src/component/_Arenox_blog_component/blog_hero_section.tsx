import { Button } from "@headlessui/react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Blog_hero_section() {
  return (
    <div className="flex flex-wrap items-center justify-center lg:grid lg:grid-cols-2 gap-10 lg:gap-20 px-6 lg:px-24 py-16 bg-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className=" lg:block"
      >
        <div className="relative group overflow-hidden rounded-2xl shadow-xl">
          <Image
            width={1200}
            height={600}
            src="/images/student-img/team-2.jpg"
            alt="student-img"
            loading="lazy"
            className="w-full h-80 lg:h-96 object-cover transform transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="flex flex-col justify-center"
      >
        <span className="bg-orange-100 py-1.5 flex justify-center mx-auto lg:justify-start lg:mx-0 text-sm text-orange-700 font-semibold px-4 rounded-full w-fit mb-6 ring-1 ring-orange-200/50">
          <span>⭐ Featured Article</span>
        </span>
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight mb-4 text-center lg:text-start">
          Master AI-powered Study Habits:{" "}
          <span className="text-blue-600">A Practical Guide</span>
        </h1>
        <p className="text-center lg:text-start text-gray-600 text-lg mb-8 leading-relaxed">
          Discover actionable strategies to enhance your learning with AI tools,
          from smart note-taking to spaced repetition workflows. Unlock your
          full potential today.
        </p>

        <div className="flex items-center justify-center lg:justify-start gap-5 ">
          <Button className="py-3 px-6 shadow-lg shadow-blue-200 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 hover:shadow-blue-300 transition-all duration-300 flex items-center gap-2 group">
            <i className="bi bi-book group-hover:scale-110 transition-transform"></i>{" "}
            Read Article
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
