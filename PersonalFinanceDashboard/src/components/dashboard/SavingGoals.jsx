import React, { useContext } from 'react';
import { Progress } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { DashboardDataContext } from '../../contexts/DashboardDataContext';

const SavingGoals = ({ SaveArr }) => {
  // Inline style for progress bar container
  const style = {
    width: 120,
    display: 'inline-block',
    marginRight: 0,
  };

  const dashboardData = useContext(DashboardDataContext);

  return (
    <div className="">
      {/* Main container */}
      <div
        className="w-[500px] h-auto border border-[#e5eaef] bg-[#ffffff] rounded-md dark:bg-[#1d1933]"
      >
        {/* Header */}
        <div className="dark:border-b-[#2f2b43] mt-3 mx-4 space-y-4">
          <h4 className="text-[#1f2c73] font-bold dark:text-white">Saving Goals</h4>
        </div>

        {/* Progress bars for each goal */}
        <div className="p-4 flex flex-wrap gap-6 justify-center">
          {dashboardData.savingGoalsArray?.map((goal, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-4 w-[calc(50%-12px)] relative"
            >
              <div style={style}>
                <Progress.Circle
                  percent={goal.percent}
                  strokeColor="#51bb25"
                  strokeWidth={10}
                  showInfo={false}
                  trailColor="#eeeeee"
                  trailWidth={10}
                />
                {/* Percentage Text */}
                <h6 className="absolute top-[50px] right-[95px] font-semibold text-green-500">
                  {goal.percent}%
                </h6>
              </div>
              <div>
                <h6 className="font-semibold text-[#1f2c73] dark:text-white">
                  {goal.title}
                </h6>
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default SavingGoals;
