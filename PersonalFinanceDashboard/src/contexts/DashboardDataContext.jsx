import React, { createContext, useState, useEffect } from "react";

// Create the context
const DashboardDataContext = createContext();

// Provider component
const DashboardDataProvider = ({ children }) => {
  const [dashboardData, setDashboardData] = useState({});

  // Function to generate random monthly income and expenses data
  const generateRandomMonthlyData = () => {
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];

    return months.map((month) => {
      const income = Math.floor(Math.random() * (15000 - 5000 + 1)) + 5000;
      const expenses = Math.floor(income * (Math.random() * (0.9 - 0.7) + 0.7));
      return { month, income, expenses };
    });
  };

  // Function to generate random weekly expenses data
  const getRandomValue = () => Math.floor(Math.random() * 1000) + 1;

  const generateWeeklyExpensesData = () => {
    return [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ].map((month) => ({
      month,
      a: getRandomValue(),
      aColor: "#d946ef",
      b: getRandomValue(),
      bColor: "#a348fa",
      c: getRandomValue(),
      cColor: "#8b5cf6",
      d: getRandomValue(),
      dColor: "#6366f1",
      e: getRandomValue(),
      eColor: "#3b82f6",
    }));
  };

  // Initialize data
  useEffect(() => {
    const data = {

      // Dashboard Card Array of objects..
      dashboardCard: [
        {
          title: "Total Balance",
          color: "#12a388",
          icon: "TrendingUpIcon",
          amount: 432568,
          UpDown: 2.47,
          lastMonth: 24.478,
        },
        {
          title: "Total Period Change",
          color: "#12a388",
          icon: "TrendingUpIcon",
          amount: 245860,
          UpDown: 2.47,
          lastMonth: 24.478,
        },
        {
          title: "Total Period Expenses",
          color: "#dc3e42",
          icon: "TrendingDownIcon",
          amount: 25.35,
          UpDown: 2.47,
          lastMonth: 24.478,
        },
        {
          title: "Total Period Income",
          color: "#12a388",
          icon: "TrendingUpIcon",
          amount: 22.56,
          UpDown: 2.47,
          lastMonth: 24.478,
        },
      ],
      
      // Saving Goals Array of objects..
      savingGoalsArray: [
        { title: "Vacation", percent: 80 },
        { title: "Gift", percent: 90 },
        { title: "New Car", percent: 95 },
        { title: "Laptop", percent: 99 },
      ],

      // Saving Goals Array of objects..
      paymentsHistoryArray: [
        {
          title: "Electricity",
          date: "5 January 2024",
          amount: "+450.00",
          status: "Paid",
          statusColor: "#12a347",
        },
        {
          title: "Internet",
          date: "5 January 2024",
          amount: "+450.00",
          status: "Due",
          statusColor: "#fba801",
        },
        {
          title: "Apple Music",
          date: "5 January 2024",
          amount: "+450.00",
          status: "Cancel",
          statusColor: "#dc2626",
        },
        {
          title: "Groceries",
          date: "5 January 2024",
          amount: "+450.00",
          status: "Paid",
          statusColor: "#12a347",
        },
      ],

      // Transaction History Array of objects..
      transactionHistoryArray: [
        {
          Category: "Beauty",
          date: "12.12.2023",
          Description: "Grocery Items and Beverage soft drinks",
          Amount: "-32.20",
          Currency: "USD",
          icon: "ScissorsIcon",
          color: "#10b981",
        },
        {
          Category: "Bills & Fees",
          date: "12.12.2023",
          Description: "Grocery Items and Beverage soft drinks",
          Amount: "-32.20",
          Currency: "USD",
          icon: "BillsIcon",
          color: "#14b8a6",
        },
        {
          Category: "Car",
          date: "12.12.2023",
          Description: "Grocery Items and Beverage soft drinks",
          Amount: "-32.20",
          Currency: "USD",
          icon: "CarIcon",
          color: "#14b8a6",
        },
        {
          Category: "Education",
          date: "12.12.2023",
          Description: "Grocery Items and Beverage soft drinks",
          Amount: "-32.20",
          Currency: "USD",
          icon: "EducationIcon",
          color: "#14b8a6",
        },
        {
          Category: "Entertainment",
          date: "12.12.2023",
          Description: "Grocery Items and Beverage soft drinks",
          Amount: "-32.20",
          Currency: "USD",
          icon: "MovieIcon",
          color: "#14b8a6",
        },
      ],

      // Monthly BudgetsArray of objects..
      monthlyBudgetsArray: [
        {
          Category: "Grocery Stores",
          percent: 75,
          lineColor: "#22c55e",
          icon: "FoodIcon",
          IconColor: "#22c55e",
        },
        {
          Category: "Transportation",
          percent: 75,
          lineColor: "#06b6d4",
          icon: "CarIcon",
          IconColor: "#06b6d4",
        },
        {
          Category: "Pets",
          percent: 75,
          lineColor: "#06b6d4",
          icon: "CatIcon",
          IconColor: "#06b6d4",
        },
        {
          Category: "Education",
          percent: 75,
          lineColor: "#6366f1",
          icon: "EducationIcon",
          IconColor: "#6366f1",
        },
        {
          Category: "Clothes",
          percent: 75,
          lineColor: "#8b5cf6",
          icon: "ClothesIcon",
          IconColor: "#8b5cf6",
        },
      ],
      // Monthly BudgetsArray of objects..
      monthlyExpensesBreakdownArray: [
        { Category: "Food", percent: 14, amount: 1200, lineColor: "#f97316" },
        { Category: "Transport", percent: 14, amount: 1200, lineColor: "#f59e0b" },
        { Category: "Healthcare", percent: 14, amount: 1200, lineColor: "#eab308" },
        { Category: "Education", percent: 14, amount: 1200, lineColor: "#84cc16" },
        { Category: "Clothes", percent: 14, amount: 1200, lineColor: "#22c55e" },
        { Category: "Pets", percent: 14, amount: 1200, lineColor: "#06b6d4" },
        { Category: "Entertainment", percent: 14, amount: 1200, lineColor: "#78716c" },
      ],

      // Monthly Income vs Expenses Array of objects..
      monthlyIncomevsExpensesArray: generateRandomMonthlyData(),

      // Weekly Expenses Array of objects..
      weeklyExpensesArray: generateWeeklyExpensesData(),
    };

    setDashboardData(data);
  }, []);

  return (
    <DashboardDataContext.Provider value={dashboardData}>
      {children}
    </DashboardDataContext.Provider>
  );
};

export { DashboardDataProvider, DashboardDataContext };
