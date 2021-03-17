import styled from 'styled-components';

export const CaseContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin: 0 auto;
overflow: hidden;
background-color: #F2EEDA;
padding: 5rem 12rem 5rem 7rem;
p {
    font-weight: lighter;
    padding: 2rem auto 1rem;
    font-size: 1.1rem;
    text-align: left;
}
ol {
    padding: 1rem 2rem;
}
li {
    font-size: 1.1rem;
    font-weight: lighter;
}
.last-line {
    padding-bottom: 2rem;
}
@media (max-width: 1200px) {
    padding: 5rem 6rem 5rem 6rem;
}
@media (max-width: 600px) {
    padding: 5rem 1rem 1rem 1rem;
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
width: 100%;
height: 100%;
padding: 4rem 9rem 4rem 9rem;
margin: 0 auto;
background-color: #F2EEDA;
overflow: hidden;
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
@media (max-width: 685px) {
    display: inline-block;
    padding: 2rem 1rem;
    ul {
       text-align: center;
       padding-bottom: 1rem;
    }
}
`;

export const Dropdown = styled.div`
.menu, .drop-menu {
 list-style-type: none;
 padding: 0;
 margin: 10px;
}

.subject {
    display: grid;
    grid-template-areas: 
    "subject arrow"
}

.arrow {
    width: 32px;
    grid-area: arrow;
    position: relative;
    right: 30px;
    top: 10px;
}
.menu-item {
 display: grid;
 justify-content: center;
 align-items: center;
 height: 40px;
 width: 300px;
 text-align: center;
 font-size: 1.3rem;
 color: #32302F;
 box-shadow: 0 4px 10px 0 rgba(0,0,0,.30);
 border-radius: 2px;
 background: linear-gradient(180deg, rgba(185,210,217,1) 25%, rgba(151,189,199,1) 90%);
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
 min-width: 350px; 
 width: 30%;
 margin-top: 40px;
 box-shadow: 0 4px 10px 0 rgba(0,0,0,.30);
 z-index: 1;
 
}
.drop-menu-item {
 width: 100%;
 min-height: 80px;
 font-size: 1.2rem;
}
.drop-menu-item li {
 color: #555;
 width: 100%;
}
.menu-item:hover .drop-menu{
 display: block;
}
.menu-item:hover {
  box-shadow: 0 4px 10px 0 rgba(0,0,0,.30);
 transition-duration: 0.5s;
 cursor: pointer;
}    
`;

export const CenterRow = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
justify-content: center;
padding: 2rem 3rem;
margin: 0 auto;

@media (max-width: 1090px) {
    width: 70%;
}
@media (max-width: 775px) {
    flex-direction: column;
    .drop-menu {
        width: 48%;
    }
}
`;

export const CheckIcon = styled.div`
display: grid;
grid-template-columns: 80% 1fr;
grid-template-rows: repeat(1fr);
grid-template-areas: "text status";
align-items: center;
:hover {
    background: rgb(151,189,199);
    background: linear-gradient(333deg, rgba(151,189,199,1) 57%, rgba(217,183,189,1) 100%);
}
.li {
    grid-area: text;
}
.check {
    grid-area: status;
    justify-self: end;
    margin-right: 0.8rem;
    font-size: 1.5rem;
}
@media (max-width: 600px) {
    .check {
        font-size: 1.2rem;
    }
}
`;

export const FigCapStyle = styled.div`
    font-weight: 200;
    width: 33rem;
    font-style: italic;
    margin: 0 auto;
    figcaption {
        font-size: 1rem;
        padding-bottom: 1rem;
    }
    .proof {
        width: 100%;
    }
    @media (max-width: 600px) {
            width: 100%;
    }
`;

export const SideBySide = styled.div`
    display: flex;
    padding-top: 2rem;
    .icons {
        width: 30rem;
    }
    .right-side {
        padding-left: 2rem;
    }
    p {
        padding-bottom: 1rem;
    }
    @media (max-width: 1125px) {
        flex-direction: column;
    }
    @media (max-width: 600px) {
        .icons {
            width: 90%;
        }
    }
`; 
