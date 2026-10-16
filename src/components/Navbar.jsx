import React from 'react'
import { NavLink } from 'react-router'

const Navbar =()=>{
    return(
 <div className='flex items-center justify-between p-4 bg-gray-800 text-white gap-3 rounded-lg'>
    <h1>Logo</h1>
    <div className='flex gap-5 text-lg '>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        
    </div>
    <button>Log In</button>
 </div>
    )
}
export default Navbar;