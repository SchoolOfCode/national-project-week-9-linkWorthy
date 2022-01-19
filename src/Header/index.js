import React from 'react';
import './header.css';
import logo from '../pics/logo.png';

function Header() {
    return(
        <div className="header">
            <img src={logo} className='logo' alt='logo' />
            <div>
                <h1 className='title'>Sort it App</h1>
                <h3 className='sub-title'>A right place for all your notes</h3>
            </div>
            
        </div>
    )
}

export default Header;