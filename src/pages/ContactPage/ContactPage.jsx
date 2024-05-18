import React from 'react'
import { Link } from 'react-router-dom'
import Contact from '../../components/Contact/Contact'

const ContactPage = () => {
    return (
        <>
            <section className="bread">
                <div className="container">
                    <nav aria-label="breadcrumb ">
                        <h2>Contact Us</h2>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Contact Us</li>
                        </ol>
                    </nav>
                </div>
            </section>
            <Contact />
        </>
    )
}

export default ContactPage