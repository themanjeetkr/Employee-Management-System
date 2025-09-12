import { useState, useEffect} from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard.jsx/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard.jsx/AdminDashboard'
import { setLocalStorage,getEmployeesLocalStorage, getAdminLocalStorage} from './Utils/LocalStorage'


function App() {
 const [user,setuser]=useState(null)
  return (
    <>
   
{!user ?  <Login/>:" "}
      {/* <EmployeeDashboard/>
      <AdminDashboard/> */}
    
    </>
  )
}

export default App


//   const [count, setCount] = useState(0)
//   useEffect(() => {
//   setLocalStorage();

//   const employees = getEmployeesLocalStorage();
//   const admin = getAdminLocalStorage();

//   console.log("Employees:", employees);
//   console.log("Admin:", admin);
// }, []);
