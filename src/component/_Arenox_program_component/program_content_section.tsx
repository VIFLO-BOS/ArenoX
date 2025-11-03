import Image from "next/image";

export default function Program_content_section() {
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
			url: "https://i.pinimg.com/736x/6e/e9/18/6ee918d6bad713109da451d783c45126.jpg", // Data visualization, graphs
			rating: "⭐⭐⭐⭐⭐",
		},
		{
			name: "Design & Creativity",
			desc: "Master graphic design, branding, and digital content creation to make your ideas visually stunning.",
			url: "https://i.pinimg.com/736x/63/95/9d/63959d39985fe45e664e45a76bd489e8.jpg", // Modern office workspace
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
		<div className="flex flex-col lg:flex-row lg:flex-nowrap gap-8 px-4 lg:px-20 py-10 bg-gray-50 h-full">
			<div className="bg-white rounded-2xl ring-1 ring-black/5 px-4 py-1.5 w-full lg:w-[22rem]">
				<form
					action=""
					className="flex flex-wrap justify-between lg:block">
					<div className="flex flex-col mb-2">
						<label htmlFor="Program Type" className="font-medium">
							Program Type
						</label>
						<div className="mt-2">
							<input
								type="radio"
								className="font-control"
								name=""
								id=""
							/>
							&nbsp;Bootcamp
						</div>
						<div className="">
							<input
								type="radio"
								className="font-control"
								name=""
								id=""
							/>
							&nbsp;Certification
						</div>
						<div className="">
							<input
								type="radio"
								className="font-control"
								name=""
								id=""
							/>
							&nbsp;Degree
						</div>
					</div>

					<div className="flex flex-col mb-2">
						<label htmlFor="Duration" className="font-medium">
							Duration
						</label>
						<div className="flex flex-col gap-2 mt-2">
							<div className="flex items-center justify-between bg-sky-100 px-4 py-1 rounded-2xl ring-1 ring-black/5">
								<span>4-8 weeks</span>
								<span className="w-1 h-1 rounded-full bg-black"></span>
							</div>
							<div className="flex items-center justify-between bg-sky-100 px-4 py-1 rounded-2xl ring-1 ring-black/5">
								<span>2-6 months</span>
								<span className="w-1 h-1 rounded-full bg-black"></span>
							</div>
							<div className="flex items-center justify-between bg-sky-100 px-4 py-1 rounded-2xl ring-1 ring-black/5">
								<span>6+ months</span>
								<span className="w-1 h-1 rounded-full bg-black"></span>
							</div>
						</div>
					</div>

					<div className="flex flex-col mb-2">
						<label htmlFor="Format" className="font-medium">
							Format
						</label>
						<div className="mt-2">
							<input
								type="radio"
								className="font-control"
								name=""
								id=""
							/>
							&nbsp;Online
						</div>
						<div className="">
							<input
								type="radio"
								className="font-control"
								name=""
								id=""
							/>
							&nbsp;Hybrid
						</div>
						<div className="">
							<input
								type="radio"
								className="font-control"
								name=""
								id=""
							/>
							&nbsp;Self-paced
						</div>
						<div className="">
							<input
								type="radio"
								className="font-control"
								name=""
								id=""
							/>
							&nbsp;Instructor-led
						</div>
					</div>
				</form>
			</div>

			<div className="w-full">
				<div className="hidden lg:flex p-1 bg-sky-50 rounded-3xl w-full lg:w-[22rem] ring-1 ring-black/5">
					<span
						className={`bg-blue-500 text-white p-1.5 px-3 rounded-3xl font-medium`}>
						Bootcamp
					</span>
					<span className="p-2">Certifications</span>
					<span className="p-2">Degrees</span>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 my-8">
					{categories.map((item, index) => (
						<div
							key={index}
							className="bg-white shadow-md rounded-lg border-b-2 border-orange-500 hover:scale-105 transition-transform duration-300 flex flex-col cursor-pointer"
						>
							{/* Image */}
							<Image
								src={item.url}
								alt={item.name}
								width={400}
								height={200}
								className="w-full h-32 sm:h-36 md:h-40 object-cover rounded-t-lg"
								loading="lazy"
							/>

							{/* Content */}
							<div className="flex flex-col p-3 flex-1">
								<h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 line-clamp-2">
									{item.name}
								</h2>

								<p className="text-xs sm:text-sm text-gray-500 mb-2 line-clamp-2">
									{item.desc}
								</p>

								{/* Info */}
								<div className="flex flex-wrap items-center gap-1 text-xs text-gray-500 mb-2">
									<span>16 weeks</span>
									<span className="w-1 h-1 bg-gray-300 rounded-full"></span>
									<span>Instructor Led</span>
									<span className="w-1 h-1 bg-gray-300 rounded-full"></span>
									<span>Intermediate</span>
								</div>

								{/* Skill Tags */}
								<div className="flex flex-wrap gap-1 mb-2">
									<span className="bg-sky-100 text-xs px-2 py-0.5 rounded-full">HTML</span>
									<span className="bg-sky-100 text-xs px-2 py-0.5 rounded-full">React</span>
									<span className="bg-sky-100 text-xs px-2 py-0.5 rounded-full">JavaScript</span>
								</div>

								{/* Actions */}
								<div className="flex gap-2 mt-auto">
									<button className="flex-1 bg-blue-500 text-white text-sm py-1.5 rounded-lg hover:bg-blue-600 transition">
										Explore Courses
									</button>
									<button className="flex-1 bg-sky-100 text-gray-700 text-sm py-1.5 rounded-lg hover:bg-sky-200 transition">
										Syllabus
									</button>
								</div>
							</div>
						</div>
					))}
				</div>


				{/* Why choose our programs section */}
				<div className="bg-white rounded-2xl ring-1 ring-black/5 p-4 mt-10">
					<div className="flex items-center justify-between mb-4">
						<h1 className="font-semibold text-lg">Why choose our programs</h1>
						<button className="rounded-2xl bg-sky-100 px-3 py-1 text-sm hover:bg-sky-200 transition">
							Compare all
						</button>
					</div>

					<div className="space-y-3">
						<div className="flex items-start gap-3 p-3 rounded-lg ring-1 ring-black/5">
							<Image
								src="/iconizers/medal.svg"
								alt="medal"
								width={40}
								height={40}
								className="p-2 bg-sky-100 rounded-lg"
							/>
							<div>
								<h2 className="font-medium">Industrial-recognized credentials</h2>
								<p className="text-gray-500 text-sm">
									Earn certificates and degrees valued by employers.
								</p>
							</div>
						</div>

						<div className="flex items-start gap-3 p-3 rounded-lg ring-1 ring-black/5">
							<Image
								src="/iconizers/super-man.svg"
								alt="mentor"
								width={40}
								height={40}
								className="p-2 bg-sky-100 rounded-lg"
							/>
							<div>
								<h2 className="font-medium">Mentor support</h2>
								<p className="text-gray-500 text-sm">
									Get guidance from experienced instructors and peers.
								</p>
							</div>
						</div>

						<div className="flex items-start gap-3 p-3 rounded-lg ring-1 ring-black/5">
							<Image
								src="/iconizers/suitcase.svg"
								alt="career"
								width={40}
								height={40}
								className="p-2 bg-sky-100 rounded-lg"
							/>
							<div>
								<h2 className="font-medium">Career services</h2>
								<p className="text-gray-500 text-sm">
									Launch a career with hands-on projects and interview preparation.
								</p>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	);
}
