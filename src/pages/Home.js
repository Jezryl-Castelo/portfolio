import React from 'react';

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