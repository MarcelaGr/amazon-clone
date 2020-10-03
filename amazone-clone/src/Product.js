import React from 'react';
import "./Product.css";

function Product({title, image, price, rating}) {
    return (
        <div className="product">
            <div className="product__info">
                <p>NETGEAR WiFi Range Extender EX3700</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>38.26</strong>
                </p>
                <div className="product__rating">
                    <p>⭐</p>
                    
                </div>
                
            </div>
            <img className="product__image" src="https://images-na.ssl-images-amazon.com/images/I/51Bq5gmIOiL._AC_SL1350_.jpg" />
            <button>Add to Basket</button>
        </div>
    )
}

export default Product