import React, { useEffect } from 'react'
import Service from '../../components/service/Service'
import { Link } from 'react-router-dom'
import About from '../../components/About/About'

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <>
      <section className="bread">
        <div className="container">
          <nav aria-label="breadcrumb ">
            <h2>About Us</h2>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">About Us</li>
            </ol>
          </nav>
        </div>
      </section>
      <About/>
      <Service />

    </>
  )
}

export default AboutPage