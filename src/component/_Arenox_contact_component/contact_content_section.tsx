import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/utils/animation/fadeUpProps";

export default function Contact_content_section() {
  return (
    <div className="">
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-5 px-4 lg:px-20 py-10">
        {/* Contact form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={fadeUp}
          className="bg-white rounded-2xl shadow-xl border border-gray-100 px-8 py-8 w-full h-auto"
        >
          <div className="bg-blue-50 border border-blue-100 text-center p-6 mb-8 lg:text-start rounded-xl">
            <h1 className="font-bold text-2xl text-blue-900 mb-2">
              Send us a Message
            </h1>
            <p className="text-blue-700/80 leading-relaxed">
              Our team is always available to respond to your requests and
              inquiries, anytime, anywhere. We are here for you.
            </p>
          </div>
          <form action="/postcontact" method="post" className="space-y-6">
            <div>
              {/* User details */}
              <div className="grid grid-cols-1 lg:grid lg:grid-cols-2 gap-6 mb-4">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.2 }}
                  variants={fadeUp}
                  className="flex flex-col w-full"
                >
                  <label
                    htmlFor="firstName"
                    className="text-gray-700 font-medium text-sm mb-1.5"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter first name"
                    className="border border-gray-200 bg-gray-50 rounded-xl p-3 w-full outline-none placeholder-gray-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
                  />
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.2 }}
                  variants={fadeUp}
                  className="flex flex-col w-full "
                >
                  <label
                    htmlFor="lastName"
                    className="text-gray-700 font-medium text-sm mb-1.5"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Enter last name"
                    className="border border-gray-200 bg-gray-50 rounded-xl p-3 w-full outline-none placeholder-gray-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 lg:grid lg:grid-cols-2 gap-6 mb-4">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.2 }}
                  variants={fadeUp}
                  className="flex flex-col w-full "
                >
                  <label
                    htmlFor="email"
                    className="text-gray-700 font-medium text-sm mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    className="border border-gray-200 bg-gray-50 rounded-xl p-3 w-full outline-none placeholder-gray-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
                    required
                  />
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.2 }}
                  variants={fadeUp}
                  className="flex flex-col w-full"
                >
                  <label
                    htmlFor="phone"
                    className="text-gray-700 font-medium text-sm mb-1.5"
                  >
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+(234) 810100000"
                    className="border border-gray-200 bg-gray-50 rounded-xl p-3 w-full outline-none placeholder-gray-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
                  />
                </motion.div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid lg:grid-cols-2 gap-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
                variants={fadeUp}
                className="flex flex-col w-full"
              >
                <label
                  htmlFor="organisation"
                  className="text-gray-700 font-medium text-sm mb-1.5"
                >
                  Organization (optional)
                </label>
                <input
                  type="text"
                  name="organisation"
                  placeholder="Your school or company"
                  className="border border-gray-200 bg-gray-50 rounded-xl p-3 w-full outline-none placeholder-gray-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
                variants={fadeUp}
                className="flex flex-col w-full "
              >
                <label
                  htmlFor="orderId"
                  className="text-gray-700 font-medium text-sm mb-1.5"
                >
                  Order ID (for billing)
                </label>
                <input
                  type="text"
                  name="orderId"
                  placeholder="#LS-12345"
                  className="border border-gray-200 bg-gray-50 rounded-xl p-3 w-full outline-none placeholder-gray-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
                />
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2 }}
              variants={fadeUp}
              className="flex flex-col"
            >
              <label
                htmlFor="message"
                className="text-gray-700 font-medium text-sm mb-1.5"
              >
                Message
              </label>
              <textarea
                name="message"
                placeholder="Write your message..."
                className="border border-gray-200 bg-gray-50 rounded-xl p-3 w-full outline-none text-gray-800 placeholder-gray-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
                rows={6}
                required
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl py-3 px-6 mt-6 shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2">
                <i className="bi bi-send-fill text-sm"></i> Send Message
              </button>{" "}
            </motion.div>
          </form>
        </motion.div>

        {/* Sidebar */}
        <div className="w-full lg:w-[33rem] h-auto space-y-6">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            variants={fadeUp}
            className="bg-white flex flex-col p-6 rounded-2xl shadow-lg border border-gray-100"
          >
            <h3 className="font-medium text-lg mb-4 text-gray-800">
              Contact Info
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-gray-700 bg-gray-50 hover:bg-blue-50 px-4 py-3 rounded-xl border border-gray-100 transition-colors duration-300">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <i className="bi bi-envelope"></i>
                </div>
                <span className="text-sm">arenixcommunication@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 bg-gray-50 hover:bg-blue-50 px-4 py-3 rounded-xl border border-gray-100 transition-colors duration-300">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <i className="bi bi-telephone"></i>
                </div>
                <span className="text-sm">+(234) 8101065034</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 bg-gray-50 hover:bg-blue-50 px-4 py-3 rounded-xl border border-gray-100 transition-colors duration-300">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <i className="bi bi-chat"></i>
                </div>
                <span className="text-sm">Live Chat (Mon-Fri 9am-6pm)</span>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            variants={fadeUp}
            className="bg-white flex flex-col p-2 rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d494.47052071190984!2d4.537079!3d7.491271!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103837374e13cf89%3A0xaf803ca1c1ee49c4!2sCollege%20of%20Entrepreneurial%20and%20Professional%20Studies!5e0!3m2!1sen!2sng!4v1757960101224!5m2!1sen!2sng"
              className="w-full h-60 rounded-xl"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            variants={fadeUp}
            className="bg-white flex flex-col p-6 rounded-2xl shadow-lg border border-gray-100"
          >
            <h3 className="font-medium text-lg mb-4 text-gray-800">FAQ</h3>
            <div className="flex flex-col gap-3">
              <div className="text-gray-700 bg-gray-50 hover:bg-blue-50 px-4 py-3 rounded-xl border border-gray-100 text-sm flex justify-between items-center cursor-pointer transition-colors">
                Do you offer student discount?
                <i className="bi bi-chevron-right text-xs text-gray-400"></i>
              </div>
              <div className="text-gray-700 bg-gray-50 hover:bg-blue-50 px-4 py-3 rounded-xl border border-gray-100 text-sm flex justify-between items-center cursor-pointer transition-colors">
                How do I reset my password?
                <i className="bi bi-chevron-right text-xs text-gray-400"></i>
              </div>
              <div className="text-gray-700 bg-gray-50 hover:bg-blue-50 px-4 py-3 rounded-xl border border-gray-100 text-sm flex justify-between items-center cursor-pointer transition-colors">
                How can I get a refund?
                <i className="bi bi-chevron-right text-xs text-gray-400"></i>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
