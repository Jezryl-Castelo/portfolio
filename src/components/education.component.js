import React from 'react';

//styles
import styled from 'styled-components';

import interests from '../img/interests_icons.svg';
import EducationCard from './education/education.component';

const Education = () => {
    return(
        <>
        <EducationCard />
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

const DesignSkillsStyle = styled.div`
    display: flex;
    width: 80%;
    margin: 40px auto;
    .design-section {
    margin: 0 auto;
}

.design-section h5 {
    font-size: 1.4rem;
    color: #5B606E;
}

.design-section p {
    font-size: 1.2rem;
    font-weight: lighter;
}

p {
    color: #5B606E;
}
.interests {
    width: 800px;
    margin-bottom: 3rem;
    margin-top: 1rem;
}

@media (max-width: 1000px) {
    width: 90%;
    .interests {
        width: 500px;
    }
}

@media (max-width: 600px) {
.interests {
    width: 380px;
    margin-bottom: 1rem
} 

}
`;
