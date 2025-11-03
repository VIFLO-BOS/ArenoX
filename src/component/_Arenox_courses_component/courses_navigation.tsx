"use client";
import React from "react";
import { Code, Briefcase, Palette, Megaphone, BarChart, Database } from "lucide-react";

export default function Course_navigation() {
	const categories = [
		{ name: "Development", count: 1234, bg: "bg-indigo-100", icon: <Code size={16} /> },
		{ name: "Business", count: 1234, bg: "bg-green-100", icon: <Briefcase size={16} /> },
		{ name: "Design", count: 1234, bg: "bg-purple-100", icon: <Palette size={16} /> },
		{ name: "Marketing", count: 1234, bg: "bg-red-100", icon: <Megaphone size={16} /> },
		{ name: "Management", count: 1234, bg: "bg-yellow-100", icon: <BarChart size={16} /> },
		{ name: "Data Science", count: 1234, bg: "bg-blue-100", icon: <Database size={16} /> },
	];

	return (
		<div className="my-16 mx-12 lg:mx-17">
			{/* Title */}
			<div className="text-center">
				<h2 className="text-3xl font-semibold mb-2">Browse Top Categories</h2>
				<p className="text-gray-500">Find the perfect courses for your learning goals.</p>
			</div>

			{/* Categories */}
			<div className="my-10">
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mx-auto">
					{categories.map((cat, idx) => (
						<div
							key={idx}
							className="flex flex-col justify-center items-center gap-2 bg-white shadow-md p-4 rounded-md cursor-pointer hover:scale-105 transition-transform duration-300"
						>
							<div
								className={`flex items-center justify-center ${cat.bg} h-12 w-12 rounded-full`}
							>
								{cat.icon}
							</div>
							<p className="flex flex-col items-center text-center">
								<span className="text-sm font-semibold">{cat.name}</span>
								<span className="text-xs text-gray-500">{cat.count} courses</span>
							</p>
						</div>
					))}
				</div>
			</div>

			{/* Filters */}
			<div className="bg-white shadow-sm rounded-md py-5 px-6 mt-5 flex flex-wrap items-center justify-between gap-4">
				<div className="flex items-center gap-2">
					<h4 className="font-bold">All Courses</h4>
					<p className="text-sm text-gray-500">Showing 1200 results</p>
				</div>

				<div className="flex flex-wrap gap-3">
					<select className="border border-gray-300 rounded-md p-2 text-sm font-medium outline-none">
						<option>All Courses</option>
						<option>Development</option>
						<option>Management</option>
						<option>Design</option>
						<option>Data Science</option>
						<option>Business</option>
						<option>Marketing</option>
					</select>

					<select className="border border-gray-300 rounded-md p-2 text-sm font-medium outline-none">
						<option>All Levels</option>
						<option>Beginners</option>
						<option>Intermediate</option>
						<option>Experts</option>
					</select>

					<select className="border border-gray-300 rounded-md p-2 text-sm font-medium outline-none">
						<option>Sort by</option>
						<option>Popularity</option>
						<option>Newly Added</option>
					</select>
				</div>
			</div>
		</div>
	);
}
