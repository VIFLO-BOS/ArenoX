"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/utils/animation/fadeUpProps";

export default function footer_content() {
  return (
    <footer className="bg-black text-gray-300 py-12">
      <motion.div
        className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={fadeUp}
      >
        {/* Brand + Mission */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">ArenoX</h2>
          <p className="text-sm mb-4">
            Empowering learners worldwide with practical, expert-led courses
            that unlock real opportunities.
          </p>
          <p className="text-xs text-gray-400">
            🌍 Trusted by 50,000+ learners in 50+ countries
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/courses" className="hover:text-white">
                Courses
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="/pricing" className="hover:text-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/faq" className="hover:text-white">
                FAQs
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-white">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/refund" className="hover:text-white">
                Refund Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Get in Touch
          </h3>
          <p className="text-sm mb-2">Email: support@skillbridge.com</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-white">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="#" className="hover:text-white">
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
        className="flex justify-between px-15 mt-8 border-t border-gray-700 pt-4 text-center text-xs text-gray-400"
      >
        <p>Design & Develop by ArenixCommunication</p>
        <p> © {new Date().getFullYear()} ArenoX. All rights reserved.</p>
      </motion.div>
    </footer>
  );
}
