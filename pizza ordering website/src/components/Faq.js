import { Fade } from "react-reveal"


export default function Faq() {
    return (

        <div className="faq-wrapper section-padding"> 
            <Fade left>
            <h1 className="text-center mb-4">Questions? We've got answers!</h1>
            <div className="accordion accordion-dark mx-3" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Can I pay for my pizza with Bitcoin?
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Sorry, we only accept payment in regular money. But if you're really passionate about Bitcoin, we'll throw in a free side of garlic knots with your order.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Can I get a discount if I tell you a joke?
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Absolutely, as long as it's a good one. Just don't blame us if the delivery driver doesn't laugh.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    What should I do if my pizza arrives cold?
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Put on a sweater and warm it up in the oven, or give us a call and we'll make it right. We're sorry, we didn't mean to give you the cold shoulder.
                    </div>
                    </div>
                </div>
            </div>
            </Fade>
        </div>
    )
}