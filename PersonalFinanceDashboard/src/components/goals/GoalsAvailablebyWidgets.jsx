import React from 'react';
import 'rsuite/dist/rsuite.min.css';


const GoalsAvailablebyWidgets = ({AvwArr}) => {
    return (
        <div className="mt-6">
          {/* Main container */}
          <div className="w-full h-auto border border-[#e5eaef] bg-[#ffffff] rounded-md dark:bg-[#1d1933]">
            {/* Header */}
            <div className="dark:border-b-[#2f2b43] mt-3 mx-4 space-y-4">
              <h4 className="text-[#1f2c73] font-bold dark:text-white">
              Available by Wallet
              </h4>
            </div>
    
            {/* Progress lines for each category */}
            <div className="p-4 space-y-6">
              {AvwArr.map((item, index) => (
                <div key={index} className="space-y-2">
                  {/* Icon and Category Information */}
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div
                      className="w-8 h-8 flex items-center justify-center rounded-full"
                      style={{ backgroundColor: item.IconColor }}
                    >
                      <item.icon className="text-white w-4 h-4" />
                    </div>
                    {/* Category Name and Percentage */}
                    <div className="flex justify-between w-full">
                      <h5 className="font-semibold !text-[#1f2c73] dark:!text-white">
                        {item.Category}
                      </h5>
                      <span className="text-[15px]  text-[#1f2c73] font-semibold dark:text-[#6684a2]">
                        {item.text}
                      </span>
                    </div>
                  </div>
    
                  {/* Progress Line */}
                  <div className="h-1.5 w-full rounded-md bg-[#eeeeee] overflow-hidden">
                    <div
                      style={{
                        width: `${item.percent}%`,
                        backgroundColor: item.lineColor,
                      }}
                      className="h-full"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}

export default GoalsAvailablebyWidgets