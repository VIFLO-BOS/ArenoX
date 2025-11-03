import React from "react";
import {
	Bell,
	Search,
	Settings,
	Home,
	Users,
	Book,
	BarChart2,
} from "lucide-react";

export default function AdminDashboard2() {
	return (
		<div className="flex h-screen bg-gray-100">
			{/* Sidebar */}
			<aside className="w-64 bg-white shadow-md">
				<div className="p-6 text-2xl font-bold text-blue-600">
					UX PILOT
				</div>
				<nav className="mt-6">
					<ul>
						<li className="px-6 py-3 hover:bg-blue-50 flex items-center gap-2 cursor-pointer">
							<Home className="w-5 h-5 text-gray-600" /> Dashboard
						</li>
						<li className="px-6 py-3 hover:bg-blue-50 flex items-center gap-2 cursor-pointer">
							<Users className="w-5 h-5 text-gray-600" /> Students
						</li>
						<li className="px-6 py-3 hover:bg-blue-50 flex items-center gap-2 cursor-pointer">
							<Book className="w-5 h-5 text-gray-600" /> Courses
						</li>
						<li className="px-6 py-3 hover:bg-blue-50 flex items-center gap-2 cursor-pointer">
							<Users className="w-5 h-5 text-gray-600" />{" "}
							Instructors
						</li>
						<li className="px-6 py-3 hover:bg-blue-50 flex items-center gap-2 cursor-pointer">
							<BarChart2 className="w-5 h-5 text-gray-600" />{" "}
							Reports
						</li>
						<li className="px-6 py-3 hover:bg-blue-50 flex items-center gap-2 cursor-pointer">
							<Settings className="w-5 h-5 text-gray-600" />{" "}
							Settings
						</li>
					</ul>
				</nav>
			</aside>

			{/* Main content */}
			<main className="flex-1 flex flex-col">
				{/* Top Navbar */}
				<header className="flex items-center justify-between px-6 py-4 bg-white shadow">
					<div className="flex items-center gap-3">
						<Search className="text-gray-500 w-5 h-5" />
						<input
							type="text"
							placeholder="Search..."
							className="outline-none bg-gray-100 rounded-lg px-3 py-1 text-sm"
						/>
					</div>
					<div className="flex items-center gap-4">
						<Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
						<img
							src="https://i.pravatar.cc/40"
							alt="Admin"
							className="rounded-full w-8 h-8"
						/>
					</div>
				</header>

				{/* Dashboard Content */}
				<div className="p-6 space-y-6 overflow-y-auto">
					{/* Stats cards */}
					<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
						<div className="bg-white p-4 rounded-lg shadow text-center">
							<p className="text-gray-500">Total Students</p>
							<h2 className="text-2xl font-bold">2,847</h2>
						</div>
						<div className="bg-white p-4 rounded-lg shadow text-center">
							<p className="text-gray-500">Active Courses</p>
							<h2 className="text-2xl font-bold">156</h2>
						</div>
						<div className="bg-white p-4 rounded-lg shadow text-center">
							<p className="text-gray-500">Revenue</p>
							<h2 className="text-2xl font-bold">$84,350</h2>
						</div>
						<div className="bg-white p-4 rounded-lg shadow text-center">
							<p className="text-gray-500">Completion Rate</p>
							<h2 className="text-2xl font-bold">87%</h2>
						</div>
					</div>

					{/* Graphs Section */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* Line graph (fake with bars) */}
						<div className="bg-white p-6 rounded-lg shadow">
							<h3 className="font-semibold mb-4">
								Revenue Growth
							</h3>
							<div className="flex items-end gap-3 h-40">
								<div className="bg-blue-500 w-8 h-24 rounded"></div>
								<div className="bg-blue-500 w-8 h-32 rounded"></div>
								<div className="bg-blue-500 w-8 h-16 rounded"></div>
								<div className="bg-blue-500 w-8 h-36 rounded"></div>
								<div className="bg-blue-500 w-8 h-28 rounded"></div>
								<div className="bg-blue-500 w-8 h-40 rounded"></div>
							</div>
							<p className="text-gray-500 text-sm mt-2">
								Jan - Jun 2025 Performance
							</p>
						</div>

						{/* Progress bars */}
						<div className="bg-white p-6 rounded-lg shadow">
							<h3 className="font-semibold mb-4">
								Students by Course
							</h3>
							<div className="space-y-4">
								<div>
									<p className="text-sm font-medium">
										JavaScript
									</p>
									<div className="w-full bg-gray-200 h-3 rounded-full">
										<div className="bg-green-500 h-3 rounded-full w-3/4"></div>
									</div>
								</div>
								<div>
									<p className="text-sm font-medium">
										Python
									</p>
									<div className="w-full bg-gray-200 h-3 rounded-full">
										<div className="bg-yellow-500 h-3 rounded-full w-2/3"></div>
									</div>
								</div>
								<div>
									<p className="text-sm font-medium">React</p>
									<div className="w-full bg-gray-200 h-3 rounded-full">
										<div className="bg-blue-500 h-3 rounded-full w-1/2"></div>
									</div>
								</div>
								<div>
									<p className="text-sm font-medium">
										Node.js
									</p>
									<div className="w-full bg-gray-200 h-3 rounded-full">
										<div className="bg-purple-500 h-3 rounded-full w-1/3"></div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Table */}
					<div className="bg-white p-6 rounded-lg shadow">
						<h3 className="font-semibold mb-4">
							Recent Enrollments
						</h3>
						<table className="w-full text-sm">
							<thead>
								<tr className="text-left border-b">
									<th className="pb-2">Student</th>
									<th className="pb-2">Course</th>
									<th className="pb-2">Date</th>
									<th className="pb-2">Status</th>
								</tr>
							</thead>
							<tbody>
								<tr className="border-b">
									<td className="py-2">John Doe</td>
									<td>React Basics</td>
									<td>2025-09-15</td>
									<td className="text-green-600">Active</td>
								</tr>
								<tr className="border-b">
									<td className="py-2">Jane Smith</td>
									<td>Python Advanced</td>
									<td>2025-09-12</td>
									<td className="text-yellow-600">Pending</td>
								</tr>
								<tr>
									<td className="py-2">Michael Lee</td>
									<td>JavaScript Essentials</td>
									<td>2025-09-10</td>
									<td className="text-red-600">Canceled</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</main>
		</div>
	);
}
