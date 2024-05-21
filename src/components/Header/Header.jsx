import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../../Assets/logo.png'

const Header = () => {
    const [toogleMenu,setToogleMenu] = useState(false);

    const handleOpenMenu = () =>{
        setToogleMenu(true);
    }
    const handleCloseMenu = () =>{
        setToogleMenu(false);
    }
  return (
    <>
        <header>
            <div className="top-head header">
                <div className="calls">
                    <a href="tel:+918826936006"> <i class="fa-solid fa-phone-volume"></i>+91-8826936006</a>
                </div>
                <div className="search-bar">
                    <input type="text" name="search" placeholder="Search for tests..." />
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="book-btn">
                    <Link to="/book-test" >
                        Book a Test
                    </Link>
                </div>
            </div>

            <nav className='active'>
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className={`links ${toogleMenu ? 'active' : ''}`}>
                    <ul>
                        <li><Link onClick={handleCloseMenu} to="/">Home</Link></li>
                        <li><Link onClick={handleCloseMenu} to="/about-us">About Us</Link></li>
                        <li><Link onClick={handleCloseMenu} to="/book-your-test">Book Test</Link></li>
                        <li><Link onClick={handleCloseMenu} to="/our-packages">Our Packages</Link></li>
                        <li><Link onClick={handleCloseMenu} to="/report-status">Check Report</Link></li>
                        <li><Link onClick={handleCloseMenu} to="/contact-us">Contact Us</Link></li>
                        <div className="closeToggleMenu" onClick={handleCloseMenu}>
                            <i class="fa-solid fa-xmark"></i>
                        </div>
                    </ul>
                </div>
                <div className="tabs">
                    <Link to="/sign-up" className='profile'>
                        <i class="fa-solid fa-circle-user"></i>
                    </Link>
                    <Link to="/cart" className='cart'>
                        <i class="fa-solid fa-cart-plus"></i>
                        <div className="number">1</div>
                    </Link>
                    <div className="toogle-bar" onClick={handleOpenMenu}>
                        <i class="fa-solid fa-bars"></i>
                    </div>
                </div>

            </nav>
        </header>


        {/*  ----------Whatsapp---------- */}
        <a href="https://api.whatsapp.com/send?phone=918826936006" target="_blank" class="whatsapp_float"><i class="fa-brands fa-whatsapp whatsapp-icon"></i></a>

    </>
  )
}

export default Header