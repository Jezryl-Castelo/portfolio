import React from 'react';
//Page Components
import AboutSection from '../components/AboutSection';
import {FrontEndProjects, DesignProjects } from '../components/Projects';
import Footer from '../components/Footer';
//Animations
import {motion} from "framer-motion";
import { pageAnimation } from '../animations';



const Home = () => {
    return(
    <>
    <motion.div exit="exit" variants={ pageAnimation } initial="hidden" animate="show">
        <AboutSection />
        <FrontEndProjects />
        <DesignProjects />
        <Footer />
        </motion.div>
    </>
    )
};
export default Home;