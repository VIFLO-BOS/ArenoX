import React, { useEffect, useState } from "react";
import { motion, easeInOut } from "framer-motion";
import { fadeUp } from "@/utils/animation/fadeUpProps";

import "swiper/css/navigation";
import Image from "next/image";

export default function About_hero_section() {
  const bgImages = [
    "/images/background/09.jpg",
    "/images/background/02.jpg",
    "/images/background/05.jpg",
  ];

  const [currentBgImageIndex, setCurrentBgImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBgImageIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(intervalId);
  });

  const currentBgImage = bgImages[currentBgImageIndex];

  // console.log(currentBgImage);
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        variants={fadeUp}
        className="flex flex-col items-center justify-center text-center h-120 bg-cover bg-center mb-10 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(1, 1, 46, 0.7), rgba(37, 99, 235, 0.6)), url(${currentBgImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>
        <div className="px-4 lg:px-20 py-2 text-white relative z-10">
          <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-md">
            About <span className="text-orange-500">ArenoX</span>
          </h1>
          <p className="mt-6 text-white/90 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Empowering the next generation of learners with cutting-edge
            technology and world-class education.
          </p>
        </div>

        <div className="flex items-center gap-8 lg:gap-12 mt-10 relative z-10">
          <div className="glass-card px-6 py-3 rounded-xl backdrop-blur-md bg-white/10 border border-white/20">
            <span className="text-white text-center text-4xl font-bold block mb-1">
              500k+
            </span>
            <p className="text-blue-100 text-center text-sm font-medium uppercase tracking-wider">
              Learners
            </p>
          </div>
          <div className="glass-card px-6 py-3 rounded-xl backdrop-blur-md bg-white/10 border border-white/20">
            <span className="text-white text-center text-4xl font-bold block mb-1">
              10K+
            </span>
            <p className="text-blue-100 text-center text-sm font-medium uppercase tracking-wider">
              Courses
            </p>
          </div>
          <div className="glass-card px-6 py-3 rounded-xl backdrop-blur-md bg-white/10 border border-white/20">
            <span className="text-white text-center text-4xl font-bold block mb-1">
              50+
            </span>
            <p className="text-blue-100 text-center text-sm font-medium uppercase tracking-wider">
              Instructors
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.2 }}
        variants={fadeUp}
        transition={{ delay: 0.8, ease: easeInOut }}
        className="px-6 lg:px-24 py-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto items-center">
          <div className="max-w-xl mx-auto">
            <h1 className="text-center lg:text-start text-3xl lg:text-4xl font-bold mb-6 text-gray-900 leading-tight">
              Our Mission.
            </h1>
            <p className="text-gray-600 text-center lg:text-start text-lg leading-relaxed">
              We strive to make quality education accessible to everyone,
              everywhere. Our platform connects passionate learners with expert
              instructors, fostering a global community of knowledge and
              innovation.
              <br />
              <br />
              Through adaptive learning technologies and immersive content, we
              are breaking down barriers to education and helping individuals
              achieve their full potential.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 mt-12">
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="p-4 rounded-full bg-blue-50 text-blue-600 mb-3 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <i className="bi bi-mortarboard text-3xl"></i>
                </div>
                <p className="text-sm text-gray-800 font-semibold tracking-wide">
                  Quality Education
                </p>
              </div>
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="p-4 rounded-full bg-orange-50 text-orange-600 mb-3 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <i className="bi bi-globe text-3xl"></i>
                </div>
                <p className="text-sm text-gray-800 font-semibold tracking-wide">
                  Global Awareness
                </p>
              </div>
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="p-4 rounded-full bg-indigo-50 text-indigo-600 mb-3 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <i className="bi bi-lightbulb text-3xl"></i>
                </div>
                <p className="text-sm text-gray-800 font-semibold tracking-wide">
                  Innovation
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-xl mx-auto relative group">
            <div className="absolute -inset-2 bg-linear-to-r from-blue-600 to-orange-600 rounded-xl opacity-20 blur-xl group-hover:opacity-40 transitionduration-500"></div>
            <Image
              src="https://i.pinimg.com/736x/7c/46/87/7c468743c488b287cf8324c1db6a0c41.jpg"
              alt="Student team member"
              loading="lazy"
              width={500}
              height={500}
              className="rounded-xl shadow-2xl relative w-full h-auto object-cover transform transition duration-500 group-hover:scale-[1.01]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
