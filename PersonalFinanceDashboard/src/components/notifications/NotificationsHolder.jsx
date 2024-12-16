import React from 'react'
import { FaCheckCircle, FaTimesCircle, FaExclamationTriangle } from 'react-icons/fa';

const NotificationsHolder = ({ notArr }) => {
    return (
        <div className="w-full  mx-auto p-4 bg-white rounded-lg shadow-md border border-gray-200 dark:bg-[#1d1933]">
            <h1 className="text-lg font-semibold  mb-4">Recent Notification</h1>
            <div className="space-y-4">
                {notArr.map((notification, index) => (
                    <div
                        key={index}
                        className={`flex items-center justify-between ${index != (notArr.length -1) ? '  border-b': ''} border-gray-200 pb-4`}
                    >
                        <div className="flex items-center cursor-pointer">
                            <div className="text-2xl">{notification.icon}</div>
                            <div className="ml-3">
                                <p className="text-xl font-bold text-[#1f2c85]">{notification.title}</p>
                                <p className="text-[14px] font-semibold text-[#7190c2]">{notification.time}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NotificationsHolder