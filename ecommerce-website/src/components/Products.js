import { faCartArrowDown, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFav, removeFromFav } from "../store/slices/favoriteSlice";
import { toggleFavorite } from "../store/slices/productDataSlice";
import Rating  from "../components/Rating"


export default function Products(props) {

    const productsData = useSelector((state) => {
        return state.productData.productsData
    })


    const favProduct = useSelector((state) => {
        return state.favoriteproduct.products;
    })


    const mode = useSelector((state) => {
        return state.mode.darkMode
    })
    
      const darkModeStyle = {
        color: mode?"white": "black",
        backgroundColor: mode?"transparent": "white",
      }

    const dispatch = useDispatch()

    const handleClick = (id) => {
        const alreadyExist = favProduct.find((product) => product.id == id)
        dispatch(toggleFavorite(id));
        if (!alreadyExist) {
            const product = productsData.find((product) => product.id == id)
            dispatch(addToFav(product))
        } else {
            dispatch(removeFromFav(id))
        }
    }

    const favStyle = {
        color: props.fav ? 'red' : 'lightgray',
        display: props.fav ? 'block' : ''
    };


    return (

        <div className="product-card1">
            <button className="favorite-btn" onClick={() => handleClick(props.id)} style={favStyle} ><FontAwesomeIcon icon={faHeart} /></button>
            <img className="product-img" src={props.img} />
            <NavLink to={`/singleproduct/${props.id}`} className="product-link-wrapper">
                <div className="product-body" style={darkModeStyle}>
                    <div className="rating">
                        <Rating rating={props.rating} />
                    </div>
                    <h6 className="product-name">{props.title}</h6>
                    <div className="price"><i style={{ color: 'gray' }}>&#8377;</i><span className="product-old-price">{props.oldPrice}</span> &#8377;<span className="product-new-price">{props.newPrice}</span></div>
                </div>
            </NavLink>
        </div>

    )
}