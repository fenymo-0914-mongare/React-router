import React from 'react'
import { useNavigate } from 'react-router-dom'

const Confirmed = () => {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col justify-center items-center my-2 text-white bg-slate-900 h-screen px-4 rounded-md mx-4 gap-4'>
        <h1 className=' font-bold text-2xl mb-4'>Your account has been successfully created!</h1>
        <p className='text-lg'>You can now log in to your account and start using our services.</p>
        <p className='text-lg'>Thank you for choosing our platform!</p>
        <button onClick={() => navigate('/') -1} className="bg-amber-500 text-white text-lg font-bold hover:bg-orange-600 px-3 py-1 rounded-sm hover:bg-black/80 transition-colors duration-200">Go to Home</button>
    </div>
  )
}

export default Confirmed
