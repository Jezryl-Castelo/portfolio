import React from 'react';
import styled from 'styled-components';
import AboutSection from './AboutSection';
//Icons
import { Icon } from '@iconify/react';
import circleCheck from '@iconify/icons-akar-icons/circle-check';


const AboutMe = () => {
    return(
        <>
        <AboutSection />
        
        <h5 className="about-title">Education</h5>
        <CenterRow>
        <Dropdown>
        <ul class="menu">
            <li class="menu-item">
                Codecademy
                <ul class="drop-menu">
                <CheckIcon>
                    <li class="drop-menu-item">HTML</li>
                    <Icon icon={circleCheck} className="check"/>
                </CheckIcon>
                <CheckIcon>
                    <li class="drop-menu-item">CSS</li>
                    <Icon icon={circleCheck} className="check"/>
                </CheckIcon>
                <CheckIcon>
                    <li class="drop-menu-item">Javascript</li>
                    <Icon icon={circleCheck} className="check"/>
                </CheckIcon>
                <CheckIcon>
                    <li class="drop-menu-item">React</li>
                    <p className="check">89%</p>
                </CheckIcon>
                <CheckIcon>
                    <li class="drop-menu-item">Front-End Engineer</li>
                    <p className="check">73%</p>
                </CheckIcon>
                </ul>
            </li>
        </ul>
        </Dropdown>

        <Dropdown>
        <ul class="menu">
            <li class="menu-item">
                Udemy
                <ul class="drop-menu">
                <CheckIcon>
                    <li class="drop-menu-item">2020 Modern Javascript Bootcamp</li>
                    <p className="check">78%</p>
                </CheckIcon>
                <CheckIcon>
                    <li class="drop-menu-item">User Experience Design Essentials: XD</li>
                    <Icon icon={circleCheck} className="check"/>
                </CheckIcon>
                <CheckIcon>
                    <li class="drop-menu-item">React Bootcamp</li>
                    <p className="check">32%</p>
                </CheckIcon>
                
                </ul>
            </li>
        </ul>
    </Dropdown>
    <Dropdown>
        <ul class="menu">
            <li class="menu-item">
                Edx
                <ul class="drop-menu">
                <CheckIcon>
                    <li class="drop-menu-item">Human-Computer Interaction</li>
                    <Icon icon={circleCheck} className="check"/>
                </CheckIcon> 
                </ul>
            </li>
        </ul>
    </Dropdown>
    <Dropdown>
        <ul class="menu">
            <li class="menu-item">
                FreeCodeCamp
                <ul class="drop-menu">
                <CheckIcon>
                    <li class="drop-menu-item">HTML & CSS</li>
                    <Icon icon={circleCheck} className="check"/>
                </CheckIcon>
                <CheckIcon>
                    <li class="drop-menu-item">Javascript</li>
                    <Icon icon={circleCheck} className="check"/>
                </CheckIcon>
                </ul>
            </li>
        </ul>
    </Dropdown>
        </CenterRow>
    <div className="design-details">
    <h5>Design Skills</h5>
    <p>Illustration</p>
    <p>Graphic Design</p>
    <p>Industrial Design</p>
    <p>Typography</p>
    
    <h5>Design Tools</h5>
    <p>Illustrator</p>
    <p>Photoshop</p>
    <p>Figma</p>
    <p>XD</p>
    
    <h5>Interests</h5>
    <p>Climbing</p>
    <p>Fly Fishing</p>
    <p>Pinterest</p>
    <p>Cooking over a fire</p>
    </div>
   
    </>
    )
}

export default AboutMe;

const Dropdown = styled.div`
   .menu, .drop-menu {
    list-style-type: none;
    padding: 0;
    margin: 10px;
}
.menu-item {
    display: inline-block;
    background-color: #F2eeda;
    position: relative;
    height: 80px;
    width: 200px;
    text-align: center;
    padding-top: 28px;
    font-size: 1.4rem;
    color: #32302F;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
}
.menu-item li {
    text-decoration: none;
    padding: 28px 42px;
    color: #32302F;
    display: block;
    text-align: left; 
}
.drop-menu {
    display: none;
    position: absolute;
    background-color: #F2EEDA;
    min-width: 400px;
    width: 520px;
    margin-top: 23px;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
}
.drop-menu-item {
    width: 100%;
    max-height: 80px;
}
.drop-menu-item li {
    color: #555;
    width: 100%;
}
.menu-item:hover .drop-menu{
    display: block;
}
.menu-item:hover {
    background-color: #A8D5E2;
    transition-duration: 0.5s;
}       
`;

const CenterRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 10rem;
`;

const CheckIcon = styled.div`
display: grid;
grid-template-columns: 80% 1fr;
grid-template-rows: repeat(1fr);
grid-template-areas: "text status";
align-items: center;

:hover {
    background-color: #A8D5E2;
    transition-duration: 0.5s;
}
.li {
    grid-area: text;
}
.check {
    grid-area: status;
    justify-self: end;
    margin-right: 0.8rem;
}

`;