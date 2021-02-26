import React from 'react';
//Page Components
import Footer from '../components/Footer';
import Hairtoppers from '../components/Hairtoppers';
//Animations
import {motion} from "framer-motion";
import { pageAnimation } from '../animations';

const ProjectHair = () => {
    return(
        <motion.div
        exit="exit" 
        variants={pageAnimation} 
        initial="hidden" 
        animate="show"
        style={{ background: "#fff" }}>
        <Hairtoppers />
        </motion.div>
    )
}

export default ProjectHair;