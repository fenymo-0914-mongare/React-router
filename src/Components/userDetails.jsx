import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
  const { id } = useParams()

  return (
    <div className='flex flex-col items-center my-2 text-white bg-slate-900 h-screen px-4 rounded-md mx-4 gap-4'>
      <h1 className='text-3xl font-bold text-center my-4'>User Details</h1>
      <p className='text-center text-amber-600'>This is the user details page. Here you can find all the details for a specific user.</p>
      <p className='text-center text-lg text-slate-300'>User ID: <span className='font-bold text-white'>{id}</span></p>
    </div>
  )
}

export default UserDetails
