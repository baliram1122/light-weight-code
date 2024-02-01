import { useDispatch, useSelector } from "react-redux"
import Navbar from "../components/Navbar"
import BackToTopButton from "../components/BackToTopBtn"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDeleteLeft, faTrash } from "@fortawesome/free-solid-svg-icons";
import { decrementTotal, incrementTotal, removeProduct } from "../store/slices/addToCartSlice"



const Cart = () => {

    const mode = useSelector((state) => {
        return state.mode.darkMode
      })
    
      const bodyStyle = {
        backgroundColor: mode ? "#121212" : "white",
        color: mode? "white": "",
        height: mode? "100vh": "auto",
      }

      const darkModeStyle = {
        color: mode ? "white" : "black",
        backgroundColor: mode ? "rgba(177, 177, 177, 0.1)" : "lightGray",
    }

    const btnStyle = {
        backgroundColor: mode? "#0052ce": "black"
    }

    const dispatch = useDispatch();

    const product = useSelector((state) => {
        return state.addtocart.products
    })

    const subTotal = useSelector((state) => {
        return state.addtocart.subTotal
    })


    function deleteProduct(id) {
        dispatch(removeProduct(id))
    }


    function handleIncrement(id) {
        dispatch(incrementTotal(id))
    }

    function handleDecrement(id) {
        dispatch(decrementTotal(id))
    }

    const productList = product.map((product) => {
      return (
        <div className="cart-heading grid grid-five-column">
          <div className="cart-image--name">
            <div>
              <figure>
                <img src={product.image} alt={product.id} />
              </figure>
            </div>
            <div>
              <p>{product.name}</p>
              <p>{product.estimatedTime}</p>
            </div>
          </div>

          <div className="cart-hide">
            <p>&#8377;{product.currentPrice}</p>
          </div>

          <div className="quality-btn-container">
            <button className="btn btn-primary decrement" onClick={() => handleDecrement(product.id)}>-</button>
            <div className="counter-display">{product.quantityCounter}</div>
            <button className="btn btn-primary increment" onClick={() => handleIncrement(product.id)}>+</button>
          </div>

          <div className="cart-hide">
            <p>&#8377;{product.cartTotal}</p>
          </div>

          <div>
            <button className="remove-icon" onClick={() => deleteProduct(product.id)}><FontAwesomeIcon icon={faTrash} /></button>
          </div>
        </div>
      );
    })

    const isProducts = productList.length > 0;

    return <div style={bodyStyle}>
                <Navbar isSearchBar={true} />
                {!isProducts && <NavLink to='/'><img src="../images/empty-cart.webp" className="empty-cart-img" /></NavLink>}
        {isProducts && <div className="container-fluid" >
          <h1 className="cart-title half-section-padding">Shopping Cart</h1>
          <hr />
          <div className="cart-titles cart-heading grid grid-five-column">
            <p>Item</p>
            <p className="cart-hide">Price</p>
            <p>Quantity</p>
            <p className="cart-hide">Subtotal</p>
            <p>Remove</p>
          </div>
          <hr className="cart-titles" />
          <div className="cart-item">
            {productList}
          </div>
        </div>}

    </div>;
  };
  



  export default Cart;












// export default function Cart() {

//     const mode = useSelector((state) => {
//         return state.mode.darkMode
//       })
    
//       const bodyStyle = {
//         backgroundColor: mode ? "#121212" : "white",
//         color: mode? "white": "",
//       }

//       const darkModeStyle = {
//         color: mode ? "white" : "black",
//         backgroundColor: mode ? "rgba(177, 177, 177, 0.1)" : "lightGray",
//     }

//     const btnStyle = {
//         backgroundColor: mode? "#0052ce": "black"
//     }

//     const dispatch = useDispatch();

//     const product = useSelector((state) => {
//         return state.addtocart.products
//     })

//     const subTotal = useSelector((state) => {
//         return state.addtocart.subTotal
//     })


//     function deleteProduct(id) {
//         dispatch(removeProduct(id))
//     }


//     function handleIncrement(id) {
//         dispatch(incrementTotal(id))
//     }

//     function handleDecrement(id) {
//         dispatch(decrementTotal(id))
//     }

//     const productList = product.map((product) => {
//         return (<div className="cart-container">
//                     <div className="cart-product">
//                         <div className="cart-item">
//                             <img src={product.image} className="cart-product-img" />
//                             <h5 className="cart-product-name">{product.name}<br />
//                                 <p className="estimated-time">Estimated Ship Date: {product.estimatedTime}</p></h5>
//                         </div>
//                         <h6 className="cart-product-price">&#8377;{product.currentPrice}</h6>
//                         <div className="quality-btn-container">
//                             <button className="btn btn-primary decrement" onClick={() => handleDecrement(product.id)}>-</button>
//                             <div className="counter-display">{product.quantityCounter}</div>
//                             <button className="btn btn-primary increment" onClick={() => handleIncrement(product.id)}>+</button>
//                         </div>
//                         <div className="total">&#8377;{product.cartTotal}</div>
//                         <button className="delete-product-btn" onClick={() => deleteProduct(product.id)}><FontAwesomeIcon icon={faDeleteLeft} /></button>
//                     </div>
//                 </div>)
//     })

//     const isProducts = productList.length > 0;

//     return (
//         <div className="cart-wrapper" style={bodyStyle}>
//             <Navbar isSearchBar={true} />
//             <BackToTopButton />
//             {!isProducts && <NavLink to='/'><img src="../images/empty-cart.webp" className="empty-cart-img" /></NavLink>}
//             {isProducts && <div className="cart-container-wrapper">
//                 <h2 className="cart-title">Shopping Cart</h2>
//                 <div className="cart-header">
//                     <p className="cart-header-name1">Product</p>
//                     <div className="cart-header-name2">
//                         <p>Price</p>
//                         <p>Quantity</p>
//                         <p>Total</p>
//                     </div>
//                 </div>

//                 {productList}
    
//                 <div className="cart-final-section d-flex p-2" style={darkModeStyle}>
//                     <div className="d-flex justify-content-between subtotal"><span>Subtotal:</span> <span className="fw-bold">&#8377;{subTotal}</span></div>
//                     <button className="btn btn-dark align-self-end checkout-btn" style={btnStyle}>Check out</button>
//                 </div>
                
//             </div>}
//         </div>
//     )
// }



