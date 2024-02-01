import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Ads1 from '../components/Ads1';
import ProductsType from '../components/ProductsType';
import Products from '../components/Products';
import Ads2 from '../components/Ads2';
import Brands from '../components/Brands';
import Footer from '../components/Footer';
import SingleProduct from '../pages/SingleProduct';
import '../App.css'
import BackToTopButton from '../components/BackToTopBtn';
import { useSelector } from 'react-redux';


export default function Home() {

  const productsData = useSelector((state) => {
    return state.productData.productsData
  })

  const mode = useSelector((state) => {
    return state.mode.darkMode
})

  const darkModeStyle = {
    color: mode?"white": "black",
    backgroundColor: mode?"rgba(177, 177, 177, 0.1)": "white",
  }

  const darkModeStyle2 = {
    color: mode?"white": "black",
    backgroundColor: mode?"transparent": "white",
  }

  const bodyStyle = {
    backgroundColor: mode?"#121212": "white",
  }

  // fetching data from productsData and filtering products for different sections
  const filterProductsByCategory = (category) => {
    return productsData
      .filter((product) => product[category] === true)
      .map((product) => (
        <Products
          id={product.id}
          img={product.image}
          title={product.name}
          oldPrice={product.oldPrice}
          newPrice={product.currentPrice}
          fav={product.isFavorite}
          rating={product.rating}
        />
      ));
  };
  
  const todaysDeal = filterProductsByCategory('deals');
  const audioVideo = filterProductsByCategory('av');
  const homeAppliances = filterProductsByCategory('ha');
  const airConditioner = filterProductsByCategory('ac');
  const kitchenAppliances = filterProductsByCategory('ka');
  const computer = filterProductsByCategory('computer');
  const gadgets = filterProductsByCategory('gadgets');
  


  return (
    <div className="App" style={bodyStyle}>
      <Navbar isSearchBar={true} />
      <Hero />
      <BackToTopButton />
      <ProductsType />
      <Ads1 />

      <div className='product-wrapper section-margin ' style={darkModeStyle}>
        <div className='product-container-title'><h2>Today's Best Deal</h2> <p>see more</p></div>
        <div className='products-container section-margin-none' style={darkModeStyle2}>
          {todaysDeal}
        </div>
      </div>

      <Ads2 />

      <div className='product-wrapper section-margin ' style={darkModeStyle}>
        <div className='product-container-title'><h2>Audio & Video</h2> <p>see more</p></div>
        <div className='products-container section-margin-none' style={darkModeStyle2}>
          {audioVideo}
        </div>
      </div>

      <div className='product-wrapper section-margin ' style={darkModeStyle}>
        <div className='product-container-title'><h2>Home appliances</h2> <p>see more</p></div>
        <div className='products-container section-margin-none' style={darkModeStyle2}>
          {homeAppliances}
        </div>
      </div>

      <div className='product-wrapper section-margin ' style={darkModeStyle}>
        <div className='product-container-title'><h2>Air conditioner</h2> <p>see more</p></div>
        <div className='products-container section-margin-none' style={darkModeStyle2}>
          {airConditioner}
        </div>
      </div>


      <div className='product-wrapper section-margin ' style={darkModeStyle}>
        <div className='product-container-title'><h2>Kitchen appliances</h2> <p>see more</p></div>
        <div className='products-container section-margin-none' style={darkModeStyle2}>
          {kitchenAppliances}
        </div>
      </div>

      <div className='product-wrapper section-margin ' style={darkModeStyle}>
        <div className='product-container-title'><h2>PCs & Laptop</h2> <p>see more</p></div>
        <div className='products-container section-margin-none' style={darkModeStyle2}>
          {computer}
        </div>
      </div>

      <div className='product-wrapper section-margin ' style={darkModeStyle}>
        <div className='product-container-title'><h2>Gadget</h2> <p>see more</p></div>
        <div className='products-container section-margin-none' style={darkModeStyle2}>
          {gadgets}
        </div>
      </div>

      <Brands />

      <Footer />
    </div>
  )

}