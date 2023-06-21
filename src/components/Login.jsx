import React from 'react'

function Login() {
  return (
    <div>
   <form  className='flex flex-col items-center items-center min-h-screen'>
    <input type="mail" placeholder='@mail.com' className="input input-bordered input-accent w-full max-w-xs mt-5"  />
    <input placeholder='Password' type="password"  className="input input-bordered input-accent w-full max-w-xs mt-5"/>
    <button type='submit' className="btn border-emerald-600 bg-[#3AB795] w-44 mt-5 ">Log in</button>
   </form>

    </div>
  )
}

export default Login