import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllTest = () => {
    const [tests, setTests] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(12);
    const [totalItems, setTotalItems] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchTests = async (page) => {
        try {
            const res = await axios.get(`http://localhost:6842/api/v1/get-all-test?page=${page}&limit=${itemsPerPage}`);
            setTests(res.data.data);
            setTotalItems(res.data.data.length || 0);
        } catch (error) {
            console.error("Something went wrong while fetching tests: ", error);
        }
    }

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    }

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    }

    const handlePageClick = (page) => {
        setCurrentPage(page);
    }

    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(startItem + itemsPerPage - 1, totalItems);
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        fetchTests(currentPage);
    }, [currentPage])

    // Filter tests based on search term
    const filteredTests = tests.filter(item =>
        item.testName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Slice the filtered tests array to display only the tests for the current page
    const displayedTests = filteredTests.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    // Function to generate the pagination buttons
    const generatePagination = () => {
        const pageButtons = [];
        const maxVisiblePages = 5; // Maximum number of visible pages in the pagination

        if (totalPages <= maxVisiblePages) {
            // If total pages are less than or equal to maxVisiblePages, show all pages
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
        } else {
            // Calculate the start and end of the pagination range
            let startPage = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
            let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

            // Adjust startPage and endPage if nearing the edges
            if (endPage - startPage + 1 < maxVisiblePages) {
                startPage = Math.max(endPage - maxVisiblePages + 1, 1);
            }

            // Add ellipsis and first/last page buttons if necessary
            if (startPage > 1) {
                pageButtons.push(
                    <button key={1} onClick={() => handlePageClick(1)}>
                        1
                    </button>
                );
                if (startPage > 2) {
                    pageButtons.push(<span key="ellipsis1">...</span>);
                }
            }

            // Add the visible page buttons
            for (let i = startPage; i <= endPage; i++) {
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

            // Add ellipsis and last page button if necessary
            if (endPage < totalPages) {
                if (endPage < totalPages - 1) {
                    pageButtons.push(<span key="ellipsis2">...</span>);
                }
                pageButtons.push(
                    <button key={totalPages} onClick={() => handlePageClick(totalPages)}>
                        {totalPages}
                    </button>
                );
            }
        }

        return pageButtons;
    };

    // Function to handle search input change
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    }

    return (
        <>
            <section className="bread">
                <div className="container">
                    <nav aria-label="breadcrumb ">
                        <h2>Lab Tests</h2>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Lab Tests</li>
                        </ol>
                    </nav>
                </div>
            </section>

            <section className="tests my-5">
                <div className="container">
                    <div className="row">

                        <div className="col-md-12">
                            <div className="side-head flex">
                                <div className="sideHead-cont">
                                    <h3 className='h3 head'>Lab Tests</h3>
                                    <p>{`Showing ${startItem} - ${endItem} of ${totalItems}`}</p>
                                </div>
                                <div className="sideHead-cont">
                                    <input
                                        className='search-input'
                                        type="text"
                                        placeholder='Search Your Test'
                                        value={searchTerm}
                                        onChange={handleSearchChange}
                                    />
                                </div>
                            </div>

                            <div className="grid-3">
                                {displayedTests.map((item, index) => (
                                    <div className="single-test" key={index}>
                                        <h4>{item.testName}</h4>
                                        <div className="flex">
                                            <div className="price">
                                                {item.discountPrice ? (
                                                    <>
                                                        <span className="discount_price">₹{item.discountPrice}</span>
                                                        <span className="actual_price">₹{item.actualPrice}</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <span className="discount_price">₹{item.actualPrice}</span>
                                                    </>
                                                )}
                                            </div>
                                            <Link to="/cart" className="bookBtn">
                                                BOOK
                                            </Link>
                                        </div>
                                        {item.discountPercentage ? (
                                            <div className="abso">
                                                <span>{item.discountPercentage}% Off</span>
                                            </div>
                                        ) : null}
                                    </div>
                                ))}
                            </div>

                            <div className="pagination-controls">
                                <button className='next-prev' onClick={handlePreviousPage} disabled={currentPage === 1}>
                                    Previous
                                </button>
                                {generatePagination()}
                                <button className='next-prev' onClick={handleNextPage} disabled={currentPage === totalPages}>
                                    Next
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default AllTest;
