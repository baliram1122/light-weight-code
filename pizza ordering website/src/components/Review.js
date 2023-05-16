import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faHome, faBars, faMoneyBill, faSackDollar, faTruck, faIdBadge, faPercent, faHandshakeAltSlash, faStar, faStarHalf, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fade } from "react-reveal"

export default function Review() {
    return (
        <Fade right>
        <div className="section-padding hidden">
            <h1 className="review-heading">Reviews</h1>
            <div class="card-group mx-5 row">
                <div class="card review-card ">
                    <div className="card-top mx-5 d-flex justify-content-between align-items-center">
                        <div className="card-img-title d-flex align-items-center mt-3">
                            <img src="/images/user1.webp" alt="..." />
                            <h5 class="card-title" className='mx-3'>Chuck</h5>
                        </div>
                        <div className='rating-stars'>
                            <i><FontAwesomeIcon icon={faStar} /></i>
                            <i><FontAwesomeIcon icon={faStar} /></i>
                            <i><FontAwesomeIcon icon={faStar} /></i>
                            <i><FontAwesomeIcon icon={faStar} /></i>
                            <i><FontAwesomeIcon icon={faStar} /></i>
                        </div>
                    </div>
                    <div className='mt-4 mb-3 text-start mx-5'>
                        <p className="card-text">Chuck loves pizza almost as much as he loves his collection of 80s action figures. He says this pizza is "totally rad" and "tubular" – which, for those who don't speak 80s, means it's delicious!</p>
                        <p className="card-text"><small class="text-body-secondary">Mar 24, 2022</small></p>
                    </div>
                </div>
                <div class="card review-card ">
                    <div className="card-top mx-5 d-flex justify-content-between align-items-center">
                        <div className="card-img-title d-flex align-items-center mt-3">
                            <img src="/images/user2.jpg" alt="..." />
                            <h5 class="card-title" className='mx-3'>Gertrude</h5>
                        </div>
                        <div className='rating-stars'>
                            <i><FontAwesomeIcon icon={faStar} /></i>
                            <i><FontAwesomeIcon icon={faStar} /></i>
                            <i><FontAwesomeIcon icon={faStar} /></i>
                            <i><FontAwesomeIcon icon={faStar} /></i>
                            <i><FontAwesomeIcon icon={faStar} /></i>
                        </div>
                    </div>
                    <div className='mt-4 mb-3 text-start mx-5'>
                        <p className="card-text">Gertrude may be a grandma, but she knows good pizza when she tastes it. She says this pizza is "better than a kiss on the cheek from my grandkids" – high praise indeed!</p>
                        <p className="card-text"><small class="text-body-secondary">Sep 12, 2021</small></p>
                    </div>
                </div>
                <div class="card review-card">
                    <div className="card-top mx-5 d-flex justify-content-between align-items-center">
                        <div className="card-img-title d-flex align-items-center mt-3">
                            <img src="/images/user3.jpg" alt="..." />
                            <h5 class="card-title" className='mx-3'>Spike</h5>
                        </div>
                        <div className='rating-stars'>
                            <i><FontAwesomeIcon icon={faStar} /></i>
                            <i><FontAwesomeIcon icon={faStar} /></i>
                            <i><FontAwesomeIcon icon={faStar} /></i>
                            <i><FontAwesomeIcon icon={faStar} /></i>
                            <i><FontAwesomeIcon icon={faStarHalfStroke} /></i>
                        </div>
                    </div>
                    <div className='mt-4 mb-3 text-start mx-5'>
                        <p className="card-text">Spike is a bit of a tough guy, but even he can't resist this pizza. He says it's "the bomb-diggity" and "way better than a roundhouse kick to the face" – which, coming from Spike, is a glowing review!</p>
                        <p className="card-text"><small class="text-body-secondary">Oct 01, 2023</small></p>
                    </div>
                </div>


            </div>
        </div>
        </Fade>
    )
}