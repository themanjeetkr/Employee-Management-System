import { useState, useContext, useEffect } from 'react'   // ✅ added useContext
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard.jsx/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard.jsx/AdminDashboard'

import { setLocalStorage, getEmployeesLocalStorage, getAdminLocalStorage } from './Utils/LocalStorage'
import { AuthContext } from './Context/AuthProvider'

function App() {
  const [user, setuser] = useState(null)

  const handlelogin = (email, password) => {
    if (email === 'admin@name.com' && password === '123') {
      console.log('admin logged in')
      setuser('admin')
    } else if (email === 'user@name.com' && password === '123') {
      console.log('you are user')
      setuser('user')
    } else {
      alert('invalid credentials')
    }
  }
  useEffect(() => {
    setLocalStorage()
   
  }, [])
  

  // ✅ consume context
  const data = useContext(AuthContext)
  console.log("Context value:", data)

  return (
    <>
      {!user ? (
        <Login handlelogin={handlelogin} />
      ) : user === 'admin' ? (
        <AdminDashboard />
      ) : (
        <EmployeeDashboard />
      )}
    </>
  )
}

export default App
