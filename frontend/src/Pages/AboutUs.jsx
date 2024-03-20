
import './CSS/AboutUs.css'
import img_working from '../Components/Assets/img_work_process.png'

const AboutUs =()=>{
    return (
        <div className="aboutus" >
            <div className="header">     3 reasons to choose Vahanfin<br/>
                    benefit from the immediate value, Pan India<br/> capability, and scale.
            </div>
            <div className='main'>
                <div className="aboutus-left">
                    <h2>What we do</h2>
                    <div>Vahanfin cater RTO service needs at one place,</div><br/>
                    <div>saving time and energy. Vahanfin RTO Compliance<br/></div>
                    <div>
                     Solutions offers a new and unique approach to<br/> compliance services at a corporate level.</div>
                </div>
                <div className="aboutus-right">
                    <img src={img_working} alt="" />
                </div>
            </div>
            
        </div>
        
    )
}
export default AboutUs