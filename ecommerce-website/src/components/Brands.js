import { useSelector } from "react-redux"

export default function Brands() {

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

    return (
        <div className="brand-wrapper section-margin" style={darkModeStyle}>
            <h2 className="brand-container-title ms-3 p-3">Top brands</h2>
            <div className="brand-container" style={darkModeStyle2}>
                <img src="./images/brand1.png" />
                <img src="./images/brand2.png" />
                <img src="./images/brand3.png" className="brand-3" />
                <img src="./images/brand4.png" />
                <img src="./images/brand5.png" />
                <img src="./images/brand7.png" />
            </div> 
        </div>
    )
}