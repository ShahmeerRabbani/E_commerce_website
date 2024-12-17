import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Screens/Home'
import Signup from './Screens/SignUp'
import Login from './Screens/Login'
import AddCart from './Screens/AddCart'
import ProductDetail from './Screens/ProductDetail'


const App = () => {
  
  return (
   <>
   <div className="App">
    <div className="main_container">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/addcart" element={<AddCart />} />
        <Route path="/ProductDetail/:id" element={<ProductDetail />} />
      </Routes>
    </div>
   </div>
   </>
  )
}

export default App