"use client";
import React from "react";
import {motion} from "framer-motion";
import Image from "next/image";

export default function Courses_categories_section() {
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
     <div className="bg-white py-8 px-3 md:px-6 lg:px-20">
       {/* Header */}
       <motion.div
         initial={{ opacity: 0, x: -30 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 2.5}}
         className="max-w-5xl mx-auto text-center mb-8"
       >
         <h1 className="font-semibold text-3xl md:text-4xl !text-black">
           Find Your Perfect Learning Path
         </h1>
         <p className="text-gray-500 text-sm md:text-base lg:px-20 mt-2">
           Every learner has unique goals. Our courses are grouped into
           categories to help you quickly find the right skills.
         </p>
       </motion.div>

       {/* Categories Grid */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
         {categories.map((item, index) => (
           <motion.div
             key={index}
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: index * 0.1 }}
             className="bg-white shadow-md rounded-md border-b-2 border-orange-500 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer flex flex-col"
           >
             {/* Image */}
             <Image
               width={400}
               height={400}
               src={item.url}
               alt={item.name}
               className="w-full h-32 md:h-36 object-cover rounded-t-md"
               loading="lazy"
             />

             {/* Content */}
             <div className="flex flex-col p-2 flex-1">
               <h2 className="text-sm md:text-base font-semibold text-gray-800 line-clamp-2 mb-1">
                 {item.name}
               </h2>
               <p className="text-xs md:text-sm text-gray-500 line-clamp-3 mb-2">
                 {item.desc}
               </p>

               {/* Info & Tags */}
               <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 mb-2">
                 <span>16 weeks</span>
                 <span className="w-1 h-1 bg-black/20 rounded-full"></span>
                 <span>Instructor Led</span>
                 <span className="w-1 h-1 bg-black/20 rounded-full"></span>
                 <span>Intermediate</span>
               </div>
               <div className="flex flex-wrap gap-2 mb-3">
                 <span className="text-xs bg-sky-100 px-2 py-1 rounded-full">
                   HTML
                 </span>
                 <span className="text-xs bg-sky-100 px-2 py-1 rounded-full">
                   React
                 </span>
                 <span className="text-xs bg-sky-100 px-2 py-1 rounded-full">
                   JavaScript
                 </span>
               </div>

               {/* Actions */}
               <div className="flex gap-2 mt-auto">
                 <span className="text-xs md:text-sm bg-blue-500 text-white px-2 py-1 rounded-lg cursor-pointer text-center flex-1">
                   Explore Courses
                 </span>
                 <span className="text-xs md:text-sm bg-sky-100 text-gray-700 px-2 py-1 rounded-lg cursor-pointer text-center flex-1">
                   Syllabus
                 </span>
               </div>
             </div>
           </motion.div>
         ))}
       </div>
     </div>
   );
}
