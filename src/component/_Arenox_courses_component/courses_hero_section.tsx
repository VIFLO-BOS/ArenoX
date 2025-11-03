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
              className="flex flex-col rounded-sm py-10"
              style={{
                background: `linear-gradient(to bottom, rgba(0,0,0,5),rgba(0,0,0,0.5)),url(${content.imgUrl})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "100% 50%",
              }}
            >
              <div className="flex flex-col justify-center m-auto py-20 md:py-30">
                <h1 className="font-semibold text-3xl md:text-4xl text-center !text-white mx-10 mb-4">
                  {content.heading}
                </h1>
                <p className="!text-white text-center px- lg:px-50 mt-2">
                  {content.paragraph}
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 !text-white px-5 rounded-sm flex py-2 mx-auto mt-5">
                  {content.cta}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
