import React, { useState } from 'react'

const AnalyticsTag = ({ activeTab, setActiveTab }) => {

    const tabs = [
        "Analytics",
        "Expenses",
        "Income",
        "Income vs Expenses",
        "Balance",
        "Transaction History",
    ];
    return (
        <div className="flex space-x-6 text-gray-500">
            {tabs.map((tab, index) => (
                <button
                    key={index}
                    onClick={() => setActiveTab(tab)}
                    className={`text-[17px] font-bold ${activeTab === tab
                            ? "text-[#2f53e2]"
                            : "hover:text-[#5b6de0] text-[#82b4e5]"
                        }`}
                >
                    {tab}
                </button>
            ))}
        </div>
    )
}

export default AnalyticsTag