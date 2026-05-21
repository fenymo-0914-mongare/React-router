import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Navbar from './Components/Navbar.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes> 
    </div>
  )
}

export default App
