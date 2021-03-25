import React from 'react';
import AOSP from 'aos';
import './Header.css';
import MainInfo from './MainInfo';
import Navbar from './Navbar';

const Header = () => {

    AOSP.init();

    return (
        <div className='header'>
            <Navbar />
            <MainInfo />
        </div>
    )
}

export default Header;
