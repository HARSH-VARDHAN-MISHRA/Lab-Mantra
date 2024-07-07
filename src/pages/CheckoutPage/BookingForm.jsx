import React, {  useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './BookingForm.css';

const BookingForm = () => {
    const navigate = useNavigate()
    
    const [bookingType, setBookingType] = useState('homeCollection');
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        optionalPhone: '',
        email: '',
        date: '',
        age: '',
        gender: '',
        pinCode: '',
        city: '',
        address: '',
        labName: '',
        labAddress: '',
        appointTime: '',
        bookingType: 'homeCollection' // To track the current booking type
    });

    const generateTimeOptions = () => {
        const times = [];
        for (let hour = 9; hour < 20; hour++) {
            const nextHour = hour + 1;
            const period = hour < 12 ? 'AM' : 'PM';
            const nextPeriod = nextHour < 12 ? 'AM' : 'PM';
            const displayHour = hour <= 12 ? hour : hour - 12;
            const displayNextHour = nextHour <= 12 ? nextHour : nextHour - 12;
            times.push(`${displayHour}:00 ${period} - ${displayNextHour}:00 ${nextPeriod}`);
        }
        return times;
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Save formData to session storage
        sessionStorage.setItem('bookingFormData', JSON.stringify(formData));

        navigate('/cart/booking-summary')
    };

    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    },[])

    return (
        <>
            <section className="bread">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <h2>Add Booking Details</h2>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item" aria-current="page"><Link to="/cart">Cart</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Add Booking Details</li>
                        </ol>
                    </nav>
                </div>
            </section>

            {/* === Booking Form === */}
            <section className="booking-form">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <div className="form-group">
                                <label htmlFor="bookingType"><h2>Select Booking Type:</h2></label>
                                <select
                                    id="bookingType"
                                    className="form-control"
                                    value={bookingType}
                                    onChange={(e) => {
                                        setBookingType(e.target.value);
                                        setFormData({
                                            ...formData,
                                            bookingType: e.target.value
                                        });
                                    }}
                                >
                                    <option value="homeCollection">Home Collection</option>
                                    <option value="labAppointment">Appointment in the Lab</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="row forms">
                        <div className="col-md-8 mx-auto">
                            {bookingType === 'homeCollection' && (
                                <form className="home-collection-form mt-4" onSubmit={handleSubmit}>
                                    <h3 className='h2 mb-3'>Home Collection Details</h3>
                                    <div className="row g-3">
                                        <h4>Personal Details</h4>
                                        <div className="col-md-6">
                                            <label htmlFor="fullName">Full Name:</label>
                                            <input
                                                type="text"
                                                id="fullName"
                                                className="form-control"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="phone">Phone Number:</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                className="form-control"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="optionalPhone">Optional Second Number:</label>
                                            <input
                                                type="tel"
                                                id="optionalPhone"
                                                className="form-control"
                                                value={formData.optionalPhone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="email">Email ID (optional):</label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="form-control"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="date">Preferred Date:</label>
                                            <input
                                                type="date"
                                                id="date"
                                                className="form-control"
                                                value={formData.date}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="age">Age:</label>
                                            <input
                                                type="number"
                                                id="age"
                                                className="form-control"
                                                value={formData.age}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="gender">Gender:</label>
                                            <select
                                                id="gender"
                                                className="form-control"
                                                value={formData.gender}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Select Gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="pinCode">Pin Code:</label>
                                            <input
                                                type="number"
                                                id="pinCode"
                                                className="form-control"
                                                value={formData.pinCode}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="city">City:</label>
                                            <select
                                                id="city"
                                                className="form-control"
                                                value={formData.city}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Select City</option>
                                                <option value="Mumbai">Mumbai</option>
                                                <option value="Delhi">Delhi</option>
                                                <option value="Bangalore">Bangalore</option>
                                                {/* Add more cities here */}
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="address">Address:</label>
                                            <input
                                                type="text"
                                                id="address"
                                                className="form-control"
                                                value={formData.address}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <h4>Laboratory Details</h4>
                                        <div className="col-md-12">
                                            <label htmlFor="labName">Laboratory Name:</label>
                                            <input
                                                type="text"
                                                id="labName"
                                                className="form-control"
                                                value={formData.labName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="labAddress">Laboratory Information:</label>
                                            <textarea
                                                id="labAddress"
                                                className="form-control"
                                                rows="3"
                                                value={formData.labAddress}
                                                onChange={handleChange}
                                                required
                                            ></textarea>
                                        </div>
                                        <div className="col-md-12">
                                            <button type="submit" className="btn btn-primary mt-3">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            )}

                            {bookingType === 'labAppointment' && (
                                <form className="lab-appointment-form mt-4" onSubmit={handleSubmit}>
                                    <h3 className='h2 mb-3'>Lab Appointment Details</h3>
                                    <div className="row g-3">
                                        <h4>Personal Details</h4>
                                        <div className="col-md-6">
                                            <label htmlFor="fullName">Full Name:</label>
                                            <input
                                                type="text"
                                                id="fullName"
                                                className="form-control"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="phone">Phone Number:</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                className="form-control"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="optionalPhone">Optional Second Number:</label>
                                            <input
                                                type="tel"
                                                id="optionalPhone"
                                                className="form-control"
                                                value={formData.optionalPhone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="email">Email ID (optional):</label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="form-control"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="age">Age:</label>
                                            <input
                                                type="number"
                                                id="age"
                                                className="form-control"
                                                value={formData.age}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="gender">Gender:</label>
                                            <select
                                                id="gender"
                                                className="form-control"
                                                value={formData.gender}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Select Gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="pinCode">Pin Code:</label>
                                            <input
                                                type="number"
                                                id="pinCode"
                                                className="form-control"
                                                value={formData.pinCode}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="city">City:</label>
                                            <input
                                                type="text"
                                                id="city"
                                                className="form-control"
                                                value={formData.city}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="address">Address:</label>
                                            <input
                                                type="text"
                                                id="address"
                                                className="form-control"
                                                value={formData.address}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <h4>Laboratory Details</h4>
                                        <div className="col-md-12">
                                            <label htmlFor="labName">Laboratory Name:</label>
                                            <input
                                                type="text"
                                                id="labName"
                                                className="form-control"
                                                value={formData.labName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="labAddress">Laboratory Information:</label>
                                            <textarea
                                                id="labAddress"
                                                className="form-control"
                                                rows="3"
                                                value={formData.labAddress}
                                                onChange={handleChange}
                                                required
                                            ></textarea>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="appointTime">Appointment Timing:</label>
                                            <select
                                                id="appointTime"
                                                className="form-control"
                                                value={formData.appointTime}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Select Time</option>
                                                {generateTimeOptions().map((time, index) => (
                                                    <option key={index} value={time}>{time}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="date">Preferred Date:</label>
                                            <input
                                                type="date"
                                                id="date"
                                                className="form-control"
                                                value={formData.date}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            <button type="submit" className="btn btn-primary mt-3">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BookingForm;
