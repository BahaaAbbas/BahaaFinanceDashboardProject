import React from 'react'
import { LineChart, Line, XAxis, YAxis, Area, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useTheme } from '../../contexts/ThemeContext';
import { useComponentWidthContext } from '../../contexts/ComponentWidthContext';

const ProfileBudget = () => {
    const { theme } = useTheme();
    const { componentWidth } = useComponentWidthContext();
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
            <div className={`${componentWidth} h-auto border border-[#e5eaef] bg-[#ffffff] rounded-md dark:bg-[#1d1933]`}>
                {/* Header */}
                <div className="flex items-center justify-between p-4">
                    <div>
                        <h4 className="text-[#1f2c73] font-bold dark:text-white">City Bank</h4>

                    </div>

                    <div className='flex justify-between gap-2'>
                        <button className=' bg-[#2f2cd8] px-3 py-2 text-white rounded-md font-semibold'>Day</button>
                        <button className=' bg-[#e1e1f9] px-3 py-2 text-[#2f2cd8] rounded-md font-semibold'>Week</button>
                        <button className=' bg-[#e1e1f9] px-3 py-2 text-[#2f2cd8] rounded-md font-semibold'>Month</button>
                        <button className=' bg-[#e1e1f9] px-3 py-2 text-[#2f2cd8] rounded-md font-semibold'>Year</button>

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

export default ProfileBudget