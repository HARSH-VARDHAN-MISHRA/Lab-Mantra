import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'
import logo from '../../Assets/logo.png'
import axios from 'axios'

const Header = () => {
    const [toogleMenu,setToogleMenu] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [allTestNames, setAllTestNames] = useState([]);
    const navigate = useNavigate();

    const handleOpenMenu = () =>{
        setToogleMenu(true);
    }
    const handleCloseMenu = () =>{
        setToogleMenu(false);
    }

    useEffect(() => {
        // Fetch test names from API
        const fetchTestNames = async () => {
            try {
                const response = await axios.get('https://lab-mantra-backend.onrender.com/api/v1/get-all-test');
                if (response.data.success) {
                    const testNames = response.data.data.map(test => test.testName);
                    setAllTestNames(testNames);
                } else {
                    console.error('Failed to fetch test names:', response.data.message);
                }
            } catch (error) {
                console.error('Error fetching test names:', error);
            }
        };

        fetchTestNames();
    }, []);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
    };

    // Filter test names based on input value
    const filteredTests = allTestNames.filter((test) =>
        test.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Redirect to test details page
    const handleTestClick = (testName) => {
        navigate(`/lab-tests/${testName.replace(/ /g, '-')}`);
        setSearchTerm("")
    };

  return (
    <>
        <header>
            <div className="top-head header">
                <div className="calls">
                    <a href="tel:+918826936006"> <i className="fa-solid fa-phone-volume"></i>+91-8826936006</a>
                </div>
                <div className="search-bar">
                    <input 
                        type="text"
                        name="search"
                        value={searchTerm}
                        onChange={handleInputChange}
                        placeholder="Search for tests..."
                        autoComplete="off"
                    />
                    <i className="fa-solid fa-magnifying-glass"></i>

                    {/* Suggested Test Names */}
                    {searchTerm && filteredTests.length > 0 && (
                        <div className="suggested-tests">
                            <ul>
                                {filteredTests.map((test, index) => (
                                    <li key={index}><div  onClick={() => handleTestClick(test)} >{test}</div></li>
                                ))}
                            </ul>
                        </div>
                    )}
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
                        <li><Link onClick={handleCloseMenu} to="/lab-tests">Book Test</Link></li>
                        <li><Link onClick={handleCloseMenu} to="/our-packages">Our Packages</Link></li>
                        <li><Link onClick={handleCloseMenu} to="/report-status">Check Report</Link></li>
                        <li><Link onClick={handleCloseMenu} to="/contact-us">Contact Us</Link></li>
                        <div className="closeToggleMenu" onClick={handleCloseMenu}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </ul>
                </div>
                <div className="tabs">
                    <Link to="/sign-up" className='profile'>
                        <i className="fa-solid fa-circle-user"></i>
                    </Link>
                    <Link to="/cart" className='cart'>
                        <i className="fa-solid fa-cart-plus"></i>
                        <div className="number">1</div>
                    </Link>
                    <div className="toogle-bar" onClick={handleOpenMenu}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>

            </nav>
        </header>


        {/*  ----------Whatsapp---------- */}
        <a href="https://api.whatsapp.com/send?phone=918826936006" target="_blank" className="whatsapp_float"><i className="fa-brands fa-whatsapp whatsapp-icon"></i></a>

    </>
  )
}

export default Header