import img1 from '../../assets/Fictional Company Logo 1-min.png'
import img2 from '../../assets/Fictional Company Logo 2-min.png'
import img3 from '../../assets/Fictional Company Logo 3-min.png'
import img4 from '../../assets/Fictional Company Logo 4-min.png'
import img5 from '../../assets/Fictional Company Logo 5-min.png'

function OurClients(props) {
    return (
        <section className="our-clients">
            <div className="oc-inner1">
                <p>Providing power to the world's best product teams.</p>
            </div>

            <div className="oc-inner2">
                <div>
                    <img src={img1} alt=""/>
                    <img src={img2} alt=""/>
                    <img src={img3} alt=""/>
                    <img src={img4} alt=""/>
                    <img src={img5} alt=""/>
                </div>
            </div>
        </section>
    )
}

export default OurClients;