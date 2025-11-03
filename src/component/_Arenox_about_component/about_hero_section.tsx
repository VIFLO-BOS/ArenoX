import React, { useEffect, useState } from "react";
import { motion, easeInOut } from "framer-motion";
import { fadeUp } from "@/utils/animation/fadeUpProps";

import "swiper/css/navigation";

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

  console.log(currentBgImage);
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        variants={fadeUp}
        className="flex flex-col items-center justify-center text-center h-120 bg-cover bg-center mb-10 "
        style={{
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(${currentBgImage})`,
        }}
      >
        <div className="px-4 lg:px-20 py-2 text-white">
          <h1 className="text-5xl font-bold">About ArenoX</h1>
          <p className="mt-4 text-white/70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et esse
            voluptate officiis fuga atque necessitatibus.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div>
            <span className="text-white text-center text-3xl font-bold">
              500k+
            </span>
            <p className="text-gray-200 text-center">Loremuro</p>
          </div>
          <div>
            <span className="text-white text-center text-3xl font-bold">
              10K+
            </span>
            <p className="text-gray-200 text-center">Lorem.</p>
          </div>
          <div>
            <span className="text-white text-center text-3xl font-bold">
              50+
            </span>
            <p className="text-gray-200 text-center">Lorem.</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.2 }}
        variants={fadeUp}
        transition={{ delay: 0.8, ease: easeInOut }}
        className="px-4 lg:px-20 py-15"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto">
          <div className="max-w-xl mx-auto">
            <h1 className="text-center lg:text-start text-2xl font-bold mb-3">
              Our Mission.
            </h1>
            <p className="text-gray-700 text-center lg:text-start ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequuntur nihil eius quidem earum sint suscipit, ex quasi, enim
              minus vel dicta fugit.
              <br />
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequuntur nihil eius quidem earum sint suscipit, ex quasi, enim
              minus vel dicta fugit.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-4 mt-10">
              <div className="flex flex-col items-center">
                <i className="bi bi-mortarboard bg-blue-100 text-blue-800 p-2 px-3 text-3xl rounded-full"></i>
                <p className="ml-2 text-sm text-gray-700 font-bold">
                  Quality Education
                </p>
              </div>
              <div className="flex flex-col items-center">
                <i className="bi bi-mortarboard bg-green-100 text-green-800 p-2 px-3 text-3xl rounded-full"></i>
                <p className="ml-2 text-sm text-gray-700 font-bold">
                  Global Awareness
                </p>
              </div>
              <div className="flex flex-col items-center">
                <i className="bi bi-mortarboard bg-purple-100 text-purple-800 p-2 px-3 text-3xl rounded-full"></i>
                <p className="ml-2 text-sm text-gray-700 font-bold">
                  Innovation
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-xl mx-auto">
            <img
              src="https://i.pinimg.com/736x/7c/46/87/7c468743c488b287cf8324c1db6a0c41.jpg"
              alt="Student team member"
              loading="lazy"
              className="rounded-xs"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
