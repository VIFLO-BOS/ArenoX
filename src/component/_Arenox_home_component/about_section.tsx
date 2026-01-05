import Image from "next/image";
import { motion } from "framer-motion";

export default function About_section() {
  return (
    <section className="relative py-20 px-12 md:px-12 bg-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* Left: Illustration */}
        <div className="flex justify-center">
          <Image
            width={1400}
            height={400}
            src="/images/student-img/team-1.jpg"
            alt="Learning Illustration"
            className="w-full  rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>

        {/* Right: Text Content */}
        <div className="lg:pl-10">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wide mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            We’re Here to Make{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
              Learning
            </span>{" "}
            Simple and Impactful
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Education is the most powerful tool for change and we’re on a
            mission to make it accessible to everyone, everywhere. We connect
            learners with industry experts who simplify complex topics into
            engaging, practical lessons.
          </p>
          <a
            href="#about"
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-semibold shadow-lg shadow-blue-200 transition-all duration-300 transform hover:-translate-y-1"
          >
            Learn More About Us <i className="bi bi-arrow-right ml-2"></i>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
