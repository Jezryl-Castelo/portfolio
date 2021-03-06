/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
//Images
import logo from '../img/logo.png';
//Animation
// import {motion} from 'framer-motion';
// import {useLocation} from 'react-router-dom';

const Nav = () => {
    // const {pathname} = useLocation();
    return(
        <StyledNav>
            <Link to="/">
            <img className="logo" src={logo} alt="logo" />
            </Link >
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
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    min-height: 8vh;
    display: flex;
    justify-content: space-between;
    margin: auto;
    align-items: center;
    padding: 1rem 10rem 1rem 2.4rem;
    position: sticky;
    z-index: 1;
    top: 0;
    background-color: #fff;
    .logo {
        position: relative;
        top: 4px;
        z-index: 1;
        height: 50px;
        width: 74px;
    }
    a {
        color: #5B606E;
        text-decoration: none;
        font-size: 1.3rem;
    }
    a:hover {
        color: lightblue;
    }
    ul {
        display: flex;
        list-style: none;
    }
    li {
        padding-left: 10rem;
        position: relative;
    }
    @media (max-width: 1300px) {
        flex-direction: column;
        padding: 1rem 0rem;
        margin: 0 auto;
        ul{
            padding: 1rem;
            justify-content: space-around;
            width: 100%;
        }
        li {
            padding: 0;
        }
    }
`;

export default Nav;