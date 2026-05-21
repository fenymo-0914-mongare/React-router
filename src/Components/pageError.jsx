import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageError = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col justify-center items-center my-2 text-white bg-slate-900 h-screen px-4 rounded-md mx-4 gap-4'>
      <h1 className='text-red-500'>404 Page Not Found!</h1>
      <p className='text-red-400'>The page you are looking for does not exist.</p>
      <button onClick={() => navigate('/')} className='bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md'>Go To Home</button>
    </div>
  )
}

export default PageError
