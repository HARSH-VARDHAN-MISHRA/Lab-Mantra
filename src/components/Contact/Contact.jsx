import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <>
            <section className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h4>Contact Us</h4>
                            <p>For any issues related to service or sample collection please reach us here.</p>

                        </div>
                        <div className="col-12">
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    {/* <label for="form1" class="form-label">First Name</label> */}
                                    <input type="text" class="form-control" required id="form1" placeholder="First Name" />
                                </div>
                                <div class="col-md-6 mb-3">
                                    {/* <label for="form2" class="form-label">Last Name</label> */}
                                    <input type="text" class="form-control" required id="form2" placeholder="Last Name" />
                                </div>
                                <div class="col-md-6 mb-3">
                                    {/* <label for="form3" class="form-label">Phone Number</label> */}
                                    <input type="number" class="form-control" required id="form3" placeholder="Phone Number" />
                                </div>
                                <div class="col-md-6 mb-3">
                                    {/* <label for="form4" class="form-label">Email Id</label> */}
                                    <input type="email" class="form-control" required id="form4" placeholder="Email Id" />
                                </div>
                                <div class="col-12 mb-3">
                                    {/* <label for="exampleFormControlTextarea1" class="form-label">Address</label> */}
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Address"></textarea>
                                </div>

                                <div className="col-12 text-center">
                                    <button type="submit" class="form-control">Send Message</button>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.623489114058!2d77.0861790749604!3d28.730796079612652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d07440faeeedd%3A0x7fd3b4b030819bdf!2sDigi%20India%20Solutions!5e0!3m2!1sen!2sin!4v1716030464228!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact