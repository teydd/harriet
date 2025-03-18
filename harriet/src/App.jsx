import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css'
import About from "./pages/About"
import Cart from "./pages/Cart"
import Contact from "./pages/Contact"
import Farmers from "./pages/Farmers"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Products from "./pages/Products"
import Signup from "./pages/Signup"
import Navbar from "./components/Navbar"

function App() {
   

  return (
    <>
    <Router>
    <Navbar></Navbar>
      <Routes>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/farmers' element={<Farmers></Farmers>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>        
      </Routes>    
    </Router> 

      
    </>
  )
}

export default App
