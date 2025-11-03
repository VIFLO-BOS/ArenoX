"use client";
import React from "react";
import Pricing_hero_section from "./pricing_hero_section";
import Pricing_card_section from "./pricing_card_section";
import { motion } from "framer-motion";
import { fadeUp } from "@/utils/animation/fadeUpProps";

export default function Pricing_page() {
  return (
    <div className="mt-15">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        variants={fadeUp}
      >
        <Pricing_hero_section />
      </motion.div>
      <Pricing_card_section />
    </div>
  );
}
