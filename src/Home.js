import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () =>{
    return(
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="dasd" />

            <div className="home__row">
                <Product 
                    id="0"
                    title="The Lean Startup: How Contant Innovation"
                    price={11.99}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/41oWmJtLDdL._AC_UF420%2C420_FMjpg_.jpg"
                />
                <Product 
                    id="1"
                    title="The Lean Startup: How Contant Innovation"
                    price={9.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/41edrchZroL._AC_UF226,226_FMjpg_.jpg"
                />
                <Product 
                    id="2"
                    title="The Lean Startup: How Contant Innovation"
                    price={13.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/41cBA-M17FL._AC_UF226,226_FMjpg_.jpg"
                />
            </div>
        </div>
    )
}

export default Home;