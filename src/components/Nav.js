/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
//Images
import logo from '../img/logo.svg';

const Nav = () => {
    return(
        <StyledNav>
            <img className="logo" src={logo} alt="logo" />
                <ul>
                    <li>
                        <a href="#">Projects</a>
                    </li>
                    <li>
                        <a href="#">About Me</a>
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
    .logo {
        height: 68px;
    }
    a {
        color: #F2EEDA;
        text-decoration: none;
        font-size: 1.4rem;
    }
    ul {
        display: flex;
        list-style: none;
    }
    #Logo {
        font-size: 1.5rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
    }
    li {
        padding-left: 10rem;
        position: relative;
    }
`;

export default Nav;