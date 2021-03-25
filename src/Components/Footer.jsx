import React from 'react';
import './Footer.css';
import ftLogo from './img/ft-logo.png';
import company from './img/company.png';

const Footer = () => {
    return (
        <>
        <div className='footer'>
            <div className='ft-1' data-aos="fade-right" data-aos-duration="1000">
                <img src={ftLogo}></img>
                <p>PT Dwidasa Samsara Indonesia</p>
                <p id='address'>Ruko Jalur Sutera 29A No. 53 Alam Sutera Serpong, Tangerang 15323</p>
            </div>
            <div className='ft-2' data-aos="fade-right" data-aos-duration="1200">
                <h1>Contact</h1>
                <p>
                    Phone : +62.21.5314.1135<br/>
                    Fax : +62.21.5314.1135<br/>
                    Email : community@dwidasa.com
                </p>
            </div>
            <div className='ft-3' data-aos="fade-right" data-aos-duration="1400">
                <img src={company}></img>
            </div>
        </div>
        <div className='copyright'>
            <p>Copyright © 2015 - Dwidasa Samsara Indonesia</p>
        </div>
        </>
    )
}

export default Footer;
