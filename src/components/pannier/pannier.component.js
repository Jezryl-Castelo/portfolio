import React from 'react';

import './pannier.styles.css';
import { CaseContainer } from '../../styles';

import bag from '../../img/andromeda_bike.png';

const Pannier = () => {
    return(
        <div>
            <CaseContainer>
            <h4>Design Projects</h4>

            <h4>Andromeda Pannier Tote</h4>
            <img className="header-img" src={bag} alt="bag" /> 
            <p>I had the opportunity to work with the design team to develop a line of bike bags for women. My main project was the Andromeda Tote Pannier. The Andromeda is made from upcycled billboard banners and converts from a pannier to a tote bag.</p>
            <p>
            Some challenges were the material and budget. The final product was made with 60% of repurposed material, reflective features, and functions on and off a bike. .</p>
            </CaseContainer>    
        </div>
    )
}

export default Pannier;