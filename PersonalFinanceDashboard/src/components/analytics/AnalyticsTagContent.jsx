import React from 'react'
import { FaWallet, FaPercentage, FaBook, FaLayerGroup } from "react-icons/fa";
import WeeklyExpenses from '../dashboard/WeeklyExpenses';
import AnalyticsTagWeeklyExpenses from './AnalyticsTagWeeklyExpenses';

const AnalyticsTagContent = () => {
    const stats = [
        {
            icon: <FaWallet className="text-white text-xl" />,
            title: "Daily Average",
            value: "$5470.36",
            bgColor: "bg-blue-600",
        },
        {
            icon: <FaPercentage className="text-white text-xl" />,
            title: "Change",
            value: "+47.36%",
            bgColor: "bg-green-600",
        },
        {
            icon: <FaBook className="text-white text-xl" />,
            title: "Total Transaction",
            value: "354",
            bgColor: "bg-yellow-500",
        },
        {
            icon: <FaLayerGroup className="text-white text-xl" />,
            title: "Categories",
            value: "40",
            bgColor: "bg-red-500",
        },
    ];

    // Weekly Expenses Array of objects..
    const getRandomValue = () => Math.floor(Math.random() * 1000) + 1; // Random values between 1 and 10

    const WeeklyExpensesArray = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ].map(month => ({
        month,
        a: getRandomValue(),
        aColor: '#d946ef',
        b: getRandomValue(),
        bColor: '#a348fa',
        c: getRandomValue(),
        cColor: '#8b5cf6',
        d: getRandomValue(),
        dColor: '#6366f1',
        e: getRandomValue(),
        eColor: '#3b82f6',
    }));



    return (
        <div>


            <div className="flex space-x-4 w-full justify-between ">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-lg flex items-center p-4 w-64 dark:bg-[#1d1933]"
                    >
                        <div
                            className={`flex items-center justify-center w-12 h-12 rounded-full ${stat.bgColor}`}
                        >
                            {stat.icon}
                        </div>
                        <div className="ml-4">
                            <p className="text-[#909fbf] font-bold">{stat.title}</p>
                            <p className="text-[#1f2c73] text-xl font-bold dark:text-white">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Weekly Expenses  */}
            <AnalyticsTagWeeklyExpenses WEArr={WeeklyExpensesArray} />
        </div>
    );
}

export default AnalyticsTagContent