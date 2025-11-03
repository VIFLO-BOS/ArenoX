"use client";
import React from "react";
import Blog_hero_section from "./blog_hero_section";
import Blog_content_section from "./blog_content_section";
import { motion } from "framer-motion";
import { fadeUp } from "@/utils/animation/fadeUpProps";

export default function Blog_page() {
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1 }}
        variants={fadeUp}
      >
        <Blog_hero_section />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1 }}
        variants={fadeUp}
      >
        <Blog_content_section />
      </motion.div>
    </div>
  );
}
