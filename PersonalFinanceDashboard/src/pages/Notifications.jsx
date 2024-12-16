import React from 'react'
import NotificationsHolder from '../components/notifications/NotificationsHolder';
import { FaCheckCircle, FaTimesCircle, FaExclamationTriangle } from 'react-icons/fa';
import PagesHeader from '../components/PagesHeader';

const Notifications = () => {

    const notifications = [
        {
            icon: <FaCheckCircle className="text-green-500 text-4xl" />,
            title: 'Account created successfully',
            time: '2024-11-04 12:00:23',
        },
        {
            icon: <FaTimesCircle className="text-red-500 text-4xl" />,
            title: '2FA verification failed',
            time: '2024-11-04 12:00:23',
        },
        {
            icon: <FaCheckCircle className="text-green-500 text-4xl" />,
            title: 'Device confirmation completed',
            time: '2024-11-04 12:00:23',
        },
        {
            icon: <FaExclamationTriangle className="text-yellow-500 text-4xl" />,
            title: 'Phone verification pending',
            time: '2024-11-04 12:00:23',
        },
    ];

    return (
        <div className='flex flex-col gap-6'>
            <div className=''>
                <PagesHeader title={'Notifications'} />
            </div>

            <NotificationsHolder notArr={notifications} />

        </div>
    )
}

export default Notifications