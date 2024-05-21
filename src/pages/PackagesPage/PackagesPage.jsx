import React, { useEffect } from 'react'
import Packages from '../../components/Packages/Packages'
import { Link } from 'react-router-dom'
import Head from '../../components/Head/Head'

const PackagesPage = () => {
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
                    <h2>Our Packages</h2>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Our Packages</li>
                    </ol>
                </nav>
            </div>
        </section>

        <Head title="Latest Packages" />
        <Packages/>

        <Head title="Women Packages" />
        <Packages/>

        <Head title="Men Packages" />
        <Packages/>
    </>
  )
}

export default PackagesPage