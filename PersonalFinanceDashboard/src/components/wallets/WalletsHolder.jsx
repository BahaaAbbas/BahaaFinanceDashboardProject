import React, { useState } from 'react'
import { FaUniversity, FaWallet } from 'react-icons/fa';
import { SiVisa } from 'react-icons/si';
import { Icons } from '../Icons';
import WalletsCard from './WalletsCard';
import WalletBalanceOvertime from './WalletBalanceOvertime';
import WalletTransactionHistory from './WalletTransactionHistory';
import VisaIMG from '../../assets/visa.jpeg'
const WalletsHolder = ({ walArr }) => {

    // Wallets Card Array of objects..
    const WalletsCardArray = [
        {
            title: 'Total Balance',
            color: '#12a388',
            icon: Icons.TrendingUpIcon,
            amount: 432568,
            UpDown: 2.47,
            lastMonth: 24.478


        },
        {
            title: 'Monthly Expenses',
            color: '#12a388',
            icon: Icons.TrendingUpIcon,
            amount: 245860,
            UpDown: 2.47,
            lastMonth: 24.478


        },

    ]

    // Transaction History Array of objects..
    const TransactionHistoryArray = [
        {
            Category: 'Beauty',
            date: '12.12.2023',
            Description: 'Grocery Items and Beverage soft drinks',
            Amount: '-32.20',
            Currency: 'USD',
            icon: Icons.ScissorsIcon,
            color: '#10b981'
        },
        {
            Category: 'Bills & Fees',
            date: '12.12.2023',
            Description: 'Grocery Items and Beverage soft drinks',
            Amount: '-32.20',
            Currency: 'USD',
            icon: Icons.BillsIcon,
            color: '#14b8a6'
        },
        {
            Category: 'Car',
            date: '12.12.2023',
            Description: 'Grocery Items and Beverage soft drinks',
            Amount: '-32.20',
            Currency: 'USD',
            icon: Icons.CarIcon,
            color: '#14b8a6'
        },
        {
            Category: 'Education',
            date: '12.12.2023',
            Description: 'Grocery Items and Beverage soft drinks',
            Amount: '-32.20',
            Currency: 'USD',
            icon: Icons.EducationIcon,
            color: '#14b8a6'
        },
        {
            Category: 'Entertainment',
            date: '12.12.2023',
            Description: 'Grocery Items and Beverage soft drinks',
            Amount: '-32.20',
            Currency: 'USD',
            icon: Icons.MovieIcon,
            color: '#14b8a6'
        },
    ]

    const [TitleName, setTitleName] = useState('Debit Card');



    return (
        <div className="flex gap-8 ">
            {/* Wallet List */}
            <div className=" bg-white w-[350px] rounded-lg shadow-md p-4 space-y-4 dark:bg-[#554b8d]">
                {walArr.map((wallet, index) => (
                    <div
                        key={index}
                        className={`flex items-center p-3 rounded-lg cursor-pointer ${wallet.selected
                            ? "bg-blue-600 text-white dark:bg-[#877ec7]"
                            : "bg-blue-100 dark:bg-[#1d1933]"
                            }`}
                    >
                        <div className={`text-2xl p-2 rounded-full ${wallet.selected ? "bg-blue-500" : "bg-white"}`}>
                            {wallet.icon}
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-semibold">{wallet.name}</p>
                            <p className="text-xs font-semibold text-[#b6b3eb]">{wallet.balance}</p>
                        </div>
                    </div>
                ))}
                <button className="flex items-center w-full text-blue-500 text-sm font-semibold p-3 rounded-lg border border-blue-500 hover:bg-blue-50">
                    <FaWallet className="mr-2" />
                    Add new wallet
                </button>
            </div>

            {/* Wallet Details */}
            <div className="flex flex-col w-full gap-6 ">
                <div className='bg-white  rounded-lg shadow-md p-6 dark:bg-[#1d1933]'>
                    <h3 className="text-lg font-semibold text-[#1f2c73]   dark:text-white">{TitleName}</h3>
                </div>
                <div className='flex justify-between'>
                    {/* Debit Card Overview */}
                    <div className=" bg-white w-[420px] rounded-lg shadow-md p-6 dark:bg-[#1d1933]">

                        <div className="space-y-4">
                            <div>
                                <p className="text-sm  font-semibold text-[#7190c5] ">Total Balance</p>
                                <p className="text-2xl font-bold text-[#1f2c73] dark:text-white">$221,478</p>
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-sm font-semibold text-[#7190c5]">Personal Funds</p>
                                    <p className="text-lg font-semibold text-[#1f2c73] dark:text-white">$32,500.28</p>
                                </div>
                                <div className=''>
                                    <p className="text-sm font-semibold text-[#7190c5]">Credit Limits</p>
                                    <p className="text-lg font-semibold text-[#1f2c73] dark:text-white">$2,500.00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card Design */}
                    <div className="w-[400px] bg-[#1e1b4b] text-white rounded-lg shadow-md p-6 flex flex-col gap-3">
                        <div className='flex justify-between items-start '>
                            <h3 className="text-xl font-semibold mb-8">Debit Card</h3>
                            <img className='mb-8' src={VisaIMG} alt='img' width={60} height={60} />

                        </div>


                        <h6 className="text-white font-bold text-[22px] dark:text-white ">
                            <span className="mr-6">1234</span>
                            <span className="mr-6">5678</span>
                            <span className="mr-6">7890</span>
                            <span>9875</span>
                        </h6>
                        <div className="flex justify-between mt-6">
                            <h6 className='text-white font-semibold dark:text-white'>Bahaa Abbas</h6>
                            <h6 className='text-white font-semibold dark:text-white'>EXP: 12/21</h6>

                        </div>
                    </div>

                </div>
                {/* Monthly Expenses */} {/* Balance Overview */}
                <WalletsCard walCardArr={WalletsCardArray} />

                {/* Balance overtime */}
                <WalletBalanceOvertime />

                {/* Transaction History */}
                <WalletTransactionHistory walTraArr={TransactionHistoryArray} />





            </div>
        </div>
    )
}

export default WalletsHolder