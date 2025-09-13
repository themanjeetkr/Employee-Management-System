import React, { useState } from 'react'

const Login = ({ handlelogin }) => {
  const [email, setemail] = useState("")
  const [pass, setpass] = useState("")

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <form  
          onSubmit={(e) => {
            e.preventDefault()
            handlelogin(email, pass)   // ✅ call parent function
            setemail("")
            setpass("")
          }}
          className='flex flex-col'
        >
          <input 
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
            className='text-black outline-none border-2 border-emerald-600 rounded-full py-3 px-5 bg-transparent placeholder:text-black'
            type="email"
            placeholder='Enter Your email'
          />
          <input 
            value={pass}
            onChange={(e) => setpass(e.target.value)}
            required
            className='text-black outline-none border-2 border-emerald-600 mt-3 py-3 px-5 rounded-full bg-transparent placeholder:text-black'
            type="password"
            placeholder='Enter your password'
          />
          <button
            className="px-6 py-2 mt-5 text-white bg-emerald-600 rounded-full shadow-md 
              hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-400 
              transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
