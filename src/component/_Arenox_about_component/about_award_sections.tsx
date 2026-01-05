import React from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import { fadeUp } from "@/utils/animation/fadeUpProps";

export default function About_award_sections() {
	return (
    <div>
      <div className="px-4 lg:px-20 py-10 bg-white rounded-sm  w-full h-full mt-10 flex flex-col  items-center justify-center gap-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={fadeUp}
          className="text-center px-20 mb-5 py-5"
        >
          <h1 className="font-bold text-3xl mb-3">Recognition & Awards</h1>
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto"
        >
          <div className="text-center">
            <i className="bi bi-heart-fill text-2xl bg-orange-100 text-orange-600 p-4 px-5 mb-5 rounded-full"></i>
            <h2 className="font-bold my-5">Best GoTech Platform 2025</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias laudantium illum voluptate eum sequi quasi?
            </p>
          </div>

          <div className="text-center">
            <i className="bi bi-people-fill text-2xl bg-green-100 text-green-600 p-4 px-5 mb-5 rounded-full"></i>
            <h2 className="font-bold my-5">Innovation In Learning 2025</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias laudantium illum voluptate eum sequi quasi?
            </p>
          </div>
          <div className="text-center">
            <i className="bi bi-lightbulb-fill text-2xl bg-blue-100 text-blue-600 p-4 px-5 mb-5 rounded-full"></i>
            <h2 className="font-bold my-5">Top 10 Online Learning Platform</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias laudantium illum voluptate eum sequi quasi?
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        variants={fadeUp}
        className="bg-blue-700 text-white px-5 py-25"
      >
        <div className="flex flex-col items-center text-center ">
          <div>
            <h1 className="font-bold text-3xl pb-3 ">
              Ready to Start your learning journey?
            </h1>
            <p>Our impact on the global learning community continues to grow</p>
          </div>
          <div className="flex items-center gap-5 pt-5">
            <button className="font-medium border border-white rounded-sm text-deepblue bg-white  p-2">
              <Link href="/courses" passHref>
                Browse Courses
              </Link>
            </button>
            <button className="border font-medium border-white rounded-sm text-white hover:bg-white hover:text-blue-950 p-2">
              <Link href="signup" passHref>
                Start free trial
              </Link>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

