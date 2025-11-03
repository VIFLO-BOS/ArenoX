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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            expedita nesciunt tempore animi, fugiat dolor non cupiditate
            reprehenderit ad, quis, porro at et. Beatae dolorem quidem, alias
            facilis laboriosam nisi.
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
              officia facere asperiores vel in placeat alias, laudantium cumque
              animi consectetur.
            </p>
          </div>
          <div className="hover:scale-110 hover:shadow-2xl transition-all duration-400 ease-linear bg-white rounded-sm rounded-br-2xl rounded-tl-2xl ring-1 ring-black/5 w-90 h-full p-8">
            <span className="text-blue-600 text-2xl font-bold">2020</span>
            <h2 className="font-medium text-lg py-1">Global Expansion</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
              officia facere asperiores vel in placeat alias, laudantium cumque
              animi consectetur.
            </p>
          </div>
          <div className="hover:scale-110 hover:shadow-2xl transition-all duration-400 ease-linear bg-white rounded-sm rounded-br-3xl rounded-tl-3xl ring-1 ring-black/5 w-90 h-full p-8">
            <span className="text-blue-600 text-2xl font-bold">2024</span>
            <h2 className="font-medium text-lg py-1">Innovation Leader</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
              officia facere asperiores vel in placeat alias, laudantium cumque
              animi consectetur.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            expedita nesciunt tempore animi, fugiat dolor non cupiditate
            reprehenderit ad, quis, porro at et. Beatae dolorem quidem, alias
            facilis laboriosam nisi.
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias laudantium illum voluptate eum sequi quasi?
            </p>
          </div>
          <div className="text-center">
            <i className="bi bi-people-fill text-2xl bg-green-100 text-green-600 p-4 px-5 mb-5 rounded-full"></i>
            <h2 className="font-medium my-5">Community</h2>
            <p className="w-70">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias laudantium illum voluptate eum sequi quasi?
            </p>
          </div>
          <div className="text-center">
            <i className="bi bi-star-fill text-2xl bg-purple-100 text-purple-600 p-4 px-5 mb-5 rounded-full"></i>
            <h2 className="font-medium my-5">Excellence</h2>
            <p className="w-70">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias laudantium illum voluptate eum sequi quasi?
            </p>
          </div>
          <div className="text-center">
            <i className="bi bi-heart-fill text-2xl bg-orange-100 text-orange-600 p-4 px-5 mb-5 rounded-full"></i>
            <h2 className="font-medium my-3">Accessibility</h2>
            <p className="w-70">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias laudantium illum voluptate eum sequi quasi?
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
