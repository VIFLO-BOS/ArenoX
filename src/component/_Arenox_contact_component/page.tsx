"use client";
import React from "react";
import Contact_hero_section from "./contact_hero_section";
import Contact_content_section from "./contact_content_section";
import { motion } from "framer-motion";
import { fadeUp } from "@/utils/animation/fadeUpProps";

/* @ contact-page : main contact page component with animated hero and content sections */

export default function Contact_page() {
  return (
    <div className="bg-gray-100">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        variants={fadeUp}
      >
        <Contact_hero_section />
      </motion.div>
      <Contact_content_section />
    </div>
  );
}

