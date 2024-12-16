import React, { useContext } from 'react';
import { DashboardDataContext } from '../../contexts/DashboardDataContext';


const MonthlyExpenses = () => {


  const dashboardData = useContext(DashboardDataContext);

  return (
    <div className="mt-6">
      {/* Main container */}
      <div className="w-[500px] h-auto border border-[#e5eaef] bg-[#ffffff] rounded-md dark:bg-[#1d1933]">
        {/* Header */}
        <div className="dark:border-b-[#2f2b43] mt-3 mx-4 space-y-4">
          <h4 className="text-[#1f2c73] font-bold dark:text-white">
            Monthly Expenses Breakdown
          </h4>
        </div>

        {/* Progress line */}
        <div className="mt-4 mx-4">
          <ProgressBar  />
        </div>


        {/* Legends */}
        <div className="mt-4 mx-4 space-y-2">
          {dashboardData.monthlyExpensesBreakdownArray?.map((expense, index) => (
            <div
              className={`flex justify-between pb-3 ${index !== dashboardData.monthlyExpensesBreakdownArray.length - 1 ? 'border-b' : ''
                }`}
              key={index}
            >

              <div key={index} className="flex justify-start items-center gap-3 ">
                <span
                  className="inline-block w-4 h-4 rounded-full"
                  style={{ backgroundColor: expense.lineColor }}
                ></span>
                <span className="text-[#7188c2] dark:text-[#7184ad] font-semibold ">
                  {expense.Category}
                </span>

              </div>


              <div>
                <span className="text-[#7188c2] dark:text-[#7184ad] font-semibold">
                  ${expense.amount.toLocaleString()} ({expense.percent}%)
                </span>
              </div>

            </div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default MonthlyExpenses;




const ProgressBar = () => {

  const dashboardData = useContext(DashboardDataContext);
  let cumulativePercent = 0;

  return (
    <div className="h-2 w-full rounded-md bg-[#eeeeee] overflow-hidden relative flex">
      {dashboardData.monthlyExpensesBreakdownArray?.map((segment, index) => {

        const segmentStyle = {
          width: `${segment.percent}%`,
          backgroundColor: segment.lineColor,
          height: '100%',
        };


        cumulativePercent += segment.percent;

        return (
          <div
            key={index}
            style={segmentStyle}
            className="h-full"
          />
        );
      })}
    </div>
  );
};

