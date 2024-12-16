import React from 'react'
import { Outlet } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import LayoutHeader from '../components/LayoutHeader'
import { Icons } from '../components/Icons'
import Sidebar, { SidebarItem } from '../components/SideBarComponent';
import { FaHome, FaUser, FaCog } from "react-icons/fa";

const Layout = () => {

  const location = useLocation();

  return (
    <div className='mt-1 mr-4  flex gap-8 '>


      {/* Sidebar */}

      <div className="fixed top-0 left-0 ">
        <aside className=' '>
          {/* Sidebar */}
          <Sidebar>
            <SidebarItem
              icon={<FaHome />}
              text="Dashboard"
              active={location.pathname === "/dashboard" || location.pathname === "/"}
              route="/dashboard"
            />

            <SidebarItem
              icon={<Icons.WalletIcon  />}
              text="Wallets"
              active={location.pathname === "/wallets"}
              route="/wallets"
            />
            <SidebarItem
              icon={<Icons.BudgetIcon  />}
              text="Budgets"
              active={location.pathname === "/budgets"}
              route="/budgets"
            />
            <SidebarItem
              icon={<Icons.GoalIcon  />}
              text="Goals"
              active={location.pathname === "/goals"}
              route="/goals"
            />
            <SidebarItem
              icon={<Icons.PersonIcon  />}
              text="Profile"
              active={location.pathname === "/profile"}
              route="/profile"
            />
            <SidebarItem
              icon={<Icons.StatsIcon  />}
              text="Analytics"
              active={location.pathname === "/analytics"}
              route="/analytics"
            />
          </Sidebar>
        </aside>
      </div>



      <div className='w-full ml-[90px]'>
        <div className='sticky py-4 bg-[#f6f9fc] top-0 z-10  rounded-md dark:bg-[#131129]'>
          <LayoutHeader />
        </div>


        {/*content  */}
        <Outlet />

      </div>

    </div>
  )
}

export default Layout