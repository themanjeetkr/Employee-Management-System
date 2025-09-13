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


 const handlelogin=(email,password)=>{
  if(email=='admin@name.com' && password=='123'){
    console.log('admin logged in')
    setuser('admin')
    
  }
  else if(email=='user@ame.com' &&password=='123'){
    console.log( 'you are user')
setuser('user')
  }
  
  else{
    alert('invalit credentials')

  }

 }
  return (
    <>
   
{!user ?  <Login handlelogin={handlelogin}/>:" "}
{user=='user' ? <EmployeeDashboard/>:<EmployeeDashboard/>}
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
