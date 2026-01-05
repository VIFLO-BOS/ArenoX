import { motion } from "framer-motion";

import Image from "next/image";

export default function Hero_sections() {
  return (
    <div className="bg-gray-900 relative overflow-hidden pt-20 lg:pt-28 pb-16 lg:pb-24">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-orange-600/10 blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl lg:pr-10 w-full"
        >
          <div className="headings text-center lg:text-left">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-900/50 border border-blue-500/30 text-blue-300 text-sm font-semibold mb-6 backdrop-blur-sm">
              🚀 Unlock your potential
            </span>
            <h1 className="text-white font-bold text-4xl lg:text-5xl leading-tight mb-6">
              Unlock Your Potential <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-600">
                Learn
              </span>{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">
                Skills
              </span>
              <span className="block text-3xl lg:text-4xl mt-2 font-bold text-gray-300">
                That Create Opportunities
              </span>
            </h1>
            <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Join thousands of learners who are mastering tech, business, and
              creative skills through expert-led online courses designed for
              real-world success.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-10 items-center justify-center lg:justify-start">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-8 py-3.5 shadow-lg shadow-blue-900/50 hover:shadow-blue-600/40 transition-all duration-300 transform hover:-translate-y-1"
              type="button"
            >
              Start Learning Free
            </button>

            <button
              className="bg-transparent border border-gray-600 hover:border-orange-500 text-gray-300 hover:text-orange-500 font-medium rounded-full px-8 py-3.5 transition-all duration-300"
              type="button"
            >
              Explore Courses
            </button>
          </div>

          <div className="flex flex-wrap mt-10 gap-6 justify-center lg:justify-start pt-8 border-t border-gray-800">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <i className="bi bi-clock text-blue-500"></i>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <i className="bi bi-check-circle text-blue-500"></i>
              <span>No Deadlines</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <i className="bi bi-globe text-blue-500"></i>
              <span>Trusted by 50k+ Learners</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="hidden lg:block relative w-full max-w-lg"
        >
          <div className="relative z-10">
            <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-orange-600 rounded-2xl blur opacity-30"></div>
            <Image
              className="object-cover w-full h-auto rounded-2xl shadow-2xl relative border border-gray-700/50"
              src="https://i.pinimg.com/736x/e7/af/c7/e7afc7833290f90f46deb42a86174006.jpg"
              alt="Learning Student"
              loading="lazy"
              width={600}
              height={500}
            />

            {/* Float Login Card */}
            <div className="absolute -bottom-10 -left-10 bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl w-72">
              <p className="text-gray-300 text-xs mb-3 font-medium">
                Continue Learning
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter email..."
                  className="bg-gray-900/50 border border-gray-700 text-white text-xs rounded-lg px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                />
                <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold rounded-lg px-3 py-2 transition-colors">
                  Login
                </button>
              </div>
            </div>

            {/* Float Badge */}
            <div className="absolute top-10 -right-5 bg-white p-3 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow">
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <i className="bi bi-patch-check-fill text-xl"></i>
              </div>
              <div>
                <p className="text-gray-900 font-bold text-sm">Certified</p>
                <p className="text-gray-500 text-xs">Best Platform</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
