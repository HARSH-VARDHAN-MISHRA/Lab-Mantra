import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Packages.css';
import axios from 'axios';
import Head from '../Head/Head';
import Loading from '../Loading/Loading'; // Import the Loading component
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Packages = () => {
    const [packageTitles, setPackageTitles] = useState([]);
    const [loadingTitles, setLoadingTitles] = useState(true);
    const [packages, setPackages] = useState([]);
    const [loadingPackages, setLoadingPackages] = useState(true);
    const [testCategories, setTestCategories] = useState([]);
    const [loadingTestCategories, setLoadingTestCategories] = useState(true);
    const navigate = useNavigate(); // Initialize useNavigate hook

    const fetchPackageTitle = async () => {
        try {
            const response = await axios.get('http://localhost:6842/api/v1/get-all-package-title');
            setPackageTitles(response.data.data);
        } catch (error) {
            console.error("Error While Fetching the package titles:", error);
        } finally {
            setLoadingTitles(false);
        }
    }

    const fetchPackages = async () => {
        try {
            const response = await axios.get('http://localhost:6842/api/v1/get-all-package');
            setPackages(response.data.data);
        } catch (error) {
            console.error("Error While Fetching the packages:", error);
        } finally {
            setLoadingPackages(false);
        }
    }

    const fetchTestCategories = async () => {
        try {
            const response = await axios.get('http://localhost:6842/api/v1/get-all-test-category');
            setTestCategories(response.data.data);
        } catch (error) {
            console.error("Error While Fetching the test categories:", error);
        } finally {
            setLoadingTestCategories(false);
        }
    }

    useEffect(() => {
        fetchPackageTitle();
        fetchPackages();
        fetchTestCategories();
    }, []);

    const getPackageDetails = (packageName) => {
        return packages.find(pack => pack.packageName === packageName);
    }

    const getTestCategoryDetails = (testName) => {
        return testCategories.find(category => category.testCategoryName === testName);
    }

    const calculateTotalTests = (testCategoryNames) => {
        return testCategoryNames.reduce((total, testName) => {
            const testDetails = getTestCategoryDetails(testName);
            return total + (testDetails ? testDetails.testNumber : 0);
        }, 0);
    }

    const handleViewMore = (categoryTitle) => {
        // navigate(`packages/${categoryTitle.replace(/\s+/g, '-')}`); // Use navigate instead of history.push
        navigate(`packages/${categoryTitle}`); // Use navigate instead of history.push
    }

    return (
        <>
            {loadingTitles || loadingPackages || loadingTestCategories ? (
                <Loading /> // Show loading indicator
            ) : (
                packageTitles && packageTitles.map((item, index) => (
                    <div key={index}>
                        <Head title={item.packageTitle} />

                        <section className="packages">
                            <div className="container">
                                <div className="grid-3">
                                    {item.packages.slice(0, 6).map((pack, idx) => {
                                        const packageDetails = getPackageDetails(pack);
                                        if (!packageDetails) return null;
                                        
                                        const totalTests = calculateTotalTests(packageDetails.testCategoryName);
                                        
                                        return (
                                            <div className="single-package" key={idx}>
                                                <div className="main-head">
                                                    <h4>{packageDetails.packageName}</h4>
                                                    <div className="flex">
                                                        <small>({totalTests} Tests)</small>
                                                        <div className="price">
                                                            <div className="current_price">{packageDetails.currentPrice}</div>
                                                            <small className="actual_price">{packageDetails.actualPrice}</small>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="test-cate">
                                                    {packageDetails.testCategoryName.map((test, ind) => {
                                                        const testDetails = getTestCategoryDetails(test);
                                                        return (
                                                            <div className="single" key={ind}>
                                                                <div className="naam">{testDetails.testCategoryName} ({testDetails.testNumber})</div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                                <div className="content">
                                                    <div className="book-btn">
                                                        <Link to="/cart">Book Now <i className="fa-solid fa-flask-vial"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                {item.packages.length > 6 && (
                                    <>
                                        <div className="view-more-container">
                                            <button className='viewMoreBtn' onClick={() => handleViewMore(item.packageTitle)}>View More</button>
                                        </div>
                                    </>
                                )}
                            </div>
                        </section>
                    </div>
                ))
            )}
        </>
    )
}

export default Packages;
