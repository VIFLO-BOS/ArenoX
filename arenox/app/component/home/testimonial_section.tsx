import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
export default function Testimonial_section() {
  return (

    <div className="py-16 px-6 md:px-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Real Stories. Real Results.
      </h2>
      <p className="text-center mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati incidunt ipsum <br />voluptates nisi saepe aliquid quo rem quod qui repellendus?</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center h-full">
        {/* Swiper Carousel */}
        <div className="w-full max-w-xl mx-auto px-4 text-center">
          <Swiper
            modules={[Navigation, Autoplay]}
            // navigation
            autoplay={{ delay: 5000 }}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            className="pb-10"
          >
            {/* Testimonial 1 */}
            <SwiperSlide>
              <div className="bg-white flex flex-col justify-between rounded-2xl p-6 shadow mx-auto h-full">
                <div className="flex justify-center mb-4">
                  <img className="w-32 h-32 object-cover rounded-2xl" src="/images/mentor/05.jpg" alt="images" />
                </div>
                <p className=" italic text-gray-700 mb-4">
                  “Before joining, I was stuck in a job with no growth. After completing the Web Development track, I landed a remote developer job within 3 months. The hands-on projects made all the difference.”
                </p>
                <h4 className="text-blue-600 font-semibold">— Tunde A., Nigeria</h4>
              </div>
            </SwiperSlide>

            {/* Testimonial 2 */}
            <SwiperSlide>
              <div className="bg-white flex flex-col justify-between rounded-2xl p-6 shadow mx-auto h-full">
                <div className="flex justify-center mb-4">
                  <img className="w-32 h-32 object-cover rounded-2xl" src="/images/mentor/07.jpg" alt="images" />
                </div>
                <p className="italic text-gray-700 mb-4">
                  “As a small business owner, I needed to understand digital marketing. The lessons here were straightforward, and I saw a 40% increase in sales within weeks.”
                </p>
                <h4 className="text-blue-600 font-semibold">— Grace O., Kenya</h4>
              </div>
            </SwiperSlide>

            {/* Testimonial 3 */}
            <SwiperSlide>
              <div className="bg-white flex flex-col justify-between rounded-2xl p-6 shadow mx-auto h-full">
                <div className="flex justify-center mb-4">
                  <img className="w-32 h-32 object-cover rounded-2xl" src="/images/mentor/06.jpg" alt="images" />
                </div>
                <p className=" italic text-gray-700 mb-4">
                  “What I love is that I can learn at my own pace, even during my night shifts. The instructors are supportive and always ready to answer questions.”
                </p>
                <h4 className="text-blue-600 font-semibold">— Daniel M., Ghana</h4>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Right-side image (only on large screens) */}
        <div className="hidden lg:block max-w-lg mx-auto">
          <img src="/images/background/12.jpg" className="rounded-xl w-full h-100 object-cover" alt="" loading="eager" />
        </div>
      </div>
  </div>

  )
}
