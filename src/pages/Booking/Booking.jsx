import React, { useEffect, useState } from 'react'
import './Booking.css'
import { Link } from 'react-router-dom';

const Booking = () => {
    const [activeTab, setActiveTab] = useState('home');
    const [options, setOptions] = useState([]);


    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    const generateOptions = () => {
        const newOptions = [];
        for (let hour = 10; hour < 19; hour++) {
            for (let minute = 0; minute < 60; minute += 30) {
                let formattedHour = hour < 12 ? hour : hour - 12;
                formattedHour = formattedHour === 0 ? 12 : formattedHour;
                const timeString = `${formattedHour < 10 ? '0' : ''}${formattedHour}:${minute === 0 ? '00' : '30'}`;
                newOptions.push({ value: timeString, label: `${timeString} ${hour < 12 ? 'AM' : 'PM'}` });
            }
        }
        setOptions(newOptions);
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        generateOptions();
    }, []);

    return (
        <>
            <section className="bread">
                <div className="container">
                <nav aria-label="breadcrumb ">
                    <h2>Cart</h2>
                    <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Cart</li>
                    </ol>
                </nav>
                </div>
            </section>

            <section className="booking my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mx-auto">
                            <div className="row">
                                <div className="col-12">
                                    <div className="top-heading text-center">
                                        <h2>Lab Mantra</h2>
                                        <p>Shop No.12, Sec 24, Pocket- 26, Rohini, New Delhi, Delhi 110085</p>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">Test Name</th>
                                                <th scope="col">MRP</th>
                                                <th scope="col">Discount</th>
                                                <th scope="col">Payable</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Redcliffe Fit India Full Body</td>
                                                <td>&#8377; 7920</td>
                                                <td>10%</td>
                                                <td>&#8377; 1599</td>
                                                <td><div className="delete"><i class="fa-solid fa-trash-arrow-up"></i></div></td>
                                            </tr>
                                            <tr>
                                                <td>Home Collection Charges</td>
                                                <td></td>
                                                <td></td>
                                                <td>&#8377; 0</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td><strong>Total Payable</strong></td>
                                                <td></td>
                                                <td></td>
                                                <td><strong>&#8377; 7290</strong></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="col-12 text-center moreTest">
                                    <Link to="/our-packages" >Book More Tests  <i class="fa-solid fa-reply"></i> </Link>
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

                                                <form class="row g-3">
                                                    <div class="col-md-6">
                                                        <label htmlFor="name" class="form-label">Name</label>
                                                        <input type="text" class="form-control" id="name" name="name" required />
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label htmlFor="mobile" class="form-label">Mobile No</label>
                                                        <input type="tel" class="form-control" id="mobile" name="mobile" pattern="[0-9]{10}" required />
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label htmlFor="email" class="form-label">Email ID</label>
                                                        <input type="email" class="form-control" id="email" name="email" required />
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label htmlFor="age" class="form-label">Age</label>
                                                        <input type="number" class="form-control" id="age" name="age" min="0" required />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label htmlFor="gender" className="form-label">Gender</label>
                                                        <select className="form-control" id="gender" name="gender">
                                                            <option value="" disabled>Your Gender</option>
                                                            <option value="Male">Male</option>
                                                            <option value="Female">Female</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label htmlFor="date" class="form-label">Date</label>
                                                        <input type="date" class="form-control" id="date" name="date" required />
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
                                                    <div class="col-md-6">
                                                        <label htmlFor="prescription" class="form-label">Upload Prescription <span>(If available)</span></label>
                                                        <input type="file" class="form-control" id="prescription" name="prescription" />
                                                    </div>
                                                    <div class="col-md-12">
                                                        <label htmlFor="address" class="form-label">Address</label>
                                                        <textarea class="form-control" id="address" name="address" rows="3" required></textarea>
                                                    </div>
                                                    <div class="col-md-12 mt-5 text-center">
                                                        {/* <button type="submit" className="btn1">Continue <i class="fa-solid fa-arrow-right"></i></button> */}
                                                        <Link to="/proceed-to-checkout" className="btn1">Proceed To Checkout <i class="fa-solid fa-arrow-right"></i></Link>
                                                    </div>
                                                </form>

                                            </div>

                                            <div id="lab" className={`tab-pane fade ${activeTab === 'menu1' ? 'show active' : ''}`}>
                                                <form class="row g-3">
                                                    <div class="col-md-6">
                                                        <label htmlFor="name" class="form-label">Name</label>
                                                        <input type="text" class="form-control" id="name" name="name" required />
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label htmlFor="mobile" class="form-label">Mobile No</label>
                                                        <input type="tel" class="form-control" id="mobile" name="mobile" pattern="[0-9]{10}" required />
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label htmlFor="email" class="form-label">Email ID</label>
                                                        <input type="email" class="form-control" id="email" name="email" required />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label htmlFor="gender" className="form-label">Gender</label>
                                                        <select className="form-control" id="gender" name="gender">
                                                            <option value="" disabled>Your Gender</option>
                                                            <option value="Male">Male</option>
                                                            <option value="Female">Female</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label htmlFor="age" class="form-label">Age</label>
                                                        <input type="number" class="form-control" id="age" name="age" min="0" required />
                                                    </div>
                                                    <div class="col-md-12 text-center">
                                                        <Link to="/proceed-to-checkout"  className="btn1">Proceed To Checkout <i class="fa-solid fa-arrow-right"></i></Link>
                                                    </div>
                                                </form>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Booking