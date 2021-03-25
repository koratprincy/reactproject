import React from 'react';
import AOS from 'aos';
import './MainInfo.css';
import img from './img/pana.png';

const MainInfo = () => {

    AOS.init();


    return (

        <div className='maininfo'>
           <div className='part-1' data-aos="flip-left" data-aos-duration="1000">
               
               <h1>Making the most of the <br/>ever-growing<br/> 
                    <span>Information Technology</span></h1>
                    <p>Managed by a team of professional experts with extensive  experience and impressive track records</p>
                    <button className='btn'>Read more</button>
               
           </div>
           <div className='part-2' data-aos="flip-right" data-aos-duration="1000">
                    <img src={img}></img>
               
           </div>
        </div>
    )
}

export default MainInfo;
