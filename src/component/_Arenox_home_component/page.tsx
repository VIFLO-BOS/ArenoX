"use client";
import React from "react";
import { motion} from "framer-motion";
import Hero_sections from "./hero_sections";
import Courses_categories_section from "./course_section";
import { Partnership_section } from "./partnership_section";
import Feature_Course_section from "./feature_course_section";
import About_section from "./about_section";
import Team_section from "./team_section";
import Newsletter_section from "./newsletter_section";
import Testimonial_section from "./testimonial_section";
import { fadeUp } from "@/utils/animation/fadeUpProps";

export default function HomePage() {

  return (
    <>
      <div className="relative isolate px-0">
        {/* clipPath start here.. */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#e25300] to-[#0e00d8]  opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        {/* clipPath end here.. */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{  amount: 0.2 }}
          variants={fadeUp}
        >
          <Hero_sections />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{  amount: 0.1 }}
          variants={fadeUp}
        >
          <Courses_categories_section />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{  amount: 0.2 }}
          variants={fadeUp}
        >
          <Partnership_section />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{  amount: 0.2 }}
          variants={fadeUp}
        >
          <Feature_Course_section />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{  amount: 0.2 }}
          variants={fadeUp}
        >
          <About_section />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{  amount: 0.2 }}
          variants={fadeUp}
        >
          <Testimonial_section />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{  amount: 0.2 }}
          variants={fadeUp}
        >
          <Team_section />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{  amount: 0.2 }}
          variants={fadeUp}
        >
          <Newsletter_section />
        </motion.div>
        {/* second clipPath start here.. */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr to-[#1100ff] from-[#fd5d00] opacity-100 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
      {/* second clipPath start here.. */}
    </>
  );
}
