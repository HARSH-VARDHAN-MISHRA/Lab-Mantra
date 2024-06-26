import React, { useEffect, useState } from 'react';
import b1 from './banner-1.jpg';
import b2 from './banner-2.jpg';
import b3 from './banner-3.jpg';
import Head from '../../components/Head/Head';
import OurServices from '../../components/OurServices/OurServices';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Tests from '../../components/Tests/Tests';
import Contact from '../../components/Contact/Contact';
import About from '../../components/About/About';
import Packages from '../../components/Packages/Packages';
import axios from 'axios';

const HomePage = () => {
  const [tests, setTests] = useState([]);
  const [visibleTests, setVisibleTests] = useState(12);
  const [cart, setCart] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [locationPopup, setLocationPopup] = useState(false);

  const fetchTest = async () => {
    try {
      const res = await axios.get("http://localhost:6842/api/v1/get-all-test");
      setTests(res.data.data);
    } catch (error) {
      console.error("Something Issue to fetch Tests: ", error);
    }
  };

  

  const checkLocationAccess = () => {
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by your browser");
      return;
    }
  
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("Location access granted:", position);
      },
      (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          if (!localStorage.getItem('locationPopupShown')) {
            setTimeout(() => {
              setLocationPopup(true);
            }, 3000);
          }
        }
      }
    );
  };

  const handleAddToCart = (test) => {
    let updatedCart = [...cart];
    let message = '';
    if (cart.some(item => item._id === test._id)) {
      updatedCart = updatedCart.filter(item => item._id !== test._id);
      message = `${test.testName} Removed from cart`;
    } else {
      updatedCart.push(test);
      message = `${test.testName} added to cart`;
    }
    setCart(updatedCart);
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));
    setPopupMessage(message);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  const requestLocationAccess = () => {
    setLocationPopup(false);
    localStorage.setItem('locationPopupShown', 'true');
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("Location access granted:", position);
      },
      (error) => {
        console.log("Location access denied:", error);
      }
    );
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    fetchTest();
    checkLocationAccess();
  }, []);

  return (
    <>
      <section className="locate">
        <div className="container">
          <div className="flex-loc">
            <div className='flex-content'>
              <h1>Find Top-Quality Labs <br /> Near You at <br /> <span>Affordable Prices!</span></h1>
            </div>
            <div className="flex-content">
              <form >
                <div className="input-fd">
                  <i className="fa-solid fa-location-crosshairs"></i>
                  <input type="text" placeholder="Enter City" />
                </div>
                <div className="input-fd">
                  <i className="fa-brands fa-searchengin"></i>
                  <input type="text" placeholder="Add Multiple Test to find labs" />
                </div>
                <button type="submit">Find Nearest Location</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="all-sec">
        <div className="container">
          <div className="grid-2">
            <div className="sin-sec">
              <div className="secImg">
                {/* SVG icon */}
              </div>
              <Link to="/book-your-test" className="content">
                <div className="text">
                  <h4>Book Your Lab Test</h4>
                  <p>Home Sample Collection</p>
                </div>
                <div className="arrow">
                  <i className="fa-solid fa-circle-chevron-right"></i>
                </div>
              </Link>
            </div>

            <div className="sin-sec">
              <div className="secImg">
                {/* SVG icon */}
              </div>
              <Link className="content">
                <div className="text">
                  <h4>Download Reports</h4>
                  <p>Check E-Reports Status</p>
                </div>
                <div className="arrow">
                  <i className="fa-solid fa-circle-chevron-right"></i>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Head title="Our Services" />
      <OurServices />
      <Packages />
      <Head title="Lab Mantra Popular Tests" />

      <section className="tests">
        <div className="container">
          <div className="grid-3">
            {tests.slice(0, visibleTests).map((item, index) => (
              <div className="single-test" key={index}>
                <h4>{item.testName}</h4>
                <div className="flex">
                  <div className="price">
                    {item.discountPrice ? (
                      <>
                        <span className="discount_price">₹{item.discountPrice}</span>
                        <span className="actual_price">₹{item.actualPrice}</span>
                      </>
                    ) : (
                      <>
                        <span className="discount_price">₹{item.actualPrice}</span>
                      </>
                    )}
                  </div>
                  {cart.some(cartItem => cartItem._id === item._id) ? (
                    <button onClick={() => handleAddToCart(item)} className="bookBtn">
                      REMOVE
                    </button>
                  ) : (
                    <button onClick={() => handleAddToCart(item)} className="bookBtn">
                      BOOK
                    </button>
                  )}
                </div>
                {item.discountPercentage ? (
                  <div className="abso">
                    <span>{item.discountPercentage}% Off</span>
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          {tests.length > visibleTests && (
            <div className="view-more-container">
              <Link to="/lab-tests" className="viewMoreBtn">
                View More
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="heading pb-0">
        <div className="container">
          <h2>Contact Us</h2>
        </div>
      </section>

      <Contact />

      {showPopup && (
        <div className="popup">
          <p>{popupMessage}</p>
        </div>
      )}

      {locationPopup && (
        <div className="location-popup">
          <div className="popup-content">
            <h2>Enable Location Access</h2>
            <p>Please enable location access so that we can find the nearest lab for you.</p>
            <button onClick={requestLocationAccess}>Enable Location</button>
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
