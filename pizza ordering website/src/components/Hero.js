import { Fade } from "react-reveal"

export default function Hero() {

    let styles = {
        backgroundColor: "black"
    }

    return (
            <section class="hero row align-items-center flex-column-reverse flex-md-row px-lg-5 px-md-5 mt-4" style={styles}>
                    <div class="hero-text container col-md-7 col-sm-12 text pt-lg-5 px-5">
                        <Fade bottom>
                        <h1 className="hero-title">The Delicious <span className="highlight">Pizza Destination.</span></h1>
                        <p className="hero-description my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit vitae nunc efficitur iaculis. Sed vel velit vitae nunc efficitur iaculis.</p>
                        <a href="#" className="btn btn-danger">Learn More</a>
                        </Fade>
                    </div>
                <Fade bottom>
                    <div className="col-md-5 col-12 hero-image" >
                        <div className="vapour">
                            <span style= {{"--i":1}}></span>
                            <span style= {{"--i":3}}></span>
                            <span style= {{"--i":16}}></span>
                            <span style= {{"--i":5}}></span>
                            <span style= {{"--i":13}}></span>
                            <span style= {{"--i":20}}></span>
                            <span style= {{"--i":6}}></span>
                            <span style= {{"--i":7}}></span>
                            <span style= {{"--i":10}}></span>
                            <span style= {{"--i":8}}></span>
                            <span style= {{"--i":17}}></span>
                            <span style= {{"--i":11}}></span>
                            <span style= {{"--i":12}}></span>
                            <span style= {{"--i":14}}></span>
                            <span style= {{"--i":2}}></span>
                            <span style= {{"--i":9}}></span>
                            <span style= {{"--i":15}}></span>
                            <span style= {{"--i":4}}></span>
                            <span style= {{"--i":19}}></span>
                        </div>
                        <img src="/images/pizza4.png" alt="pizza image" />
                    </div>
                </Fade>
            </section>
    )
}








