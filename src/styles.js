import styled from 'styled-components';

export const CaseContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
width: 100%;
overflow: hidden;
background-color: #F2EEDA;
padding: 5rem 20rem;
p {
    
    font-weight: lighter;
    padding-bottom: 2rem;
    font-size: 1.2rem;
}
ul {
    padding: 2rem;
}
li {
    font-size: 1.2rem;
    font-weight: lighter;
}
`;

export const CenterImage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
   
    margin: 0 auto;
    .case-image,
    .mobile {
        width: 100%;
    }
`;

export const FooterStyle = styled.div`
display: flex;
width: 100vw;
height: 100%;
padding: 4rem 9rem 4rem 9rem;
margin: 0 auto;
background-color: #F2EEDA;
.footer-link {
    margin: 0.5rem 0;
}
.footer-link a {
    font-size: 1.2rem;
}
.icons {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    opacity: 0.65;
}
img:hover {
padding: 0;
transition: all 0.1s ease-out;
}
img {
    width: 2.7rem;
    margin: 0 0.8rem;
    padding: 0.2rem;
}
`;

export const Dropdown = styled.div`
.menu, .drop-menu {
 list-style-type: none;
 padding: 0;
 margin: 10px;
}
.menu-item {
 display: inline-block;
 height: 80px;
 width: 200px;
 text-align: center;
 padding-top: 28px;
 font-size: 1.5rem;
 color: #32302F;
 box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
}
.menu-item li {
 text-decoration: none;
 padding: 28px 42px;
 color: #32302F;
 display: block;
 text-align: left; 
}
.drop-menu {
 display: none;
 position: absolute;
 background-color: #F2EEDA;
 min-width: 400px;
 width: 480px;
 margin-top: 23px;
 box-shadow: 0 3px 6px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
 z-index: 1;
}
.drop-menu-item {
 width: 100%;
 min-height: 80px;
}
.drop-menu-item li {
 color: #555;
 width: 100%;
}
.menu-item:hover .drop-menu{
 display: block;
}
.menu-item:hover {
 background-color: #A8D5E2;
 transition-duration: 0.5s;
}       
`;

export const CenterRow = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
padding: 2rem 10rem;
`;

export const CheckIcon = styled.div`
display: grid;
grid-template-columns: 80% 1fr;
grid-template-rows: repeat(1fr);
grid-template-areas: "text status";
align-items: center;
:hover {
    background-color: #A8D5E2;
    transition-duration: 0.5s;
}
.li {
    grid-area: text;
}
.check {
    grid-area: status;
    justify-self: end;
    margin-right: 0.8rem;
}
`;