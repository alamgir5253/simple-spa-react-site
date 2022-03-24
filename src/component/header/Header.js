import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <div className='header-bg'>
            <div className="container">
            <nav className='nav-style'>
                <img src={logo} alt="" />
                <ul>
                    <li><a href="/home">home</a></li>
                    <li><a href="/order">order</a></li>
                    <li><a href="/orderReview">order review</a></li>
                    <li><a href="inventory">manage inventory</a></li>
                </ul>
            </nav>
            </div>
        </div>
    );
};
export default Header;