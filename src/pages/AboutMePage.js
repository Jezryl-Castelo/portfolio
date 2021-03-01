import React from 'react';
//Page Components
import Header from '../components/Header';
import Education from '../components/Education';
//Animations
import { pageAnimation } from '../animations';
import { motion } from 'framer-motion';

const AboutMePage = () => {
    return(
    <motion.div exit="exit" variants={ pageAnimation } initial="hidden" animate="show">
        <Header />
        <Education />

    </motion.div>
    )
}

export default AboutMePage;