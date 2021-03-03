import React from 'react';
//Images
import designIssue from '../img/designIssue_1.png';
import designIssue1 from '../img/designIssue_2.png';
import icons from '../img/icons-case.png';
import proof from '../img/proof-redesign.png';
import details from '../img/order-details.png';
import comments from '../img/comments.png';
import maria from '../img/persona_1.png';
import mike from '../img/persona_2.png';
//Styles
import styled from 'styled-components';
import { CaseContainer, FigCapStyle, SideBySide } from '../styles';
import TopOfPage from '../components/TopOfPage';


const CaseSticker = () => {
    return(
        <CaseContainer>
            <h4>Sticker Mule Order Summary Redesign</h4>
            <p>Sticker Mule offers a variety of custom printed products. All of their products are made in Amsterdam, New York and Pisa, Italy, offering a fast turnaround to customers all over the world.</p>

            <h5>Problem</h5>
            <p>The current proofing process lacks important details and difficult-to-find information about a users' order. If details are missed, this can lead to printing the wrong product, size, quantity, and inaccurate pricing. The user will then have to contact Sticker Mule to resolve the issue. The support team will investigate the case in order to determine the best solution.</p>

            <h5>Design Process</h5>
    
            <p>I wanted to learn what could be contributing to errors in Sticker Mule’s proofing process. Since Sticker Mule only offers customer support via email, I chose to review emails and find cases that involved errors related to proofing. I documented emails that were sent before their proof was approved and after production. Here is what I learned.</p>

            <ol>
                <li>1. Many customers were confused about the sizing of their product.</li>
                <li>2. When they approved their proof, they were unable to review their whole order.</li>
                <li>3. It was difficult to view multiple designs.</li>
                <li>4, Pricing was difficult to understand under “Order details”.</li>
                <li>5. Changes to their artwork were missed.</li>
            </ol>
           
        <Image>
        <FigCapStyle>
            <img className="sticker-mule-imgs fig-image" src={designIssue} alt="example" />
            <figcaption>Current proof website flow</figcaption>
            
        </FigCapStyle>
        <img className="sticker-mule-imgs"src={designIssue1} alt="example" />
        </Image>
       
        <h5>The Challenge</h5>
        <p>To provide a clear layout and understanding of the user's artwork and order summary.</p>

        <h5>User Personas</h5>
        <PersonaStyle>
            <img className="persona" src={maria} alt="maria" />
        <p className="persona-text">Maria Valquez is a Graphic Designer for a tech company in San Francisco. Maria works with multiple teams to create multiple designs for events. She places an order at least once a month and needs to have the designs approved before production. She's often on a tight deadline and important details can't be missed. </p>
        </PersonaStyle>
        <PersonaStyle>
            <img className="persona" src={mike} alt="mike" />
        <p className="persona-text">Mike Henderson owns a construction company.
He wants to promote his company with stickers on their hard hats and trucks. Once in a while, he needs labels or packaging materials. He’s not familiar with print standards and rarely makes purchases online.</p>
        </PersonaStyle>
        <h6>Task Evaluation</h6>
        <p>I think it's important to take into consideration the user's knowledge of the print process and navigating the online proofing process.</p>

    <SideBySide>
    <FigCapStyle>
        <div className="left-side">
        <img className="icons" src={icons} alt="icon" />
    <figcaption>Evaluation of tasks that must be completed in order for the user to complete their goal.</figcaption>
    </div>
    </FigCapStyle>
    <div className="right-side">
        <p className="side-text">Once the customer submits their order, a proof is sent within 4 hours. The customer will then review their proof. If they have a question, they will either reach out to customer support or request changes on their proof.</p>
        <p className="side-text">The process can be seamless or it can turn into a nightmare. Multiple emails and comments can be sent during the review process.</p>
        <p className="side-text">In addition to questions during proofing, the user must navigate throughout the site in order to finally approve their order. For example, if the user would like to view their order, they must click:</p>
        <ol>
            <li>1. Order details </li>
            <li>2. Order Number</li>
            <li>3. Full order is shown.</li>
        </ol>
            <p>However, each design must be clicked on to view the proof and the steps above will repeat.</p>
      </div>
​   </SideBySide>

        <h5>The Redesign</h5>
            <p className="last-line">I started my wireframe and mapping with sketches to get an idea of placement. From there, I created a prototype in Figma, which I tested with three people. I had them perform simple tasks and observed their actions. I made changes and created the high-fidelity version below.</p>

        <Image>
        <FigCapStyle>
            <img className="proof" src={proof} alt="proof" />
            <figcaption>This is the main proof page with highlighted changes. When the order details dropdown, each item is displayed. Each item can be clicked and will populate to the left. This can help avoid navigating through multiple pages. </figcaption>
        </FigCapStyle>
        <img className="order-details" src={comments} alt="comments" />
        <img className="order-details"src={details} alt="details" />
        
        </Image>

       <h5>The Outcome</h5>
       <p>This was a personal project that I created after reading e-commerce UX research by Baymard Institute. I learned how to minimize tasks and provide a better experience for the user by clarifying information. While some users admit they've approved their proof without reviewing their details, I learned that it's important to display important details during approval. It creates a positive user experience and they build trust in the company</p>
</CaseContainer>
    );
};

const Image = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .sticker-mule-imgs {
        height: 400px;
        margin: 1rem 1.8rem;
    }
    .order-details {
        width: 520px;
        height: 100%;
        padding: 0 1rem;
    }
    @media (max-width: 600px) {
        .sticker-mule-imgs,
        .order-details {
            width: 100%;
            height: auto;
         margin: 1rem auto; 
        }
    }
`;
const PersonaStyle =styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    .persona {
        height: 10rem;
    }
    .persona-text {
        padding: 2rem;
    }
    @media (max-width: 775px) {
        flex-direction: column;
        width: 100%;
    .persona-text {
        padding: 1rem 0;
    }
    
    }
`;




export default CaseSticker;