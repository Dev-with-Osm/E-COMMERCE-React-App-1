import React from 'react'
import FlashCard from './FlashCard'

const FlashDeals = ({productItems, addToCart}) => {
  return (
    <>
        <div className="flash background">
            <div className="container ">
            <div className="heading f_flex">
                <i class='bx bxs-bolt' ></i>
                <h1>Flash Deals</h1>
            </div>
            <FlashCard productItems={productItems} addToCart={addToCart} />
            </div>
        </div>
    </>

  )
}

export default FlashDeals