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
          className="bg-white rounded-2xl ring-1 ring-black/5 px-4 py-3 w-full h-auto"
        >
          <div className="ring ring-black/5 shadow-xs   text-center p-4 mb-3 lg:text-start  bg-sky-100 rounded">
            <h1 className="font-bold text-3xl">Fill the Following Forms </h1>
            <p className="lg:mr-20">
              Our teams are always avalaible to respond to your request and
              complain, anytime anywhere,we are there for you...
            </p>
          </div>
          <form action="/postcontact" method="post" className="space-y-5 ">
            <div>
              {/* User details */}
              <div className="grid grid-cols-1 lg:grid lg:grid-cols-2 gap-5 mb-3">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.2 }}
                  variants={fadeUp}
                  className="flex flex-col w-full"
                >
                  <label htmlFor="firstName" className="text-gray-700">
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter first name"
                    className="ring-1 ring-black/20 rounded-sm p-2 w-full outline-0 placeholder-gray focus:bg-transparent"
                  />
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.2 }}
                  variants={fadeUp}
                  className="flex flex-col w-full "
                >
                  <label htmlFor="lastName" className="text-gray-700">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Enter last name"
                    className="ring-1 ring-black/20 rounded-sm p-2 w-full outline-0 placeholder-gray focus:bg-transparent"
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 lg:grid lg:grid-cols-2 gap-5 mb-3">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.2 }}
                  variants={fadeUp}
                  className="flex flex-col w-full "
                >
                  <label htmlFor="email" className="text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    className="ring-1 ring-black/20 rounded-sm p-2 w-full outline-0 placeholder-gray focus:bg-transparent"
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
                  <label htmlFor="phone" className="text-gray-700">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+(234) 810100000"
                    className="ring-1 ring-black/20 rounded-sm p-2 w-full outline-0 placeholder-gray  focus:bg-transparent"
                  />
                </motion.div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid lg:grid-cols-2 gap-5">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
                variants={fadeUp}
                className="flex flex-col w-full"
              >
                <label htmlFor="organisation" className="text-gray-700">
                  Organization (optional)
                </label>
                <input
                  type="text"
                  name="organisation"
                  placeholder="Your school or company"
                  className="ring-1 ring-black/20 rounded-sm p-2 w-full outline-0 placeholder-gray focus:bg-transparent"
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
                variants={fadeUp}
                className="flex flex-col w-full "
              >
                <label htmlFor="orderId" className="text-gray-700">
                  Order ID (for billing)
                </label>
                <input
                  type="text"
                  name="orderId"
                  placeholder="#LS-12345"
                  className="ring-1 ring-black/20 rounded-sm p-2 w-full outline-0 placeholder-gray  focus:bg-transparent"
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
              <label htmlFor="message" className="text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Write your message..."
                className="ring-1 ring-black/20 rounded-sm p-2 w-full outline-0 text-black focus:bg-transparent"
                rows={6}
                required
              />
              <button className="bg-blue-500 text-white font-medium rounded-2xl p-2.5 mt-5">
                <i className="bi bi-send"></i>&nbsp;Send Message
              </button>
            </motion.div>
          </form>
        </motion.div>

        {/* Sidebar */}
        <div className="w-full lg:w-[33rem] h-auto">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            variants={fadeUp}
            className="bg-white flex flex-col p-3 mb-2 rounded-2xl ring-1 ring-black/5"
          >
            <h3 className="font-medium">Contact Info</h3>
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex items-center gap-2 text-blue-950 bg-sky-100 px-4 py-1 rounded-md ring-1 ring-black/5">
                <i className="bi bi-envelope"></i>
                <span>arenixcommunication@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-blue-950 bg-sky-100 px-4 py-1 rounded-md ring-1 ring-black/5">
                <i className="bi bi-telephone"></i>
                <span>+(234) 8101065034</span>
              </div>
              <div className="flex items-center gap-2 text-blue-950 bg-sky-100 px-4 py-1 rounded-md ring-1 ring-black/5">
                <i className="bi bi-chat"></i>
                <span>Live Chat (Mon-Fri 9am-6pm)</span>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            variants={fadeUp}
            className="bg-white flex flex-col p-3 mb-2 rounded-2xl ring-1 ring-black/5"
          >
            <h3 className="font-medium">Location</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d494.47052071190984!2d4.537079!3d7.491271!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103837374e13cf89%3A0xaf803ca1c1ee49c4!2sCollege%20of%20Entrepreneurial%20and%20Professional%20Studies!5e0!3m2!1sen!2sng!4v1757960101224!5m2!1sen!2sng"
              className="w-full h-60 rounded-2xl"
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
            className="bg-white flex flex-col p-3 mb-2 rounded-2xl ring-1 ring-black/5 pb-5"
          >
            <h3 className="font-medium">FAQ</h3>
            <div className="flex flex-col gap-2 mt-2">
              <div className="text-blue-950 bg-sky-100 px-4 py-1 rounded-md ring-1 ring-black/5">
                Do you offer student discount?
              </div>
              <div className="text-blue-950 bg-sky-100 px-4 py-1 rounded-md ring-1 ring-black/5">
                How do I reset my password?
              </div>
              <div className="text-blue-950 bg-sky-100 px-4 py-1 rounded-md ring-1 ring-black/5">
                How can I get a refund?
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
