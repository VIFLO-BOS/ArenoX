import React from "react";
import { motion, easeInOut } from "framer-motion";

export default function Pricing_hero_section() {
  return (
    <div className="w-full  mb-10">
      <div
        className="flex flex-col items-center justify-center h-120 bg-cover bg-center bg-no-repeat relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/background/09.jpg')",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-blue-900/90 to-blue-800/80 backdrop-blur-[2px]"></div>

        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, ease: easeInOut }}
            className="text-center"
          >
            <span className="text-orange-400 font-bold tracking-wider uppercase text-sm mb-3 block">
              Pricing Plans
            </span>
            <h1 className="text-center text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-md">
              Simple, Transparent Pricing
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, ease: easeInOut }}
            className="text-center text-blue-100 mb-8 px-6 lg:px-20 max-w-3xl text-lg leading-relaxed font-light"
          >
            Choose a plan that fits your learning journey. Switch or cancel
            anytime. All plans include access on web and mobile, progress
            tracking, and community support.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, ease: easeInOut }}
            className="flex justify-center items-center gap-1 bg-white/10 backdrop-blur-md p-1.5 rounded-full ring-1 ring-white/20 shadow-lg"
          >
            <button className="bg-blue-600 text-white py-2 px-6 rounded-full font-semibold shadow-md transition-all">
              Monthly
            </button>
            <button className="flex items-center gap-2 py-2 px-6 rounded-full text-blue-100 hover:bg-white/5 transition-all font-medium">
              <span>Yearly</span>
              <span className="text-[10px] bg-orange-500 text-white px-2 py-0.5 rounded-full font-bold shadow-sm">
                SAVE 20%
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
