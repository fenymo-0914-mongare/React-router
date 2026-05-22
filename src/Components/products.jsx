import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <div className='flex flex-col items-center my-2 text-white bg-slate-900 h-screen px-4 rounded-md mx-4 gap-4'>
        <h1 className='text-3xl font-bold text-center my-4'>Products Page</h1>
        <p className='text-center text-amber-600'>This is the products page. Here you can find all our products.</p>
        <nav className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
            <Link to='/products/features' className='text-lg text-amber-500 hover:text-amber-400 hover:underline'>Features</Link>
        </nav>
        <Outlet />
    </div>
  )
}

export default Products
