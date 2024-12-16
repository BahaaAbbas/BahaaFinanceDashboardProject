import React from 'react'

const WalletTransactionHistory = ({walTraArr}) => {
    return (
        <div className="">
          {/* Main container */}
          <div className="w-full h-auto border border-[#e5eaef] bg-[#ffffff] rounded-md dark:bg-[#1d1933]">
            {/* Header */}
            <div className="dark:border-b-[#2f2b43] mt-3 mx-4 space-y-4">
              <h4 className="text-[#1f2c73] font-bold dark:text-white">Transaction History</h4>
            </div>
    
            {/* Table */}
            <div className="mt-4">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#f5f5f5] text-left dark:bg-[#2f2b43]">
                    <th className="p-3 text-[#1f2c73] font-bold text-[16px] dark:text-white">Category</th>
                    <th className="p-3 text-[#1f2c73] text-[16px] dark:text-white">Date</th>
                    <th className="p-3 text-[#1f2c73] text-[16px] dark:text-white">Description</th>
                    <th className="p-3 text-[#1f2c73] text-[16px] dark:text-white">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {walTraArr.map((item, index) => (
                    <tr
                      key={index}
                      className={`border-t dark:border-[#2f2b43] ${index % 2 === 0 ? 'bg-[#f9f9f9] dark:bg-[#1d1b31]' : 'bg-[#ffffff] dark:bg-[#26233e]'}`}
                    >
                      {/* Category with Icon */}
                      <td className="p-3 flex items-center gap-2">
                        <div
                          className="p-2 rounded-full"
                          style={{
                            backgroundColor: item.color,
                          }}
                        >
                          <item.icon className="text-white" />
                        </div>
                        <span className="text-[#7184b5] font-semibold dark:text-[#4673ad]">{item.Category}</span>
                      </td>
                      
                      {/* Date */}
                      <td className="p-3 text-[#7184b5] font-semibold dark:text-[#4673ad]">{item.date}</td>
                      
                      {/* Description */}
                      <td className="p-3 text-[#7184b5] font-semibold dark:text-[#4673ad]">{item.Description}</td>
                      
                      {/* Amount */}
                      <td className="p-3 text-[#ef4444] font-semibold dark:text-[#f87171]">
                        {item.Amount} <span className="text-[#7184b5] font-semibold dark:text-[#4673ad]">{item.Currency}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
}

export default WalletTransactionHistory