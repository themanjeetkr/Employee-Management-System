import React, { createContext, useEffect, useState } from 'react';
import { setLocalStorage, getAdminLocalStorage, getEmployeesLocalStorage } from '../Utils/LocalStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // 1. Initialize localStorage
    setLocalStorage();

    // 2. Load data from localStorage
    setAdmin(getAdminLocalStorage());
    setEmployees(getEmployeesLocalStorage());
  }, []);

  console.log("Admin:", admin);
  console.log("Employees:", employees);
  

  return (
    <AuthContext.Provider value={{ admin, employees }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
