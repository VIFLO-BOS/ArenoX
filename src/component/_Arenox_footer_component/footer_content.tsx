"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/utils/animation/fadeUpProps";

export default function footer_content() {
  return (
    <footer className="bg-[linear-gradient(to_bottom,rgb(17,24,39),rgb(0,0,0))] text-gray-400 py-16 border-t border-gray-800">
      <motion.div
        className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 lg:gap-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={fadeUp}
      >
        {/* Brand + Mission */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            ArenoX<span className="text-blue-500">.</span>
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Empowering learners worldwide with practical, expert-led courses
            that unlock real opportunities.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-900/20 border border-blue-800/30 text-blue-400 text-xs font-medium">
            <span>🌍</span> Trusted by 50,000+ learners
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="/courses"
                className="hover:text-blue-400 transition-colors flex items-center gap-2"
              >
                <i className="bi bi-chevron-right text-[10px] opacity-50"></i>{" "}
                Courses
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-blue-400 transition-colors flex items-center gap-2"
              >
                <i className="bi bi-chevron-right text-[10px] opacity-50"></i>{" "}
                About Us
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="hover:text-blue-400 transition-colors flex items-center gap-2"
              >
                <i className="bi bi-chevron-right text-[10px] opacity-50"></i>{" "}
                Blog
              </a>
            </li>
            <li>
              <a
                href="/pricing"
                className="hover:text-blue-400 transition-colors flex items-center gap-2"
              >
                <i className="bi bi-chevron-right text-[10px] opacity-50"></i>{" "}
                Pricing
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-blue-400 transition-colors flex items-center gap-2"
              >
                <i className="bi bi-chevron-right text-[10px] opacity-50"></i>{" "}
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-bold text-white mb-6">Support</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="/faq"
                className="hover:text-blue-400 transition-colors flex items-center gap-2"
              >
                <i className="bi bi-chevron-right text-[10px] opacity-50"></i>{" "}
                FAQs
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="hover:text-blue-400 transition-colors flex items-center gap-2"
              >
                <i className="bi bi-chevron-right text-[10px] opacity-50"></i>{" "}
                Terms of Use
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                className="hover:text-blue-400 transition-colors flex items-center gap-2"
              >
                <i className="bi bi-chevron-right text-[10px] opacity-50"></i>{" "}
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/refund"
                className="hover:text-blue-400 transition-colors flex items-center gap-2"
              >
                <i className="bi bi-chevron-right text-[10px] opacity-50"></i>{" "}
                Refund Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-bold text-white mb-6">Get in Touch</h3>
          <p className="text-sm mb-4 text-gray-400">
            Email: support@arenox.com
          </p>
          <div className="flex space-x-3">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white transition-all duration-300"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 hover:bg-blue-400 text-gray-400 hover:text-white transition-all duration-300"
            >
              <i className="bi bi-twitter"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 hover:bg-blue-700 text-gray-400 hover:text-white transition-all duration-300"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 hover:bg-pink-600 text-gray-400 hover:text-white transition-all duration-300"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={fadeUp}
        className="flex justify-between max-w-7xl mx-auto px-6 mt-16 border-t border-gray-800 pt-8 text-center text-xs text-gray-500"
      >
        <p>&copy; {new Date().getFullYear()} ArenoX. All rights reserved.</p>
        <p>Designed & Developed by ArenoX Team</p>
      </motion.div>
    </footer>
  );
}
