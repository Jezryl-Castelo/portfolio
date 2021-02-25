import React from "react";
//Animations
import {motion} from "framer-motion";
import { pageAnimation } from '../animations';

const Contact = () => {
    return(
        <motion.div
        exit="exit" 
        variants={pageAnimation} 
        initial="hidden" 
        animate="show"
        style={{ background: "#fff" }}>
            <p>Contact Me</p>
            <p>Contact Me</p>
        </motion.div>
    );
};

export default Contact;
