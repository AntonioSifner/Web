import React, { useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search"
import "./Header.css"
import {Link} from 'react-router-dom'
import ShoppingBasketAIcon from "@material-ui/icons/ShoppingBasket"
import { useStateValue } from "./StateProvider";
import {auth} from './firebase'

const Header=()=>{

    const [{basket,loggedinuser}, dispatch] = useStateValue();

    const logoutUser = () =>{
        if(loggedinuser){
            auth.signOut();
        }
    }

    return(
        <nav className="header">
           <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="slika"></img>
           <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
           </div>
           <div className="header__nav">
                {/* 1st */}
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello, {loggedinuser?.email}</span>
                        <Link to={!loggedinuser && "/login"} onClick={logoutUser} className="header__link">
                        <span className="header__optionLineTwo">{loggedinuser ? "Sign out":"Sign in"}</span>
                        </Link>
                    </div>
                {/* 2nd */}
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <Link to="/" className="header__link">
                        <span className="header__optionLineTwo">& Orders</span>
                        </Link>
                    </div>
            </div>
            {/* Basket icon with number */}
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    <ShoppingBasketAIcon />
                    {/* Number of items in the basket */}
                    <span className="header__optionLineTwo header__productCount">{basket?.length}</span>
                </div>
            </Link>
        </nav>  
    )
}

export default Header;