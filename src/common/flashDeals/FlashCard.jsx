import React, { useState } from 'react'
import Slider from "react-slick";


const NextArrow = (props) =>{
    const {onClick} = props
    return(
        <div className='control-btn' onClick={onClick}>
            <button className='next'>
                <i class='bx bx-right-arrow-alt' ></i>
            </button>
        </div>
    )
}
const PrevArrow = (props) =>{
    const {onClick} = props
    return(
        <div className='control-btn' onClick={onClick}>
            <button className='prev'>
                <i class='bx bx-left-arrow-alt' ></i>   
            </button>
        </div>
    )
}

const FlashCard = ({productItems, addToCart}) => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true
      };
  return (
    <>
            <Slider {...settings}>

    {productItems.map((productItems) =>{
        return(
    
        <div className="box">
            <div className="product mtop">
                <div className="img">
                    <span className='discount'>{productItems.discount}% Off</span>
                    <img src={productItems.cover} alt="" />
                    <div className="product-like">
                        <label>0</label><br />
                        <i class='bx bx-heart' onClick={increment} ></i>
                    </div>
                </div>
                <div className="product-details">
                    <h3>{productItems.name}</h3>
                    <div className="rate">
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    </div>
                    <div className="price">
                        <h4>${productItems.price}.00</h4>
                        <button onClick={() => addToCart(productItems)}>
                            <i class='bx bx-plus' ></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>)
        })}
        </Slider >
    </>
  )
}

export default FlashCard