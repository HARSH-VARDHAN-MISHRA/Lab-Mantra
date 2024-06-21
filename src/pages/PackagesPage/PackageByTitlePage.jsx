import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../../components/Loading/Loading'; // Import Loading component if available
import { useNavigate } from 'react-router-dom';

const PackageByTitlePage = () => {
    const { packageTitle } = useParams();
    const [packageTitles, setPackageTitles] = useState([]);
    const [loadingTitles, setLoadingTitles] = useState(true);
    const [packages, setPackages] = useState([]);
    const [loadingPackages, setLoadingPackages] = useState(true);
    const [testCategories, setTestCategories] = useState([]);
    const [loadingTestCategories, setLoadingTestCategories] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6);
    const [totalItems, setTotalItems] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate hook

    // Fetch package titles
    const fetchPackageTitles = async () => {
        try {
            const response = await axios.get('http://localhost:6842/api/v1/get-all-package-title');
            setPackageTitles(response.data.data);
        } catch (error) {
            console.error("Error While Fetching the package titles:", error);
        } finally {
            setLoadingTitles(false);
        }
    };

    // Fetch all packages
    const fetchPackages = async () => {
        try {
            const response = await axios.get('http://localhost:6842/api/v1/get-all-package');
            setPackages(response.data.data);
        } catch (error) {
            console.error("Error While Fetching the packages:", error);
        } finally {
            setLoadingPackages(false);
        }
    };

    // Fetch test categories
    const fetchTestCategories = async () => {
        try {
            const response = await axios.get('http://localhost:6842/api/v1/get-all-test-category');
            setTestCategories(response.data.data);
        } catch (error) {
            console.error("Error While Fetching the test categories:", error);
        } finally {
            setLoadingTestCategories(false);
        }
    };

    // Effect to fetch data on component mount
    useEffect(() => {
        fetchPackageTitles();
        fetchPackages();
        fetchTestCategories();
    }, []);

    // Filter packages by packageTitle
    const filteredPackages = packages.filter(pack =>
        pack.packageName.toLowerCase().includes(packageTitle.toLowerCase())
    );

    // Function to get package details by packageName
    const getPackageDetails = (packageName) => {
        return packages.find(pack => pack.packageName === packageName);
    };

    // Function to get total number of tests for a package
    const calculateTotalTests = (testCategoryNames) => {
        return testCategoryNames.reduce((total, testName) => {
            const testDetails = testCategories.find(category => category.testCategoryName === testName);
            return total + (testDetails ? testDetails.testNumber : 0);
        }, 0);
    };

    // Handle pagination
    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    // Function to generate pagination buttons
    const generatePagination = () => {
        const totalPages = Math.ceil(filteredPackages.length / itemsPerPage);
        const pageButtons = [];
        for (let i = 1; i <= totalPages; i++) {
            pageButtons.push(
                <button
                    key={i}
                    onClick={() => handlePageClick(i)}
                    className={i === currentPage ? 'active' : ''}
                >
                    {i}
                </button>
            );
        }
        return pageButtons;
    };

    // Calculate pagination details
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(startItem + itemsPerPage - 1, filteredPackages.length);
    const totalPages = Math.ceil(filteredPackages.length / itemsPerPage);

    // Handle search input change
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <>
            {loadingTitles || loadingPackages || loadingTestCategories ? (
                <Loading /> // Show loading indicator while data is fetching
            ) : (
                <>
                    <section className="bread">
                        <div className="container">
                            <nav aria-label="breadcrumb">
                                <h2>{packageTitle}</h2>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">{packageTitle}</li>
                                </ol>
                            </nav>
                        </div>
                    </section>

                    <section className="packages my-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="side-head flex">
                                        <div className="sideHead-cont">
                                            <h3 className='h3 head'>Packages</h3>
                                            <p>{`Showing ${startItem} - ${endItem} of ${filteredPackages.length}`}</p>
                                        </div>
                                        <div className="sideHead-cont">
                                            <input
                                                className='search-input'
                                                type="text"
                                                placeholder='Search Package'
                                                value={searchTerm}
                                                onChange={handleSearchChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid-3">
                                        {filteredPackages.length === 0 ? (
                                            <p>No packages found.</p>
                                        ) : (
                                            filteredPackages.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((packageItem, index) => {
                                                const totalTests = calculateTotalTests(packageItem.testCategoryName);

                                                return (
                                                    <div className="single-package" key={index}>
                                                        <div className="main-head">
                                                            <h4>{packageItem.packageName}</h4>
                                                            <div className="flex">
                                                                <small>({totalTests} Tests)</small>
                                                                <div className="price">
                                                                    <div className="current_price">{packageItem.currentPrice}</div>
                                                                    <small className="actual_price">{packageItem.actualPrice}</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="test-cate">
                                                            {packageItem.testCategoryName.map((test, ind) => {
                                                                const testDetails = testCategories.find(category => category.testCategoryName === test);
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
                                            })
                                        )}
                                    </div>

                                    <div className="pagination-controls">
                                        <button className='next-prev' onClick={() => handlePageClick(currentPage - 1)} disabled={currentPage === 1}>
                                            Previous
                                        </button>
                                        {generatePagination()}
                                        <button className='next-prev' onClick={() => handlePageClick(currentPage + 1)} disabled={currentPage === totalPages}>
                                            Next
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </>
    );
};

export default PackageByTitlePage;
