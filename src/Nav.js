import React from "react";
import './Nav.css';
import { Link } from "react-router-dom";

const Nav = () =>{
    return(
        <div className="navlinks">
                <Link>Today's Deals</Link>
                <Link>Customer Service</Link>
                <Link>Gift Cards</Link>
                <Link>Registry</Link>
                <Link>Sell</Link>  
        </div>
        
    )
}

export default Nav;