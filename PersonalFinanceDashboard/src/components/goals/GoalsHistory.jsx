import React from 'react';
import { Icons } from '../Icons';

const GoalsHistory = ({ GHisArr }) => {
    return (
        <div className="">
            {/* Main container */}
            <div className="w-full h-auto border border-[#e5eaef] bg-[#ffffff] rounded-md dark:bg-[#1d1933]">
                {/* Header */}
                <div className="dark:border-b-[#2f2b43] mt-3 mx-4 space-y-4">
                    <h4 className="text-[#1f2c73] font-bold dark:text-white">History</h4>
                </div>

                {/* Table */}
                <div className="mt-4">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-[#f5f5f5] text-left dark:bg-[#2f2b43]">
                                <th className="p-3 text-[#1f2c73] font-bold text-[16px] dark:text-white">Date</th>
                                <th className="p-3 text-[#1f2c73] font-bold text-[16px] dark:text-white">Wallet</th>
                                <th className="p-3 text-[#1f2c73] font-bold text-[16px] dark:text-white">Description</th>
                                <th className="p-3 text-[#1f2c73] font-bold text-[16px] dark:text-white">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {GHisArr.map((item, index) => (
                                <tr
                                    key={index}
                                    className={`border-t dark:border-[#2f2b43] ${index % 2 === 0
                                            ? 'bg-[#f9f9f9] dark:bg-[#1d1b31]'
                                            : 'bg-[#ffffff] dark:bg-[#26233e]'
                                        }`}
                                >
                                    {/* Date */}
                                    <td className="p-3 text-[#7184b5] font-semibold dark:text-[#4673ad]">
                                        <Icons.DateIcon className="text-[#7184b5]  dark:text-[#4673ad] inline-block mr-2" />
                                        {item.date}</td>

                                    {/* Wallet */}
                                    <td className="p-3  text-[#7184b5] font-semibold dark:text-[#4673ad]">
                                        <item.icon className="text-[#7184b5]  dark:text-[#4673ad] inline-block mr-2" />

                                        {item.wallet}
                                    </td>

                                    {/* Description */}
                                    <td className="p-3 text-[#7184b5] font-semibold dark:text-[#4673ad]">{item.Description}</td>

                                    {/* Amount */}
                                    <td
                                        className={`p-3 font-semibold flex items-end justify-center ${item.Amount.startsWith('+')
                                                ? 'text-[#10b981] dark:text-[#6ee7b7]'
                                                : 'text-[#ef4444] dark:text-[#f87171]'
                                            }`}
                                    >
                                        {item.Amount}{item.Currency}
                                        <br /> {item.ByAmount}

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default GoalsHistory;
