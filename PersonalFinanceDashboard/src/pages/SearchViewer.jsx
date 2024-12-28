import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import BalaceTrends from '../components/dashboard/BalaceTrends';
import DashboardCard from '../components/dashboard/DashboardCard';
import Dashboard from './Dashboard';
import { useComponentWidthContext } from '../contexts/ComponentWidthContext';
import WeeklyExpenses from '../components/dashboard/WeeklyExpenses';
import TransactionHistory from '../components/dashboard/TransactionHistory';
import WalletBalanceOvertime from '../components/wallets/WalletBalanceOvertime';
import ProfileBudget from '../components/profile/ProfileBudget';
import MonthlyExpenses from '../components/dashboard/MonthlyExpenses';
import MonthlyBudgets from '../components/dashboard/MonthlyBudgets';
import MonthlyIncomeVsExpenses from '../components/dashboard/MonthlyIncomeVsExpenses';

const CombinedMonthlyComponent = () => {
    return (
        <div className="flex flex-col gap-4">
            <MonthlyExpenses />
            <MonthlyBudgets />
            <MonthlyIncomeVsExpenses />
        </div>
    );
};

const SearchVidewer = () => {
    const [searchParams] = useSearchParams();
    const componentName = searchParams.get('component');
    const navigate = useNavigate();
    const { componentWidth, setDynamicWidth } = useComponentWidthContext();

    let ComponentToRender = null;

    if (componentName === 'balancetrends') {
        ComponentToRender = BalaceTrends;
        setDynamicWidth('full');
    }
    else if (componentName === 'total') {
        ComponentToRender = DashboardCard;
    }
    else if (componentName === 'weekly') {
        ComponentToRender = WeeklyExpenses;
        setDynamicWidth('full');
    }
    else if (componentName === 'transaction') {
        ComponentToRender = TransactionHistory;
        setDynamicWidth('full');
    }
    else if (componentName === 'wallet') {
        ComponentToRender = WalletBalanceOvertime;
        setDynamicWidth('full');
    }
    else if (componentName === 'profile') {
        ComponentToRender = ProfileBudget;
        setDynamicWidth('full');
    }
    else if (componentName === 'monthly') {
        ComponentToRender = CombinedMonthlyComponent;
        setDynamicWidth('full');
    }
    else if (componentName === 'anothercomponent') {
        console.log('object')
    }




    useEffect(() => {
        if (!ComponentToRender) {
            navigate('/');
        }
    }, [ComponentToRender, navigate]);

    return (
        <div className=" " style={{ marginTop: '10%' }}>
            {ComponentToRender ? <ComponentToRender /> : null}
        </div>

    );
};

export default SearchVidewer;
