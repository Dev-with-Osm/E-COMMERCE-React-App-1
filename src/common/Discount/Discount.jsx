import React from 'react'
import Dcart from './Dcart'

const Discount = () => {
  return (
    <>
        <section className='discount background newarrivals'>
            <div className="container">
            <div className="heading d_flex">
                    <div className="heading-left row f_flex">
                        <img src='https://img.icons8.com/windows/32/fa314a/gift.png' alt=''/>                        <h2>Big Discounts</h2>
                    </div>
                    <div className="heading-right row">
                        <span>View all</span>
                        <i class='bx bx-caret-right' ></i> 
                    </div>
                </div>
                <Dcart />
            </div>
        </section>
    </>
  )
}

export default Discount