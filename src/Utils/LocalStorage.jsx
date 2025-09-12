// LocalStorage.jsx

// Employees dataset
const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare Sales Report",
        description: "Compile and format the sales report for Q1",
        date: "2025-09-12",
        category: "Reporting",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Team Meeting",
        description: "Weekly sync-up with the marketing team",
        date: "2025-09-10",
        category: "Meeting",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Client Follow-Up",
        description: "Contact pending clients for feedback",
        date: "2025-09-11",
        category: "Communication",
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Fix Login Bug",
        description: "Resolve issue with user authentication",
        date: "2025-09-13",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Code Review",
        description: "Review PRs from team members",
        date: "2025-09-09",
        category: "Code Review",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "API Documentation",
        description: "Update docs for the new payment API",
        date: "2025-09-08",
        category: "Documentation",
      },
    ],
  },
  // ... other employees (3, 4, 5)
];

// Admin object
const admin = {
  id: "A1",
  email: "admin@example.com",
  password: "123",
};

// Save to localStorage (only first time)
export const setLocalStorage = () => {
  if (!localStorage.getItem("employees")) {
    localStorage.setItem("employees", JSON.stringify(employees));
  }
  if (!localStorage.getItem("admin")) {
    localStorage.setItem("admin", JSON.stringify(admin));
  }
};

// Get Employees from localStorage
export const getEmployeesLocalStorage = () => {
  const data = localStorage.getItem("employees");
  return data ? JSON.parse(data) : [];
};

// Get Admin from localStorage
export const getAdminLocalStorage = () => {
  const data = localStorage.getItem("admin");
  return data ? JSON.parse(data) : null;
};
