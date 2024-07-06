import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CheckoutPage.css'
import '../Booking/Booking.css'

const GetAddress = () => {
    const [cartDetails, setCartDetails] = useState({});
    const [selectedOption, setSelectedOption] = useState('homeCollection');
    const [userDetails, setUserDetails] = useState({
        name: '',
        address: '',
        gender: '',
        phone: '',
        email: '',
        age: '',
        date: '',
        time: '',
        prescription: null,
        paymentType: ''
    });

    useEffect(() => {
        const storedDetails = JSON.parse(localStorage.getItem('cartDetails')) || {};
        setCartDetails(storedDetails);
    }, []);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'prescription') {
            setUserDetails(prevState => ({
                ...prevState,
                [name]: files[0]
            }));
        } else {
            setUserDetails(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log(userDetails);
    }

    const { cart, subtotal, homeCollectionCharges, discount, totalToPay } = cartDetails;

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])

    const [activeTab, setActiveTab] = useState('home');
    const [options, setOptions] = useState([]);


    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    // ============================================= 
    const [visibleTests, setVisibleTests] = useState({});

    const toggleVisibility = (packageId) => {
        setVisibleTests(prevState => ({
            ...prevState,
            [packageId]: !prevState[packageId]
        }));
    };

    return (
        <>
            <section className="bread">
                <div className="container">
                    <nav aria-label="breadcrumb ">
                        <h2>Confirm Your Details</h2>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="/cart">Cart</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Confirm Your Details</li>
                        </ol>
                    </nav>
                </div>
            </section>

            <section className="getAddressCheck booking my-5">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6">
                            <div className="order-summary mb-4" style={{ backgroundColor: '#f0fffe', padding: '20px', borderRadius: '8px' }}>
                                <h3 className="mb-3" style={{ color: '#003873' }}>Order Summary</h3>
                                {cart && cart.map(item => (
                                    <div key={item._id} className="cart-item mb-4" style={{ backgroundColor: '#ddf3f2', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                                        {item.packageName ? (
                                            <>
                                                <h5 className="mb-2" style={{ color: '#4377a2' }}>Package: {item.packageName}</h5>
                                                <div className="d-flex justify-content-between mb-2">
                                                    <span style={{ color: '#003873' }}>Package Price:</span>
                                                    <span style={{ color: '#00AAA9' }}>₹{item.currentPrice || item.actualPrice}</span>
                                                </div>

                                                <button
                                                    className="btn btn-info mt-1"
                                                    style={{ backgroundColor: '#2dbcb6', color: '#f0fffe', border: 'none', padding: '8px 16px', borderRadius: '4px' }}
                                                    onClick={() => toggleVisibility(item._id)}
                                                >
                                                    {visibleTests[item._id] ? 'Hide Details' : 'View Details'}
                                                </button>
                                                {visibleTests[item._id] && (
                                                    <>
                                                        <h6 className="mt-3 mb-2" style={{ color: '#4377a2' }}>Tests Included:</h6>
                                                        <ul className="list-unstyled">
                                                            {[...new Set(item.testDetails.map(test => test.testName))].map((testName, index) => {
                                                                const test = item.testDetails.find(t => t.testName === testName);
                                                                return (
                                                                    <li key={index} className="d-flex justify-content-between mb-2">
                                                                        <span>{test.testName}</span>
                                                                        {/* <span>₹{test.discountPrice || test.actualPrice}</span> */}
                                                                    </li>
                                                                );
                                                            })}
                                                        </ul>

                                                    </>
                                                )}
                                            </>
                                        ) : (
                                            <>
                                                <h5 className="mb-2" style={{ color: '#4377a2' }}>Test: {item.testName}</h5>
                                                <div className="d-flex justify-content-between mb-2">
                                                    <span style={{ color: '#003873' }}>Test Price:</span>
                                                    <span style={{ color: '#00AAA9' }}>₹{item.discountPrice || item.actualPrice}</span>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>


                        <div className="col-md-6 mb-3">
                            <div className="tot" style={{ backgroundColor: 'var(--bg-head)', padding: '20px', borderRadius: '8px' }}>
                                <h3 className="mb-3 h4" style={{ color: 'var(--bg-dark-blue)' }}>Payment Details</h3>
                                <div className="d-flex justify-content-between mt-3">
                                    <span style={{ color: 'var(--color-blue)' }}>Subtotal:</span>
                                    <span>₹{subtotal}</span>
                                </div>
                                <div className="d-flex justify-content-between mt-1">
                                    <span style={{ color: 'var(--color-blue)' }}>Home Collection Charges:</span>
                                    <span>₹{homeCollectionCharges}</span>
                                </div>
                                <div className="d-flex justify-content-between mt-1">
                                    <span style={{ color: 'var(--color-blue)' }}>Discount:</span>
                                    <span>₹{discount}</span>
                                </div>
                                <div className="d-flex justify-content-between mt-1 font-weight-bold fs-5">
                                    <span style={{ color: 'var(--bg-dark-blue)' }}>Total to Pay:</span>
                                    <span style={{ color: 'var(--color-blue-light)' }}>₹{totalToPay}</span>
                                </div>
                            </div>
                        </div>





                        <div className="col-12 tab-pills ">
                            <div className="container bg-green">

                                <div className="nav  nav-tabs">
                                    <div className="">
                                        <a
                                            className={` ${activeTab === 'home' ? 'active' : ''}`}
                                            onClick={() => handleTabClick('home')}
                                            href="#home"
                                        >
                                            <input type="radio" name="collection" id="" /> Home Collection
                                        </a>
                                    </div>
                                    <div className="">
                                        <a
                                            className={` ${activeTab === 'menu1' ? 'active' : ''}`}
                                            onClick={() => handleTabClick('menu1')}
                                            href="#lab"
                                        >
                                            <input type="radio" name="collection" id="" /> Lab
                                        </a>
                                    </div>
                                </div>


                                <div className="tab-content">

                                    <div id="home" className={`tab-pane fade ${activeTab === 'home' ? 'show active' : ''}`}>

                                        <form className="row g-3">
                                            <div className="col-md-6">
                                                <label htmlFor="name" className="form-label">Name</label>
                                                <input type="text" className="form-control" id="name" name="name" required />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="mobile" className="form-label">Mobile No</label>
                                                <input type="tel" className="form-control" id="mobile" name="mobile" pattern="[0-9]{10}" required />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="email" className="form-label">Email ID</label>
                                                <input type="email" className="form-control" id="email" name="email" required />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="age" className="form-label">Age</label>
                                                <input type="number" className="form-control" id="age" name="age" min="0" required />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="gender" className="form-label">Gender</label>
                                                <select className="form-control" id="gender" name="gender">
                                                    <option value="" disabled>Your Gender</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="date" className="form-label">Date</label>
                                                <input type="date" className="form-control" id="date" name="date" required />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="Time" className="form-label">Time</label>
                                                <select className="form-control" id="Time" name="time">
                                                    <option value="">Select</option>
                                                    {options.map((option, index) => (
                                                        <option key={index} value={option.value}>{option.label}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div className="col-md-12">
                                                <label htmlFor="address" className="form-label">Address</label>
                                                <textarea className="form-control" id="address" name="address" rows="3" required></textarea>
                                            </div>

                                            <div className="col-md-6">
                                                <label htmlFor="payment" className="form-label">Payment Method</label>
                                                <select className="form-control" id="payment" name="payment">
                                                    <option value="" disabled>Payment Method</option>
                                                    <option value="Online">Online</option>
                                                    <option value="COD">COD</option>
                                                </select>
                                            </div>

                                            <div className="col-md-12 mt-5 text-center">
                                                {/* <button type="submit" className="btn1">Continue <i className="fa-solid fa-arrow-right"></i></button> */}
                                                <Link to="/proceed-to-checkout" className="btn1">Confirm Booking <i className="fa-solid fa-arrow-right"></i></Link>
                                            </div>
                                        </form>

                                    </div>

                                    <div id="lab" className={`tab-pane fade ${activeTab === 'menu1' ? 'show active' : ''}`}>
                                        <form className="row g-3">
                                            <div className="col-md-6">
                                                <label htmlFor="name" className="form-label">Name</label>
                                                <input type="text" className="form-control" id="name" name="name" required />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="mobile" className="form-label">Mobile No</label>
                                                <input type="tel" className="form-control" id="mobile" name="mobile" pattern="[0-9]{10}" required />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="email" className="form-label">Email ID</label>
                                                <input type="email" className="form-control" id="email" name="email" required />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="gender" className="form-label">Gender</label>
                                                <select className="form-control" id="gender" name="gender">
                                                    <option value="" disabled>Your Gender</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="age" className="form-label">Age</label>
                                                <input type="number" className="form-control" id="age" name="age" min="0" required />
                                            </div>
                                            <div className="col-md-12 text-center">
                                                <Link to="/proceed-to-checkout" className="btn1">Confirm Booking <i className="fa-solid fa-arrow-right"></i></Link>
                                            </div>
                                        </form>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </section>


        </>
    );
}

export default GetAddress;
