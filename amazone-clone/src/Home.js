import React from 'react';
import './Home.css';
import Product from './Product';


function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://shityoucanafford.com/wp-content/uploads/2018/11/font-page-banner-template-v2.png" alt="Prime Video" />
            </div>

            <div className="home__row">
                <Product title='NETGEAR WiFi Range Extender EX3700' price={39.99} image='https://images-na.ssl-images-amazon.com/images/I/51Bq5gmIOiL._AC_SL1350_.jpg' />
                <Product />
                
            </div>

            <div className="home__row">
            <Product />
            <Product />
            <Product />
            </div>

            <div className="home__row">
            <Product />
            </div>
        </div>
    )
}

export default Home
