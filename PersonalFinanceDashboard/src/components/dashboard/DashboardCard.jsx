import React, { useContext } from 'react'
import { Icons } from '../Icons'
import { DashboardDataContext } from '../../contexts/DashboardDataContext';

const DashboardCard = () => {

  const dashboardData = useContext(DashboardDataContext);


  return (
    <div className="flex flex-wrap gap-4 justify-between">
      {dashboardData.dashboardCard?.map((card, index) => (
        <div
          key={index}
          className="w-[275px] h-[160px] border border-[#e5eaef] bg-[#ffffff] rounded-md
            dark:bg-[#1d1933]"
        >
          {/* Title Section */}
          <div className="border-b border-b-[#e5eaef] dark:border-b-[#2f2b43] mt-3 mx-4 space-y-4">
            <h6 className='text-[#1f2c73] font-semibold dark:text-white'>{card.title}</h6>
            <h1 className="font-bold text-[24px] " style={{ color: card.color }}>
              $ {card.amount.toLocaleString()}
            </h1>
          </div>

          {/* Last Month Section */}
          <div className="mt-3 mx-4 flex items-center gap-1">
            <card.icon
              style={{ color: card.color }}
              className={`text-2xl`}
            />
            <h5 className='font-semibold'>
              <span style={{ color: card.color }}>{card.UpDown}</span>
              % Last month:
              <span className='text-[#1f2c73] dark:text-white'> ${card.lastMonth.toLocaleString()}</span>
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardCard