<<<<<<< HEAD
import HeroImage from '../../assets/theprogrammer-hero-image.png';
import ButtonArrow from '../buttons/ButtonArrow';
import ButtonPlay from '../buttons/ButtonWatch';

function Hero (props) {
    
    return (
        <section className="hero">
            <div className="hero-c1">
                <div className="hc1-inner1">
                    <h1>Expert Developers for a Connected <span>{'{World}'}</span></h1>
                    <ButtonArrow buttonText="GET A DEMO" />
                </div>

                <div className="hc1-inner2">
                    <ButtonPlay buttonText="WATCH A VIDEO" />
                    <p>Circle is a code development platform that gives innovators the speed and reliability they need to create at the speed of inspiration.</p>
                </div>
            </div>

            <div className="hero-c2">
                <img src={HeroImage} alt="" />
            </div>

        </section>
    )
}

=======
import HeroImage from '../../assets/theprogrammer-hero-image.png';
import ButtonArrow from '../buttons/ButtonArrow';
import ButtonPlay from '../buttons/ButtonWatch';

function Hero (props) {
    
    return (
        <section className="hero">
            <div className="hero-c1">
                <div className="hc1-inner1">
                    <h1>Expert Developers for a Connected <span>{'{World}'}</span></h1>
                    <ButtonArrow buttonText="GET A DEMO" />
                </div>

                <div className="hc1-inner2">
                    <ButtonPlay buttonText="WATCH A VIDEO" />
                    <p>Circle is a code development platform that gives innovators the speed and reliability they need to create at the speed of inspiration.</p>
                </div>
            </div>

            <div className="hero-c2">
                <img src={HeroImage} alt="" />
            </div>

        </section>
    )
}

>>>>>>> 6e52300cfa3c60536dd7cb19a28f561d8d9a19f4
export default Hero;