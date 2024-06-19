import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './UserProfilePage.css'


const UserProfilePage = () => {

    const [activeTab, setActiveTab] = useState('home');
    const [options, setOptions] = useState([]);


    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])

    const userProfile = {
        id: "drtfgyuh12",
        userImg: "https://avatars.githubusercontent.com/u/165280972?v=4",
        userName: "Harsh Vardhan Mishra",
        mobileNumber: 9876543210,
        EmailId: "harshfriend@gmail.com",
        Address: "Shop No.12, Sec 24, Pocket- 26, Rohini, New Delhi, Delhi 110085"
    }
    return (
        <>
            <section className="bread">
                <div className="container">
                    <nav aria-label="breadcrumb ">
                        <h2>Your Profile</h2>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Your Profile</li>
                        </ol>
                    </nav>
                </div>
            </section>

            <section className="profile-page my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4  text-center">
                            <div className="profile-img">
                                <img src={userProfile.userImg} alt="" />
                            </div>
                            <h4 >{userProfile.userName}</h4>
                            <p>+91-{userProfile.mobileNumber}</p>
                        </div>
                        <div className="col-md-8 booking">

                            <table className="table pro-tab">
                                <tbody>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <td className='text-uppercase'>{userProfile.userName}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Mobile Number</th>
                                        <td>+91-{userProfile.mobileNumber}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Email Id</th>
                                        <td>{userProfile.EmailId}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Address</th>
                                        <td>{userProfile.Address}</td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="row gri-2">
                                <div className="col-md-6 status">
                                    <h5>Status</h5>
                                    <p>Collection Collected</p>
                                </div>

                                <div className="col-md-6 down-repo">
                                    <h5>View Report</h5>
                                    <p>Collection Collected</p>
                                </div>
                                
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UserProfilePage