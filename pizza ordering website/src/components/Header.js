import React, { useEffect } from 'react';
import { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faHome, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import SearchResult from '../pages/SearchResult';
import { useHistory } from 'react-router-dom';

// import { useEffect } from 'react';

// Add icons to the library
// library.add(faSearch, faHome, faBars);




export default function Header(props) { 

    // const history = useHistory()

    // function handleClick() {
    //     history.push('/searchResult');
    // }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary mx-3">
            <div className="container-fluid">
                <a className="navbar-brand text-danger" href="#"><h2>pizzaJunction</h2></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon fs-1 mx-3"><FontAwesomeIcon icon={faBars} style={{ color: "white" }} /></span>
                </button>

                <div className="collapse navbar-collapse  justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav text-center">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        <Link className="nav-link" to="/Pizza">Pizza</Link>
                        <Link className="nav-link" to="/about">About Us</Link>
                        <Link className="nav-link " to="/contact">Contact</Link>
                    </div>

                    {props.isSearchBar && 
                            <div className='search-icon text-center me-5'>
                                <Link className="nav-link " to="/Pizza"><FontAwesomeIcon icon={faSearch} /></Link>
                            </div> }
                </div>
            </div>
        </nav>
    )
}









{/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
<div className="container-fluid">
    <Link classNameName="navbar-brand text-danger" href="#">pizzaJunction</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"><FontAwesomeIcon icon={faBars} style={{ color: "white" }} /></span>
    </button>
    <div className="collapse justify-content-end to-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/Pizza">Pizza</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="">Menu</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="">About Us</Link>
            </li>
        </ul>
    </div>
</div>
</nav> */}