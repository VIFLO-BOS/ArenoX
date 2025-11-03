import React from "react";
import {
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  BarChart,
  Bar,
} from "recharts";
import { studentData } from "./chart_data";
export default function Student_bar_chart() {
  return (
    <div className="bg-white p-2 rounded-lg shadow">
      <h3 className="font-semibold text-gray-700 mb-4">Students per Course</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={studentData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="students" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
