"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import heroContent from "./heroContent";

export default function Course_hero_section() {
  return (
    <div className="my-20">
      <Swiper
        modules={[Navigation, Autoplay]}
        // navigation
        autoplay={{ delay: 7000 }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
      >
        {heroContent.map((content, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="flex flex-col rounded-2xl py-10 overflow-hidden relative shadow-2xl mx-4 lg:mx-20"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.4)), url(${content.imgUrl})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="flex flex-col justify-center py-24 md:py-32 px-6 lg:px-20 max-w-4xl">
                <span className="inline-block py-1 px-3 w-fit rounded-full bg-blue-600/30 border border-blue-400/30 text-blue-100 text-xs font-semibold mb-6 backdrop-blur-md">
                  Welcome to ArenoX
                </span>
                <h1 className="font-semibold text-3xl md:text-5xl !text-white mb-6 leading-tight">
                  {content.heading}
                </h1>
                <p className="!text-white opacity-90 text-lg leading-relaxed max-w-2xl text-left mb-8">
                  {content.paragraph}
                </p>
                <div className="flex gap-4">
                  <button className="bg-blue-600 hover:bg-blue-700 !text-white px-8 py-3.5 rounded-full font-semibold shadow-lg shadow-blue-900/50 transition-all duration-300 hover:-translate-y-1">
                    {content.cta}
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-3.5 rounded-full font-semibold backdrop-blur-sm transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
