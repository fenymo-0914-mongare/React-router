import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const activeClass = ({isActive}) =>
        `text-xl hover:text-amber-500 hover:text-lg ${isActive ? 'text-red-500' : ''}`
  return (
    <nav className='bg-gray-950 flex items-center justify-center text-yellow-400 p-4 flex gap-5 space-x-4'>
      <NavLink className={activeClass} to='/'>Home</NavLink>
      <NavLink className={activeClass} to='/about'>About</NavLink>
      <NavLink className={activeClass} to='/sign-up'>Sign Up</NavLink> 
      <NavLink className={activeClass} to='/products'>Products</NavLink>
    </nav>
  )
}

export default Navbar
