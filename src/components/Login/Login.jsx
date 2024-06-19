import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Login.css'
import sideBg from './sideBg.webp'

const Login = () => {
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
                    <div className="col-md-6 d-none d-md-block">
                        <img src={sideBg} alt="laboratry Image" />
                    </div>
                    <div className="col-md-6 form-div text-center">
                        <div className="headings">
                            <h1>Welcome Back !</h1>
                            <p>Please login with your personal Details</p>
                        </div>
                        <div className="form">
                            <form>
                                <div className="input-field">
                                    <i className="fa-solid fa-envelope"></i>
                                    <input type="email" autoFocus placeholder="Enter Email" required />
                                </div>
                                <div className="input-field">
                                    <i className="fa-solid fa-lock"></i>
                                    <input type="password" placeholder="Enter Password" required />
                                </div>

                                <div className="">
                                    <Link to="/login/forget-password">Forget Password?</Link>
                                    <div></div>
                                </div>
                                
                                <button type='submit'>Login</button>
                            </form>

                            <div className="tagline">
                                Don't have an Account? <Link to="/sign-up">Sign-Up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Login