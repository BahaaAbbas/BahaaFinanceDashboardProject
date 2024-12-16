import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DashboardDataContext } from '../../contexts/DashboardDataContext';

const PaymentsHistory = () => {

  const dashboardData = useContext(DashboardDataContext);
  
  return (
    <div className="mt-6">
      {/* Main container */}
      <div className="w-[500px] h-auto border border-[#e5eaef] bg-[#ffffff] rounded-md dark:bg-[#1d1933]">
        {/* Header */}
        <div className="dark:border-b-[#2f2b43] mt-3 mx-4 space-y-4 flex justify-between items-center">
          <h4 className="text-[#1f2c73] font-bold dark:text-white">Payments History</h4>
          <Link to="#" className=" hover:no-underline font-semibold text-blue-500 dark:text-blue-400">
            See more
          </Link>
        </div>

        {/* Payment history for category */}
        <div className="p-4 space-y-4">
          {dashboardData.paymentsHistoryArray?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 p-4 border rounded-md bg-[#f9f9f9] dark:bg-[#2a273c] dark:border-[#2f2b43]"
            >
              {/* Title and Amount */}
              <div className="flex justify-between items-center">
                <h5 className="font-semibold !text-[#1f2c73] dark:!text-white">{item.title}</h5>
                <span className="font-semibold text-[#1f2c73] dark:text-white">{item.amount}</span>
              </div>

              {/* Date and Status */}
              <div className="flex justify-between items-center">
                <span className="text-[14px] font-medium text-[#aab5dd] dark:text-[#6e7fa5]">{item.date}</span>
                <div
                  className="px-3 py-1 rounded-full text-white text-sm font-medium"
                  style={{ backgroundColor: item.statusColor }}
                >
                  {item.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentsHistory;
