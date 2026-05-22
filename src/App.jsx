import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Navbar from './Components/Navbar.jsx'
import SignUpForm from './Components/signUpForm.jsx'
import Confirmed from './Components/confirmed.jsx'
import PageError from './Components/pageError.jsx'
import Products from './Components/products.jsx'
import Features from './Components/features.jsx'
import Users from './Components/users.jsx'
import UserDetails from './Components/userDetails.jsx'

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
        <Route path='/products' element={<Products />}>
          <Route path='features' element={<Features />} />
        </Route>
        <Route path='/users' element={<Users />} >
          <Route path=':id' element={<UserDetails />} />
        </Route>
      </Routes> 
    </div>
  )
}

export default App
