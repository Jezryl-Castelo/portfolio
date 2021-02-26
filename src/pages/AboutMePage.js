
import React from 'react';
import AboutMe from '../components/AboutMe';
//Animations
import { pageAnimation } from '../animations';
import { motion } from 'framer-motion';

const AboutMePage = () => {
    return(
    <motion.div exit="exit" variants={ pageAnimation } initial="hidden" animate="show">
        <AboutMe />
    </motion.div>
    )
}

export default AboutMePage;