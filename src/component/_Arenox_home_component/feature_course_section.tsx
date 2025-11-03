"use client";
import React, { useState } from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import { coursesDetails } from "@/utils/data/coursesData/courses";

export default function Feature_Course_section() {
   const courses = coursesDetails.slice(0,4);
   const [isHeartRed, setIsHeartRed] = useState(new Array(courses.length).fill(false));
   const toggleHeartColor = (index: number) => {
      const newHeartRed = [...isHeartRed];
      newHeartRed[index] = !newHeartRed[index];
      setIsHeartRed(newHeartRed);
   };


   return (
     <div className="py-10 px-3 md:px-6 lg:px-20 bg-blue-100">
       <div className="max-w-6xl mx-auto text-center md:text-left">
         <h1 className=" text-4xl md:text-5xl font-semibold mb-4">
           Popular Courses Loved by Learners
         </h1>
         <p className=" mb-6 opacity-70">
           These are the courses our learners can’t stop talking about. <br />
           Tried, tested, and proven to deliver real results in career growth,
           creativity, and confidence.
         </p>
         <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-10">
           <button className="bg-orange-500 hover:bg-orange-600 py-2 px-4 rounded-sm !text-white transition-all duration-500">
             Become a Tutor
           </button>
           <button className=" py-2 px-4 hover:!text-white rounded-sm hover:bg-blue-800 transition-all duration-500 flex items-center gap-2">
             Browse Freelancer <i className="bi bi-arrow-right "></i>
           </button>
         </div>
       </div>

       {/* Courses Grid */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-8xl mx-auto">
         {courses.map((course, index) => (
           <motion.div
             key={index}
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: index * 0.5 }}
             className="flex flex-col justify-between bg-white shadow-md border-b-2 border-b-orange-400 rounded-lg hover:shadow-xl transition duration-300"
           >
             <div className="relative">
               <Image
                 src={course.courseImageUrl}
                 alt={course.title}
                 width={400}
                 height={200}
                 className="w-full h-40 object-cover rounded-t-lg"
               />
               <div
                 className="absolute top-3 right-3 bg-white w-8 h-8 flex items-center justify-center rounded-full shadow cursor-pointer"
                 onClick={() => toggleHeartColor(index)}
               >
                 <i
                   className={`bi bi-heart-fill ${
                     isHeartRed[index] ? "text-red-600" : "text-gray-500"
                   }`}
                 ></i>
               </div>
             </div>

             <div className="px-3 py-2">
               <span className={`${course.bgColor} font-bold text-xs`}>
                 {course.category}
               </span>
               <h3 className="text-sm font-medium mt-1 line-clamp-2">
                 {course.title}
               </h3>
               <p className="text-gray-500 text-sm line-clamp-2 mt-1">
                 {course.paragraph}
               </p>
             </div>

             <div className="flex items-center gap-2 px-3 pt-3">
               <Image
                 src={course.tutor.imageUrl}
                 alt={course.tutor.name}
                 width={30}
                 height={30}
                 className="w-8 h-8 object-cover rounded-full"
               />
               <p className="text-gray-500 text-sm">{course.tutor.name}</p>
             </div>

             <div className="flex items-center justify-between px-3 py-2">
               <span className="flex gap-1 text-sm items-center">
                 <p>{course.rating} (1,234)</p>
               </span>
               <span className="text-xs text-gray-600">{course.hrs} hrs</span>
             </div>

             <div className="flex items-center justify-between px-3 pb-3">
               <div className="flex gap-2 items-center">
                 <span className="text-lg font-semibold text-gray-800">
                   ${course.price}
                 </span>
                 <span className="text-gray-400 text-sm line-through">
                   $99.9
                 </span>
               </div>
               <button className="bg-orange-400 text-white py-1 text-sm px-3 rounded hover:bg-orange-500 transition duration-300 ease-out">
                 View Details
               </button>
             </div>
           </motion.div>
         ))}
       </div>
     </div>
   );
}
