"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Testimonial_section() {
  return (
    <div className="bg-linear-to-b from-blue-900 to-indigo-950 py-24 px-6 md:px-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 p-20 bg-blue-500/10 blur-3xl rounded-full -translate-x-10 -translate-y-10"></div>
      <div className="absolute bottom-0 right-0 p-20 bg-orange-500/10 blur-3xl rounded-full translate-x-10 translate-y-10"></div>

      {/* Heading */}
      <div className="text-center mb-12 relative z-10">
        <span className="text-blue-400 font-bold uppercase tracking-wider text-sm mb-3 block">
          Testimonials
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Real Stories.{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-orange-400">
            Real Results.
          </span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg font-light">
          Discover how ArenoX is helping learners around the world transform
          their careers and achieve their dreams.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto relative z-10">
        {/* Swiper Carousel */}
        <div className="w-full">
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 5000 }}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            className="pb-10"
          >
            {/* Testimonial 1 */}
            <SwiperSlide>
              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl">
                <div className="flex items-center gap-6 mb-8">
                  <Image
                    width={400}
                    height={400}
                    className="w-20 h-20 object-cover rounded-full ring-4 ring-white/10"
                    src="/images/mentor/05.jpg"
                    alt="Tunde A."
                  />
                  <div>
                    <h4 className="text-white font-bold text-xl">Tunde A.</h4>
                    <span className="text-blue-300 text-sm">
                      Web Developer, Nigeria
                    </span>
                  </div>
                </div>
                <p className="text-gray-200 text-lg leading-relaxed italic relative">
                  <i className="bi bi-quote text-5xl text-white/20 absolute -top-4 -left-2 -z-10"></i>
                  “Before joining, I was stuck in a job with no growth. After
                  completing the Web Development track, I landed a remote
                  developer job within 3 months. The hands-on projects made all
                  the difference.”
                </p>
              </div>
            </SwiperSlide>

            {/* Testimonial 2 */}
            <SwiperSlide>
              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl">
                <div className="flex items-center gap-6 mb-8">
                  <Image
                    width={400}
                    height={400}
                    className="w-20 h-20 object-cover rounded-full ring-4 ring-white/10"
                    src="/images/mentor/07.jpg"
                    alt="Grace O."
                  />
                  <div>
                    <h4 className="text-white font-bold text-xl">Grace O.</h4>
                    <span className="text-blue-300 text-sm">
                      Entrepreneur, Kenya
                    </span>
                  </div>
                </div>
                <p className="text-gray-200 text-lg leading-relaxed italic relative">
                  <i className="bi bi-quote text-5xl text-white/20 absolute -top-4 -left-2 -z-10"></i>
                  “As a small business owner, I needed to understand digital
                  marketing. The lessons here were straightforward, and I saw a
                  40% increase in sales within weeks.”
                </p>
              </div>
            </SwiperSlide>

            {/* Testimonial 3 */}
            <SwiperSlide>
              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl">
                <div className="flex items-center gap-6 mb-8">
                  <Image
                    width={400}
                    height={400}
                    className="w-20 h-20 object-cover rounded-full ring-4 ring-white/10"
                    src="/images/mentor/06.jpg"
                    alt="Daniel M."
                  />
                  <div>
                    <h4 className="text-white font-bold text-xl">Daniel M.</h4>
                    <span className="text-blue-300 text-sm">
                      Student, Ghana
                    </span>
                  </div>
                </div>
                <p className="text-gray-200 text-lg leading-relaxed italic relative">
                  <i className="bi bi-quote text-5xl text-white/20 absolute -top-4 -left-2 -z-10"></i>
                  “What I love is that I can learn at my own pace, even during
                  my night shifts. The instructors are supportive and always
                  ready to answer questions.”
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Right-side image (only on large screens) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block relative"
        >
          <div className="absolute inset-0 bg-linear-to-tr from-blue-600 to-orange-600 rounded-3xl blur-xl opacity-40 transform translate-x-4 translate-y-4"></div>
          <Image
            width={600}
            height={400}
            src="/images/background/12.jpg"
            className="rounded-3xl w-full h-[500px] object-cover relative shadow-2xl border border-white/10"
            alt="Happy Students"
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  );
}
