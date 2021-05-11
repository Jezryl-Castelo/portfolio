import React from 'react';

import codecademy from '../../img/codecademy.png';
import coursera from '../../img/coursera.png';
import udemy from '../../img/udemy.png';
import edx from '../../img/edx.png';
import freeCodeCamp from '../../img/freecodecamp.png';

import './education.styles.css';

import { Icon } from '@iconify/react';
import circleCheck from '@iconify/icons-akar-icons/circle-check';

const EducationCard = () => {
    return (
    <>
    <h5 className="education-title">Education</h5>
    <div className="title-line"></div>
    <div className="cards-container">
    <div className="card-container">
        <h6 className="card-title">Codecademy</h6>
        <img className="logo" src={codecademy} alt="" />
        <p className="courses">Courses</p>
        <div class="line"></div>
        <ul>
            <div className="item-container">
                <li>HTML</li>
                <Icon icon={circleCheck} className="check"/>
            </div>

            <div className="item-container">
                <li>CSS</li>
                <Icon icon={circleCheck} className="check"/>
            </div>

            <div className="item-container">
                <li>Javascript</li>
                <Icon icon={circleCheck} className="check"/>
            </div>

            <div className="item-container">
                <li>React</li>
                <p>56%</p>
            </div>
        </ul>
    </div>
    
    <div className="card-container">
        <h6 className="card-title">Udemy</h6>
        <img className="logo" src={udemy} alt="" />
        <p className="courses">Courses</p>
        <div class="line"></div>
        <ul>
        <div className="item-container">
                <li>User Experience Design Essentials: XD</li>
                <Icon icon={circleCheck} className="check"/>
            </div>
            <div className="item-container">
                <li>2020 Javascript Bootcamp</li>
                <p>78%</p>
            </div>
            <div className="item-container">
                <li>React Developer 2021</li>
                <p>38%</p>
            </div>
        </ul>
    </div>

    <div className="card-container">
        <h6 className="card-title">Coursera</h6>
        <img className="logo" src={coursera} alt="" />
        <p className="courses">Courses</p>
        <div class="line"></div>
        <ul>
        <div className="item-container">
                <li>Google UX Design Certificate</li>
                <p>40%</p>
            </div>
            
        </ul>
    </div>

    <div className="card-container">
        <h6 className="card-title">Edx</h6>
        <img className="logo" src={edx} alt="" />
        <p className="courses">Courses</p>
        <div class="line"></div>
        <ul>
        <div className="item-container">
                <li>Human Computer Interaction</li>
                <Icon icon={circleCheck} className="check"/>
            </div>
           
        </ul>
    </div>

    <div className="card-container">
        <h6 className="card-title">freeCodeCamp</h6>
        <img className="logo" src={freeCodeCamp} alt="" />
        <p className="courses">Courses</p>
        <div class="line"></div>
        <ul>
        <div className="item-container">
                <li>HTML & CSS</li>
                <Icon icon={circleCheck} className="check"/>
        </div>
        <div className="item-container">
                <li>Javascript</li>
                <Icon icon={circleCheck} className="check"/>
        </div>
           
        </ul>
    </div>
    </div>
    </>
    )
}


export default EducationCard;

