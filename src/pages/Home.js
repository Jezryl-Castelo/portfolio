import React from 'react';

// import mountains from '../img/mountains.png';
import header from '../img/mountains-2.png';
import styled from 'styled-components';
//Page Components

import Header from '../components/Header';
import {FrontEndProjects, DesignProjects } from '../components/Projects';
//Animations
// import {motion} from "framer-motion";
// import { pageAnimation } from '../animations';

const Home = () => {
    return(
    <div>
    
        <Header />
        <FrontEndProjects />
        <DesignProjects />
       
    </div>
    )
};


export default Home;