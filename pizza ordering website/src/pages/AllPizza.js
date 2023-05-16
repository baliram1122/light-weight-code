import Header from "../components/Header"
import Footer from "../components/Footer"
import PizzaData from "../components/PizzaData"
import MenuItem from "../components/MenuItem"
import { faSearch, faHome, faBars, faCartShopping, faTrash, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { nanoid } from 'nanoid'
import { useEffect, useState, useRef } from "react"
import { Link } from "react-router-dom"
import { Fade } from "react-reveal"

export default function AllPizza() {


    const [pizzaData, setPizzaData] = useState(PizzaData)
    const [cartData, setCartData] = useState([])
    const [cartDataDup, setCartDataDup] = useState([])//to get price, to calculate the total and subtotal
    const [itemCounter, setItemCounter] = useState(0)
    const [subTotal, setSubTotal] = useState(0)


    const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      function handleScroll() {
        const scrollY = window.scrollY;
        if (scrollY > 400) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);



    useEffect(() => {
        setPizzaData(pizzaData => pizzaData.map(pizzaItem => {
            return { ...pizzaItem, key: nanoid(), qunatityCounter: 1, isFavorite: false}
        }))
    }, [])

    function addToCart(id) {
        const itemAlreadyInCart = cartData.some(cartItem => cartItem.key === id);
        if (itemAlreadyInCart) {
            return
        }

        const pizzaObj = pizzaData.find(pizzaItem => pizzaItem.key === id);
        setSubTotal(subTotal + pizzaObj.price);
        setCartData(prevCartData => [...prevCartData, pizzaObj]);
        setCartDataDup(prevCartData => [...prevCartData, pizzaObj]);
        setItemCounter(itemCounter + 1);
    }


    function removeFromCart(id) {
        setItemCounter(itemCounter - 1)
        setCartData(cartData => cartData.filter(cartItem => {
            if (id != cartItem.key)
                return cartItem
            else
                setSubTotal(subTotal - cartItem.price)
        }))

    }

    function getPrice(id) {
        for (let i = 0; i < cartDataDup.length; i++) {
            if (cartDataDup[i].key == id)
                return cartDataDup[i].price
        }
    }


    function increaseItemQuantity(id) {
        const price = getPrice(id)
        setSubTotal(subTotal + price)
        setCartData(cartData => cartData.map(cartItem => {
            return cartItem.key == id ? { ...cartItem, qunatityCounter: cartItem.qunatityCounter + 1, price: cartItem.price + price } : cartItem
        }))
    }


    function decreaseItemQuantity(id) {
        const price = getPrice(id)
        setSubTotal(subTotal - price)
        setCartData(cartData => cartData.map(cartItem => {
            return cartItem.key == id ? { ...cartItem, qunatityCounter: cartItem.qunatityCounter - 1, price: cartItem.price - price } : cartItem
        }))

        for (let cartItem in cartData)
            if (cartData[cartItem].key == id)
                if (cartData[cartItem].qunatityCounter < 2)
                    removeFromCart(id)
    }


    const menuElement = pizzaData.map(pizzaItem => {
        return <MenuItem
            name={pizzaItem.name}
            description={pizzaItem.description}
            image={pizzaItem.image}
            price={pizzaItem.price}
            key={pizzaItem.key}
            id={pizzaItem.key}
            handleClick={addToCart}
        />
    })




    const cartElement = cartData.map(cartItem => {
        return <div class="card mb-4" style={{ maxWidth: "540px" }}>
            <span className="delete-item mx-2 mt-1" onClick={() => { removeFromCart(cartItem.key) }}><FontAwesomeIcon icon={faTrash} style={{ color: "white" }} /></span>
            <div class="row g-0 mx-2">
                <div class="col-md-4 col-4 mt-4">
                    <img src={cartItem.image} class="img-fluid rounded-start " alt="..." />
                </div>
                <div class="col-md-8 col-8">
                    <div class="card-body">
                        <h5 class="cart-pizza-name card-title text-start">{cartItem.name}</h5>
                        <p class="card-text text-start">{cartItem.description}</p>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <div className="quantity-container d-flex">
                            <button onClick={() => decreaseItemQuantity(cartItem.key)}>-</button>
                            <div className="pizza-quantity">{cartItem.qunatityCounter}</div>
                            <button onClick={() => increaseItemQuantity(cartItem.key)}>+</button>
                        </div>
                        <h5 className="cart-pizza-price"><span>&#8377;</span>{cartItem.price}</h5>
                    </div>
                </div>
            </div>
        </div>
    })


    const top = () => {
        window.scrollTo(0, 0)
      }
    

      const [searchTerm, setSearchTerm] = useState("")

      const [isImage, setIsImage] = useState(false)
      
      const divRef = useRef(null);
  
      useEffect(() => {
        if (divRef.current && divRef.current.children.length === 0) {
          setIsImage(!isImage)
          console.log("div is empty")
        }
      }, []);  


    return (
        <div className="all-pizzaContainer">
            <Header />

            <div className='search-wrapper me-5'>
                <form className="d-flex search-container" role="search">
                    <input className="search-bar me-1" type="search" onChange={(event) => { setSearchTerm(event.target.value) }} placeholder="Search" aria-label="Search" />
                </form>
            </div>

            {isScrolled && <button className='btn btn-primary scroll-to-top' onClick={top}><FontAwesomeIcon icon={faArrowUp} /></button>}
            <Fade bottom>
            <div className='section-padding container'>
                {/* <h1 className='text-center pb-5'>Choose Your Perfect Slice from Our Pizza Menu</h1> */}
                <div className='card-group mx-5 row'>
                    {
                            pizzaData.filter(pizzaItem => {
                                if (searchTerm == "") {
                                    return pizzaItem
                                } else if (pizzaItem.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return pizzaItem
                                }
                            })
                                .map((pizzaItem) => {
                                    return <MenuItem
                                        name={pizzaItem.name}
                                        description={pizzaItem.description}
                                        image={pizzaItem.image}
                                        price={pizzaItem.price}
                                        key={pizzaItem.key}
                                        id={pizzaItem.key}
                                        handleClick={addToCart}
                                    />
                                })


                        }

                    {pizzaData.filter((pizzaItem) => {
                            if (searchTerm === '') {
                                return pizzaItem;
                            } else if (
                                pizzaItem.name.toLowerCase().includes(searchTerm.toLowerCase())
                            ) {
                                return pizzaItem;
                            }
                            }).length === 0 && (
                            <img src='/images/item-not-found.jpg' className='not-found' />
                            )}
                </div>
            </div>
            </Fade>


            <button type="button" className="cart-btn btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className={itemCounter > 0 ? "item-counter" : "none"}>{itemCounter}</div>
                <FontAwesomeIcon icon={faCartShopping} style={{ color: "white" }} />
            </button>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content bg-dark">
                        <div className="modal-header">
                            <button type="button" style={{ backgroundColor: "white" }} className="btn-close text-light" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {cartData.length ? cartElement : <img className="empty-cart-img" src="images/empty-cart.png" />}
                        </div>
                        <div className={subTotal > 0 ? "modal-footer d-flex justify-content-between" : "none"}>
                            <h5>Subtotal</h5>
                            <Link to="/" className="btn checkout-btn">CHECKOUT</Link>
                            <h5><span>&#8377;</span>{subTotal}</h5>
                        </div>
                    </div>
                </div>
            </div>





            <Footer />
        </div>
    )
}