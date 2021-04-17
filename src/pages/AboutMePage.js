import React from 'react';
//Page Components
import Header from '../components/Header';
import Education from '../components/Education';


const AboutMePage = () => {
    return(
    // <motion.div exit="exit" variants={ pageAnimation } initial="hidden" animate="show">
    <div>
        <Header />
        <Education />
    </div>
    // </motion.div>
    )
}

export default AboutMePage;