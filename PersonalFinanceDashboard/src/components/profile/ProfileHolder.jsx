import React from 'react'
import { FaUniversity, FaCreditCard, FaWallet } from "react-icons/fa";
import { BsCash } from "react-icons/bs";
import ProfileBudget from './ProfileBudget';
import BLogo from '../../assets/b.jpg'
import { Icons } from '../Icons';

const ProfileHolder = () => {

    const chartData = {
        labels: ["4 Jan", "5 Jan", "6 Jan", "7 Jan", "8 Jan", "9 Jan", "10 Jan", "11 Jan", "12 Jan", "13 Jan", "14 Jan", "15 Jan"],
        datasets: [
            {
                label: "City Bank",
                data: [50, 100, 150, 200, 250, 100, 150, 300, 100, 200, 250, 350],
                borderColor: "#6366F1",
                backgroundColor: "rgba(99, 102, 241, 0.2)",
                fill: true,
            },
        ],
    };

    return (
        <div className='flex gap-10'>


            {/* Left Sidebar */}
            <div className="w-[350px] bg-white p-6 rounded-lg shadow-md">
                {/* Profile Section */}
                <div className="text-center ">
                    <img
                        src={BLogo}
                        alt="Profile"
                        className="w-20 h-20 rounded-full mx-auto mb-4"
                    />
                    <h2 className="font-bold text-lg">Henry John Paulin</h2>
                    <p className="text-gray-500 font-semibold">henry@gmail.com</p>
                    <div className="flex  mx-8 my-4  gap-2">
                        <span className='font-bold'>Registered: </span>
                        <span className='text-[#aeafd6] font-semibold'>25 June 2024</span>

                    </div>
                    <hr />
                </div>
                {/* Wallet Options */}
                <div className="mt-6 space-y-4">

                    <div className="flex items-center justify-between text-indigo-600 cursor-pointer">
                        <div className="flex items-center gap-3">
                            <div className=' p-2 rounded-full bg-[#2f2cd8]'>
                                <FaUniversity className="text-xl text-white " />
                            </div>

                            <span >City Bank</span>
                        </div>
                        <Icons.RightArrowIcon className='font-bold text-2xl' />
                    </div>

                    <div className="flex items-center justify-between text-indigo-600 cursor-pointer">
                        <div className="flex items-center gap-3">
                            <div className=' p-2 rounded-full bg-[#2f2cd8]'>
                                <FaCreditCard className="text-xl text-white " />
                            </div>

                            <span >Debit Card</span>
                        </div>
                        <Icons.LeftArrowIcon className='font-bold text-2xl text-[#d0d0e6]' />
                    </div>

                    <div className="flex items-center justify-between text-indigo-600 cursor-pointer">
                        <div className="flex items-center gap-3">
                            <div className=' p-2 rounded-full bg-[#2f2cd8]'>
                                <FaWallet className="text-xl text-white " />
                            </div>

                            <span >Visa Card</span>
                        </div>
                        <Icons.LeftArrowIcon className='font-bold text-2xl text-[#d0d0e6]' />
                    </div>

                    <div className="flex items-center justify-between text-indigo-600 cursor-pointer">
                        <div className="flex items-center gap-3">
                            <div className=' p-2 rounded-full bg-[#2f2cd8]'>
                                <BsCash className="text-xl text-white " />
                            </div>

                            <span >Cash</span>
                        </div>
                        <Icons.LeftArrowIcon className='font-bold text-2xl text-[#d0d0e6]' />
                    </div>



                </div>
            </div>




            {/* budget section */}
            <div className='flex flex-col gap-6 w-full'>


                < div className=" bg-white w-full rounded-lg shadow-md p-6 dark:bg-[#1d1933]" >

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
                </div >

                {/* Profile Budget */}
                <ProfileBudget />

            </div>



        </div>
    )
}

export default ProfileHolder