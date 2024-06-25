import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CartPage.css';

const CartPage = () => {
    const [cart, setCart] = useState([]);
    const [coupon, setCoupon] = useState('');
    const [discount, setDiscount] = useState(0);

    useEffect(() => {
        const storedCart = JSON.parse(sessionStorage.getItem('cart')) || [];
        setCart(storedCart);
    }, []);

    const handleRemoveFromCart = (testId) => {
        const updatedCart = cart.filter(item => item._id !== testId);
        setCart(updatedCart);
        sessionStorage.setItem('cart', JSON.stringify(updatedCart));
    }

    const handleCouponApply = () => {
        if (coupon === 'SS10') {
            setDiscount(cart.reduce((acc, item) => acc + (item.actualPrice * 0.1), 0));
        } else {
            setDiscount(0);
        }
    }

    const subtotal = cart.reduce((acc, item) => acc + (item.discountPrice || item.actualPrice), 0);
    const homeCollectionCharges = subtotal >= 649 ? 0 : 150;
    const totalToPay = subtotal + homeCollectionCharges - discount;

    return (
        <>
            <section className="bread">
                <div className="container">
                    <nav aria-label="breadcrumb ">
                        <h2>Cart</h2>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Cart</li>
                        </ol>
                    </nav>
                </div>
            </section>

            <section className="cart-page py-5">
                <div className="container">

                    <div className="head-line">
                        <div className="flex">
                            <h2>TESTS IN YOUR CART ({cart.length})</h2>
                            <Link className='addTest' to={`/lab-tests`}>Add Tests</Link>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-7">
                            <div className="cart-items mb-4">
                                {cart.map(item => (
                                    <div key={item._id} className="cart-item d-flex justify-content-between align-items-start py-2">
                                        <div>
                                            <h5 className='test-name'>{item.testName}</h5>
                                            <div className="text-muted">₹{item.discountPrice || item.actualPrice}</div>
                                        </div>
                                        <button className="re-btn" onClick={() => handleRemoveFromCart(item._id)}><i className="fa-solid fa-trash-can"></i></button>
                                    </div>
                                ))}
                            </div>

                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-4">
                            <div className="cart-side">

                                <div className="coupon p-2 ">
                                    <div className="appy-cop">
                                        <input type="text" placeholder='ENTER COUPON CODE' />
                                        <button>Apply Coupon</button>
                                    </div>
                                    <p><small>Please Login To Apply</small></p>
                                </div>

                                <div className="totals">
                                    <div className="d-flex justify-content-between">
                                        <span>Subtotal</span>
                                        <span>₹{subtotal}</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span>Home Collection Charges</span>
                                        <span>₹{homeCollectionCharges}</span>
                                    </div>
                                    <div className="discount d-flex justify-content-between">
                                        <span>Discount</span>
                                        <span>₹{discount}</span>
                                    </div>
                                    <div className="pay d-flex justify-content-between font-weight-bold">
                                        <span>To Pay</span>
                                        <span>₹{totalToPay}</span>
                                    </div>
                                </div>
                                <Link className='link' to={``}>Continue</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default CartPage;
