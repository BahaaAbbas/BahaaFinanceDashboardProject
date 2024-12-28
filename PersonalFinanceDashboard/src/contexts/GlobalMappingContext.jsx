import React, { createContext, useContext } from 'react';

// Create the context
const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const componentsMap = {
    balancetrends: 'BalanceTrends',
    total: 'DashboardCard',
    weekly: 'WeeklyExpenses',
    transaction: 'TransactionHistory',
    wallet: 'WalletBalanceOvertime',
    profile: 'ProfileBudget',
    monthly: 'monthly',
    anothercomponent: 'AnotherComponent',
  };

 
  return (
    <GlobalContext.Provider value={{ componentsMap }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
