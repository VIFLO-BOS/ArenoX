import React from "react";

export default function Dashboard() {
	return (
		<div className="flex min-h-screen bg-gray-50">
			{/* Sidebar */}
			<aside className="w-64 bg-white shadow-md flex flex-col">
				<div className="px-6 py-4 border-b">
					<h1 className="text-2xl font-bold text-indigo-600">
						LearnHub
					</h1>
				</div>

				<nav className="flex-1 px-4 py-6">
					<ul className="space-y-4">
						<li className="flex items-center gap-2 text-blue-600 font-semibold">
							<i className="bi bi-grid"></i> Dashboard
						</li>
						<li className="flex items-center gap-2 text-gray-700">
							<i className="bi bi-book"></i> My Courses
						</li>
						<li className="flex items-center gap-2 text-gray-700">
							<i className="bi bi-search"></i> Browse Courses
						</li>
						<li className="flex items-center gap-2 text-gray-700">
							<i className="bi bi-calendar-event"></i> Schedule
						</li>
						<li className="flex items-center gap-2 text-gray-700">
							<i className="bi bi-trophy"></i> Achievements
						</li>
						<li className="flex items-center gap-2 text-gray-700">
							<i className="bi bi-people"></i> Study Groups
						</li>
						<li className="flex items-center gap-2 text-gray-700">
							<i className="bi bi-graph-up"></i> Progress
						</li>
						<li className="flex items-center gap-2 text-gray-700">
							<i className="bi bi-gear"></i> Settings
						</li>
						<li className="flex items-center gap-2 text-gray-700">
							<i className="bi bi-question-circle"></i> Help &
							Support
						</li>
					</ul>
				</nav>

				{/* Profile */}
				<div className="p-4 border-t flex items-center gap-3">
					<img
						src="https://via.placeholder.com/40"
						alt="Profile"
						className="w-10 h-10 rounded-full"
					/>
					<div>
						<p className="font-medium">Sarah Johnson</p>
						<p className="text-sm text-gray-500">Premium Student</p>
					</div>
				</div>
			</aside>

			{/* Main Content */}
			<main className="flex-1 p-6">
				{/* Topbar */}
				<div className="flex justify-between items-center mb-6">
					<h2 className="text-xl font-bold">Dashboard</h2>
					<input
						type="text"
						placeholder="Search courses..."
						className="border rounded-lg px-4 py-2 w-64"
					/>
				</div>

				{/* Stats */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
					<div className="bg-white p-4 rounded-xl shadow">
						<p className="text-gray-500">Courses Enrolled</p>
						<h3 className="text-2xl font-bold">12</h3>
						<p className="text-green-500 text-sm">+2 this month</p>
					</div>
					<div className="bg-white p-4 rounded-xl shadow">
						<p className="text-gray-500">Completed</p>
						<h3 className="text-2xl font-bold">8</h3>
						<p className="text-green-500 text-sm">
							67% completion rate
						</p>
					</div>
					<div className="bg-white p-4 rounded-xl shadow">
						<p className="text-gray-500">Study Hours</p>
						<h3 className="text-2xl font-bold">48</h3>
						<p className="text-green-500 text-sm">
							+5.2 hrs this week
						</p>
					</div>
					<div className="bg-white p-4 rounded-xl shadow">
						<p className="text-gray-500">Certificates</p>
						<h3 className="text-2xl font-bold">6</h3>
						<p className="text-green-500 text-sm">+1 this month</p>
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
					{/* Continue Learning */}
					<div className="lg:col-span-2 space-y-4">
						<h3 className="font-semibold">Continue Learning</h3>
						<div className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
							<div>
								<p className="font-medium">
									JavaScript Fundamentals
								</p>
								<p className="text-sm text-gray-500">
									Learn the basics of JavaScript programming
								</p>
								<div className="w-full bg-gray-200 h-2 rounded mt-2">
									<div className="bg-blue-500 h-2 w-3/4 rounded"></div>
								</div>
							</div>
							<button className="bg-blue-500 text-white px-4 py-1 rounded-lg">
								Continue
							</button>
						</div>

						<div className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
							<div>
								<p className="font-medium">
									UI/UX Design Basics
								</p>
								<p className="text-sm text-gray-500">
									Master the fundamentals of UI design
								</p>
								<div className="w-full bg-gray-200 h-2 rounded mt-2">
									<div className="bg-green-500 h-2 w-2/5 rounded"></div>
								</div>
							</div>
							<button className="bg-blue-500 text-white px-4 py-1 rounded-lg">
								Continue
							</button>
						</div>

						<div className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
							<div>
								<p className="font-medium">Data Analytics</p>
								<p className="text-sm text-gray-500">
									Analyze data and gain insights
								</p>
								<div className="w-full bg-gray-200 h-2 rounded mt-2">
									<div className="bg-purple-500 h-2 w-1/5 rounded"></div>
								</div>
							</div>
							<button className="bg-blue-500 text-white px-4 py-1 rounded-lg">
								Continue
							</button>
						</div>
					</div>

					{/* Right Side Widgets */}
					<div className="space-y-6">
						{/* Deadlines */}
						<div className="bg-white p-4 rounded-xl shadow">
							<h3 className="font-semibold">
								Upcoming Deadlines
							</h3>
							<ul className="mt-2 space-y-2">
								<li className="flex justify-between items-center bg-red-100 px-3 py-2 rounded">
									<span>JavaScript Quiz</span>
									<span className="text-red-600 text-sm">
										Urgent
									</span>
								</li>
								<li className="flex justify-between items-center bg-yellow-100 px-3 py-2 rounded">
									<span>Design Project</span>
									<span className="text-yellow-600 text-sm">
										Soon
									</span>
								</li>
								<li className="flex justify-between items-center bg-blue-100 px-3 py-2 rounded">
									<span>Analytics Report</span>
									<span className="text-blue-600 text-sm">
										Upcoming
									</span>
								</li>
							</ul>
						</div>

						{/* Recent Activity */}
						<div className="bg-white p-4 rounded-xl shadow">
							<h3 className="font-semibold">Recent Activity</h3>
							<p className="text-sm text-gray-600 mt-2">
								✅ Completed lesson:{" "}
								<b>Variables and Data Types</b> (2 hours ago)
							</p>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
