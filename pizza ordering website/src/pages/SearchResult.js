import Header from '../components/Header';
import Footer from '../components/Footer'
import PizzaData from "../components/PizzaData"
import { nanoid } from 'nanoid'
import { useEffect, useState, useRef } from "react"
import MenuItem from "../components/MenuItem"
import { useHistory } from 'react-router-dom';
import { faL } from '@fortawesome/free-solid-svg-icons';



export default function SearchResult(props) {

    const [pizzaData, setPizzaData] = useState(PizzaData)

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
        <div>
            <Header />
            <div className='search-wrapper me-5'>
                <form className="d-flex search-container" role="search">
                    <input className="search-bar me-1" type="search" onChange={(event) => { setSearchTerm(event.target.value) }} placeholder="Search" aria-label="Search" />
                </form>
            </div>
            <div className='section-padding container' >
                <div id='all-pizzas' className='card-group mx-5 row' ref={divRef}>
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
            <div className='filler section-padding'></div>
            <Footer />
        </div>

    )
}