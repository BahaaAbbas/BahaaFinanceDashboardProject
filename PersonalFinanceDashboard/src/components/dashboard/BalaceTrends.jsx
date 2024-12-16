import React from 'react';
import { LineChart, Line, XAxis, YAxis, Area, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Icons } from '../Icons';
import { useTheme } from '../../contexts/ThemeContext';

const BalaceTrends = () => {

  const { theme } = useTheme(); 

  const daysInMonth = {
    Jan: 31, Feb: 28, Mar: 31, Apr: 30, May: 31, Jun: 30,
    Jul: 31, Aug: 31, Sep: 30, Oct: 31, Nov: 30, Dec: 31,
  };


  const currentMonth = new Date().toLocaleString('default', { month: 'short' });


  const BalanceTrendsArray = Array.from({ length: daysInMonth[currentMonth] }, (_, index) => ({
    day: index + 1,
    balance: Math.floor(Math.random() * 2000),
  }));

  // HeaderAmount object
  const HeaderAmount = {
    amount: 221478,
    icon: 221478 > 0 ? Icons.TrendingUpIcon : Icons.TrendingDownIcon,
    LastAmount: 12.25,
  };

  return (
    <div className="mt-6">
      {/* Main container */}
      <div className="w-[700px] h-auto border border-[#e5eaef] bg-[#ffffff] rounded-md dark:bg-[#1d1933]">
        {/* Header */}
        <div className="flex items-center justify-between p-4">
          <div>
            <h4 className="text-[#1f2c73] font-bold dark:text-white">Balance Trends</h4>
            <h5 className="!text-[#1f2c73] font-semibold dark:!text-white">${HeaderAmount.amount.toLocaleString()}</h5>
          </div>

          <div>
            <h5 className="text-[#1f2c73] !font-medium dark:!text-[#716d72]">Last Month</h5>
            <h5 className={`flex items-center gap-1 ${HeaderAmount.amount > 0 ? '!text-[#47a447]' : '!text-[#dc2626]'}`}>
              <span>{<HeaderAmount.icon />}</span>
              {HeaderAmount.LastAmount.toLocaleString()}%
            </h5>
          </div>
        </div>

        {/* Balance Trends Chart */}
        <div className="p-4">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={BalanceTrendsArray}
              margin={{ top: 20, right: 30, left: 20, bottom: 0 }}
            >


              {/* X and Y Axes */}
              <XAxis dataKey="day" stroke="#8884d8" />
              <YAxis stroke="#8884d8" />

              {/* Tooltip */}
              <Tooltip 
              
                contentStyle={{
                  backgroundColor: theme === "dark" ? '#FFFF00' : '#fffeee',
                  border: 'none',
                  boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
                }}
              />

              {/* Area for shading under the line */}
              <defs>
                <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8224d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8224d8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="balance"
                stroke="#8224d8"
                fill="url(#colorBalance)"
                fillOpacity={1}
              />

              {/* Line */}
              <Line
                type="monotone"
                dataKey="balance"
                stroke="#8224d8"
                strokeWidth={2}
                dot={{ r: 2 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
};

export default BalaceTrends;
