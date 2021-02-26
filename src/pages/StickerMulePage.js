import React from 'react';
//Page Components
import CaseSticker from '../components/CaseSticker';
//Animations
import {motion} from "framer-motion";
import { pageAnimation } from '../animations';

const StickerMulePage = () => {
    return(
        <motion.div
        exit="exit" 
        variants={pageAnimation} 
        initial="hidden" 
        animate="show"
        style={{ background: "#fff" }}>
        <CaseSticker />
        </motion.div>
    )
}

export default StickerMulePage;