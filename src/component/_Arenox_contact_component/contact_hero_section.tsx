import React from "react";
import { motion, easeInOut } from "framer-motion";
import { fadeUp } from "@/utils/animation/fadeUpProps";

export default function Contact_hero_section() {
  return (
    <div className="flex items-center justify-center bg-[linear-gradient(rgba(0,0,0,0.25),rgba(0,0,0,0.8)),url('https://i.pinimg.com/1200x/84/82/79/8482794f5f72ab497bec84be9ef541c9.jpg')] bg-cover bg-center h-110">
      <div className="px-4 lg:px-20 py-10">
        <div className="text-center text-white space-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
						transition={{delay:0.8}}
            variants={fadeUp}
            className="text-4xl lg:text-5xl font-medium"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
						transition={{delay:1}}
            variants={fadeUp}
            className="text-gray-200 mt-4"
          >
            Questions about courses, billing, or your account? Send us a
            messagea and our team will get back within 24 hours.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
