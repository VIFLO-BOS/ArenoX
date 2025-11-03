import Image from "next/image";
import { useState } from "react";
import { coursesDetails } from "@/utils/data/coursesData/courses";
import {motion} from "framer-motion";

export default function Courses_card() {
	const [currentPage, setcurrentPage] = useState(1);
	const itemsPerPage = 8;

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentCourses = coursesDetails.slice(
		indexOfFirstItem,
		indexOfLastItem
	);

	const totalPages = Math.ceil(coursesDetails.length / itemsPerPage);

	const [isHeartRed, setisHeartRed] = useState(
		new Array(coursesDetails.length).fill(false)
	);

	const toggleHeartColor = (index: number) => {
		const newHeartRed = [...isHeartRed];
		newHeartRed[index] = !newHeartRed[index];
		setisHeartRed(newHeartRed);
	};
	
	return (
    <div className="my-12 px-4 sm:px-6 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {currentCourses.map((course, index) => (
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
                <p>⭐⭐⭐⭐⭐</p>
                <p>
                  {course.rating}
                  {" (1,234)"}
                </p>
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

      {/* Pagination */}
      <div className="flex justify-center flex-wrap gap-2 mt-6">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setcurrentPage(i + 1)}
            className={`rounded-sm py-2 px-4 shadow hover:bg-blue-600 hover:text-white ${
              currentPage === i + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-500"
            } transition duration-300`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
