import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Login.css'
import sideBg from './sideBg.webp'

const SignIn = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
  return (
    <>
        <section className="my-3 login-page">
            <div className="container">
                <div className="row login">
                    
                    <div className="col-md-6 form-div text-center">
                        <div className="headings">
                            <h1>Create Your Account</h1>
                            <p>Create your account with your personal Details</p>
                        </div>
                        <div className="form">
                            <form>
                                <div className="input-field">
                                    <i class="fa-solid fa-user-lock"></i>
                                    <input type="text" autoFocus placeholder="Enter Name" required />
                                </div>
                                <div className="input-field">
                                    <i class="fa-solid fa-envelope"></i>
                                    <input type="email" placeholder="Enter Email" required />
                                </div>
                                <div className="input-field">
                                    <i class="fa-solid fa-phone-volume"></i>
                                    <input type="tel" placeholder="Enter Mobile Number" required />
                                </div>
                                <div className="input-field">
                                    <i class="fa-solid fa-lock"></i>
                                    <input type="password" placeholder="Enter Password" required />
                                </div>

                                <div className="">
                                    <Link to="/login">Already Have a Account?</Link>
                                    <div></div>
                                </div>
                                
                                <button type='submit'>Sign Up</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6 d-none d-md-block">
                        <img src={sideBg} alt="laboratry Image" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default SignIn