import React, { createContext, useContext, useState } from "react";
import { signUp, logIn } from "../auth/Auth";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("currentUser"));
  const [currentUser, setCurrentUser] = useState(() => {
    return JSON.parse(localStorage.getItem("currentUser")) || null;
  });

  const login = async (email, password) => {
    try {
     await logIn(email, password); // Validate login
      setIsAuthenticated(true);
      setCurrentUser(email); // Save user in state
      localStorage.setItem("currentUser", JSON.stringify(email)); // Persist login
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const signup = (fullName, email, password) => {
    try {
      signUp(fullName, email, password); // Register user
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    localStorage.removeItem("currentUser"); // Remove session
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, signup, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
