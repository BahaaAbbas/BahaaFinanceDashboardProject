import React, { useContext, createContext, useState, useEffect } from "react";
import BLogo from '../assets/b.jpg'
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth/AuthContext";

const SidebarContext = createContext();

export default function Sidebar({ children }) {

  const { currentUser } = useAuth();
  const [UserName, setUserName] = useState('BA');
  useEffect(() => {
    if (currentUser && currentUser.fullName) {
      setUserName(currentUser.fullName.slice(0, 2).toUpperCase()); 
    }
  }, [currentUser]);

  console.log(UserName)
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleLogoProfileClick = () => {
    navigate("/profile");
  }

  return (
    <aside className="h-screen z-1000">
      <nav className="h-full flex flex-col bg-[#254c80]  shadow-sm">
        <div
          className="p-4 flex justify-center items-center ">
          <img
            onClick={handleLogoClick}
            src={BLogo}
            className="w-8 h-12 cursor-pointer  "
            alt="Logo"
          />

        </div>

        <SidebarContext.Provider value={{ expanded: false }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3 justify-center">
          <div
            className="w-12 h-12 cursor-pointer bg-[#1f2c73] text-white flex items-center justify-center text-xl font-bold rounded-full shadow-md"
            title={UserName}
            onClick={handleLogoProfileClick}
          >
            {UserName}

          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, alert, route }) {
  const { expanded } = useContext(SidebarContext);
  const navigate = useNavigate();

  const handleClick = () => {
    if (route) navigate(route);
  };

  return (
    <li
      onClick={handleClick}
      className={`
        relative flex items-center py-3 px-3 my-6 z-1000
         rounded-md cursor-pointer
        transition-colors group font-semibold
        ${active
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 "
          : "hover:bg-indigo-200 text-gray-600"
        }
      `}
    >
      {/* Dynamically apply color to the icon */}
     
        {React.cloneElement(icon, {
          className: `${active ? "text-red-500  " : "text-[#9796ec]"} text-2xl `,
        })}
      
      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-2 ml-2 z-10000
          bg-indigo-100 text-indigo-800 text-sm 
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
        
      `}
        >
          {text}
        </div>
      )}
      {alert && (
        <div className="absolute right-2 w-2 h-2 rounded bg-indigo-400" />
      )}
    </li>
  );
}
