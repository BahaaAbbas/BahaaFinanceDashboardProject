import React, { useContext, useEffect } from 'react'
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
import { useComponentWidthContext } from '../contexts/ComponentWidthContext';
import { useSearchParams } from 'react-router-dom';

const Dashboard = () => {

  const dashboardData = useContext(DashboardDataContext);
  const { componentWidth, setDynamicWidth } = useComponentWidthContext();

  const [searchParams] = useSearchParams();
  const componentName = searchParams.get('component');


  useEffect(() => {

    if (componentName === 'balancetrends') {
      setDynamicWidth('700px');
    }
    else if (componentName === 'total') {
      setDynamicWidth('full');
    }
    else if (componentName === 'weekly') {
      setDynamicWidth('700px');
    }
    else if (componentName === 'transaction') {
      setDynamicWidth('700px');
    }
    else {
      setDynamicWidth('700px');
    }
  }, [componentName, setDynamicWidth]);

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
        <MonthlyExpenses />
      </div>

      <div className=' flex justify-between items-start'>
        <MonthlyBudgets />
        <MonthlyIncomeVsExpenses />
      </div>

      <div className=' flex justify-between items-start'>
        <WeeklyExpenses />
        <PaymentsHistory />
      </div>


      <div className=' flex justify-between items-start'>
        <SavingGoals />
        <TransactionHistory />
      </div>












    </div>
  )
}

export default Dashboard