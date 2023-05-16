import Header from "../components/Header"
import Footer from "../components/Footer"
import { Zoom } from "react-reveal"

export default function Contact() {
    return (
        <div>
            <Header />

            <Zoom>
                <div className=" contact-container form-margin">
                    <div className="pb-5">
                        <h1 className="text-center pt-5 mb-4">We'd Love to Hear from You</h1>
                        <form>
                            <div className="form-floating mb-3  no-focus-shadow">
                            <input type="text" className="form-control" id="floatingInput" placeholder="enter name"/>
                            <label for="floatingInput text-dark">Name</label>
                            </div>
                            <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput text-dark">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                            <input type="tel" className="form-control" id="floatingInput" placeholder="enter phone number"/>
                            <label for="floatingInput text-dark">Phone number (optional)</label>
                            </div>
                            <div className="form-floating mb-4">
                                <textarea className="form-control form-control-custom" style={{ height: '100px' }}  id="message" placeholder="Enter your message"  required></textarea>
                                <label htmlFor="message">Message</label>
                            </div>
                            <button type="submit" className="btn btn-primary submit-btn">Submit</button>
                        </form>
                    </div>
                </div>
            </Zoom>
            <Footer />
        </div>
    )
}