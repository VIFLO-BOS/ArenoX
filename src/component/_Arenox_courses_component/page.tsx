"use client";

import React from "react";
import Course_hero_section from "./courses_hero_section";
import Course_navigation from "./courses_navigation";
import Courses_card from "./courses_card";
import { fadeUp } from "@/utils/animation/fadeUpProps";
import { motion } from "framer-motion";

export default function Course_Page() {
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1 }}
        variants={fadeUp}
      >
        <Course_hero_section />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1 }}
        variants={fadeUp}
      >
        <Course_navigation />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1 }}
        variants={fadeUp}
      >
        <Courses_card />
      </motion.div>
    </div>
  );
}
