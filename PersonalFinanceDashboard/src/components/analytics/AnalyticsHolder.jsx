import React, { useState } from 'react'
import AnalyticsTag from './AnalyticsTag'
import AnalyticsTagContent from './AnalyticsTagContent';
import ExpensesTagContent from './ExpensesTagContent';
import IncomeTagContent from './IncomeTagContent';
import IncomeVsExpensesTagContent from './IncomeVsExpensesTagContent';
import BalanceTagContent from './BalanceTagContent';
import TransactionHistoryTagContent from './TransactionHistoryTagContent';

const AnalyticsHolder = () => {

    const [activeTab, setActiveTab] = useState("Analytics");

   
   
    // Map activeTab to corresponding content
    const renderContent = () => {
      switch (activeTab) {
        case "Analytics":
          return <AnalyticsTagContent />;
        case "Expenses":
          return <ExpensesTagContent />;
        case "Income":
          return <IncomeTagContent />;
        case "Income vs Expenses":
          return <IncomeVsExpensesTagContent />;
        case "Balance":
          return <BalanceTagContent />;
        case "Transaction History":
          return <TransactionHistoryTagContent />;
        default:
          return null;
      }
    };

  return (
    <div>
           {/* Analytics Tags */}
      <div className='mt-4'>
        <AnalyticsTag activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Display the corresponding content */}
      <div className="mt-8">
        {renderContent()}
      </div>
    </div>
  )
}

export default AnalyticsHolder