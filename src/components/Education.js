import React from 'react';
//styles
import {Dropdown, CenterRow, CheckIcon} from '../styles';
import styled from 'styled-components';
//Icons
import { Icon } from '@iconify/react';
import circleCheck from '@iconify/icons-akar-icons/circle-check';
import interests from '../img/interests_icons.svg';

const Education = () => {
    return(
        <>

        <h5 className="about-title">Education</h5>
        <CenterRow>
        
        <EdBoxStyles>
        <ul class="menu">
            <li class="menu-item codecademy">
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
        </EdBoxStyles>
        <EdBoxStyles>
        <ul class="menu">
            <li class="menu-item udemy">
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
                    <p className="check">42%</p>
                </CheckIcon> 
                <CheckIcon>
                    <li class="drop-menu-item">React Developer 2021</li>
                    <p className="check">38%</p>
                </CheckIcon>
                <CheckIcon>
                    <li class="drop-menu-item">Complete Web & Mobile Design 2021</li>
                    <p className="check">55%</p>
                </CheckIcon>
                </ul>
            </li>
        </ul>
        </EdBoxStyles>
        <EdBoxStyles>
        <ul class="menu">
            <li class="menu-item edx">
                Edx
                <ul class="drop-menu">
                <CheckIcon>
                    <li class="drop-menu-item">Human-Computer Interaction</li>
                    <Icon icon={circleCheck} className="check"/>
                </CheckIcon> 
                </ul>
            </li>
        </ul>
        </EdBoxStyles>
    <EdBoxStyles>
        <ul class="menu">
            <li class="menu-item freeCodeCamp">
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
        </EdBoxStyles>
        </CenterRow>
        
    <DesignSkillsStyle>
    <div className="design-section">
    <h5>Design Skills</h5>
    <p>Illustration</p>
    <p>Graphic Design</p>
    <p>Industrial Design</p>
    <p>Typography</p>
    </div>
    <div className="design-section">
    <h5>Design Tools</h5>
    <p>Illustrator</p>
    <p>Photoshop</p>
    <p>Figma</p>
    <p>XD</p>
    </div>
    </DesignSkillsStyle>

    <DesignSkillsStyle>
    <div className="design-section">
        <h5>Interests</h5>
        <img className="interests" src={interests} alt="icons" />
     </div> 
    </DesignSkillsStyle>
    </>
    )
}
export default Education;

const EdBoxStyles = styled(Dropdown)`
    .codecademy,
    .udemy,
    .edx,
    .freeCodeCamp {
        background: rgb(185,210,217);
background: linear-gradient(180deg, rgba(185,210,217,1) 25%, rgba(151,189,199,1) 90%);

    }
`;


const DesignSkillsStyle = styled.div`
display: flex;
align-items: center;
width: 100%;
.design-section {
    margin: 0 auto;
}
.design-section h5 {
    font-size: 1.4rem;
    color: #F2EEDA;
    text-align: center;
}
.design-section p {
    font-size: 1.2rem;
    font-weight: lighter;
}
p {
    color: #F2EEDA;
}
.interests {
    width: 600px;
    margin-bottom: 3rem;
    margin-top: 1rem;
}
@media (max-width: 600px) {
.interests {
    width: 100%;
    margin-bottom: 1rem
}   
}
`;
