// Admin object
const admin = {
  id: "A1",
  email: "admin@example.com",
  password: "123",
};

// Employees dataset
const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [],
  },
   {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [],
  },
];

// Save to localStorage
export const setLocalStorage = () => {
  if (!localStorage.getItem("employees")) {
    localStorage.setItem("employees", JSON.stringify(employees));
  }
  if (!localStorage.getItem("admin")) {
    localStorage.setItem("admin", JSON.stringify(admin));
  }
};

// Get Employees
export const getEmployeesLocalStorage = () => {
  const data = localStorage.getItem("employees");
  
  return data ? JSON.parse(data) : [];

};

// Get Admin
export const getAdminLocalStorage = () => {
  const data = localStorage.getItem("admin");
  return data ? JSON.parse(data) : null;
};
