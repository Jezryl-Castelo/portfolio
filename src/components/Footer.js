import React from 'react';
import styled from 'styled-components';
//Images
import github from '../img/github.png';
import linkedin from '../img/linkedin.png';
import instagram from '../img/instagram.png';
import dribbble from '../img/dribbble.png';
//Styles

const Footer = () => {
    return (
       <FooterStyle>
           <div>
           <ul>
               <li className="footer-link"><a href="#">About</a></li>
               <li className="footer-link"><a href="#">Contact</a></li>
               <li className="footer-link"><a href="#">Blog</a></li>
           </ul>
           </div>
           <div className="icons">
               <a href="https://github.com/Jezryl-Castelo" rel="noreferrer" target="_blank"><img src={github} alt="github" />
               </a>
               <a href="https://www.linkedin.com/in/jezrylcastelo/" rel="noreferrer" target="_blank">
                   <img src={linkedin} alt="linkedin"/>
                </a>
               <a href="https://dribbble.com/YAMAcollective" rel="noreferrer" target="_blank">
               <img src={dribbble} alt="dribbble" />
               </a>
               <a href="https://www.instagram.com/yamaclimbing/" rel="noreferrer" target="_blank">
                  <img src={instagram} alt="instagram" />
               </a>
           </div>

        </FooterStyle>
    )
}

const FooterStyle = styled.div`
    display: flex;
    width: 100vw;
    height: 100%;
    padding: 4rem 9rem 4rem 9rem;
    margin: 4rem auto 0;
    background-color: #F2EEDA;
    .footer-link {
        margin: 0.5rem 0;
    }
    .footer-link a {
        font-size: 1.2rem;
    }
    .icons {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        opacity: 0.65;
    }
    img {
        width: 48px;
        margin: 0 0.8rem;
    }
`;

export default Footer;

