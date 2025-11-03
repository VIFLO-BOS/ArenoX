import Image from "next/image";
import React from "react";

export default function Team_section() {
	return (
		<div>
			<section className="py-16 px-6 md:px-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-6 text-center">
					<h2 className="text-3xl font-bold text-gray-800 mb-12">
						Meet Our Team
					</h2>

					<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
						{/* Card 1 */}
						<div className="flex flex-col justify-between items-center bg-white hover:bg-blue-100 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-500">
							<div>
								<Image
									src="/images/mentor/01.jpg"
									alt="John Doe"
									className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
									width={400}
									height={200}
								/>
								<h3 className="text-xl font-semibold text-gray-800">
									John Doe
								</h3>
								<p className="text-blue-600 text-sm mb-2">
									CEO & Founder
								</p>
								<p className="text-gray-600 text-sm">
									Visionary leader with 10+ years of
									experience in tech innovation.
								</p>
							</div>

							<div className="flex  justify-center flex-end space-x-4 mt-4">
								<a href="#" className="">
									<i className="bi bi-facebook hover:!text-blue-500"></i>
								</a>
								<a href="#" className="">
									<i className="bi bi-twitter hover:!text-blue-500"></i>
								</a>
								<a href="#" className="">
									<i className="bi bi-linkedin hover:!text-blue-500"></i>
								</a>
								<a href="#" className="">
									<i className="bi bi-instagram hover:!text-blue-500"></i>
								</a>
							</div>
						</div>

						{/* Card 2 */}
						<div className="flex flex-col justify-between items-center bg-white hover:bg-blue-100 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-500">
							<div>
								<Image
									src="/images/mentor/02.jpg"
									alt="Jane Smith"
									width={400}
									height={200}
									className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
								/>
								<h3 className="text-xl font-semibold text-gray-800">
									Jane Smith
								</h3>
								<p className="text-blue-600 text-sm mb-2">
									CTO
								</p>
								<p className="text-gray-600 text-sm">
									Expert in AI and software architecture,
									driving innovation at scale.
								</p>
							</div>

							<div className="flex  justify-center flex-end  space-x-4 mt-4">
								<a href="#" className="">
									<i className="bi bi-facebook hover:!text-blue-500"></i>
								</a>
								<a href="#" className="">
									<i className="bi bi-twitter hover:!text-blue-500"></i>
								</a>
								<a href="#" className="">
									<i className="bi bi-linkedin hover:!text-blue-500"></i>
								</a>
								<a href="#" className="">
									<i className="bi bi-instagram hover:!text-blue-500"></i>
								</a>
							</div>
						</div>

						{/* Card 3 */}
						<div className="flex flex-col justify-between items-center bg-white hover:bg-blue-100 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-500">
							<div className="">
								<Image
									src="/images/mentor/03.jpg"
									alt="Michael Lee"
									width={400}
									height={200}
									className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
								/>
								<h3 className="text-xl font-semibold text-gray-800">
									Michael Lee
								</h3>
								<p className="text-blue-600 text-sm mb-2">
									Head of Design
								</p>
								<p className="text-gray-600 text-sm">
									Passionate about creating intuitive and
									user-friendly experiences.
								</p>
							</div>

							<div className="flex justify-center flex-end  space-x-4 mt-4">
								<a href="#" className="">
									<i className="bi bi-facebook hover:!text-blue-500"></i>
								</a>
								<a href="#" className="">
									<i className="bi bi-twitter hover:!text-blue-500"></i>
								</a>
								<a href="#" className="">
									<i className="bi bi-linkedin hover:!text-blue-500"></i>
								</a>
								<a href="#" className="">
									<i className="bi bi-instagram hover:!text-blue-500"></i>
								</a>
							</div>
						</div>

						{/* Card 4 */}
						<div className="flex flex-col justify-between items-center bg-white hover:bg-blue-100 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-500">
							<div className="">
								<Image
									src="/images/mentor/04.jpg"
									alt="Sophia Johnson"
									width={400}
									height={200}
									className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
								/>
								<h3 className="text-xl font-semibold text-gray-800">
									Sophia Johnson
								</h3>
								<p className="text-blue-600 text-sm mb-2">
									Marketing Lead
								</p>
								<p className="text-gray-600 text-sm">
									Creative strategist helping brands connect
									with their audiences.
								</p>
							</div>

							<div className="flex justify-center  space-x-4 mt-4">
								<a href="#" className="">
									<i className="bi bi-facebook hover:!text-blue-500"></i>
								</a>
								<a href="#" className="">
									<i className="bi bi-twitter hover:!text-blue-500"></i>
								</a>
								<a href="#" className="">
									<i className="bi bi-linkedin hover:!text-blue-500"></i>
								</a>
								<a href="#" className="">
									<i className="bi bi-instagram hover:!text-blue-500"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
