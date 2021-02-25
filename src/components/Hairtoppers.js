import React from 'react';
import { CaseContainer } from '../styles';
//Images
import flowchart from '../img/flowchart.png';
import mobile from '../img/mobile.png';
//Styles
import styled from 'styled-components';


const Hairtoppers = () => {
    return(
        <CaseContainer>
            <h5>Marieliza's Hair Toppers</h5>
            <p>Hair toppers offer a solution for thinning hair or adding volume to your hair. According to the American Academy of Dermatology, 40% of women have visible hair loss by the time they are 40. Hair loss in women can be devastating for self-image and emotional well-being. </p>

            <h5>The Challenge</h5>
            <p>The only e-commerce presence for Marieliza's Hair Toppers was eBay and Etsy. The client wanted to provide more information about their company and keep the traffic going to their external e-commerce sites.</p>

            <h5>Research</h5>
            <p>My research involved reviewing email inquiries, YouTube analytics, reviews, and interviewing the client to find out what users wanted to know.</p>

            <h5>Top asked questions</h5>

            <ol>
                <li>1. What is a hair topper?</li>
                <li>2. Will it work on my hair?</li>
                <li>3. Will it match my hair?</li>
                <li>4. Will it look natural?</li>
            </ol>
            
            <p>In reviewing YouTube analytics, I found that 62% of the users were watching videos via mobile and 24% were desktop visits. The demographics are female between 25-65 years old. Younger users were more interested in adding volume or color and 35+ were interested in hair toppers for thinning areas or adding color/.</p>

            <h5>Design Process</h5>
            <p>I started off by mapping the tasks that would need to be completed to meet the user's goal. One challenge was brainstorming the tasks to finish checkout on a different site. To help, I created a custom form that can be completed and from there, a Paypal link can be sent and the conversation can start with the client. I then sketched the wireframe and created the prototype and high-fidelity in Figma.</p>

            <p>Here is a brief website flowchart.</p>
            <CenterImage>
            <img className="case-image" src={flowchart} alt="flowchart" />
            </CenterImage>
            <h5>The Final Layout</h5>

            <CenterImage>
            <img className="mobile" src={mobile} alt="mobile" />
            </CenterImage>
            <button>View Site</button>
            
            <h5>Conclusion</h5>
            <p>The site was launched mid-January and has increased in visits and sales. At the start of the project, the client wanted traffic to continue to their e-commerce sites to increase reviews, however, seeing the increased traffic from YouTube and Instagram, they would like to offer payment on the site. From this project, I learned about the hair industry and how to create an interface with facts and not overload the screen, especially for mobile.</p>
        </CaseContainer>
    );
};

const CenterImage = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    .case-image,
    .mobile {
        width: 100%;
    }
`;


export default Hairtoppers; 