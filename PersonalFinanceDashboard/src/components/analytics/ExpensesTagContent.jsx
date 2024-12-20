import React from 'react'
import { PieChart, Pie, Cell } from "recharts";


const ExpensesTagContent = () => {
    const data = [
      { name: "Food", value: 1200, color: "#8884d8" },
      { name: "Transport", value: 1200, color: "#82ca9d" },
      { name: "Healthcare", value: 1200, color: "#ffc658" },
      { name: "Education", value: 1200, color: "#ff8042" },
      { name: "Clothes", value: 1200, color: "#8dd1e1" },
      { name: "Pets", value: 1200, color: "#d0ed57" },
      { name: "Entertainment", value: 1200, color: "#a4de6c" },
    ];
  
    const total = data.reduce((sum, item) => sum + item.value, 0);
  
    return (
      <div className="bg-white dark:bg-[#1d1933] p-6 rounded-lg shadow-md w-full">
        <h2 className="text-lg font-semibold mb-4">Expenses Breakdown
        </h2>
        {/* Donut Chart */}
        <div className="flex justify-center items-center mb-6">
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </div>
        {/* List Items */}
        <div className="space-y-4">
          {data.map((item, index) => (
               <div
               key={index}
               className={`flex justify-between items-center ${
                 index !== data.length - 1 ? "border-b pb-2 dark:border-b-[#5e628d]" : ""
               }`}
             >
              <div className="flex items-center space-x-2">
                {/* Bullet point with dynamic color */}
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></span>
                <p className="text-sm font-semibold text-[#90a4bd]">{item.name}</p>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-sm font-semibold text-[#90a4bd]">${item.value}</p>
                <p className="text-sm font-semibold mt-0 text-[#2d4b93] dark:text-white">
                  {((item.value / total) * 100).toFixed(1)}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default ExpensesTagContent