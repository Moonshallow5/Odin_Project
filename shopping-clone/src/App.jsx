import { useState } from 'react'
import './App.css'
import Navbar from './pages/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';



function App() {

  const [cart,setCart]=useState([])
  const [currentPage,setcurrentPage]=useState("home")

  const addToCart= (product,quantity) =>{

    setCart((prevCart) =>{

      const existingProduct= prevCart.find((item) => item.id==product.id)

      if(existingProduct){


        return prevCart.map((item) =>
        item.id == product.id
        ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...prevCart, { ...product, quantity }];
    })



  }
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return(

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop addToCart={addToCart} removeFromCart={removeFromCart}/>} />
        <Route path="/cart" element={<Cart cart={cart} remove={removeFromCart} />} />
      </Routes>
    </Router>
  )
 




  

  
}

export default App
