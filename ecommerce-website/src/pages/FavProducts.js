import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { faCartArrowDown, faHeart, faStar, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { removeFromFav } from "../store/slices/favoriteSlice";
import { toggleFavorite } from "../store/slices/productDataSlice";
import Rating from "../components/Rating";


export default function FavProducts() {


    const mode = useSelector((state) => {
        return state.mode.darkMode
    })

    const darkModeStyle = {
        color: mode ? "white" : "black",
        backgroundColor: mode ? "rgba(177, 177, 177, 0.1)" : "white",
    }

    const darkModeStyle2 = {
        color: mode?"white": "black",
        backgroundColor: mode?"transparent": "white",
      }

    const bodyStyle = {
        backgroundColor: mode ? "#121212" : "white",
    }

    const dispatch = useDispatch();

    const favProductsArray = useSelector((state) => {
        return state.favoriteproduct.products;
    })

    function handleClick(id) {
        dispatch(removeFromFav(id))
        dispatch(toggleFavorite(id))
    }


    const product = favProductsArray.map((product) => {
        return (
            <div className="product-card1" >
                <button className="fav-delete-btn" onClick={() => handleClick(product.id)} ><FontAwesomeIcon icon={faTrash} /></button>
                <img className="product-img" src={product.image} />
                <NavLink to={`/singleproduct/${product.id}`} className="product-link-wrapper">
                    <div className="product-body" style={darkModeStyle2}>
                        <div className="rating">
                            <Rating rating={product.rating} />
                        </div>
                        <h6 className="fav-product-name">{product.name}</h6>
                        <div className="product-price">&#8377;{product.currentPrice}</div>
                    </div>
                </NavLink>
            </div>
        )
    })


    const isFav = favProductsArray.length > 0;

    return (
        <div className="fav-product-wrapper" style={bodyStyle}>
            <Navbar isSearchBar={true} />
            {!isFav && <NavLink to="/"><img src="../images/wishlist-empty.webp" className="wishlist-empty-img" /></NavLink>}
            {isFav && <div className="product-wrapper half-section-margin" style={darkModeStyle}>
                <h1 className="">Wishlist</h1>
                <hr />
                <div className="products-container" style={darkModeStyle2}>
                    {product}
                </div>
            </div>}
        </div>
    )
}