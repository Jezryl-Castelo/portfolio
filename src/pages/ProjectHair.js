import React from 'react';
//Page Components
import Hairtoppers from '../components/hairtoppers.component';
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