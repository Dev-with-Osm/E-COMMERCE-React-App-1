import React from 'react'
import Ndata from './Ndata'

const Cart = () => {
  return (
    <>
      <div className="content grid product">
            {Ndata.map((value, index) => {
                return(
                    <div className="box" key={index}>
                        <div className="img">
                            <img src={value.cover} alt="" />
                        </div>
                        <h4>{value.name}</h4>
                        <span>${value.price}.00</span>
                    </div>
                )
            })
            }
      </div>
    </>
  )
}

export default Cart