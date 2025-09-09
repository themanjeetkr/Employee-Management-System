import React from 'react'
import Header from '../Other/Header'

const AdminDashboard = () => {
  return (
    <div className='p-10 h-screen w-full'>
      <Header />
      <div>
        <form>
          <h3>Task List</h3>
          <input type="text" placeholder='Make a Ui design' />
          <h3>Description</h3>

          <textarea name="" id="" cols={30} rows={10}></textarea>
          <h3>Date</h3>
          <input type='date'/>
          <h3>Assign to </h3>
          <input type="text" placeholder='employee name' />
          <h3>category</h3>
          <input type="text" placeholder='design, dev,ui' />
          <button>Create Task</button>
        </form>
      </div>

    </div>
  )
}

export default AdminDashboard
