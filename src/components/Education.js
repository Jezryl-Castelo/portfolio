import React from 'react';
//styles
import styled from 'styled-components';
import {Dropdown, CenterRow, CheckIcon} from '../styles';

//Icons
import { Icon } from '@iconify/react';
import circleCheck from '@iconify/icons-akar-icons/circle-check';
import interests from '../img/interests_icons.svg';
import flyfishing from '../img/fly_fishing.svg';

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
                    <p className="check">32%</p>
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
    
        <img src={interests} alt="icons" />
        
</div>
    </DesignSkillsStyle>
   
    </>
    )
}
export default Education;



const EdBoxStyles = styled(Dropdown)`
    .codecademy {
        background-color: #E5B2AC;
        height: 200px;
        padding-top: 80px;
    }
    .udemy {
        background-color: #A9D4C7;
        height: 150px;
        width: 300px;
        padding-top: 58px;
    }
    .udemy.drop-menu-item {
        height: 88px;
    }
    .edx {
        background-color: #EAB699;
        height: 200px;
        padding-top: 80px;
    }
    .freeCodeCamp {
        height: 150px;
        width: 300px;
        padding-top: 58px;
        background-color: #97BDC7;
    }
`;


const DesignSkillsStyle = styled.div`
display: flex;
align-items: center;
padding: 0 10rem;

.design-section {
    margin: 5rem auto;
}
.design-section h5 {
    font-size: 1.8rem;
    color: #F2EEDA;
}
.design-section p {
    font-size: 1.4rem; 
}
p {
    color: #F2EEDA;
}

`;