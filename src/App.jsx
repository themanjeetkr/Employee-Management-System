import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard.jsx/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard.jsx/AdminDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <Login/>
      <EmployeeDashboard/>
      <AdminDashboard/>
     </div>
    </>
  )
}

export default App
