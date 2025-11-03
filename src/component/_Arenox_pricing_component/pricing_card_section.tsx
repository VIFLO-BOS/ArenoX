// import Image from "next/image";
import React from "react";
import { motion, easeIn, easeInOut } from "framer-motion";
import { fadeUp } from "@/utils/animation/fadeUpProps";

export default function Pricing_card_section() {
  return (
    <div className="flex flex-col  px-4 lg:px-20 py-10 gap-10 bg-gray-50">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1 }}
        transition={{ delay: 0.5, ease: easeIn }}
        variants={fadeUp}
        className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-5"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, ease: easeInOut }}
          className="bg-white shdadow-lg hover:scale-102 hover:shadow-gray-600 transition duration-300 ease-in p-5 rounded-3xl ring-1 ring-black/5 w-80 lg:w-90 xl:w-100 h-100 "
        >
          <div className="">
            <h1 className="font-bold">Starter</h1>
            <p className="py-3">Get started with functional courses.</p>
          </div>
          <div className="">
            <div className="py-4 text-2xl font-bold">
              <span>$0</span>
              <span className="text-gray-600 text-xs font-medium"> /mt</span>
            </div>
            <div className="flex flex-col items-center gap-5">
              <ul>
                <li>Access to 5 free courses</li>
                <li>Community forum</li>
                <li>Basic progress tracking</li>
              </ul>
              <button className="bg-sky-100 hover:bg-blue-600 transition-all duration-200 ease hover:text-white font-medium text-blue-950 rounded-2xl w-full py-2">
                Get Started
              </button>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, ease: easeInOut }}
          className="bg-white shdadow-lg hover:scale-102 hover:shadow-gray-600 transition duration-300 ease-in p-5 rounded-3xl ring-1 ring-black/5 w-80 lg:w-90 xl:w-100 h-100 "
        >
          <div className="">
            <h1 className="font-medium bg-amber-400 text-gray-800 rounded-2xl w-30 text-center">
              Most Popular
            </h1>
            <h2 className="font-bold py-2">Pro</h2>
            <p>Unlock the full catalogue and certificates.</p>
          </div>
          <div className="">
            <div className="py-4 text-2xl font-bold">
              <span>$25</span>
              <span className="text-gray-500 text-xs font-medium"> /mt</span>
            </div>
            <div className="flex flex-col items-center gap-5">
              <ul>
                <li>Unlimited courses & paths</li>
                <li>Certificates of completion</li>
                <li>Offline downloads</li>
                <li>Priority support</li>
              </ul>
              <button className="bg-blue-500  hover:bg-blue-600 transition-all duration-200 ease text-white rounded-2xl w-full py-2">
                <i className="bi bi-star">&nbsp;</i>Start Pro
              </button>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, ease: easeInOut }}
          className="bg-white shdadow-lg hover:scale-102 hover:shadow-gray-600 transition duration-300 ease-in p-5 rounded-3xl ring-1 ring-black/5 w-80 lg:w-90 xl:w-100 h-100 "
        >
          <div className="">
            <h1 className="font-bold">Teams</h1>
            <p className="py-3">
              Upskill your team with analytics and admin tools
            </p>
          </div>
          <div className="">
            <div className="py-4 text-2xl font-bold">
              <span>$50</span>
              <span className="text-gray-500 text-xs font-medium">
                {" "}
                /seat/mt
              </span>
            </div>
            <div className="flex flex-col items-center gap-5">
              <ul>
                <li>Team dashboard & roles</li>
                <li>Progress analytics</li>
                <li>SSO (SAML/Oauth)</li>
                <li>Dedicated success manager</li>
              </ul>
              <button className="bg-blue-500  hover:bg-blue-600 transition-all duration-200 ease text-white rounded-2xl w-full py-2">
                Contact sales
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1 }}
        transition={{ delay: 0.5, ease: easeIn }}
        variants={fadeUp}
        className="rounded-2x"
      >
        <div className="flex items-center justify-between ">
          <h1 className="font-semibold text-lg mb-2">
            Frequently asked questions
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0.5 sm:gap-2 md:gap-3 lg:gap-4 px-4 lg:px-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, ease: easeInOut }}
            variants={fadeUp}
            className="bg-white rounded-lg ring-1 ring-black/5  p-2"
          >
            <h2 className="font-medium">Can I cancel anytime?</h2>
            <p className="text-gray-500">
              Yes, you can switch plans or can your subscriptions anytime from
              your account settings.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, ease: easeInOut }}
            variants={fadeUp}
            className="bg-white rounded-lg ring-1 ring-black/5  p-2"
          >
            <h2 className="font-medium">Do you offer student discounts?</h2>
            <p className="text-gray-500">
              we offer 60% off verified students and educators. Contact support
              to apply.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, ease: easeInOut }}
            variants={fadeUp}
            className="bg-white rounded-lg ring-1 ring-black/5  p-2"
          >
            <h2 className="font-medium">What payment methods are accepted?</h2>
            <p className="text-gray-500">
              We accept major credit cards and paypal. Invoice is available for
              Teams.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, ease: easeInOut }}
            variants={fadeUp}
            className="bg-white rounded-lg ring-1 ring-black/5  p-2"
          >
            <h2 className="font-medium">Is there a free trial?</h2>
            <p className="text-gray-500">
              Pro includes a 7-day free trials with full access to catalog.
              cancel before it ends to avoid charges.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
