import React from 'react'
import Header from '../Other/Header'
import TaskListNumber from '../Other/TaskListNumber'
import TaskList from '../../Components/TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1c1c1c] text-white h-screen'>
      
    <Header/>
    <TaskListNumber/>
    <TaskList/>
    </div>
  )
}

export default EmployeeDashboard
