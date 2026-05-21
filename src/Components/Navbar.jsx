import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-gray-950 flex items-center justify-center text-white text-yellow-400 p-4 flex gap-5 space-x-4'>
      <Link className='text-xl hover:text-orange-600 hover:text-lg' to='/'>Home</Link>
      <Link className='text-xl hover:text-orange-600 hover:text-lg' to='/about'>About</Link> 
    </nav>
  )
}

export default Navbar
