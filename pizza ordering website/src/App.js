import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Cards from './components/Cards';
import MenuItem from './components/MenuItem';
import PizzaData from './components/PizzaData';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';
import Review from './components/Review';
import AOS from 'aos';
import { useEffect } from 'react';
import { Fade } from "react-reveal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Faq from './components/Faq';





function App() {

  const menuElement = PizzaData.map(pizzaItem => {
   return  <MenuItem 
          name = {pizzaItem.name}
          description = {pizzaItem.description}
          image = {pizzaItem.image}

          price = {pizzaItem.price}
          />
  })

  const top = () => {
    window.scrollTo(0, 0)
  }

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


  return (
    <div className="App">
      {isScrolled && <button className='btn btn-primary scroll-to-top' onClick={top}><FontAwesomeIcon icon={faArrowUp} /></button>}
      <Header isSearchBar = {true} />
      
      <Hero   />

      <Cards  />

    <Fade bottom>
      <div className='section-padding'>
        <h1 className='text-center pb-5'>Choose Your Perfect Slice from Our Pizza Menu</h1>
        <div className='hidden card-group mx-5 row'>
            {menuElement}
            <Link to="/Pizza" className='see-more btn btn-success'>See More</Link>
        </div>
      </div>
      </Fade>
      
      <Review />

      <Faq />

      <Footer />
    </div>
  );
}

export default App;
