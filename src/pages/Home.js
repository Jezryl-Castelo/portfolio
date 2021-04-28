import React from 'react';

//Page Components
import Header from '../components/Header';
import Card from '../components/cards/cards.component';

//Animations
// import {motion} from "framer-motion";
// import { pageAnimation } from '../animations';

const Home = () => {
    return(
    <div>
        <Header />
        <Card />
    </div>
    )
};


export default Home;