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
                <Product 
                    title='NETGEAR WiFi Range Extender EX3700' 
                     price={39.99} 
                    image='https://images-na.ssl-images-amazon.com/images/I/51Bq5gmIOiL._AC_SL1350_.jpg' 
                    rating={3}/>
                <Product
                    title='BENGOO G9000 Auriculares estéreo para juegos'
                    price={26.89}
                    image='https://i.ebayimg.com/images/g/w2IAAOSwiq9bUhNT/s-l1600.jpg'
                    rating={4} />
                
            </div>

            <div className="home__row">
            <Product
                title='Samsung Gear S3'
                price={157.97}
                image='https://static-geektopia.com/storage/geek/products/samsung/gear-s3-frontier/samsung_gear_s3_frontier_r_30-1.jpg'
                rating={5} />
            <Product 
                title='Organizational Culture Change: Unleashing your Organizations Potential in Circles of 10'
                price={9.99}
                image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMmjsblv5A6FkUl0M_rbUBaRWRzoeG1rfs9g&usqp=CAU'
                rating={4}/>
            <Product 
                title='Lepro tira de luces LED de 50 pies, tiras LED RGB 5050 ultralargas con mando a distancia'
                price={27.19}
                image='https://m.media-amazon.com/images/I/712qvjSR2+L._AC_SS350_.jpg'
                rating={3}/>
            </div>

            <div className="home__row">
            <Product 
                title='LG Electronics - OLED55C9PUA Serie C9, Negro), OLED77C9PUB'
                price={3,497.97}
                image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREZZnVNmUMqGsf9XQ-5808ar4gYcKoaqbUGQ&usqp=CAU'
                rating={5}/>
            </div>
        </div>
    )
}

export default Home
