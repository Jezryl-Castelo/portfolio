import React from 'react';
//styles
import styled from 'styled-components';
import {CenterRow} from '../styles';


const Contact = () => {
    return(
    <FormStyle>
    
   
    <h5>Let's Connect</h5>
    
    <div className="card-container">
    <textarea name="message" COLS="35" ROWS="25" placeholder="Your message" required></textarea>
    

    {/* <div className="line"></div> */}

    <div className="right-side">
      <div id="send">
        <form>
            <div className="stamp">
              <input class="send-btn" type="submit" value="Send"></input>
            </div>
            <div className="contact-info">
              <input type="text" name="name" placeholder="Name"></input>
              <input type="email" name="email" placeholder="E-mail" required></input>
            </div>
        </form>
      </div>
    </div>
    </div>
    
    </FormStyle>
    );
};

const FormStyle = styled.div`
    background-color: #F2EEDA;
    display: grid;
    text-align: center;
    /* display: flex; */
    justify-content: center;
    textarea {
        background-color: #F2EEDA;
    }
    .card-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 20% 80%;
        /* grid-template-areas: 
        "message stamp"
        "message submit"; */
        border: 1px solid #32302F;
        width: 100%;
    }
    .stamp {
        text-align: right;
        padding: 0.8rem;
    }
    .send-btn {
        width: 60px;
        height: 52px;  
    .message {
       
        height: 80%;
    }
    .contact-info input {
        width: 90%;
    }
    }
`;

export default Contact;