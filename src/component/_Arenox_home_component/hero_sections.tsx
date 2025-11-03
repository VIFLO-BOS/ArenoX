import { motion } from "framer-motion";

import Image from "next/image";

export default function Hero_sections() {
  return (
    <div className="bg-black pt-15">
      <div className="container mx-auto min-h-6 py-15 lg:py-20 px-10 flex align-items-center justify-between gap-4 ">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 2 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl pr-0 lg:pr-15"
        >
          <div className="headings">
            <h1 className=" text-white font-bold text-4xl sm:text-5xl lg:text-5xl text-center lg:text-left leading-tight">
              Unlock Your Potential{" "}
              <span className="!text-blue-700 text-shadow text-shadow-2xl  text-shadow-gray-900">
                Learn <span className="!text-orange-600">Skills</span>{" "}
              </span>{" "}
              That Create Opportunities
            </h1>
            <p className="mt-10 text-center lg:text-left text-white">
              Join thousands of learners who are mastering tech, business, and
              creative skills through expert-led online courses designed for
              real-world success.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8 items-center sm:items-start justify-center lg:justify-start">
            <button
              className="bg-blue-700 hover:bg-deepblue !text-white  shadow-sm ring-1 ring-black/5  hover:bg-blue-800  rounded-sm text-base  px-6 py-2 transition duration-500 ease-out"
              type="button"
            >
              Start Learning Free
            </button>

            <button
              className="bg-orange-400 hover:bg-orange-600 shadow-sm ring-1 ring-black/5 !text-white rounded-sm text-base  px-6 py-2 duration-500 ease-in-out "
              type="button"
            >
              Explore Courses
            </button>
          </div>

          <div className="flex flex-wrap mt-8 gap-2 justify-center lg:justify-start">
            <span className="!text-gray-400 text-sm">
              ⏲24hrs support &nbsp;|
            </span>
            <span className="!text-gray-400 text-sm">
              No deadlines. No Limits &nbsp;|
            </span>
            <span className="!text-gray-400 text-sm">
              🌍 Trusted by 50,000+ learners in over 50 countries
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 2.5 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden lg:flex"
        >
          <div className="flex flex-col relative">
            <Image
              className="object-cover w-130 h-83 rounded-xl drop-shadow-xl"
              src="https://i.pinimg.com/736x/e7/af/c7/e7afc7833290f90f46deb42a86174006.jpg"
              alt="images"
              loading="lazy"
              width={400}
              height={400}
            />
            <div className="absolute z-10 py-1 flex justify-evenly bg-white shadow-2xl shadow-gray-700 w-70 top-60 -left-10 rounded-sm">
              <form className="flex gap-4" action="" method="post">
                <input
                  className="py-1.5 px-2 outline-0 -ml-0.5 rounded-bl-sm rounded-tl w-50 !text-zinc-500 text-sm"
                  type="email"
                  name="loginEmail"
                  placeholder="Enter your email to login..."
                />
              </form>
              <button
                className="bg-orange-400 py-1.5 w-15 rounded-sm !text-white font-semibold text-shadow text-shadow-xs"
                type="button"
              >
                Login
              </button>
            </div>

            <div className="absolute z-10  flex justify-evenly bg-white shadow-2xl shadow-gray-700 w-40 top-5 -left-10 rounded-sm">
              <p className="text-xs small">👋arenox is here.😊🥰😜 </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
