import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
export default function Testimonial_section() {
  return (

    <div className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Real Stories. Real Results.
        </h2>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 5000 }}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          className="pb-10"
        >
          {/* Testimonial 1 */}
          <SwiperSlide>
            <div className="rounded-2xl p-8 shadow-md max-w-3xl mx-auto">
              <p className="text-lg italic text-gray-700 mb-4">
                “Before joining, I was stuck in a job with no growth. After completing the Web Development track, I landed a remote developer job within 3 months. The hands-on projects made all the difference.”
              </p>
              <h4 className="text-blue-600 font-semibold">— Tunde A., Nigeria</h4>
            </div>
          </SwiperSlide>

          {/* Testimonial 2 */}
          <SwiperSlide>
            <div className="bg-white rounded-2xl p-8 shadow-md max-w-3xl mx-auto">
              <p className="text-lg italic text-gray-700 mb-4">
                “As a small business owner, I needed to understand digital marketing. The lessons here were straightforward, and I saw a 40% increase in sales within weeks.”
              </p>
              <h4 className="text-blue-600 font-semibold">— Grace O., Kenya</h4>
            </div>
          </SwiperSlide>

          {/* Testimonial 3 */}
          <SwiperSlide>
            <div className="bg-white rounded-2xl p-8 shadow-md max-w-3xl mx-auto">
              <p className="text-lg italic text-gray-700 mb-4">
                “What I love is that I can learn at my own pace, even during my night shifts. The instructors are supportive and always ready to answer questions.”
              </p>
              <h4 className="text-blue-600 font-semibold">— Daniel M., Ghana</h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>

  )
}
