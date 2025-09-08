import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[55%] flex  w-full py-5  overflow-x-auto items-center justify-start mt-10 flex-nowrap gap-10'>
      <div className='h-full  flex-shrink-0 w-[300px] bg-red-400 rounded-xl'>
        <div className='flex justify-between p-5 items-center'>  
           <h3 className='bg-red-400 px-3 py- rounded '>High</h3>
           <h4 className='text-sm'>20 feb 2024</h4>
           </div>
           <h2 className='mt-5 mx-2 text-2xl font-semibold'> Make a whole things </h2>
           <p className='text-sm mt-2 mx-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nobis rerum, voluptatum placeat perspiciatis porro vitae quod excepturi, amet, delectus nesciunt dolores cumque.</p>
      </div>
      <div className='h-full  flex-shrink-0 w-[300px] bg-blue-400 rounded-xl'>
        <div className='flex justify-between p-5 items-center'>  
           <h3 className='bg-red-400 px-3 py- rounded '>High</h3>
           <h4 className='text-sm'>20 feb 2024</h4>
           </div>
           <h2 className='mt-5 text-2xl font-semibold mx-2'> Make a whole things </h2>
           <p className='text-sm mx-2 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nobis rerum, voluptatum placeat perspiciatis porro vitae quod excepturi, amet, delectus nesciunt dolores cumque.</p>
      </div>
      <div className='h-full  flex-shrink-0 w-[300px] bg-emerald-400 rounded-xl'>
        <div className='flex justify-between p-5 items-center'>  
           <h3 className='bg-red-400 px-3 py- rounded '>High</h3>
           
           <h4 className='text-sm'>20 feb 2024</h4>
           </div>
           <h2 className='mt-5 mx-2 text-2xl font-semibold'> Make a whole things </h2>
           <p className='text-sm mt-2 mx-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nobis rerum, voluptatum placeat perspiciatis porro vitae quod excepturi, amet, delectus nesciunt dolores cumque.</p>
      </div>
      <div className='h-full  flex-shrink-0 w-[300px] bg-yellow-400 rounded-xl'>
        <div className='flex justify-between p-5 items-center'>  
           <h3 className='bg-red-400 px-3 py- rounded '>High</h3>
           <h4 className='text-sm'>20 feb 2024</h4>
           </div>
           <h2 className='mt-5 mx-2 text-2xl font-semibold'> Make a whole things </h2>
           <p className='text-sm mx-2 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nobis rerum, voluptatum placeat perspiciatis porro vitae quod excepturi, amet, delectus nesciunt dolores cumque.</p>
      </div>
      {/* <h3 className='bg-red-400 px-3 '>High</h3> */}

    </div>
  )
}

export default TaskList
