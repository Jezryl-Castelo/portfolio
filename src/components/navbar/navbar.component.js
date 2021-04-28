import React from 'react';

import {Link} from 'react-router-dom';
import './navbar.styles.css';
//Images
import logo from '../../img/logo.svg';

const Navbar = () => {
    return(
        <div className="navbar-container">
        <Link to="/home">
            <img className="logo" src={logo} alt="logo" />
            </Link>
                <ul>
                    <li>
                        <Link to="/" className="nav-link">Projects</Link> 
                    </li>
                    <li>
                        <Link to="/about-me">About Me</Link>   
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
        </div>
    )
};

export default Navbar;