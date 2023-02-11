import image from '../../assets/advantages img.png'
import ButtonArrow from '../buttons/ButtonArrow';

function Advantages() {
    return (
        <section className="advantages">
            <div className="adv-1">
                <div className="adv-1-1">
                    <h2>Finally you can develop <span>{'{full-stack}'}</span> web applications in one place.</h2>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud ame</p>
                </div>
                <div className="adv-1-2">
                    <div>
                        <img src={image} alt=""/>
                    </div>
                </div>
                
            </div>
            <div className="adv-2">
                <div className="adv-2-card">
                    <h3>Optimized Frameworks</h3>
                    <p>A custom environment designed especially for developing and facilitating React, Vue, Angular, and other.</p>
                    <ButtonArrow buttonText="READ MORE"/>
                </div>
                <div className="adv-2-card">
                    <h3>Integrated with GitHub</h3>
                    <p>Import and run GitHub repositories directly. Alternatively, you can commit your source code to a repository.</p>
                    <ButtonArrow buttonText="READ MORE"/>
                </div>
            </div>
            <ButtonArrow buttonText="EXPLORE MORE SERVICES" />
        </section>
    )
}

export default Advantages;