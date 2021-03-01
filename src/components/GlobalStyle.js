import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background: #757D7E;
    overflow-x: hidden;
    font-family: 'Nunito', sans-serif;
    color: #32302F;
}
h2 {
    color: #F2EEDA;
    font-weight: 300;
    font-size: 1.2rem;
    width: 68%;
    padding-left: 1rem;

    position: relative;
    top: -1.3rem;
}
h3 {
    width: 90%;
    font-weight: bolder;
    font-size: 1.4rem;
    color: #F2EEDA;
}
h4 {
    font-size: 1.4rem;
    padding-bottom: 3rem;
}
h5{
    font-size: 1.4rem;
    font-weight: 400;
    padding-bottom: 1.6rem;
}
h6 {
    font-size: 1.4rem;
    padding-bottom: 0.5rem;
    font-weight: 300;
}
a {
    text-decoration: none;
    color: #32302F;
}
li {
        list-style: none;
    }
figcaption {
    font-weight: 200;
    width: 32rem;
    font-size: 1.1rem;
    font-style: italic;
    padding: 0.6rem 0 0.6rem 1rem;
    }
ol {
    padding: 0 2rem 2rem 2rem;
}
.check {
    font-size: 2.5rem;    
} 
.about-title {
    color: #F2EEDA;
    text-align: center;
    font-size: 2rem;
}
`;


export default GlobalStyle;