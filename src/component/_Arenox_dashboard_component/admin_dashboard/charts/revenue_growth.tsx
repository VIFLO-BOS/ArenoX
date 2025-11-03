import React from "react";
import {
  LineChart,
  CartesianGrid,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { revenueData } from "./chart_data";

export default function Revenue_growth() {
  return (
    <div className="bg-white p-2 rounded-lg shadow">
      <h3 className="font-semibold text-gray-700 mb-4">Revenue Growth</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={revenueData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#3b82f6"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
