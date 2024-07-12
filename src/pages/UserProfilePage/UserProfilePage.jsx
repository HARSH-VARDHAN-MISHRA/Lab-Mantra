import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './UserProfilePage.css';
import { toast } from 'react-toastify';
import MetaTag from '../../components/Meta/MetaTag';


const UserProfilePage = () => {
    const [activeTab, setActiveTab] = useState('profile');
    const [userData, setUserData] = useState(null); // State to hold user data

    useEffect(() => {
        // Fetch user data from localStorage
        const user = JSON.parse(localStorage.getItem('labMantraUser'));
        if (user) {
            setUserData(user);
        }

        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }, []); // Empty dependency array ensures this runs only once on component mount

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleLogout = () => {
        
        localStorage.removeItem('labMantraToken');
        localStorage.removeItem('labMantraUser');
        toast.success('Logged out successfully');

        window.location.href = '/login'; 
    };

    return (
        <>
            <MetaTag
                title="Your Profile - Lab Mantra"
                description="View and manage your Lab Mantra user profile. Check your bookings, update personal information, and logout securely."
                keyword="Lab Mantra, user profile, bookings, logout"
            />
            <section className="bread" >
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <h2>Your Profile</h2>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Your Profile</li>
                        </ol>
                    </nav>
                </div>
            </section>

            <section className="profile-tabs">
                <div className="container">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
                                onClick={() => handleTabChange('profile')}
                            >
                                My Profile
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === 'bookings' ? 'active' : ''}`}
                                onClick={() => handleTabChange('bookings')}
                            >
                                My Bookings
                            </button>
                        </li>
                        {/* <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === 'reports' ? 'active' : ''}`}
                                onClick={() => handleTabChange('reports')}
                            >
                                My Reports
                            </button>
                        </li> */}
                    </ul>

                    <div className="tab-content">
                        {activeTab === 'profile' && userData && (
                            <div className="tab-pane active">
                                <h3>Welcome {userData.name} !</h3>
                                <p>Name: {userData.name}</p>
                                <p>Email: {userData.email}</p>
                                <p>Phone Number: {userData.phoneNumber}</p>
                                <p>Joined: {new Date(userData.createdAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

                                <button className="btn btn-danger" onClick={handleLogout}>Logout</button>

                            </div>
                        )}
                        {activeTab === 'bookings' && (
                            <div className="tab-pane active">
                                <h3>My Booking History</h3>
                                {/* Placeholder for booking history */}
                                <p>No bookings yet.</p>
                            </div>
                        )}
                        {activeTab === 'reports' && (
                            <div className="tab-pane active">
                                <h3>My Reports</h3>
                                {/* Placeholder for reports */}
                                <p>No reports yet.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default UserProfilePage;
