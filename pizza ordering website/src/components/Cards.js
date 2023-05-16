import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faHome, faBars, faMoneyBill, faSackDollar, faTruck, faIdBadge, faPercent, faHandshakeAltSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fade } from "react-reveal"

library.add(faSearch, faHome, faBars);

export default function Cards() {
    return (
        <Fade bottom>
        <div>
        <div class="features card-group section-padding mx-0 px-0 hidden">
            <div class="card">
                <div class="card-body">
                    <i><FontAwesomeIcon icon={faTruck} /></i>
                    <h5 class="card-title">Fast Delivery</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta feugiat egestas. Sed non placerat erat. Nam posuere ante sed eros tincidunt egestas.</p>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <i><FontAwesomeIcon icon={faPercent} /></i>
                    <h5 class="card-title">Special Offers</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta feugiat egestas. Sed non placerat erat. Nam posuere ante sed eros tincidunt egestas.</p>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <i><FontAwesomeIcon icon={faHandshakeAltSlash} /></i>
                    <h5 class="card-title">contactless Delivery</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta feugiat egestas. Sed non placerat erat. Nam posuere ante sed eros tincidunt egestas.</p>
                </div>
            </div>
        </div>
        </div>
        </Fade>
    )
}

