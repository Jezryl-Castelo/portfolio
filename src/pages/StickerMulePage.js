import React from 'react';
//Page Components
import Nav from '../components/Nav';
import CaseSticker from '../components/CaseSticker';
import Footer from '../components/Footer';
//Animations
import {motion} from "framer-motion";
import { pageAnimation } from '../animations';

const StickerMulePage = () => {
    return(
    <>
    
        <Nav/>
        <CaseSticker />
        <Footer />
    
    </>
    )
}

export default StickerMulePage;