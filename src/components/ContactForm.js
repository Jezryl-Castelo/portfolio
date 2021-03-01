import React from 'react';
//styles
import styled from 'styled-components';
import photo from '../img/photo.jpg';



const Contact = () => {
    return(
    <FormStyle>
    <h5 className="contact-title">Let's Connect</h5>
    <div className="contact-card">
    
        <img className="self" src={photo} alt="profile" />
        <div className="contact-right">
        <p className="email">Email</p> 
        <p className="address">jez.castelo@gmail.com</p>
        </div>
    <div className="line">
    </div>
    </div>
    
    </FormStyle>
    );
};

const FormStyle = styled.div`
    height: 80vh;
    background-color: #F2EEDA;
    text-align: left;
    .contact-title {
        font-size: 2rem;
        padding: 6rem;
        text-align: center;
    }
    .self {
        grid-area: photo;
        height: 24.8rem;
        border-radius: 1px 300px 1px 1px;
        box-shadow: 0 4px 10px 0 rgba(0,0,0,.30);
    }
    .contact-card {
        width: 60%;
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;
        /* justify-content: center; */
        text-align: left;
    }
    
    .email {
        font-size: 1.4rem;
        padding: 1.2rem 0 0.6rem;
    }
    .address {
        font-size: 1.2rem;
    }
`;

export default Contact;