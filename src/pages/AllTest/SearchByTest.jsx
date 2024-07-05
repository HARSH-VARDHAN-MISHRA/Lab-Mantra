import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../../components/Loading/Loading';

const SearchByTest = () => {

    const { testname } = useParams();
    const [testDetails, setTestDetails] = useState(null);
    

    const fetchTestDetails = async () => {
        try {
            const response = await axios.get(`https://lab-mantra-backend.onrender.com/api/v1/get-all-test`);
            if (response.data.success) {
                const test = response.data.data.find(test => test.testName.toLowerCase().replace(/-/g, ' ') === testname.toLowerCase().replace(/-/g, ' '));

                if (test) {
                    setTestDetails(test);
                } else {
                    console.error(`Test '${testname}' not found`);
                }
            } else {
                console.error('Failed to fetch test details:', response.data.message);
            }
        } catch (error) {
            console.error('Error fetching test details:', error);
        }
    };

    useEffect(() => {
        fetchTestDetails();
    }, [testname]);


    // Add To Cart

    const [cart, setCart] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

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
        localStorage.setItem('lab-cart', JSON.stringify(updatedCart));
        setPopupMessage(message);
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 2000);
    }

    return (
        <>
            {testDetails ?
                (
                    <>
                        <section className="bread">
                            <div className="container">
                                <nav aria-label="breadcrumb ">
                                    <h2>Lab Tests</h2>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item" aria-current="page"><Link to="/lab-tests">Lab Tests</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">{testDetails.testName}</li>
                                    </ol>
                                </nav>
                            </div>
                        </section>

                        <section className="tes my-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">

                                        <div className="single-test">
                                            <h4>{testDetails.testName}</h4>
                                            <div className="flex">
                                                <div className="price">
                                                    {testDetails.discountPrice ? (
                                                        <>
                                                            <span className="discount_price">₹{testDetails.discountPrice}</span>
                                                            <span className="actual_price">₹{testDetails.actualPrice}</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <span className="discount_price">₹{testDetails.actualPrice}</span>
                                                        </>
                                                    )}
                                                </div>
                                                {cart.some(cartItem => cartItem._id === testDetails._id) ? (
                                                    <button onClick={() => handleAddToCart(testDetails)} className="bookBtn">
                                                        REMOVE
                                                    </button>
                                                ) : (
                                                    <button onClick={() => handleAddToCart(testDetails)} className="bookBtn">
                                                        BOOK
                                                    </button>
                                                )}
                                            </div>
                                            {testDetails.discountPercentage ? (
                                                <div className="abso">
                                                    <span>{testDetails.discountPercentage}% Off</span>
                                                </div>
                                            ) : null}
                                        </div>

                                    </div>
                                    <div className="col-md-6"></div>
                                </div>
                            </div>
                        </section>

                        <section className="mt-5">
                            <div className="container">
                                <div className="view-more-container" >
                                    <Link to="/lab-tests" className='viewMoreBtn'>
                                        View All Tests
                                    </Link>
                                </div>

                            </div>
                        </section>

                        {showPopup && (
                            <div className="popup">
                                <p>{popupMessage}</p>
                            </div>
                        )}

                    </>
                ) : (
                <>
                    <div className="container my-5">
                        <Loading/>
                    </div>
                </>
            )}
            
        </>
    );
};

export default SearchByTest;
