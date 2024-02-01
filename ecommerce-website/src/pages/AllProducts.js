import Navbar from "../components/Navbar"
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { faBars, faCartShopping, faHeart, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Products from "../components/Products";

export default function AllProducts() {

    const [products, setProducts] = useState([]);
    const productsData = useSelector((state) => state.productData.productsData);
    const searchInputRef = useRef(null);
    const [sliderValue, setSliderValue] = useState(999);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCompany, setSelectedCompany] = useState("");
    const [foundProducts, setFoundProducts] = useState(0)
    const [selectedOption, setSelectedOption] = useState('high');
    const [postPerPage, setPostPerPage] = useState(12)
    const [currentPage, setCurrentPage] = useState(1)


    // dark mode 

    const mode = useSelector((state) => {
        return state.mode.darkMode
    })

    const bodyStyle = {
        backgroundColor: mode ? "#121212" : "white",
    }

    const darkModeStyle = {
        color: mode ? "white" : "black",
        backgroundColor: mode ? "rgba(177, 177, 177, 0.1)" : "rgba(211, 211, 211, 0.774)",
    }

    const textStyle = {
        color: mode ? 'white' : '',
    }


    // search bar 
    useEffect(() => {
        searchInputRef.current.focus();
    }, []);

    const handleChange = (e) => {
        setSliderValue(e.target.value);
    };

    useEffect(() => {
        const filteredProducts = productsData.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setProducts(filteredProducts);
    }, [searchTerm, productsData]);

    // dropdown filter 
    function handleClick(event) {
        const clickedElement = event.target;
        if (clickedElement.tagName === "P") {
            const value = clickedElement.innerHTML;
            const filterMap = {
                All: () => {
                    setProducts(productsData)
                    setFoundProducts(0)
                },
                Gadget: () => filterProducts("gadgets"),
                Computers: () => filterProducts("computer"),
                "Kitchen appliances": () => filterProducts("ka"),
                "Air conditioner": () => filterProducts("ac"),
                "Audio and Video": () => filterProducts("av"),
                "Home appliances": () => filterProducts("ha"),
            };

            const filterProducts = (category) => {
                const filteredProducts = productsData.filter(
                    (product) => product[category] === true
                );
                setFoundProducts(filteredProducts.length)
                setProducts(filteredProducts);
            };

            const filterFunction = filterMap[value];
            if (filterFunction) {
                filterFunction();
            }
        }
    }

    // drop down filter

    const handleChangeCompany = (event) => {
        const selectedCompany = event.target.value.toLowerCase();
        setSelectedCompany(selectedCompany);
        const filteredProducts = productsData.filter(
            (product) => product.company === selectedCompany
        );
        setFoundProducts(filteredProducts.length)
        setProducts(filteredProducts);
    }


    const p = products

    console.log(p) 

    // slider filter

    const handleRangeChange = (event) => {
        const sliderValue = parseInt(event.target.value);
        setSliderValue(sliderValue);

        const filteredProducts = productsData.filter(
            (product) => product.currentPrice >= sliderValue
        ).sort((a, b) => a.currentPrice - b.currentPrice);

        setFoundProducts(filteredProducts.length)
        setProducts(filteredProducts);
    };


    // radio filter
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);

        const filteredProducts = productsData.filter(
            (product) => product.currentPrice >= sliderValue
        );

        let sortedProducts;
        if (event.target.value === 'high') {
            sortedProducts = filteredProducts.sort((a, b) => b.currentPrice - a.currentPrice);
        } else {
            sortedProducts = filteredProducts.sort((a, b) => a.currentPrice - b.currentPrice);
        }

        setFoundProducts(sortedProducts.length);
        setProducts(sortedProducts);
    };


    // pagination

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentProducts = p.slice(firstPostIndex, lastPostIndex)

    const allProducts = currentProducts.map((product) => {
        return <Products
            id={product.id}
            img={product.image}
            title={product.name}
            oldPrice={product.oldPrice}
            newPrice={product.currentPrice}
            fav={product.isFavorite}
            rating={product.rating}
        />
    })

    const pages = [];

    for (let i = 1; i <= Math.ceil(p.length/postPerPage); i++) {
        pages.push(i)
    }

    return (

        <div className="allProducts-wrapper" style={bodyStyle}>
            <Navbar />
            <form className="search-bar1 d-flex input-group " >
                <input
                    ref={searchInputRef}
                    type="search"
                    className="form-control rounded"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                    name="text"
                    onChange={(event) => { setSearchTerm(event.target.value) }}
                />
                <span className="search-icon border-0" id="search-addon">
                    <FontAwesomeIcon icon={faSearch} />
                </span>
            </form>
            <div className="allproducts-inner-wrapper">
                <div className="filters-section" onClick={handleClick} style={darkModeStyle}>
                    <div className="category-container">
                        <h6 className="filter-heading">Category</h6>
                        <p >All</p>
                        <p>Gadget</p>
                        <p>Computers</p>
                        <p>Kitchen appliances</p>
                        <p>Air conditioner</p>
                        <p>Audio and Video</p>
                        <p>Home appliances</p>
                    </div>
                    <div className="company-container">
                        <h6>Company</h6>
                        <select className="company-select"
                            value={selectedCompany}
                            onChange={handleChangeCompany}>
                            <option value="all">Select a company</option>
                            <option value="samsung">Samsung</option>
                            <option value="boat">Boat</option>
                            <option value="sony">Sony</option>
                            <option value="lenovo">lenovo</option>
                            <option value="asus">asus</option>
                            <option value="panasonic">panasonic</option>
                        </select>
                    </div>
                    <div className="price-slider">
                        <label htmlFor="customRange3" className="form-label">
                            <h6>Price</h6>
                        </label>
                        <span><br />&#8377;{sliderValue}</span>
                        <input
                            type="range"
                            className="form-range price-slider"
                            min={999}
                            max={101000}
                            step={999}
                            id="customRange3"
                            value={sliderValue}
                            onChange={handleRangeChange}
                        />
                    </div>
                    <div className="high-low">
                        <label className="radio-label">
                            <input
                                type="radio"
                                value="high"
                                checked={selectedOption === 'high'}
                                onChange={handleOptionChange}
                            />
                            <span className="radio-text">Price -- High to Low</span>
                        </label>
                        <label className="radio-label">
                            <input
                                type="radio"
                                value="low"
                                checked={selectedOption === 'low'}
                                onChange={handleOptionChange}
                            />
                            <span className="radio-text">Price -- Low to High</span>
                        </label>
                    </div>
                </div>
                <div className="allproducts-container">
                    {foundProducts > 0 && <h5 className="found-products">{foundProducts} Products found</h5>}
                    <div className='products-container section-margin-none text-center' style={bodyStyle}>
                        {products.length == 0 ? <img src="./images/product-not-found.jpg" className="product-not-found" /> : allProducts}
                    </div>
                    <div className="pagination-container">
                        {
                            pages.map((page, index) => {
                                return <button style={textStyle} key={index} 
                                        onClick={() => setCurrentPage(page)}
                                        className={page == currentPage? 'active': ''}>
                                            {page}
                                        </button>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}