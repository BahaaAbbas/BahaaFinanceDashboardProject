import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

const Home = () => {
  const { theme, toggleTheme } = useTheme();
  const [collapsed, setCollapsed] = useState(false); // State to manage sidebar collapse
  const toggleCollapse = () => setCollapsed(!collapsed); // Toggle collapse state

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>



      {/* Main Content */}
      <div className="p-4 ml-16"> {/* Add padding to the left to avoid overlap */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-md border border-gray-300 dark:border-gray-600"
        >
          {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
        </button>

        <h1 className="text-blue-500 dark:text-green-500">Customized Color for H1</h1>
        <h2 className="text-purple-600 dark:text-cyan-600">Customized Color for H2</h2>
        <h2 className="text-bahaa">Another Custom Color for H2</h2>

        <p>sadasda</p>
      </div>
    </div>
  );
};

export default Home;
