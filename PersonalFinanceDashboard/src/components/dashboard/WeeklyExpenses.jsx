import React, { useContext } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { DashboardDataContext } from '../../contexts/DashboardDataContext';
import { useComponentWidthContext } from '../../contexts/ComponentWidthContext'; 

const WeeklyExpenses = () => {

  const dashboardData = useContext(DashboardDataContext);
  const { componentWidth} = useComponentWidthContext();

  return (
    <div className="mt-6">
      {/* Main container */}
      <div className=  {`${componentWidth} h-auto border border-[#e5eaef] bg-[#ffffff] rounded-md dark:bg-[#1d1933] p-4`}>
        {/* Header */}
        <div className="dark:border-b-[#2f2b43] mb-6">
          <h4 className="text-[#1f2c73] font-bold dark:text-white">
            Weekly Expenses
          </h4>
        </div>

        {/* Chart */}
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dashboardData.weeklyExpensesArray} margin={{ top: 20, right: 30, left: 20, bottom: 0 }}>
            {/* <CartesianGrid strokeDasharray="3 3" stroke="#e5eaef" /> */}
            <XAxis dataKey="month" stroke="#8884d8" />
            <YAxis stroke="#8884d8" />
            {/* <Tooltip /> */}
            <Legend />

            {/* Stacked Bars */}
            <Bar dataKey="a" stackId="stack" fill="#d946ef" name="Expense A" />
            <Bar dataKey="b" stackId="stack" fill="#a348fa" name="Expense B" />
            <Bar dataKey="c" stackId="stack" fill="#8b5cf6" name="Expense C" />
            <Bar dataKey="d" stackId="stack" fill="#6366f1" name="Expense D" />
            <Bar dataKey="e" stackId="stack" fill="#3b82f6" name="Expense E" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeeklyExpenses;
