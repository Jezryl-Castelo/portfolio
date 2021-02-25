import React from 'react';
import styled from 'styled-components';
//Images
import recipe from "../img/recipe-app.png";
import daft from "../img/daft-punk.jpg";
import shortly from "../img/shortly.png";
import relay from "../img/relay_girl.png";
import stickers from "../img/stickermule.png";
import hair from "../img/hairtoppers.png";
import { Description } from './AboutSection';

export const FrontEndProjects = () => {
    return (
        <CardContainer>
        <h3>Front End Development</h3>
        <div className="title-line"></div>
       
        <Card>
            <a className="card-link" href="https://github.com/Jezryl-Castelo/recipe-finder" rel="noreferrer" target="_blank">
            <img className="card-img" src={recipe} alt="recipe"/>
            <h4 className="card-title">Recipe Finder</h4>
            <p className="card-about">Recipe Finder implementing the Edamam API</p>
            </a>
        </Card>

        <Card>
            <a className="card-link" href="https://github.com/Jezryl-Castelo/freeCodeCamp-product-landing-page" rel="noreferrer" target="_blank"><img className="card-img" src={daft} alt="recipe"/>
            <h4 className="card-title">Daft Punk Landing Page</h4>
            <p className="card-about">FreeCodeCamp Project using HTML & CSS</p>
            </a>
        </Card>

        <Card>
            <a className="card-link" href="https://vercel.com/dashboard/projects" rel="noreferrer" target="_blank">
                <img className="card-img" src={shortly} alt="recipe"/>
            
            <h4 className="card-title">Frontend Mentor Projects</h4>
            <p className="card-about">A collection of frontend challenges on frontendmentor.io</p>
            </a>
        </Card>
    </CardContainer>
    )
}

export const DesignProjects = () => {
    return(
        <CardContainer>
            <h3>UX and Product Design</h3>
            <div className="title-line"></div>

        <Card>
            <img className="card-img" src={relay} alt="recipe"/>
            <h4 className="card-title">Team Communication Tool</h4>
        <p className="card-about">A tool to help your team exchange information</p>
        </Card>

        <Card>
            <img className="card-img" src={stickers} alt="recipe"/>
            <h4 className="card-title">Order Summary Re-design</h4>
        <p className="card-about">Brainstorming through customer issues to find a solution to reduce order errors.</p>
        </Card>

        <Card>
            <img className="card-img" src={hair} alt="recipe"/>
            <h4 className="card-title">Define the Product</h4>
        <p className="card-about">A simple site to help users understand the product and how it works.</p>
        </Card>
    </CardContainer>
    )
}


const CardContainer = styled(Description)`
    flex-wrap: wrap;
    padding-bottom: 2rem;
    margin: 0 auto;
    overflow: hidden;
    .title-line {
        background: #F2EEDA;
        height: 0.2rem;
        margin: 2rem;
        width: 100%;
    }
`;

const Card =styled.div`
    background: rgba(242, 238, 218, 20%);
    width: 28rem;
    height: 35rem;
    margin: 2rem auto;
    padding: 0.8rem;
    text-align: center;
    
    .card-img {
        min-height: 25rem;
        width: 90%;
    }
    .card-title {
    font-size: 1.6rem;
    padding: 1rem 0;
    color: #32302F;
    }
    .card-about {
        font-size: 1.3rem;
        font-weight: lighter;
        padding: 0 0.3rem;
        color: #32302F;
    }
`;

