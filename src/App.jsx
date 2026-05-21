import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'

const App = () => {
  return (
    <div>
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes> 
    </div>
  )
}

export default App
