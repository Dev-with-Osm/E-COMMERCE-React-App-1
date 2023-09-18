import React, { useState } from 'react'
import Header from './components/Header/Header'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Pages from './pages/Pages'
import Data from './common/flashDeals/Data'
import Cart from './components/cart/Cart'
import Sdata from './common/shop/Sdata'
import Footer from './components/footer/Footer'

function App() {
  const {productItems} = Data
  const {shopItems} = Sdata

  const [cartItem, setCartItem] = useState([])

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)

    if(productExit) {
      setCartItem(cartItem.map((item) => (item.id === product.id? {...productExit, qty:productExit.qty+1} : item)))
    } else {
      setCartItem([...cartItem, {...product, qty: 1}])
    }
  }

  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
    if(productExit.qty ===1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id))
    } else{
      setCartItem(cartItem.map((item) => (item.id === product.id? {...productExit, qty: productExit.qty-1} : item)))
    }
  }

  return (
    <Router>
      <Header cartItem={cartItem}/>
      <Routes>
        <Route path='/' element={<Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />} />
        <Route path='/cart' element={<Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty} />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App