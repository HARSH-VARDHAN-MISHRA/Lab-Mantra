import React from 'react'
import { Link } from 'react-router-dom'
import './Packages.css'

const Packages = () => {
    const packageList = [
        {
            "packageName": "Fit India Full Body Checkup With Vitamin Screening with Free HsCRP",
            "testQuantity": 95,
            "currentPrice": 1599,
            "actualPrice": 7920,
            "testCategories": [
                {
                    "testName": "CBC",
                    "testNumber": 26
                },
                {
                    "testName": "Kidney",
                    "testNumber": 11
                },
                {
                    "testName": "Hs-CRP",
                    "testNumber": 1
                },
                {
                    "testName": "Liver",
                    "testNumber": 12
                },
                {
                    "testName": "Vitamin B12",
                    "testNumber": 1
                },
                {
                    "testName": "ESR",
                    "testNumber": 1
                },
                {
                    "testName": "Urine Analysis",
                    "testNumber": 23
                },
                {
                    "testName": "Lipid",
                    "testNumber": 9
                },
                {
                    "testName": "Vitamin D",
                    "testNumber": 1
                }
            ]
        },
        {
            "packageName": "Smart Plus Full Body Checkup with Vitamin Screening",
            "testQuantity": 91,
            "currentPrice": 1599,
            "actualPrice": 7320,
            "testCategories": [
                {
                    "testName": "CBC",
                    "testNumber": 26
                },
                {
                    "testName": "Kidney",
                    "testNumber": 11
                },
                {
                    "testName": "Liver",
                    "testNumber": 12
                },
                {
                    "testName": "Lipid",
                    "testNumber": 9
                },
                {
                    "testName": "Vitamin D",
                    "testNumber": 1
                },
                {
                    "testName": "ESR",
                    "testNumber": 1
                },
                {
                    "testName": "Urine Analysis",
                    "testNumber": 23
                },
                {
                    "testName": "Thyroid",
                    "testNumber": 3
                },
                {
                    "testName": "Vitamin B12",
                    "testNumber": 1
                }
            ]
        },
        {
            "packageName": "Comprehensive Health Checkup with Free Vitamin B12 & D",
            "testQuantity": 85,
            "currentPrice": 1399,
            "actualPrice": 6999,
            "testCategories": [
                {
                    "testName": "CBC",
                    "testNumber": 26
                },
                {
                    "testName": "Liver",
                    "testNumber": 12
                },
                {
                    "testName": "Kidney",
                    "testNumber": 11
                },
                {
                    "testName": "Urine Analysis",
                    "testNumber": 23
                },
                {
                    "testName": "Lipid",
                    "testNumber": 9
                },
                {
                    "testName": "Vitamin B12",
                    "testNumber": 1
                },
                {
                    "testName": "Vitamin D",
                    "testNumber": 1
                },
                {
                    "testName": "ESR",
                    "testNumber": 1
                },
                {
                    "testName": "Thyroid",
                    "testNumber": 1
                }
            ]
        },
        {
            "packageName": "Advanced Full Body Checkup with Free Iron Profile",
            "testQuantity": 102,
            "currentPrice": 1799,
            "actualPrice": 8499,
            "testCategories": [
                {
                    "testName": "CBC",
                    "testNumber": 26
                },
                {
                    "testName": "Liver",
                    "testNumber": 12
                },
                {
                    "testName": "Kidney",
                    "testNumber": 11
                },
                {
                    "testName": "Urine Analysis",
                    "testNumber": 23
                },
                {
                    "testName": "Lipid",
                    "testNumber": 9
                },
                {
                    "testName": "Vitamin D",
                    "testNumber": 1
                },
                {
                    "testName": "Iron Profile",
                    "testNumber": 5
                },
                {
                    "testName": "Thyroid",
                    "testNumber": 1
                },
                {
                    "testName": "ESR",
                    "testNumber": 1
                },
                {
                    "testName": "Vitamin B12",
                    "testNumber": 1
                },
                {
                    "testName": "Diabetes",
                    "testNumber": 12
                }
            ]
        },
        {
            "packageName": "Premium Full Body Checkup with Vitamin Profile",
            "testQuantity": 110,
            "currentPrice": 1999,
            "actualPrice": 8999,
            "testCategories": [
                {
                    "testName": "CBC",
                    "testNumber": 26
                },
                {
                    "testName": "Kidney",
                    "testNumber": 11
                },
                {
                    "testName": "Liver",
                    "testNumber": 12
                },
                {
                    "testName": "Lipid",
                    "testNumber": 9
                },
                {
                    "testName": "Vitamin D",
                    "testNumber": 1
                },
                {
                    "testName": "Vitamin B12",
                    "testNumber": 1
                },
                {
                    "testName": "ESR",
                    "testNumber": 1
                },
                {
                    "testName": "Urine Analysis",
                    "testNumber": 23
                },
                {
                    "testName": "Thyroid",
                    "testNumber": 3
                },
                {
                    "testName": "Diabetes",
                    "testNumber": 12
                },
                {
                    "testName": "Iron Profile",
                    "testNumber": 5
                },
                {
                    "testName": "Calcium",
                    "testNumber": 1
                },
                {
                    "testName": "Magnesium",
                    "testNumber": 1
                },
                {
                    "testName": "Phosphorus",
                    "testNumber": 1
                },
                {
                    "testName": "Electrolytes",
                    "testNumber": 3
                }
            ]
        }
    ]

    return (
        <>
            <section className="packages my-5">
                <div className="container">
                    <div className="grid-3">
                        {packageList && packageList.map((item, index) => (
                            <div className="single-package" key={index}>
                                <div className="main-head">
                                    <h4>{item.packageName}</h4>
                                    <div className="flex">
                                        <small>({item.testQuantity} Tests)</small>
                                        <div className="price">
                                            <div className="current_price">{item.currentPrice}</div>
                                            <small className="actual_price">{item.actualPrice}</small>
                                        </div>

                                    </div>
                                </div>
                                <div className="test-cate">
                                    {item.testCategories && item.testCategories.map((tests,ind) => (
                                        <div className="single" key={ind}>
                                            <div className="naam">{tests.testName} <span>({tests.testNumber})</span></div>
                                        </div>
                                    ))}
                                </div>
                                <div className="content">
                                    {/* <p> <i class="fa-solid fa-circle-check"></i> Free Home Collection</p> */}
                                    <div className="book-btn">
                                        <Link to="/cart">Book Now <i class="fa-solid fa-flask-vial"></i></Link>
                                    </div>

                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Packages