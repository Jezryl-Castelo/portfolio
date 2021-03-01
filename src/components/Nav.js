/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
//Images
import logo from '../img/logo.svg';
//Animation
import {motion} from 'framer-motion';
import {useLocation} from 'react-router-dom';

const Nav = () => {
    const {pathname} = useLocation();
    return(
        <StyledNav>
            <Link to="/">
            <img className="logo" src={logo} alt="logo" />
            </Link>
                <ul>
                    <li>
                        <Link to="/">Projects</Link>
                        <Line 
                        transition={{duration: 1}}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === '/' ? '50%' : '0%'}}
                        />
                    </li>
                    <li>
                        <Link to="/about-me">About Me</Link>
                        <Line 
                        transition={{duration: 0.75}}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === '/about-me' ? '50%' : '0%'}}
                        />
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                        <Line 
                        transition={{duration: 0.75}}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === '/contact' ? '50%' : '0%'}}
                        />
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
    .logo {
        height: 54px;
    }
    a {
        color: #F2EEDA;
        text-decoration: none;
        font-size: 1.2rem;
    }
    ul {
        display: flex;
        list-style: none;
    }
    /* #Logo {
        font-size: 1.5rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
    } */
    li {
        padding-left: 10rem;
        position: relative;
    }
`;

const Line = styled(motion.div)`
height: 0.3rem;
background: #A8D5E2;
width: 0;
position: absolute;
bottom: -80%;
left: 60%;

`;

export default Nav;