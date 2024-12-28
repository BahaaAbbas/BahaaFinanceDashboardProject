import React, { createContext, useState, useContext } from 'react';

const ComponentWidthContext = createContext();

export const ComponentWidthProvider = ({ children }) => {
    const [componentWidth, setComponentWidth] = useState('w-[700px]'); // Default width

   
    const setDynamicWidth = (width) => {
      setComponentWidth(`w-[${width}]`);
    };

  return (
    <ComponentWidthContext.Provider value={{ componentWidth, setDynamicWidth }}>
      {children}
    </ComponentWidthContext.Provider>
  );
};

export const useComponentWidthContext = () => useContext(ComponentWidthContext);
