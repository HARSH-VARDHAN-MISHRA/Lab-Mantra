import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Login.css'
import sideBg from './sideBg.webp'

const ForgetPassword = () => {
    const [otpGenerated, setOtpGenerated] = useState(false);

    const handleOtpGenerated = (e) => {
        e.preventDefault();
        setOtpGenerated(true);
    }
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
                            <img src={sideBg} alt="laboratory Image" />
                        </div>
                        <div className="col-md-6 form-div text-center">
                            <div className="headings">
                                <h1>Reset Password</h1>
                                <p>Verify your account and reset your password</p>
                            </div>
                            <div className="form">
                                <form>
                                    <div className="input-field">
                                        <i className="fa-solid fa-envelope"></i>
                                        <input type="email" autoFocus placeholder="Enter Email" required />
                                    </div>

                                    {otpGenerated ? "" : (
                                        <button onClick={handleOtpGenerated} type='submit'>Get OTP</button>

                                    )}

                                </form>

                                {otpGenerated && (
                                    <form>
                                        <div className="input-field">
                                            <i className="fa-solid fa-lock"></i>
                                            <input type="password" placeholder="Enter Password" autoFocus required />
                                        </div>
                                        <button type='submit'>Confirm Password</button>
                                    </form>
                                )}

                                <div className="flex mt-5 width-80">
                                    <div className="resend-btn">
                                        {otpGenerated ? (
                                            <Link to="#"><i className="fa-solid fa-arrow-rotate-right"></i> Resend OTP</Link>
                                        ) : ""}
                                    </div>
                                    <div className="tagline">
                                        Create new account. <Link to="/sign-up">Sign-Up</Link>
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

export default ForgetPassword
