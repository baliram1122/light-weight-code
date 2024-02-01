import { faBars, faCartShopping, faHeart, faMoon, faSearch, faSun, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../store/slices/changemodeslice";
import { useState, useEffect } from "react";


export default function Navbar(props) {


    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    console.log(screenWidth)

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (screenWidth == 767)
        console.log('its time')

    const dispatch = useDispatch()

    const cartCounter = useSelector((state) => {
        return state.addtocart.counter
    })

    const favCounter = useSelector((state) => {
        return state.favoriteproduct.counter
    })

    const mode = useSelector((state) => {
        return state.mode.darkMode
    })


    const handleMode = () => {
        dispatch(changeMode())
    }


    return (
        <div className="navbar-container">
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="navbar-inner-flex container-fluid">
                    <NavLink to={'/'} className="text-light navbar-brand logo">TechMart</NavLink>
                    {props.isSearchBar && screenWidth >= 616 ?
                        <form className="search-bar d-flex input-group">
                            <NavLink to='/allproducts' className='link'>
                                <input
                                    type="search"
                                    className="form-control rounded"
                                    placeholder="Search"
                                    aria-label="Search"
                                    aria-describedby="search-addon"
                                    name="text"
                                />
                            </NavLink>
                            <span className="search-icon border-0" id="search-addon">
                                <FontAwesomeIcon icon={faSearch} />
                            </span>
                        </form> : ""}

                    <div className="cfp-section">
                        {props.isSearchBar && screenWidth <= 616 ? (
                            <NavLink to='/allproducts' className='link'>
                                <i className="search-resp-icon">
                                    <FontAwesomeIcon icon={faSearch} />
                                </i>
                            </NavLink>
                        ) : ""}
                        <NavLink className="link" to={`/cart`}>
                            <i className="cfp-icon">
                                <FontAwesomeIcon icon={faCartShopping} /> {cartCounter > 0 && <div className="counter-badge">{cartCounter}</div>}
                            </i>
                        </NavLink>
                        <NavLink className="link" to={"/favoriteproduct"}>
                            <i className="cfp-icon">
                                <FontAwesomeIcon icon={faHeart} />{favCounter > 0 && <div className="counter-badge">{favCounter}</div>}
                            </i>
                        </NavLink>
                        <i><FontAwesomeIcon icon={faUser} /></i>
                        <i><button className="dl-btn" onClick={handleMode}><FontAwesomeIcon icon={mode ? faSun : faMoon} /></button></i>
                    </div>
                </div>
            </nav>

            <nav className="navbar2 navbar navbar-expand-md bg-primary z-3">
                <div className="container-fluid bg-primary">
                    <button
                        className="navbar-toggler text-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCenteredExample"
                        aria-controls="navbarCenteredExample"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button>

                    <div
                        className="collapse navbar-collapse justify-content-between"
                        id="navbarCenteredExample"
                    >
                        <ul className=" navbar-nav mb-1 mb-lg-0 g-1">
                            <li className="nav-item">
                                <a className="nav-link text-light" aria-current="page" href="#">
                                    <span>All Products</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">
                                    <span>Mobiles</span>
                                </a>
                            </li>

                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link text-light dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <span>Laptops</span>
                                </a>

                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">
                                    <span>Headphones</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">
                                    <span>Speakers</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">
                                    <span>Air Conditioner</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">
                                    <span>Refrigerator</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">
                                    <span>Voice Assistant</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">
                                    <span>Tablets</span>
                                </a>
                            </li>
                        </ul>
                        {screenWidth <= 767 && console.log('helo')}
                    </div>
                </div>
            </nav>
        </div>

    )
}