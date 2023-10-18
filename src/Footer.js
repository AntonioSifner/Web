import React from "react";
import './Footer.css'

const Footer = () =>{
    return(
        <div className="footer__area">
            <div className="footer__area__top">
                <p>Back to top</p>
            </div>
            <div className="footer__area__links">
                <div className="footer_area__linkarea">
                    <h4>Get to Know Us</h4>
                    <span>Careers</span>
                    <span>Blog</span>
                    <span>About</span>
                </div>
                <div className="footer_area__linkarea">
                    <h4>Make Money with Us</h4>
                    <span>Sell products</span>
                    <span>Sell apps</span>
                    <span>Become an Affiliate</span>
                </div>
                <div className="footer_area__linkarea">
                    <h4>Payment Products</h4>
                    <span>Business Card</span>
                    <span>SHop with Points</span>
                    <span>Reload Your Balance</span>
                </div>
                <div className="footer_area__linkarea">
                    <h4>Let Us Help You</h4>
                    <span>Your Account</span>
                    <span>Your Orders</span>
                    <span>Help</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;