import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/utils/animation/fadeUpProps";

export default function About_story_section() {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center gap-10 px-4 lg:px-20 py-10 bg-gray-200">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={fadeUp}
          className="text-center px-10 lg:px-40 py-10"
        >
          <h1 className="font-bold text-3xl mb-3">Our Story</h1>
          <p>
            From a small idea to a global community, our journey has been driven
            by a passion for making quality technical education accessible to
            everyone, everywhere.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={fadeUp}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mx-auto"
        >
          <div className="hover:scale-110 hover:shadow-2xl transition-all duration-400 ease-linear bg-white rounded-sm rounded-br-3xl rounded-tl-3xl ring-1 ring-black/5 w-90 h-full p-8">
            <span className="text-blue-600 text-2xl font-bold">2018</span>
            <h2 className="font-medium text-lg py-1">The Begining</h2>
            <p>
              Started as a small mentorship group helping local students bridge
              the gap between theoretical knowledge and industry practice.
            </p>
          </div>
          <div className="hover:scale-110 hover:shadow-2xl transition-all duration-400 ease-linear bg-white rounded-sm rounded-br-2xl rounded-tl-2xl ring-1 ring-black/5 w-90 h-full p-8">
            <span className="text-blue-600 text-2xl font-bold">2020</span>
            <h2 className="font-medium text-lg py-1">Global Expansion</h2>
            <p>
              Launched our online platform, reaching students across 50
              countries and partnering with top industry experts to create
              content.
            </p>
          </div>
          <div className="hover:scale-110 hover:shadow-2xl transition-all duration-400 ease-linear bg-white rounded-sm rounded-br-3xl rounded-tl-3xl ring-1 ring-black/5 w-90 h-full p-8">
            <span className="text-blue-600 text-2xl font-bold">2024</span>
            <h2 className="font-medium text-lg py-1">Innovation Leader</h2>
            <p>
              Integrated AI-driven personalized learning paths and expanded our
              curriculum to cover emerging technologies and frameworks.
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        variants={fadeUp}
        className="px-4 lg:px-20 py-10 bg-white rounded-sm  w-full h-full  flex flex-col  items-center justify-center gap-10"
      >
        <div className="text-center px-20 mb-5 py-10">
          <h1 className="font-bold text-3xl mb-3">Our Values</h1>
          <p>
            Our core principles guide every decision we make, ensuring we stay
            true to our mission of empowering learners and fostering growth.
          </p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-5"
        >
          <div className="text-center">
            <i className="bi bi-lightbulb-fill text-2xl bg-blue-100 text-blue-600 p-4 px-5 mb-5 rounded-full"></i>
            <h2 className="font-medium my-5">Innovation</h2>
            <p className="w-70">
              We constantly push boundaries to find better, more effective ways
              to teach complex technical concepts.
            </p>
          </div>
          <div className="text-center">
            <i className="bi bi-people-fill text-2xl bg-green-100 text-green-600 p-4 px-5 mb-5 rounded-full"></i>
            <h2 className="font-medium my-5">Community</h2>
            <p className="w-70">
              We build supportive networks where learners, mentors, and experts
              collaborate and grow together.
            </p>
          </div>
          <div className="text-center">
            <i className="bi bi-star-fill text-2xl bg-purple-100 text-purple-600 p-4 px-5 mb-5 rounded-full"></i>
            <h2 className="font-medium my-5">Excellence</h2>
            <p className="w-70">
              We are committed to the highest standards in content quality,
              platform performance, and user experience.
            </p>
          </div>
          <div className="text-center">
            <i className="bi bi-heart-fill text-2xl bg-orange-100 text-orange-600 p-4 px-5 mb-5 rounded-full"></i>
            <h2 className="font-medium my-3">Accessibility</h2>
            <p className="w-70">
              We believe education should be inclusive, affordable, and
              accessible to everyone, regardless of background.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
