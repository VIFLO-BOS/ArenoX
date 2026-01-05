// import Image from "next/image";
import React from "react";
import { motion, easeIn, easeInOut } from "framer-motion";
import { fadeUp } from "@/utils/animation/fadeUpProps";

export default function Pricing_card_section() {
  return (
    <div className="flex flex-col  px-4 lg:px-20 py-16 gap-20 bg-gray-50/50">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1 }}
        transition={{ delay: 0.5, ease: easeIn }}
        variants={fadeUp}
        className="flex flex-wrap lg:flex-nowrap justify-center gap-8 items-stretch"
      >
        {/* Starter Plan */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, ease: easeInOut }}
          className="bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-8 rounded-3xl border border-gray-100 w-full max-w-sm flex flex-col relative overflow-hidden"
        >
          <h1 className="font-bold text-2xl text-gray-900">Starter</h1>
          <p className="py-4 text-gray-500 text-sm">
            Perfect for exploring new skills.
          </p>

          <div className="py-6">
            <span className="text-4xl font-extrabold text-gray-900">$0</span>
            <span className="text-gray-500 font-medium ml-1">/mo</span>
          </div>

          <div className="flex-grow">
            <ul className="space-y-4 mb-8">
              {[
                "Access to 5 free courses",
                "Community forum access",
                "Basic progress tracking",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-gray-600 text-sm"
                >
                  <i className="bi bi-check-circle-fill text-blue-500"></i>{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <button className="w-full py-3 rounded-xl bg-blue-50 text-blue-600 font-semibold hover:bg-blue-100 transition-colors">
            Get Started
          </button>
        </motion.div>

        {/* Pro Plan (Popular) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, ease: easeInOut }}
          className="bg-gray-900 text-white shadow-2xl hover:-translate-y-2 transition-all duration-300 p-8 rounded-3xl border border-gray-800 w-full max-w-sm flex flex-col relative scale-105 z-10"
        >
          <div className="absolute top-0 right-0 p-0">
            <span className="bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-2xl uppercase tracking-wider">
              Most Popular
            </span>
          </div>

          <h1 className="font-bold text-2xl text-white">Pro</h1>
          <p className="py-4 text-gray-400 text-sm">
            Unlock your full potential.
          </p>

          <div className="py-6">
            <span className="text-5xl font-extrabold text-white">$25</span>
            <span className="text-gray-400 font-medium ml-1">/mo</span>
          </div>

          <div className="flex-grow">
            <ul className="space-y-4 mb-8">
              {[
                "Unlimited courses & paths",
                "Certificates of completion",
                "Offline downloads",
                "Priority support",
                "Exclusive workshops",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-gray-300 text-sm"
                >
                  <i className="bi bi-check-circle-fill text-orange-500"></i>{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <button className="w-full py-3.5 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-500 shadow-lg shadow-blue-900/50 transition-all flex items-center justify-center gap-2">
            Start Pro Trial <i className="bi bi-arrow-right"></i>
          </button>
        </motion.div>

        {/* Teams Plan */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, ease: easeInOut }}
          className="bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-8 rounded-3xl border border-gray-100 w-full max-w-sm flex flex-col"
        >
          <h1 className="font-bold text-2xl text-gray-900">Teams</h1>
          <p className="py-4 text-gray-500 text-sm">
            Scale learning across your org.
          </p>

          <div className="py-6">
            <span className="text-4xl font-extrabold text-gray-900">$50</span>
            <span className="text-gray-500 font-medium ml-1">/seat/mo</span>
          </div>

          <div className="flex-grow">
            <ul className="space-y-4 mb-8">
              {[
                "Team dashboard & roles",
                "Advanced progress analytics",
                "SSO (SAML/Oauth)",
                "Dedicated success manager",
                "Custom learning paths",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-gray-600 text-sm"
                >
                  <i className="bi bi-check-circle-fill text-blue-500"></i>{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <button className="w-full py-3 rounded-xl bg-white border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition-colors">
            Contact Sales
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1 }}
        transition={{ delay: 0.5, ease: easeIn }}
        variants={fadeUp}
        className="max-w-5xl mx-auto w-full"
      >
        <div className="text-center mb-10">
          <h1 className="font-bold text-3xl text-gray-900 mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-500">
            Everything you need to know about billing and subscriptions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0">
                <i className="bi bi-x-circle text-xl"></i>
              </div>
              <div>
                <h2 className="font-bold text-gray-900 mb-2">
                  Can I cancel anytime?
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Yes, you can switch plans or cancel your subscription anytime
                  from your account settings. No questions asked.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0">
                <i className="bi bi-mortarboard text-xl"></i>
              </div>
              <div>
                <h2 className="font-bold text-gray-900 mb-2">
                  Do you offer student discounts?
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We offer 60% off for verified students and educators. Contact
                  support with your ID to apply.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0 }}
            className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0">
                <i className="bi bi-credit-card text-xl"></i>
              </div>
              <div>
                <h2 className="font-bold text-gray-900 mb-2">
                  What payment methods are accepted?
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We accept all major credit cards and PayPal. Invoices are
                  available for Team plans.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1 }}
            className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0">
                <i className="bi bi-clock-history text-xl"></i>
              </div>
              <div>
                <h2 className="font-bold text-gray-900 mb-2">
                  Is there a free trial?
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Pro plan includes a 7-day free trial with full access to the
                  catalog. Cancel before it ends to avoid charges.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
