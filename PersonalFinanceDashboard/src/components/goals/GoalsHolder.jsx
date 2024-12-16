import React, { useState } from 'react'
import { MdOutlineEarbudsBattery } from "react-icons/md";
import GoalsAvailablebyWidgets from './GoalsAvailablebyWidgets';
import { Icons } from '../Icons';
import GoalsHistory from './GoalsHistory';
import { Progress } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { FaCreditCard } from 'react-icons/fa'; // Example for wallet icon
const GoalsHolder = ({ goalArr }) => {

    const [TitleName, setTitleName] = useState('Car');
    // Inline style for progress bar container
    const style = {
        width: 60,
        display: 'inline-block',
        marginRight: 0,
    };


    // Monthly BudgetsArray of objects..
    const AvailableByWalletArray = [
        {
            Category: 'City Bank',
            percent: 75,
            text: '150$',
            lineColor: '#22c55e',
            icon: Icons.BankIcon,
            IconColor: '#22c55e'
        },
        {
            Category: 'Cash Wallet',
            percent: 75,
            text: '150$',
            lineColor: '#06b6d4',
            icon: Icons.WalletIcon,
            IconColor: '#06b6d4',
        },
        {
            Category: 'Visa Card',
            percent: 75,
            text: '150$',
            lineColor: '#06b6d4',
            icon: Icons.VisaIcon,
            IconColor: '#06b6d4',
        },

    ]

    // Goals History Array of objects..
    const GoalsHistoryArray = [
        {
            date: '29 Jan 2024',
            wallet: 'Master Card',
            Description: 'Necessities',
            Amount: '+100.00',
            ByAmount: '12.368$',
            Currency: '$',
            icon: FaCreditCard, // Wallet icon
        },
        {
            date: '29 Jan 2024',
            wallet: 'Master Card',
            Description: 'Necessities',
            Amount: '+100.00',
            ByAmount: '12.368$',
            Currency: '$',
            icon: FaCreditCard,
        },
        {
            date: '29 Jan 2024',
            wallet: 'Master Card',
            Description: 'Necessities',
            Amount: '+100.00',
            ByAmount: '12.368$',
            Currency: '$',
            icon: FaCreditCard,
        },
        {
            date: '29 Jan 2024',
            wallet: 'Master Card',
            Description: 'Necessities',
            Amount: '+100.00',
            ByAmount: '12.368$',
            Currency: '$',
            icon: FaCreditCard,
        },
    ];

    return (
        <div className="flex gap-10 ">
            {/* Wallet List */}
            <div className=" bg-white w-[350px] rounded-lg shadow-md p-4 space-y-4 dark:bg-[#554b8d]">
                {goalArr.map((badg, index) => (
                    <div
                        key={index}
                        className={`flex items-center p-3 rounded-lg cursor-pointer ${badg.selected
                            ? "bg-blue-600 text-white dark:bg-[#877ec7]"
                            : "bg-blue-100 dark:bg-[#1d1933]"
                            }`}
                    >

                        <div style={style} className='relative z-[1]'>
                            <Progress.Circle
                                percent={80}
                                strokeColor="#51bb25"
                                strokeWidth={10}
                                showInfo={false}
                                trailColor="#eeeeee"
                                trailWidth={10}
                            />
                            {/* Percentage Text */}
                            <h6 className="absolute top-[12px] right-[13px] !text-[10px] text-green-500 ">
                                {80}%
                            </h6>
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
                    <Icons.GoalIcon className="mr-2" />
                    Add new Goal
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

                        <div className="space-y-4 ">

                            <div className="flex justify-between ">
                                <div className='flex flex-col items-start'>
                                    <p className="text-sm font-semibold text-[#7190c5]">Saved</p>
                                    <p className="text-lg font-semibold text-[#1f2c73] dark:text-white">$1458.30</p>
                                </div>
                                <div className='flex flex-col items-end'>
                                    <p className="text-sm font-semibold text-[#7190c5]">Goals</p>
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


                {/* Available by Wallet */}
                <GoalsAvailablebyWidgets AvwArr={AvailableByWalletArray} />

                {/* Goals History */}
                <GoalsHistory GHisArr={GoalsHistoryArray} />







            </div>
        </div>
    )
}

export default GoalsHolder