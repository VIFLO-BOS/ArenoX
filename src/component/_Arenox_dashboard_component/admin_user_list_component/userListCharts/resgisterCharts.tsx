"use client";
import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import {
  data,
  renderCustomizedLabel,
  colors,
} from "@/utils/data/chartsData/registeredChartUser";

// This interface describes the shape of an individual data point
// and includes an index signature using 'unknown' for better type safety than 'any'.
interface ChartDataItem {
  name: string;
  value: number;
  [key: string]: unknown; // Added this line to satisfy the Recharts library's requirements
}

// Renamed the prop interface to be more descriptive
interface CustomizedLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
}

export default function UserRegistrationPieChart() {
  return (
    <div className="bg-white rounded shadow-md p-2 mb-3">
      <div className="flex items-center justify-between ">
        <div className="">
          {" "}
          <h1 className="font-medium text-start mb-3">Registered User Chart</h1>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                // We cast the imported data to our newly defined ChartDataItem[] array
                data={data as ChartDataItem[]}
                cx="50%"
                cy="40%"
                labelLine={false}
                label={renderCustomizedLabel as CustomizedLabelProps}
                outerRadius={75}
                fill="#8884d8"
                dataKey="value"
              >
                {/* We cast 'entry' here as well to remove potential TS warnings in the map function */}
                {(data as ChartDataItem[]).map((entry, index) => (
                  <Cell
                    key={`cell-${entry.name}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="">
          <div className="flex items-center gap-2">
            <p className="w-3 h-3 bg-[#0088FE]"></p>
            <span className="text-sm text-gray-400">Total-Registered</span>
          </div>
          <div className="flex items-center gap-2">
            <p className="w-3 h-3 bg-[#00C49F]"></p>
            <span className="text-sm text-gray-400">Total-Active-Users</span>
          </div>
          <div className="flex items-center gap-2">
            <p className="w-3 h-3 bg-[#FFBB28]"></p>
            <span className="text-sm text-gray-400">Total-Inactive-Users</span>
          </div>
        </div>
      </div>
    </div>
  );
}
