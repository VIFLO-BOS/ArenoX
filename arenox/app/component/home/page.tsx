import React from "react";
import { motion } from "motion/react";

interface LoadingType{
	lazy: String;
	eager: String;
}
export default function Hero() {

	return (
		<>
			<div className="relative isolate px-0 pt-15 lg:px-8">
				{/* clipPath start here.. */}
				{/* <div
					aria-hidden="true"
					className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
					<div
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
						className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#fd5d00] to-[#1100ff]  opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
					/>
				</div> */}

				{/* clipPath end here.. */}

				<motion.div className="min-h-6 py-20 sm:py-20 lg:py-20  flex align-items- justify-between gap-5 border-amber-600">
					<div className="max-w-2xl pr-0 lg:pr-20">
						<div className="headings">
							<h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-center lg:text-left">
								Ignite Your Future with Skills that Matter
							</h1>
							<p className="mt-10 text-center lg:text-left">
								Join thousands of learners who are mastering
								tech, business, and creative skills through
								expert-led online courses designed for
								real-world success.
							</p>
						</div>
						<div className="text-center flex  gap-5 mt-8">
							<button
								className="bg-blue-700 hover:bg-deepblue !text-white  shadow-sm shadow-gray-400 shadow  hover:bg-blue-800 font-semibold rounded-sm text-sm md:text-1xl p-1 md:py-1.5 lg:py-2 xl:py-2.5 mt-2 w-30 transition duration-500 ease-in-out"
								type="button">
								Get Started
							</button>
							
							<button 
								className="bg-orange-400 hover:bg-orange-500 shadow-sm shadow-gray-400 !text-white font-semibold rounded-sm p-1 md:py-1.5 lg:py-2 xl:py-2.5 mt-2 text-sm md:text-1xl w-40 transition duration-500 ease-in-out "
								type="button">
							
								Browse All Courses
							</button>
						</div>
					</div>

					<div className="hidden lg:flex">
						<img
							className="object-cover w-130 h-auto rounded-xl drop-shadow-xl"
							src="public/images/student-img/stud-2.jpg"
							alt=""
							loading="eager"
						/>
					</div>
				</motion.div>

				{/* second clipPath start here.. */}
				{/* <div
					aria-hidden="true"
					className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
					<div
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
						className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr to-[#1100ff] from-[#fd5d00] opacity-100 sm:left-[calc(50%+36rem)] sm:w-288.75"
					/>
				</div> */}
			</div>
			{/* second clipPath start here.. */}
		</>
	);
}
