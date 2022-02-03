import React from 'react'
import './social-midia.css';
import Insta from "../../../assets/icons/instagram.png";
import Linkedin from "../../../assets/icons/linkedin.png";
import PayPal from "../../../assets/icons/paypal.png";


function SocialMidia() {
    return (
        <div className='social-midia'>
                        
            <a href="http://www.instagram.com">
            <img className='social-insta' src={Insta} alt="An image"/>
            </a>

            <a href="http://www.linkedin.com">
            <img className='social-linkedin' src={Linkedin} alt="An image"/>
            </a>

            <a href="http://www.paypal.com">
            <img className='social-paypal' src={PayPal} alt="An image"/>
            </a>
            
            
            
            
        </div>
    );
}

export default SocialMidia;

