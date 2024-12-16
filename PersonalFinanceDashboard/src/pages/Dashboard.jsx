import React, { useContext } from 'react'
import PagesHeader from '../components/PagesHeader'
import DashboardCard from '../components/dashboard/DashboardCard'
import { Icons } from '../components/Icons';
import SavingGoals from '../components/dashboard/SavingGoals';
import TransactionHistory from '../components/dashboard/TransactionHistory';
import MonthlyExpenses from '../components/dashboard/MonthlyExpenses';
import MonthlyBudgets from '../components/dashboard/MonthlyBudgets';
import PaymentsHistory from '../components/dashboard/PaymentsHistory';
import MonthlyIncomeVsExpenses from '../components/dashboard/MonthlyIncomeVsExpenses';
import WeeklyExpenses from '../components/dashboard/WeeklyExpenses';
import BalaceTrends from '../components/dashboard/BalaceTrends';
import { DashboardDataContext } from '../contexts/DashboardDataContext';

const Dashboard = () => {

 const dashboardData = useContext(DashboardDataContext);

  return (
    <div className=' flex flex-col gap-6'>

      <div className=''>
        <PagesHeader title={'Dashboard'} />
      </div>

      <div className=''>
        <DashboardCard />

      </div>

      <div className=' flex justify-between items-start'>
        <BalaceTrends />
        <MonthlyExpenses  />
      </div>

      <div className=' flex justify-between items-start'>
        <MonthlyBudgets  />
        <MonthlyIncomeVsExpenses  />
      </div>

      <div className=' flex justify-between items-start'>
        <WeeklyExpenses  />
        <PaymentsHistory  />
      </div>


      <div className=' flex justify-between items-start'>
        <SavingGoals  />
        <TransactionHistory  />
      </div>












    </div>
  )
}

export default Dashboard