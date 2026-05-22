import React, { useEffect } from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom'
import { useAtom } from 'jotai'
import { searchParamAtom } from '../States/JSAtoms.js'

const Users = () => {
        const [searchParam, setSearchParam] = useAtom(searchParamAtom)
        const [searchParams, setSearchParams] = useSearchParams()

        useEffect(() => {
            const obj = Object.fromEntries(searchParams.entries())
            setSearchParam(obj)
        }, [searchParams, setSearchParam])
  return (
    <section className='flex flex-col items-center my-2 text-white bg-orange-50 h-screen px-4 rounded-md mx-4 gap-4'>
      <h1 className='text-3xl font-bold text-center my-4'>Users Page</h1>
      <p className='text-center text-amber-600'>This is the users page. Here you can find all our users.</p>

        <div className='grid grid-cols-3 gap-4 my-2 text-white px-4 rounded-md mx-4'>
            <div className='flex flex-col items-center my-2 text-white bg-slate-900 px-4 rounded-md mx-4 gap-4'>
                <Link to='/users/1' className='text-blue-500 hover:text-blue-700'>
                <h2 className='text-2xl font-bold text-center my-4'>User 1</h2> 
                </Link>
                <p className='text-center text-amber-600'>This is the details for User 1.</p>
            </div>
            <div className='flex flex-col items-center my-2 text-white bg-slate-900 px-4 rounded-md mx-4 gap-4'>
                <Link to='/users/2' className='text-blue-500 hover:text-blue-700'>
                <h2 className='text-2xl font-bold text-center my-4'>User 2</h2>
                </Link>
                <p className='text-center text-amber-600'>This is the details for User 2.</p>
            </div>
            <div className='flex flex-col items-center my-2 text-white bg-slate-900 px-4 rounded-md mx-4 gap-4'>
                <Link to='/users/3' className='text-blue-500 hover:text-blue-700'>
                <h2 className='text-2xl font-bold text-center my-4'>User 3</h2>
                </Link>
                <p className='text-center text-amber-600'>This is the details for User 3.</p>
            </div>
                <div className='flex flex-col items-center my-2 text-white bg-slate-900 px-4 rounded-md mx-4 gap-4'>    
                <Link to='/users/4' className='text-blue-500 hover:text-blue-700'>
                <h2 className='text-2xl font-bold text-center my-4'>User 4</h2>
                </Link>
                <p className='text-center text-amber-600'>This is the details for User 4.</p>
            </div>
            <div className='flex flex-col items-center my-2 text-white bg-slate-900 px-4 rounded-md mx-4 gap-4'>
                <Link to='/users/5' className='text-blue-500 hover:text-blue-700'>
                <h2 className='text-2xl font-bold text-center my-4'>User 5</h2>
                </Link>
                <p className='text-center text-amber-600'>This is the details for User 5.</p>
            </div>
            <div className='flex flex-col items-center my-2 text-white bg-slate-900 px-4 rounded-md mx-4 gap-4'>
                <Link to='/users/6' className='text-blue-500 hover:text-blue-700'>
                <h2 className='text-2xl font-bold text-center my-4'>User 6</h2>
                </Link>
                <p className='text-center text-amber-600'>This is the details for User 6.</p>
            </div>
        </div>
        <Outlet />
        <div className="flex justify-center gap-3 my-4">
            <button onClick={() => { const obj = { filter: 'active' }; setSearchParams(obj); setSearchParam(obj); }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Active
            </button>
            <button onClick={() => { setSearchParams({}); setSearchParam({}); }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Passive
            </button>
        </div>
    </section>
  )
}

export default Users
