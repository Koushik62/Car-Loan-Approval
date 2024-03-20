import React from 'react';
import './Hero.css';
import mainimg from '../Assets/Car loan image.jpg'
const Hero =() =>{
    return (
        <div className='hero'>
            <div className='hero-left'>
                <h2>Exploring Fresh Horizons in Financing</h2>
                <p> Experience a revolutionary financing solution with our digital lending platform, leveraging cutting-edge technology for a seamless, 100% paperless loan process within minute . Our advanced technology empowers both channel partners and customers to fulfill their financial requirements across diverse categories. Easily compare and access offers from multiple lending partners on our platform.

                <br/><br/>   
                Explore an extensive array of financial products, including new car loans, used car loans, two-wheeler loans, personal loans, and loans against cars, catering to the needs of every Indian household.</p>
                    
            </div>
            
            <div className='hero-right'>
                <img src={mainimg} alt=''/>
            </div>

        </div>
    )
}

export default Hero