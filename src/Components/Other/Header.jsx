import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between '>

    <h1 className='text-2xl font-semibold'>Hello <br /><span className='text-3xl font-semibold 👋'>Sarthak </span> </h1>
    <button className='bg-red-500 text-white px-5 py-2 rounded font-medium '>Log Out</button>

    </div>
  )
}

export default Header
