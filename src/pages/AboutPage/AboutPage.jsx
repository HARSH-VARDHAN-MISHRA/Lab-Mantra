import React from 'react'
import Service from '../../components/service/Service'
import { Link } from 'react-router-dom'
import About from '../../components/About/About'

const AboutPage = () => {
  return (
    <>
      <section className="bread">
        <div className="container">
          <nav aria-label="breadcrumb ">
            <h2>About Us</h2>
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><Link to="/">Home</Link></li>
              <li class="breadcrumb-item active" aria-current="page">About Us</li>
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