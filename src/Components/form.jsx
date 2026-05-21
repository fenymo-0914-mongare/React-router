import React from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const navigate= useNavigate()
  return (
    <div className='flex flex-col justify-center items-center my-2 mx-4 gap-4'>
        <form action="" className="container flex flex-col items-center max-w-[75%] md:max-w-[35%] gap-2 bg-slate-900 p-4 rounded-sm">
            <h1 className='text-amber-200 font-bold text-2xl mb-4'>Sign Up</h1>
            <section className="flex flex-col items-start focus-within:ring-2 focus-within:ring-orange-300 w-[80%] bg-slate-600 px-3 rounded-sm gap-1">
                <label htmlFor="first-name" className='text-amber-200 font-bold'>First Name</label>
                <input 
                    aria-label="first-name"
                    name="first-name"
                    type="text"
                    placeholder="First Name"
                    className="text-white px-2 border-none bg-transparent outline-none px-2"
                />
            </section>
            
            <section className="flex flex-col items-start focus-within:ring-2 focus-within:ring-orange-300 w-[80%] bg-slate-600 px-3 rounded-sm gap-1">
                <label htmlFor="last-name" className='text-amber-200 font-bold'>Last Name</label>
                <input 
                    aria-label="last-name"
                    name="last-name"
                    type="text"
                    placeholder="Last Name"
                    className="text-white px-2 border-none bg-transparent outline-none px-2"
                />
            </section>

            <section className="flex flex-col items-start focus-within:ring-2 focus-within:ring-orange-300 w-[80%] bg-slate-600 px-3 rounded-sm gap-1">
                <label htmlFor="email" className='text-amber-200 font-bold'>Email</label>
                <input 
                    aria-label="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="text-white px-2 border-none bg-transparent outline-none px-2"
                />
            </section>

            <section className="flex flex-col items-start focus-within:ring-2 focus-within:ring-orange-300 w-[80%] bg-slate-600 px-3 rounded-sm gap-1">
                <label htmlFor="password" className='text-amber-200 font-bold'>Password</label>
                <input 
                    aria-label="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="text-white px-2 border-none bg-transparent outline-none px-2"
                />
            </section>

            <button
                type="submit" onClick={() => navigate('/confirmed') -(1)}
                className="bg-amber-500 text-white text-lg font-bold hover:bg-orange-600 px-3 py-1 rounded-sm hover:bg-black/80 transition-colors duration-200"
            >
                Sign Up
            </button>
        </form>
    </div>
  )
}

export default Form
