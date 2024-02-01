import { useSelector } from "react-redux"

export default function Footer() {

    const mode = useSelector((state) => {
        return state.mode.darkMode
    })

    const darkModeStyle = {
        color: mode ? "white" : "black",
        backgroundColor: mode ? "rgba(177, 177, 177, 0.1)" : "lightGray",
    }

    return (
        <footer className="mainfooter section-margin" role="contentinfo" style={darkModeStyle}>
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="footer-pad">
                                <h6>Help</h6>
                                <address>
                                    <ul className="list-unstyled">
                                        <li><a href="#">Payments</a></li>
                                        <li><a href="#">Shipping</a></li>
                                        <li><a href="#">Cancellation & Returns</a></li>
                                        <li><a href="#">FAQ</a></li>
                                        <li><a href="#">Report Infringement</a></li>
                                    </ul>
                                </address>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="footer-pad">
                                <h6>ElectronixExpress</h6>
                                <ul className="list-unstyled">
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">TechMart Stories</a></li>
                                    <li><a href="#">Press</a></li>
                                    <li><a href="">TechMart 99</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="footer-pad">
                                <h6>Misc</h6>
                                <ul className="list-unstyled">
                                    <li><a href="#">Online Shopping</a></li>
                                    <li><a href="#">Affiliate Program</a></li>
                                    <li><a href="#">Gift Card</a></li>
                                    <li><a href="#">TechMart f1 Subscription</a></li>
                                    <li><a href="#">Sitemap</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm" id="footer_g1">
                            <i className="fas fa-map-marker"></i>
                            TRACK YOUR <br /> ORDER
                        </div>
                        <div className="col-sm" id="footer_g1">
                            <i className="fas fa-sync"></i>
                            FREE AND EASY <br /> RETURNS
                        </div>
                        <div className="col-sm" id="footer_g1">
                            <i className="far fa-times-circle"></i>
                            ONLINE <br /> CANCELLATIONS
                        </div>
                    </div>
                    <div className="row" id="footer-kip">
                        <div className="col-sm-8">
                            <span>
                                <span className="policies-title">Policies: </span>
                                <a className="po" href="#" target="_blank" rel="noopener noreferrer">Returns Policy</a>
                                <a className="po" href="#" target="_blank" rel="noopener noreferrer">Terms of use</a>
                                <a className="po" href="#" target="_blank" rel="noopener noreferrer">Security</a>
                                <a className="po" href="#" target="_blank" rel="noopener noreferrer">happiness</a>
                                <a className="po" href="#" target="_blank" rel="noopener noreferrer">Privacy</a>
                                <a className="po" href="#" target="_blank" rel="noopener noreferrer">Infringement</a>
                                <a className="po" href="#" target="_blank" rel="noopener noreferrer">Sitemap</a>
                                <a className="po" href="#" target="_blank" rel="noopener noreferrer">EPR Compliance</a>
                            </span>
                        </div>
                        <div className="col-sm-4" id="footer_g1">
                            <span className="telco">© 2023 TechMart.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}