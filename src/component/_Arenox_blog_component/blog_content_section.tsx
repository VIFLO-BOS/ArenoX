import { Button } from "@headlessui/react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/utils/animation/fadeUpProps";

export default function Blog_content_section() {
  const categories = [
    {
      name: "Programming & Development",
      desc: "Learn to code websites, apps, and software from scratch, using tools trusted by industry leaders.",
      url: "https://i.pinimg.com/1200x/b8/70/f0/b870f0abbf1459f066614a76bc7ae66b.jpg",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Business & Entrepreneurship",
      desc: "Build a profitable business, manage teams effectively, and develop growth strategies.",
      url: "https://i.pinimg.com/736x/6e/e9/18/6ee918d6bad713109da451d783c45126.jpg",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Design & Creativity",
      desc: "Master graphic design, branding, and digital content creation to make your ideas visually stunning.",
      url: "https://i.pinimg.com/736x/63/95/9d/63959d39985fe45e664e45a76bd489e8.jpg",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Data Science & Analytics",
      desc: "Unlock the power of data with tools like Excel, SQL, and Python to drive informed decisions.",
      url: "https://i.pinimg.com/736x/db/cc/50/dbcc50a4b3179023dff5543f5ad88e75.jpg",
      rating: "⭐⭐⭐⭐⭐",
    },
  ];

  return (
    <div className="bg-gray-50/50 h-full pb-20">
      {/* Filter bar */}
      <div className="hidden lg:flex items-center justify-between px-6 lg:px-24 py-4 bg-white/80 backdrop-blur-sm sticky top-0 z-20 border-b border-gray-100 shadow-sm">
        <div className="flex gap-3 flex-wrap">
          <span className="bg-blue-600 text-white py-1.5 px-4 rounded-full font-medium text-sm shadow-sm cursor-pointer transition-transform hover:scale-105">
            All
          </span>
          {[
            "Ai & Data",
            "Productivity",
            "Design",
            "Career",
            "Announcements",
          ].map((cat, i) => (
            <span
              key={i}
              className="py-1.5 px-4 bg-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition-all duration-200"
            >
              {cat}
            </span>
          ))}
        </div>
        <div>
          <span className="text-gray-500 font-medium text-sm flex items-center gap-2 cursor-pointer hover:text-gray-900 transition-colors">
            <i className="bi bi-filter-left text-lg"></i> Sort by:{" "}
            <span className="text-gray-900">Newest</span>
          </span>
        </div>
      </div>

      {/* Main layout */}
      <div className="flex flex-col-reverse lg:flex-row px-4 lg:px-24 py-12 gap-10">
        {/* Main content */}
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((item, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 flex flex-col cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                variants={fadeUp}
              >
                <div className="relative overflow-hidden h-48">
                  <Image
                    width={400}
                    height={200}
                    src={item.url}
                    alt={item.name}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="flex flex-col flex-grow justify-between p-5">
                  <div>
                    <div className="flex gap-2 mb-3">
                      <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] uppercase font-bold tracking-wider rounded-md">
                        Category
                      </span>
                    </div>
                    <h1 className="text-lg text-gray-900 font-bold leading-tight group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                      {item.name}
                    </h1>
                    <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-auto border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Image
                        width={32}
                        height={32}
                        src={item.url} // Using same img for avatar demo
                        loading="lazy"
                        alt="author"
                        className="w-8 h-8 rounded-full ring-2 ring-white shadow-sm"
                      />
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-gray-800">
                          Alex Ukafor
                        </span>
                        <span className="text-[10px] text-gray-400">
                          Sept 7, 2025
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-blue-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read More <i className="bi bi-arrow-right"></i>
                      </span>
                      <span className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
                        <i className="bi bi-bookmark"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-[20rem] flex-shrink-0 space-y-8">
          {/* Search bar */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.6 }}
            variants={fadeUp}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
          >
            <h3 className="font-bold text-gray-900 mb-4 text-lg">Search</h3>
            <form className="relative">
              <i className="bi bi-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
              <input
                type="search"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all text-sm text-gray-700"
              />
            </form>
          </motion.div>

          {/* Categories */}
          <motion.div
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
          >
            <h3 className="font-bold text-gray-900 mb-4 text-lg">Categories</h3>
            <div className="flex flex-col gap-2">
              {[
                ["Ai & Data", 6],
                ["Productivity", 10],
                ["Designs", 8],
                ["Careers", 12],
                ["Announcements", 5],
              ].map(([name, count], i) => (
                <div
                  key={i}
                  className="group flex items-center justify-between p-2 px-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <span className="text-gray-600 text-sm font-medium group-hover:text-blue-600 transition-colors">
                    {name}
                  </span>
                  <span className="text-xs bg-gray-100 text-gray-500 py-0.5 px-2 rounded-full group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                    {count}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Popular posts */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1 }}
            variants={fadeUp}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
          >
            <h3 className="font-bold text-gray-900 mb-4 text-lg">
              Popular Posts
            </h3>
            <div className="flex flex-col gap-5">
              {[
                [
                  "/images/courses/coursetwo.png",
                  "From Zero to SQL: A beginner's journey",
                  "12 min read",
                ],
                [
                  "/images/courses/courseone.png",
                  "UX Heuristic 101: The Essential Guide",
                  "9 min read",
                ],
                [
                  "/images/courses/coursethree.png",
                  "Choose Your Data Track wisely",
                  "7 min read",
                ],
              ].map(([src, title, time], i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-20 h-16 shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src={src}
                      width={80}
                      height={64}
                      loading="lazy"
                      alt="post"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div className="flex flex-col">
                    <span className="font-semibold text-sm text-gray-800 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                      {title}
                    </span>
                    <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                      <i className="bi bi-clock"></i> {time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1 }}
            variants={fadeUp}
            className="bg-linear-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white shadow-lg shadow-blue-200"
          >
            <h3 className="font-bold text-xl mb-2">Newsletter</h3>
            <p className="text-blue-100 text-sm mb-4">
              Get the latest trends and updates delivered straight to your
              inbox.
            </p>
            <div className="space-y-3">
              <input
                type="text"
                className="w-full bg-white/10 border border-white/20 rounded-xl p-2.5 text-sm placeholder-blue-200 text-white focus:outline-none focus:bg-white/20 transition-colors"
                placeholder="Your name"
              />
              <input
                type="email"
                className="w-full bg-white/10 border border-white/20 rounded-xl p-2.5 text-sm placeholder-blue-200 text-white focus:outline-none focus:bg-white/20 transition-colors"
                placeholder="Email address"
              />
              <Button
                type="submit"
                className="w-full bg-white text-blue-600 font-bold rounded-xl p-2.5 text-sm hover:bg-blue-50 transition-colors shadow-sm"
              >
                Subscribe Now
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
