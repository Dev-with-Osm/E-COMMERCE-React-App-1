import React from 'react'
import logo from '../../common/assets/images/logo.png'
import { Link } from 'react-router-dom';

function Search({cartItem}) {
    window.addEventListener("scroll", function(){
        const search = document.querySelector(".search")
        search.classList.toggle("active", window.scrollY > 100)
    })
  return (
    <>
        <section className="search">
            <div className="container c_flex">
                <div className="logo width">
                    <a href="/"><img src={logo} alt="" /></a>
                </div>

                <div className="search-box f_flex">
                    <i class='bx bx-search' ></i>
                    <input type="text" placeholder='search and hit enter...' />
                    <span>ALL Category</span>
                </div>

                <div className="icon f_flex width">
                    <i class='bx bx-user icon_circle'></i>
                    <div className="cart">
                        <Link to='/cart'>
                            <i className='bx bx-shopping-bag icon_circle' ></i>
                            <span>{cartItem.length === 0 ? "" : cartItem.length }</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Search