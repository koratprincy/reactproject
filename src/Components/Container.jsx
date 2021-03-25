import React from 'react';
import AOS from 'aos';
import './Container.css';
import picker from './img/pana1.png';

const Container = () => {

    AOS.init();

    return (
        <div className="container">
            <div className='part-1' data-aos="flip-left" data-aos-duration="1000">
                
                     <img src={picker}></img>
                
            </div>
            <div className='part-2' data-aos="flip-right" data-aos-duration="1000">
                
                <h1>Welcome to <span>Dwidasa Samsara Indonesia (DSI)</span></h1>
                <p>Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the founders, who each of them has a common end objective to innovate new creations by making the most of the ever-growing information technology through <span>DSI</span>’s distinct front-end based application concept.</p>
                <p>Managed by a team of professional experts with extensive experience and impressive track records, <span>DSI </span> believes that continuous improvements and innovations assure your business to run effectively and efficiently.</p>
                
            </div>
        </div>
    )
}

export default Container;
