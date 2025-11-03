import { Button } from "@headlessui/react";
import Image from "next/image";
import React from "react";
import {motion} from "framer-motion"

interface FilterButton {
	name: string;
	pathname: string;
}

export default function Program_hero_section() {
	const filterBtn = [
		{ name: "Filter", pathname: "filter" },
		{ name: "Certification", pathname: "certification" },
		{ name: "Bootcamp", pathname: "bootcamp" },
		{ name: "Degree", pathname: "degree" },
	];
	return (
		<div className=" flex items-center justify-center lg:grid lg:grid-cols-2 px-13 lg:px-20 pb-10 ">
			<motion.div initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay:  0.7 }}
								 className="lg">
				<div className="lg:w-100">
					<h1 className="text-5xl sm:px-10 lg:px-0 text-center lg:text-start lg:text-5xl font-medium mb-3">
						Find the right program for your career.
					</h1>
					<p className="text-center lg:text-start text-gray-600 mb-3">
						Explore our structured learning programs accross
						Bootcamps , Certifications, Degrees. Filter by level,
						duration, learning format to match your schedule.
					</p>
				</div>
				<div className="flex items-center justify-center mt-5 lg:justify-normal gap-5 ">
					{filterBtn.map((x, i) => {
						return (
							<Button
								key={i}
								className="px-2 py:1 lg:py-2 lg:px-3 shadow rounded-lg ring-1 ring-black/5">
								{x.name}
							</Button>
						);
					})}
				</div>
			</motion.div>
			<motion.div initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }} 
								className="hidden lg:block">
				<Image
				width={400}
				height={400}
					src="/images/banner/mahila.png"
					alt="student-img"
          loading="lazy"
					className="w-full h-auto object-cover rounded-xs"
				/>
			</motion.div>
		</div>
	);
}
