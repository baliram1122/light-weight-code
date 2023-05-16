import Header from "../components/Header"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import { Zoom } from "react-reveal"

export default function About() {
    return (

        <div>
            <Header />
            <Zoom>
                <section id="about-us" className="section-padding">
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-md-6 mb-4 mb-md-0 text-center">
                        <img src="./images/about-us-img.avif"  alt="Pizza" className="img-fluid rounded about-us-img" />
                    </div>
                    <div className="col-md-6 aboutUs-text">
                        <h2 className="mb-4 fs-1">About Us</h2>
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a libero sed dolor dapibus consectetur. Proin consectetur, tellus ut commodo ultricies, elit elit consectetur lacus, a tempor ex elit vel elit. Nulla facilisi. Morbi vitae dapibus eros. consectetur adipiscing elit. Aliquam a libero sed dolor dapibus consectetur. Proin consectetur, tellus ut commodo ultricies, elit elit consectetur lacus, a tempor ex elit vel elit. Nulla facilisi. Morbi vitae dapibus eros.</p>
                        <Link to="/" className="btn btn-danger" >Learn more</Link>
                    </div>
                    </div>
                </div>
                </section>
                </Zoom>
            <Footer />
            </div>

    )
}