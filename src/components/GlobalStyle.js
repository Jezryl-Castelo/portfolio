import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    @media (max-width: 1200px) {
        font-size: 75%large;
    }
}
body {
    background: #fff;
    overflow-x: hidden;
    font-family: 'Nunito', sans-serif;
    color: #5B606E;
    
}
h2 {
    color: #5B606E;
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
    padding-bottom: 2rem;

}
h5{
    font-size: 1.4rem;
    font-weight: 400;
    padding: 1rem 0 1rem;
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