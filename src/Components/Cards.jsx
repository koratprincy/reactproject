import React from 'react';
import AOS from 'aos';
import './Cards.css';
import card1 from './img/1.png';
import card2 from './img/2.png';
import card3 from './img/3.png';
const Cards = () => {

    AOS.init();

    return (
        <div className='works'>
            <h1>Product and Service</h1>
            <div className='cards'>
                <div className='card' data-aos="fade-left" data-aos-duration="1000">
                    <img src={card1}></img>
                    <h1>Our Product</h1>
                    <p>Our product is made on the base of our team’s careful research and analyses, ranging from internet based <br/>application.</p>
                    <button className='btn'>Read More</button>  
                </div>
                <div className='card' data-aos="fade-left" data-aos-duration="1200">
                    <img src={card2}></img>
                    <h1>Our Service</h1>
                    <p>DSI’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors.</p>
                    <button className='btn'>Read More</button>
                </div>
                <div className='card' data-aos="fade-left" data-aos-duration="1400">
                    <img src={card3}></img>
                    <h1>Our Technology</h1>
                    <p>First JAVA, runs on more than 850 million personal computers worldwide, and on billions of devices worldwide, including mobile and TV devices.</p>
                    <button className='btn'>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Cards;
