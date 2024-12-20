import React, { useState } from 'react'
import { Icons } from './Icons'
import { useTheme } from '../contexts/ThemeContext';
import { FaCheckCircle, FaTimesCircle, FaExclamationTriangle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaWallet, FaCog, FaSignOutAlt } from "react-icons/fa";
import Blogo from '../assets/b.jpg'
import { useAuth } from "../components/auth/AuthContext";

const LayoutHeader = () => {
    const notifications = [
        {
            icon: <FaCheckCircle className="text-green-500" />,
            title: 'Account created successfully',
            time: '2024-11-04 12:00:23',
        },
        {
            icon: <FaTimesCircle className="text-red-500" />,
            title: '2FA verification failed',
            time: '2024-11-04 12:00:23',
        },
        {
            icon: <FaCheckCircle className="text-green-500" />,
            title: 'Device confirmation completed',
            time: '2024-11-04 12:00:23',
        },
        {
            icon: <FaExclamationTriangle className="text-yellow-500" />,
            title: 'Phone verification pending',
            time: '2024-11-04 12:00:23',
        },
    ];

    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    const { theme, toggleTheme } = useTheme();
    const [clickNotify, setClickNotify] = useState(false);
    const [clickProfile, setClickProfile] = useState(false);

    const ClickNotification = () => {
        setClickNotify(!clickNotify);
        setClickProfile(false);
        console.log(clickNotify);
    };

    const ClickProfileFn = () => {
        setClickProfile(!clickProfile);
        setClickNotify(false);
        console.log(clickProfile);
    };

    const ClickToggle = () => {
        toggleTheme();
        setClickNotify(false);
        setClickProfile(false);

    }

    return (
        <div className=''>
            {/* search and toggle */}
            <div className='flex justify-between'>
                <div className='relative flex items-center'>
                    <input
                        className="px-3 py-2  text-[14px] rounded-l-md w-[350px] h-[40px]  
                        border border-[#b4c2cf] focus:border-[#6362e7] focus:text-black focus:outline-none
                        dark:bg-[#131129]   dark:text-[#9fadf0] placeholder:text-[#9fadf0] dark:border-[#25243a] dark:focus:border-[#25243a]
                        
                        "
                        placeholder="Search Here"
                        type="text"
                    />


                    <div className='w-[40px] h-[40px]  flex  items-center justify-center
                        rounded-r-md
                     bg-[#2f2cd8]'>
                        <Icons.SearchIcon className=' text-[#fefeff] ' />

                    </div>

                </div>

                <div className='flex gap-5 items-center  justify-end  w-[150px] h-[40px] '>
                    <div className='inline-block text-2xl text-[#718ec5] 
                    dark:text-[#fba809] 
                    cursor-pointer'
                        onClick={

                            ClickToggle

                        }
                    >
                        <Icons.SunIcon />

                    </div>

                    <div className='relative inline-block text-2xl  text-[#718ec5] dark:text-[#fefeff]'>
                        <Icons.NotifyIcon
                            onClick={ClickNotification}
                            className='cursor-pointer'
                        />

                        {/* Notification Component */}
                        <div className={`${clickNotify === true ? 'z-100 opacity-100' : 'opacity-0'} absolute right-1 top-12 w-[350px] p-4 mb-2 bg-white rounded-md shadow-md border border-gray-200 dark:bg-[#1d1933]`}>
                            <h1 className="text-lg font-semibold  mb-4">Recent Notification</h1>
                            <div className="space-y-4">
                                {notifications.map((notification, index) => (
                                    <div className="flex items-center cursor-pointer">
                                        <div className="text-2xl">{notification.icon}</div>
                                        <div className="ml-3">
                                            <p className="text-xl font-bold text-[#1f2c85]">{notification.title}</p>
                                            <p className="text-[14px] font-semibold text-[#7190c2]">{notification.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 text-right">
                                <Link
                                    to="notification"
                                    onClick={() => setClickNotify(!clickNotify)}
                                    className="text-sm font-bold hover:no-underline text-blue-600  dark:text-white"
                                >
                                    More &gt;
                                </Link>
                            </div>
                        </div>


                    </div>

                    <div

                        className='relative inline-block '
                    >

                        <div
                            onClick={ClickProfileFn}
                            className='text-xl bg-[#2f2cd8] p-2 rounded-full cursor-pointer '>

                            <Icons.PersonIcon
                                className='text-[#fefeff]'


                            />

                        </div>




                        {/* Profile Component */}
                        <div className={`bg-white dark:bg-[#1d1933] shadow-md rounded-lg p-4  absolute right-1 top-12 w-64 ${clickProfile === true ? 'z-100 opacity-100' : 'opacity-0'}`}>
                            {/* User Info */}
                            <div className="flex items-center space-x-4 mb-4">
                                <img
                                    src={Blogo}
                                    alt="Profile"
                                    className="w-12 h-12 rounded-full"
                                />
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-800 dark:text-white">Bahaa Abbas</h3>
                                    <p className="text-sm text-gray-500 dark:text-[#7a78ad] font-semibold">bahaa@email.com</p>
                                </div>
                            </div>

                            {/* Menu Items */}
                            <div className="space-y-4">
                                <Link
                                    to="/profile"
                                    className="flex items-center space-x-3 cursor-pointer hover:text-indigo-500 no-underline hover:no-underline "
                                >
                                    <FaUser className="text-indigo-500" />
                                    <span className=" text-gray-700 dark:text-[#7a78ad] font-semibold">Profile</span>
                                </Link>
                                <Link
                                    to="/wallets"
                                    className="flex items-center space-x-3 cursor-pointer hover:text-indigo-500 no-underline hover:no-underline "
                                >
                                    <FaWallet className="text-indigo-500" />
                                    <span className=" text-gray-700 dark:text-[#7a78ad] font-semibold">Wallets</span>
                                </Link>
                                <div
                                    onClick={handleLogout}
                                    className="flex items-center space-x-3 cursor-pointer hover:text-red-500 no-underline hover:no-underline"
                                >
                                    <FaSignOutAlt className="text-red-500" />
                                    <span className="font-semibold text-red-500">Logout</span>
                                </div>
                            </div>
                        </div>


                    </div>




                </div>

            </div>




        </div>
    )
}

export default LayoutHeader