import React from 'react';
import jezryl from '../img/jezryl.svg';
import portrait from '../img/portrait.png';
import styled from 'styled-components';

//Animation
import {motion} from 'framer-motion';
import {titleAnim, photoAnim}from '../animations';


const Header = () => {
    return(
        <Description>
            <motion.img variants={titleAnim} className="name" src={jezryl} alt="name">
            </motion.img>
            <div className="container">
                <motion.h2 variants={titleAnim}className="about">I'm always curious and learning something new.
                I enjoy problem-solving and finding ways to help those around me.
                </motion.h2>
            </div>
                <motion.img variants={photoAnim} className="profile" src={portrait} alt="profile"></motion.img>
        </Description>
        
    )
}
export const Description = styled.div`
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: center;
    padding-bottom: 14em;
    margin: 0 auto;
    .name {
        min-width: 32vw;
        min-height: 300px;
    }
    .about {
        padding-right: 3rem;
    }
    .profile {
        width: 32vw;
        position: absolute;
        right: 0;
        top: 7rem;
    }
`;

export default Header;