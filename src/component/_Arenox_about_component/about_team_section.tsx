import React from "react";
import { motion, easeInOut } from "framer-motion";
import { fadeUp } from "@/utils/animation/fadeUpProps";
import Image from "next/image";
export default function About_team_section() {
  return (
    <div>
      <div className="px-4 lg:px-20 py-20 bg-gray-200 rounded-sm  w-full  p-8 mt-10 flex flex-col  items-center justify-center gap-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={fadeUp}
          className="text-center px-20"
        >
          <h1 className="font-bold text-3xl mb-3">Our Team</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            expedita nesciunt tempore animi, fugiat dolor non cupiditate
            reprehenderit ad, quis, porro at et. Beatae dolorem quidem, alias
            facilis laboriosam nisi.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center ">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ delay: 0.8, ease: easeInOut }}
            variants={fadeUp}
            className="flex flex-col  items-center justify-center bg-white hover:bg-blue-100 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-500"
          >
            <div>
              <Image
                width={400}
                height={400}
                src="/images/mentor/01.jpg"
                alt="John Doe"
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-blue-600 text-sm mb-2">CEO & Founder</p>
              <p className="text-gray-600 text-sm h-15">
                Visionary leader with 10+ years of experience in tech
                innovation.
              </p>
            </div>

            <div className="flex  justify-center flex-end space-x-4 ">
              <a href="#" className="">
                <i className="bi bi-facebook hover:!text-blue-500"></i>
              </a>
              <a href="#" className="">
                <i className="bi bi-twitter hover:!text-blue-500"></i>
              </a>
              <a href="#" className="">
                <i className="bi bi-linkedin hover:!text-blue-500"></i>
              </a>
              <a href="#" className="">
                <i className="bi bi-instagram hover:!text-blue-500"></i>
              </a>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ delay: 1, ease: easeInOut }}
            variants={fadeUp}
            className="flex flex-col  items-center justify-center bg-white hover:bg-blue-100 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-500"
          >
            <div>
              <Image
                width={400}
                height={400}
                src="/images/mentor/02.jpg"
                alt="Jane Smith"
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Jane Smith
              </h3>
              <p className="text-blue-600 text-sm mb-2">CTO</p>
              <p className="text-gray-600 text-sm h-15">
                Expert in AI and software architecture, driving innovation at
                scale.
              </p>
            </div>

            <div className="flex  justify-center flex-end  space-x-4 ">
              <a href="#" className="">
                <i className="bi bi-facebook hover:!text-blue-500"></i>
              </a>
              <a href="#" className="">
                <i className="bi bi-twitter hover:!text-blue-500"></i>
              </a>
              <a href="#" className="">
                <i className="bi bi-linkedin hover:!text-blue-500"></i>
              </a>
              <a href="#" className="">
                <i className="bi bi-instagram hover:!text-blue-500"></i>
              </a>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ delay: 1.2, ease: easeInOut }}
            variants={fadeUp}
            className="flex flex-col  items-center justify-center bg-white hover:bg-blue-100 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-500"
          >
            <div className="">
              <Image
                width={400}
                height={400}
                src="/images/mentor/03.jpg"
                alt="Michael Lee"
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Michael Lee
              </h3>
              <p className="text-blue-600 text-sm mb-2">Head of Design</p>
              <p className="text-gray-600 text-sm h-15">
                Passionate about creating intuitive and user-friendly
                experiences.
              </p>
            </div>

            <div className="flex justify-center flex-end  space-x-4">
              <a href="#" className="">
                <i className="bi bi-facebook hover:!text-blue-500"></i>
              </a>
              <a href="#" className="">
                <i className="bi bi-twitter hover:!text-blue-500"></i>
              </a>
              <a href="#" className="">
                <i className="bi bi-linkedin hover:!text-blue-500"></i>
              </a>
              <a href="#" className="">
                <i className="bi bi-instagram hover:!text-blue-500"></i>
              </a>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ delay: 1.4, ease: easeInOut }}
            variants={fadeUp}
            className="flex flex-col  items-center justify-center bg-white hover:bg-blue-100 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-500"
          >
            <div className="">
              <Image
                width={400}
                height={400}
                src="/images/mentor/04.jpg"
                alt="Sophia Johnson"
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Sophia Johnson
              </h3>
              <p className="text-blue-600 text-sm mb-2">Marketing Lead</p>
              <p className="text-gray-600 text-sm h-15">
                Creative strategist helping brands connect with their audiences.
              </p>
            </div>

            <div className="flex justify-center  space-x-4">
              <a href="#" className="">
                <i className="bi bi-facebook hover:!text-blue-500"></i>
              </a>
              <a href="#" className="">
                <i className="bi bi-twitter hover:!text-blue-500"></i>
              </a>
              <a href="#" className="">
                <i className="bi bi-linkedin hover:!text-blue-500"></i>
              </a>
              <a href="#" className="">
                <i className="bi bi-instagram hover:!text-blue-500"></i>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="bg-deepblue text-white py-25">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={fadeUp}
          className="text-center px-20  mb-10"
        >
          <h1 className="font-bold text-3xl pb-3 ">ArenoX by the Numbers</h1>
          <p>Our impact on the global learning community continues to grow</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={fadeUp}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10  px-20 mx-auto"
        >
          <div className="text-center">
            <h2 className="font-bold text-3xl text-center">500k+</h2>
            <p className="text-blue-200">Lorem ipsum dolor</p>
          </div>

          <div className="text-center">
            <h2 className="font-bold text-3xl text-center">10,000+</h2>
            <p className="text-blue-200">Lorem ipsum dolor</p>
          </div>

          <div className="text-center">
            <h2 className="font-bold text-3xl text-center">50+</h2>
            <p className="text-blue-200">Lorem ipsum dolor</p>
          </div>

          <div className="text-center">
            <h2 className="font-bold text-3xl text-center">95%</h2>
            <p className="text-blue-200">Lorem ipsum dolor</p>
          </div>
          <div className="text-center">
            <h2 className="font-bold text-3xl text-center">2,500+</h2>
            <p className="text-blue-200">Lorem ipsum dolor</p>
          </div>

          <div className="text-center">
            <h2 className="font-bold text-3xl text-center">15M+</h2>
            <p className="text-blue-200">Lorem ipsum dolor</p>
          </div>

          <div className="text-center">
            <h2 className="font-bold text-3xl text-center">25+</h2>
            <p className="text-blue-200">Lorem ipsum dolor</p>
          </div>

          <div className="text-center">
            <h2 className="font-bold text-3xl text-center">4.8/5</h2>
            <p className="text-blue-200">Lorem ipsum dolor</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

