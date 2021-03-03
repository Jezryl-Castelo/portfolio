import React from "react";
//Animations
import {motion} from "framer-motion";
import { pageAnimation } from '../animations';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return(
        <motion.div
        exit="exit" 
        variants={pageAnimation} 
        initial="hidden" 
        animate="show">
            <ContactForm />
        </motion.div>
    );
};

export default Contact;
