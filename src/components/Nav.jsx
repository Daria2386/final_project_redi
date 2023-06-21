import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    
      <div>
     <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Homepage</a></li>
        <li><a>Our services</a></li>
        <li><a>Become a cleaner</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    
  </div>
  <div className="navbar-end">
     <Link to={"/login"}>
     <button className="btn border-emerald-600 bg-[#3AB795]">Log in
    </button>
     </Link>
     
    <Link to={"/booking"}> <button className="btn border-emerald-600 bg-[#F1D204]"> Book now
    </button></Link>
    
  </div>
</div>
    </div>
  )
}

export default Nav