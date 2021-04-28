import React from 'react';
import { FooterStyle } from '../styles';
import {Link} from 'react-router-dom';
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
               <li className="footer-link"><Link to="/about-me">About Me</Link></li>
               <li className="footer-link"><Link to="/contact">Contact</Link></li>
               <li className="footer-link"><a href="https://www.yamaclimbing.com/yama-climbing-blog" rel="noreferrer" target="_blank"> Blog</a></li>
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



export default Footer;
