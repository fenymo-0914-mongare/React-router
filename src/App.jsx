import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Navbar from './Components/Navbar.jsx'
import SignUpForm from './Components/signUpForm.jsx'
import Confirmed from './Components/confirmed.jsx'
import PageError from './Components/pageError.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-up' element={<SignUpForm />} />
        <Route path='/confirmed' element={<Confirmed />} />
        <Route path='*' element={<PageError />} />
      </Routes> 
    </div>
  )
}

export default App
