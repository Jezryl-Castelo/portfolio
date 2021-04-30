import React from 'react';

import header from '../img/mountains-2.png';
import jezryl from '../img/jezryl_dark.svg';
import portrait from '../img/portrait.png';
import styled from 'styled-components';
// import {MediaQueryBlock} from '../styles';
//Animation
import {motion} from 'framer-motion';
import {titleAnim, photoAnim}from '../animations';


const Header = () => {
    return(
        <HeaderStyle>
           
            <motion.img variants={titleAnim} className="name" src={jezryl} alt="name">
            </motion.img>
            <Background>
        <img className="mountains-1" src={header} alt="mountains"></img>
        
        </Background>
            
            <div className="container">
                <motion.h2 variants={titleAnim}className="about">I'm always curious and learning something new.
                I enjoy problem-solving and finding ways to help those around me.
                </motion.h2>
            </div>
            
                <motion.img variants={photoAnim} className="profile" src={portrait} alt="profile"></motion.img>
                
        </HeaderStyle>
    )
}

const Background = styled.div `
    .mountains-1 {
        position: absolute;
        z-index: -1;
        opacity: 0.6;
        right: 0;
        top: 150px;
        width: 60%;
    }
`

export const HeaderStyle = styled.div`
    display: grid;
    width: 80vw;
    margin: 0 auto; 
    grid-template-areas:
    "name about photo";
    padding-top: 6rem;
    padding-bottom: 8rem;
    overflow: hidden;
    .name {
        height: 200px;
    }
    .about {
        width: 70%;
        padding-top: 2.8rem;
        padding-left: 0;
    }
    .profile {
        height: 27rem;
        position: absolute;
        right: 2rem;
        top: 8.5rem;
    }
    @media (max-width: 1300px) {
        display: block;
        padding-bottom: 4rem;
    }
    @media (max-width: 980px) {
        width: 98vw;
    .profile {
        right: -5rem;
    }
    @media (max-width: 720px) {
       margin: 0 auto;
       position: relative;
       padding-top: 1rem;
       padding-bottom: 5rem;
    .profile {
        height: 21rem;
        top: 13rem;
        z-index: -1;
       }
    .about {
        width: 50%;
        margin-left: 24px;
        padding-top: 80px; 
        
   }
   .name {
       width: 90%;
   }
}
}
`;

export const Description = styled.div`
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: center;
    padding-bottom: 8rem;
    margin: 0 auto;
    .name {
        min-width: 32vw;
        min-height: 300px;
    }
    .about {
        padding-right: 3rem;
    }
    .profile {
        width: auto;
        height: 25rem;
        position: absolute;
        right: 0;
        top: 7rem;
    }
`;

export default Header;