import React, { useState } from 'react'
import { FaUniversity, FaWallet } from 'react-icons/fa';
import { MdOutlineEarbudsBattery } from "react-icons/md";


import BudgetsPeriod from './BudgetsPeriod';
import 'rsuite/dist/rsuite.min.css';

const BudgetsHolder = ({ badgArr }) => {



    const [TitleName, setTitleName] = useState('Grocery');



    return (
        <div className="flex gap-10 ">
            {/* Wallet List */}
            <div className=" bg-white w-[350px] rounded-lg shadow-md p-4 space-y-4 dark:bg-[#554b8d]">
                {badgArr.map((badg, index) => (
                    <div
                        key={index}
                        className={`flex items-center p-3 rounded-lg cursor-pointer ${badg.selected
                            ? "bg-blue-600 text-white dark:bg-[#877ec7]"
                            : "bg-blue-100 dark:bg-[#1d1933]"
                            }`}
                    >
                        <div className={`text-2xl p-2 rounded-full ${badg.selected ? "bg-blue-500" : "bg-white"}`}>
                            {badg.icon}
                        </div>
                        <div className='flex justify-between w-full '>

                            <div className="ml-4">
                                <p className="text-sm font-semibold">{badg.name}</p>
                                <p className="text-xs font-semibold text-[#b6b3eb]">{badg.balance}</p>
                            </div>
                            <div className=''>
                                <p className="text-xs font-semibold text-[#b6b3eb]">{badg.tag}</p>
                            </div>
                        </div>

                    </div>
                ))}
                <button className="flex items-center w-full text-blue-500 text-sm font-semibold p-3 rounded-lg border border-blue-500 hover:bg-blue-50">
                    <MdOutlineEarbudsBattery className="mr-2" />
                    Add new Budget
                </button>
            </div>

            {/* Budgets Details */}
            <div className="flex flex-col w-full gap-6 ">
                <div className='bg-white  rounded-lg shadow-md p-6 dark:bg-[#1d1933]'>
                    <h3 className="text-lg font-semibold text-[#1f2c73]   dark:text-white">{TitleName}</h3>
                </div>
                <div className='flex flex-col gap-6'>
                    {/* spend overview */}
                    <div className=" bg-white w-full rounded-lg shadow-md p-6 dark:bg-[#1d1933]">

                        <div className="space-y-4">

                            <div className="flex justify-between">
                                <div className='flex flex-col items-start'>
                                    <p className="text-sm font-semibold text-[#7190c5]">Spend</p>
                                    <p className="text-lg font-semibold text-[#1f2c73] dark:text-white">$1458.30</p>
                                </div>
                                <div className='flex flex-col items-end'>
                                    <p className="text-sm font-semibold text-[#7190c5]">Budget</p>
                                    <p className="text-lg font-semibold text-[#1f2c73] dark:text-white">$1458.30</p>
                                </div>
                            </div>

                            {/* Progress Line */}
                            <div className="h-2 w-full rounded-md bg-[#eeeeee] overflow-hidden">
                                <div
                                    style={{
                                        width: '25%',
                                        backgroundColor: '#2f2cd8'
                                    }}
                                    className="h-full"
                                ></div>
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-sm font-semibold text-[#7190c5]">25%</p>

                                </div>
                                <div className=''>
                                    <p className="text-sm font-semibold text-[#7190c5]">75%</p>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Info overview */}
                    <div className=" bg-white w-full rounded-lg shadow-md p-6 dark:bg-[#1d1933]">

                        <div className="space-y-4">

                            <div className="flex justify-between">
                                <div>
                                    <p className="text-sm font-semibold text-[#7190c5]">Last Month</p>
                                    <p className="text-lg font-semibold text-[#1f2c73] dark:text-white">$42,678</p>
                                </div>
                                <div className=''>
                                    <p className="text-sm font-semibold text-[#7190c5]">Expenses</p>
                                    <p className="text-lg font-semibold text-[#1f2c73] dark:text-white">$1,798</p>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-[#7190c5]">Taxes</p>
                                    <p className="text-lg font-semibold text-[#1f2c73] dark:text-white">$255.25</p>
                                </div>
                                <div className=''>
                                    <p className="text-sm font-semibold text-[#7190c5]">Debt</p>
                                    <p className="text-lg font-semibold text-[#1f2c73] dark:text-white">$365,478</p>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>


                {/* Budgets Period */}
                <BudgetsPeriod />







            </div>
        </div>
    )
}

export default BudgetsHolder