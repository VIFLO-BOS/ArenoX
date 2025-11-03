import { Button } from "@headlessui/react";
import Image from "next/image";
import React from "react";
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
    <div className="bg-gray-50 h-full">
      {/* Filter bar */}
      <div className="hidden lg:flex items-center justify-between px-4 lg:px-20 py-3 bg-gray-50 w-full ring-1 ring-black/5">
        <div className="flex gap-2 flex-wrap">
          <span className="bg-blue-500 text-white p-1.5 px-3 rounded-3xl font-medium">
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
              className="p-2 px-3 bg-sky-100 rounded-3xl hover:bg-blue-500 hover:text-white transition duration-300 ease-in"
            >
              {cat}
            </span>
          ))}
        </div>
        <div>
          <span className="text-gray-600 font-medium">
            <i className="bi bi-filter-left"></i>&nbsp;Sort by: Newest
          </span>
        </div>
      </div>

      {/* Main layout */}
      <div className="flex flex-col-reverse lg:flex-row px-4 lg:px-20 py-10 gap-8 mt-6">
        {/* Main content */}
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {categories.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg rounded-md w-full flex flex-col border-b-2 border-orange-500 hover:scale-105 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.8 }}
                variants={fadeUp}
              >
                <Image
                  width={400}
                  height={200}
                  src={item.url}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-t-md"
                  loading="lazy"
                />
                <div className="flex flex-col flex-grow justify-between p-3">
                  <h1 className="text-base lg:text-lg text-gray-800 font-bold">
                    {item.name}
                  </h1>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                    <div className="flex items-center gap-2">
                      <Image
                        width={40}
                        height={20}
                        src={item.url}
                        loading="lazy"
                        alt="author"
                        className="w-6 h-6 rounded-full"
                      />
                      <p>Alex Ukafor</p>
                    </div>
                    <span>Sept 7, 2025</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-2 text-xs">
                    <span className="p-1 px-2 bg-sky-100 rounded-2xl">
                      keywords
                    </span>
                    <span className="p-1 px-2 bg-sky-100 rounded-2xl">
                      keywords
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-3 text-sm">
                    <span className="text-blue-500 font-medium cursor-pointer">
                      Explore Courses
                    </span>
                    <span className="text-gray-500 flex items-center gap-1 cursor-pointer">
                      <i className="bi bi-share"></i> Share
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Sidebar */}
        <div className="w-full lg:w-[22rem] flex-shrink-0">
          {/* Search bar */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.6 }}
            variants={fadeUp}
            className="bg-white rounded-2xl p-5 ring-1 ring-black/5 mb-3"
          >
            <form>
              <label htmlFor="search" className="font-medium">
                Search
              </label>
              <div className="flex items-center bg-white rounded-sm p-1 px-2 ring-1 ring-black/5 mt-1 text-gray-500">
                <i className="bi bi-search"></i>
                <input
                  type="search"
                  placeholder="Search articles, topics..."
                  className="outline-0 w-full ml-2"
                />
              </div>
            </form>
          </motion.div>

          {/* Categories */}
          <motion.div className="bg-white rounded-2xl p-5 ring-1 ring-black/5 mb-3">
            <h1 className="font-medium">Categories</h1>
            <div className="flex flex-col gap-2 mt-2">
              {[
                ["Ai & Data", 6],
                ["Productivity", 10],
                ["Designs", 8],
                ["Careers", 12],
                ["Announcements", 5],
              ].map(([name, count], i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-sky-100 px-4 py-1 rounded-2xl ring-1 ring-black/5"
                >
                  <span>{name}</span>
                  <span>{count}</span>
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
            className="bg-white rounded-2xl p-5 ring-1 ring-black/5 mb-3"
          >
            <h1 className="font-medium">Popular Posts</h1>
            <div className="flex flex-col gap-2 mt-2">
              {[
                [
                  "/images/courses/coursetwo.png",
                  "From Zero to SQL",
                  "12 min read",
                ],
                [
                  "/images/courses/courseone.png",
                  "UX heuristic 101",
                  "9 min read",
                ],
                [
                  "/images/courses/coursethree.png",
                  "Choose Your Data Track",
                  "7 min read",
                ],
              ].map(([src, title, time], i) => (
                <div key={i} className="flex items-center gap-2 py-1">
                  <Image
                    src={src}
                    width={60}
                    height={40}
                    loading="lazy"
                    alt="post"
                    className="object-cover rounded-sm shadow"
                  />
                  <div className="text-start">
                    <span className="font-medium text-sm">{title}</span>
                    <p className="text-xs text-gray-500">{time}</p>
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
            className="bg-white rounded-2xl p-5 ring-1 ring-black/5"
          >
            <h2 className="font-medium">Newsletter</h2>
            <input
              type="text"
              className="ring-1 ring-black/5 rounded-lg w-full p-2 mt-2"
              placeholder="Your name"
            />
            <input
              type="email"
              className="ring-1 ring-black/5 rounded-lg w-full p-2 mt-2"
              placeholder="Email address"
            />
            <Button
              type="submit"
              className="bg-blue-500 text-white rounded-lg w-full mt-3 p-2"
            >
              Subscribe
            </Button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
