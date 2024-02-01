import { faArrowRotateBack, faCommentDots, faCreditCard, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

export default function Hero() {

  const mode = useSelector(state => state.mode.darkMode)

  const darkModeStyle = {
    color: mode ? "white" : "black",
    backgroundColor: mode ? "black" : "white",
    boxShadow: "rgba(97, 97, 97, 0.3) 0px 20px 25px -5px, rgba(97, 97, 97, 0.3) 0px 10px 10px -5px",
  }

  const textStyle = {
    color: mode? "black": "",
  }
  return (
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="2000">
          <img src="./images/hero_img1.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item" data-bs-interval="2500">
          <img src="./images/hero_img4.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <img src="./images/hero_img3.avif" class="d-block w-100" alt="..." />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>

      <div className="features-container" style={darkModeStyle}>
        <div className="feature">
          <i><FontAwesomeIcon icon={faTruckFast} /></i>
          <div>
            <h6>Fast Delivery</h6>
            <p>When you spend 1000Rs or more</p>
          </div>
        </div>
        <div className="feature">
          <i><FontAwesomeIcon icon={faCommentDots} /></i>
          <div>
            <h6>We are available 24/7</h6>
            <p>Need help? contact us anytime</p>
          </div>
        </div>
        <div className="feature">
          <i><FontAwesomeIcon icon={faArrowRotateBack} /></i>
          <div>
            <h6>Satisfied or return</h6>
            <p>Easy 30-day return policy</p>
          </div>
        </div>
        <div className="feature">
          <i><FontAwesomeIcon icon={faCreditCard} /></i>
          <div>
            <h6>100% secure payments</h6>
            <p>Visa, Mastercard, Stripe, PayPal</p>
          </div>
        </div>
      </div>
    </div>
  );
}
