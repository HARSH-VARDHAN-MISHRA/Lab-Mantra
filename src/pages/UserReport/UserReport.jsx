import React from 'react'
import { Link } from 'react-router-dom'
import './UserReport.css'

const UserReport = () => {
  return (
    <>
        <section className="bread">
            <div className="container">
                <nav aria-label="breadcrumb ">
                    <h2>Check Report Status</h2>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Check Report Status</li>
                    </ol>
                </nav>
            </div>
        </section>


        <section className="check-report-status booking my-5">
            <div className="container">
                <div className="row bg-green">
                    <div className="col-md-6 mx-auto">
                        <form class="g-3">
                            <div>
                                <label htmlFor="name" class="form-label">Patient Id</label>
                                <input type="text" class="form-control" id="patientId" name="patientId" placeholder='Enter Your Patient Id :' required />
                            </div>
                            <div class="mt-3 text-center">
                                <button type="submit" className="btn1">Search Now</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default UserReport