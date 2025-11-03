"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

export default function Reports_chart() {

  const courseData = [
    { name: "Jan", enrollments: 40, completions: 25 },
    { name: "Feb", enrollments: 60, completions: 35 },
    { name: "Mar", enrollments: 80, completions: 50 },
    { name: "Apr", enrollments: 45, completions: 40 },
    { name: "May", enrollments: 90, completions: 70 },
  ];

  return (
    <div className="mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Enrollments Chart */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-sm font-semibold mb-3">Monthly Enrollments</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={courseData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="enrollments" fill="#6366f1" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Completion Chart */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-sm font-semibold mb-3">Course Completions</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={courseData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="completions"
                stroke="#10b981"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
