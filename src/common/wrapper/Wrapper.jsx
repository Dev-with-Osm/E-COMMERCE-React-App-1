import React from 'react'
import './style.css'

const Wrapper = () => {
    const data = [
        {
          cover: <i class='bx bxs-truck'></i>,
          title: "Worldwide Delivery",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
          cover: <i class='bx bxs-id-card' ></i>,
          title: "Safe Payment",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
          cover: <i class='bx bxs-shield' ></i>,
          title: "Shop With Confidence ",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
          cover: <i class='bx bx-support' ></i>,
          title: "24/7 Support ",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
      ]
  return (
    <>
        <section className='wrapper background'>
            <div className="container grid2">
                {
                    data.map((value, index) => {
                        return(
                            <div className="product" key={index}>
                                <div className="img icon_circle">
                                    <i>{value.cover}</i>
                                </div>
                                <h3>{value.title}</h3>
                                <p>{value.decs}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    </>
  )
}

export default Wrapper