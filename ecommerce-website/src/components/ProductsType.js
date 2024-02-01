import { useSelector } from "react-redux"

export default function ProductsType() {

    const mode = useSelector((state) => {
        return state.mode.darkMode
    })
    
      const darkModeStyle = {
        color: mode?"white": "black",
        backgroundColor: mode?"rgba(177, 177, 177, 0.1)": "white",
        border: "none",
      }

    return (
        <div className="products-container section-margin  text-center" style={darkModeStyle}>
            <div className="product-card">
                <img src="./images/ac.jpg" />
                <h6 className="mt-3">AIR CONDITIONER</h6>
                <p>4 PRODUCTS</p>
            </div>
            <div className="product-card">
                <img src="./images/tv.jpg" />
                <h6 className="mt-3">AUDIO & VIDEO</h6>
                <p>5 PRODUCTS</p>
            </div>
            <div className="product-card">
                <img src="./images/fidge.jpg" />
                <h6 className="mt-3">REFRIGERATOR</h6>
                <p>6 PRODUCTS</p>
            </div>
            <div className="product-card">
                <img src="./images/mobile.jpg" />
                <h6 className="mt-3">MOBILES</h6>
                <p>5 PRODUCTS</p>
            </div>
            <div className="product-card">
                <img src="./images/speaker.jpg" />
                <h6 className="mt-3">SMART HOME</h6>
                <p>6 PRODUCTS</p>
            </div>
            <div className="product-card">
                <img src="./images/oven.jpg" />
                <h6 className="mt-3">KITCHEN APPLIANCES</h6>
                <p>4 PRODUCTS</p>
            </div>
            <div className="product-card">
                <img src="./images/laptop.jpg" />
                <h6 className="mt-3">PCS & LAPTOP</h6>
                <p>4 PRODUCTS</p>
            </div>
            <div className="product-card">
                <img src="./images/washing_machine.jpg" />
                <h6 className="mt-3">HOME APPLIANCES</h6>
                <p>5  PRODUCTS</p>
            </div>
        </div>
    )
}