import React from 'react'
import { LineChart, Line, XAxis, YAxis, Area, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useTheme } from '../../contexts/ThemeContext'
const BalanceTagContent = () => {
 const { theme } = useTheme();

    const daysInMonth = {
        Jan: 31, Feb: 28, Mar: 31, Apr: 30, May: 31, Jun: 30,
        Jul: 31, Aug: 31, Sep: 30, Oct: 31, Nov: 30, Dec: 31,
    };
    
    const currentMonth = new Date().toLocaleString('default', { month: 'short' });
    
    const BalanceTrendsArray = Array.from({ length: daysInMonth[currentMonth] }, (_, index) => ({
        day: index + 1,
        date: `${index + 1}-${currentMonth}`, // Add formatted date string
        balance: Math.floor(Math.random() * 2000),
    }));

    return (
        <div className="mt-6">
            {/* Main container */}
            <div className="w-full h-auto border border-[#e5eaef] bg-[#ffffff] rounded-md dark:bg-[#1d1933]">
                {/* Header */}
                <div className="flex items-center justify-between p-4">
                    <div>
                        <h4 className="text-[#1f2c73] font-bold dark:text-white">Total Balance</h4>

                    </div>


                </div>

                {/* Balance Trends Chart */}
                <div className="p-4">
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart
                            data={BalanceTrendsArray}
                            margin={{ top: 20, right: 30, left: 20, bottom: 0 }}
                        >


                            {/* X and Y Axes */}
                            <XAxis dataKey='date' stroke="#8884d8" />
                            <YAxis stroke="#8884d8" />

                            {/* Tooltip */}
                            <Tooltip

                                contentStyle={{
                                    backgroundColor: theme === "dark" ? '#FFFF00' : '#fffeee',
                                    border: 'none',
                                    boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
                                }}
                            />

                            {/* Area for shading under the line */}
                            <defs>
                                <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8224d8" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#8224d8" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <Area
                                type="monotone"
                                dataKey="balance"
                                stroke="#8224d8"
                                fill="url(#colorBalance)"
                                fillOpacity={1}
                            />

                            {/* Line */}
                            <Line
                                type="monotone"
                                dataKey="balance"
                                stroke="#8224d8"
                                strokeWidth={2}
                                dot={{ r: 2 }}
                                activeDot={{ r: 6 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

            </div>
        </div>
    );
}

export default BalanceTagContent