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
import { DashboardDataContext } from '../../contexts/DashboardDataContext'
const IncomeVsExpensesTagContent = () => {
  const dashboardData = useContext(DashboardDataContext);
 
 
     return (
         <div className="mt-6">
             {/* Main container */}
             <div className="w-full h-auto border border-[#e5eaef] bg-[#ffffff] rounded-md dark:bg-[#1d1933] p-4">
                 {/* Header */}
                 <div className="dark:border-b-[#2f2b43] mb-6">
                     <h4 className="text-[#1f2c73] font-bold dark:text-white">
                       Income vs Expense Graph
                     </h4>
                 </div>
 
                 {/*Monthly Income vs Expenses Chart */}
                 <ResponsiveContainer width="100%" height={300}>
                     <BarChart data={dashboardData.monthlyIncomevsExpensesArray} margin={{ top: 20, right: 30, left: 20, bottom: 0 }}>
                         {/* <CartesianGrid strokeDasharray="3 3" stroke="#e5eaef" /> */}
                         <XAxis dataKey="month" stroke="#8884d8" />
                         <YAxis stroke="#8884d8" />
                         {/* <Tooltip
                             contentStyle={{
                                 backgroundColor: '#f9f9f9',
                                 border: 'none',
                                 boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
                             }}
                         /> */}
                         <Legend verticalAlign="top" align="right" />
                         <Bar dataKey="income" fill="#2d2ad9" name="Income" />
                         <Bar dataKey="expenses" fill="#d5d5f7" name="Expenses" />
                     </BarChart>
                 </ResponsiveContainer>
             </div>
         </div>
     );
}

export default IncomeVsExpensesTagContent