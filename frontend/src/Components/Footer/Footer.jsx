import React from "react";
import './Footer.css'

import instagram_icon from '../Assets/instagram_icon.png'

import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer =() =>{
    return (
        <div className="footer">
            <div className="footer-logo">

                <p>Vahanfin</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icon-container">
                    <img src={instagram_icon} alt=""/>
                </div>
                
                <div className="footer-icon-container">
                    <img src={whatsapp_icon} alt=""/>
                </div>
            </div>
            <div className="footer-copyright">
                <hr/>
                <p>Copyright @2024 - All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer
