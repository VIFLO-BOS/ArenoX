import Image from "next/image";
import React from "react";

export default function Team_section() {
  return (
    <div>
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-3 block">
            Expert Instructors
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-500 mb-12 max-w-2xl mx-auto text-lg">
            Learn from industry leaders who are passionate about sharing their
            knowledge and helping you succeed.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <div className="group flex flex-col items-center bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-2 border border-transparent hover:border-gray-100">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-blue-600 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <Image
                  src="/images/mentor/01.jpg"
                  alt="John Doe"
                  className="w-36 h-36 rounded-full object-cover shadow-lg relative z-10"
                  width={400}
                  height={200}
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                  John Doe
                </h3>
                <p className="text-blue-600 text-sm font-medium mb-3 bg-blue-50 inline-block px-3 py-1 rounded-full">
                  CEO & Founder
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Visionary leader with 10+ years of experience in tech
                  innovation.
                </p>
              </div>

              <div className="flex space-x-4 mt-auto opacity-70 group-hover:opacity-100 transition-opacity">
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-600 transition-colors bg-white p-2 rounded-full shadow-sm hover:shadow-md"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors bg-white p-2 rounded-full shadow-sm hover:shadow-md"
                >
                  <i className="bi bi-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-700 transition-colors bg-white p-2 rounded-full shadow-sm hover:shadow-md"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group flex flex-col items-center bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-2 border border-transparent hover:border-gray-100">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-orange-600 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <Image
                  src="/images/mentor/02.jpg"
                  alt="Jane Smith"
                  width={400}
                  height={200}
                  className="w-36 h-36 rounded-full object-cover shadow-lg relative z-10"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                  Jane Smith
                </h3>
                <p className="text-orange-600 text-sm font-medium mb-3 bg-orange-50 inline-block px-3 py-1 rounded-full">
                  CTO
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Expert in AI and software architecture, driving innovation at
                  scale.
                </p>
              </div>

              <div className="flex space-x-4 mt-auto opacity-70 group-hover:opacity-100 transition-opacity">
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-600 transition-colors bg-white p-2 rounded-full shadow-sm hover:shadow-md"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors bg-white p-2 rounded-full shadow-sm hover:shadow-md"
                >
                  <i className="bi bi-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-700 transition-colors bg-white p-2 rounded-full shadow-sm hover:shadow-md"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group flex flex-col items-center bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-2 border border-transparent hover:border-gray-100">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-indigo-600 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <Image
                  src="/images/mentor/03.jpg"
                  alt="Michael Lee"
                  width={400}
                  height={200}
                  className="w-36 h-36 rounded-full object-cover shadow-lg relative z-10"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                  Michael Lee
                </h3>
                <p className="text-indigo-600 text-sm font-medium mb-3 bg-indigo-50 inline-block px-3 py-1 rounded-full">
                  Head of Design
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Passionate about creating intuitive and user-friendly
                  experiences.
                </p>
              </div>

              <div className="flex space-x-4 mt-auto opacity-70 group-hover:opacity-100 transition-opacity">
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-600 transition-colors bg-white p-2 rounded-full shadow-sm hover:shadow-md"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors bg-white p-2 rounded-full shadow-sm hover:shadow-md"
                >
                  <i className="bi bi-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-700 transition-colors bg-white p-2 rounded-full shadow-sm hover:shadow-md"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group flex flex-col items-center bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-2 border border-transparent hover:border-gray-100">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-pink-600 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <Image
                  src="/images/mentor/04.jpg"
                  alt="Sophia Johnson"
                  width={400}
                  height={200}
                  className="w-36 h-36 rounded-full object-cover shadow-lg relative z-10"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                  Sophia Johnson
                </h3>
                <p className="text-pink-600 text-sm font-medium mb-3 bg-pink-50 inline-block px-3 py-1 rounded-full">
                  Marketing Lead
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Creative strategist helping brands connect with their
                  audiences.
                </p>
              </div>

              <div className="flex space-x-4 mt-auto opacity-70 group-hover:opacity-100 transition-opacity">
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-600 transition-colors bg-white p-2 rounded-full shadow-sm hover:shadow-md"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors bg-white p-2 rounded-full shadow-sm hover:shadow-md"
                >
                  <i className="bi bi-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-700 transition-colors bg-white p-2 rounded-full shadow-sm hover:shadow-md"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
