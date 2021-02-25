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
    
}
h2 {
    color: #F2EEDA;
    font-weight: 300;
    font-size: 1.4rem;
    width: 68%;
    padding-left: 1rem;

    position: relative;
    top: -1.3rem;
}
h3 {
    width: 90%;
    font-weight: bolder;
    font-size: 1.5rem;
    color: #F2EEDA;
}
h4 {
    font-size: 1.8rem;
    padding-bottom: 3rem;
}
h5{
    font-size: 1.7rem;
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
    color: #32302F;;
}
li {
        list-style: none;
    }


`;

export default GlobalStyle;