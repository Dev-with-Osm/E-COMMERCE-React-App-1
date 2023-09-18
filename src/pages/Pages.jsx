import React from 'react'
import Home from '../common/mainpage/Home'
import FlashDeals from '../common/flashDeals/FlashDeals'
import TopCate from '../common/top/TopCate'
import NewArrivals from '../common/newarrivals/NewArrivals'
import Discount from '../common/Discount/Discount'
import Shop from '../common/shop/Shop'
import Annu from '../common/announcement/Annu'
import Wrapper from '../common/wrapper/Wrapper'

const Pages = ({productItems, cartItem, addToCart, shopItems}) => {
  return (
    <>
        <Home cartItem={cartItem} />
        <FlashDeals productItems={productItems} addToCart={addToCart} />
        <TopCate />
        <NewArrivals />
        <Discount />
        <Shop shopItems={shopItems} addToCart={addToCart} />
        <Annu />
        <Wrapper />
    </>
  )
}

export default Pages