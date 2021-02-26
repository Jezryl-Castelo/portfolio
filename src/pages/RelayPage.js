import React from 'react';
//Page Components
import Relay from '../components/Relay';
//Animations
import {motion} from "framer-motion";
import { pageAnimation } from '../animations';

const RelayPage = () => {
    return(
        <motion.div
        exit="exit" 
        variants={pageAnimation} 
        initial="hidden" 
        animate="show"
        style={{ background: "#fff" }}>
        <Relay />

        </motion.div>
    )
}

export default RelayPage;