import React from 'react';
//Page Components
import Header from '../components/Header';
import {FrontEndProjects, DesignProjects } from '../components/Projects';
//Animations
import {motion} from "framer-motion";
import { pageAnimation } from '../animations';

const Home = () => {
    return(
    <div>
    <motion.div exit="exit" variants={ pageAnimation } initial="hidden" animate="show">
        <Header />
        <FrontEndProjects />
        <DesignProjects />
        </motion.div>
    </div>
    )
};

export default Home;