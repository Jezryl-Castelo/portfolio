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
    font-size: 1.3rem;
    font-weight: lighter;
    padding-bottom: 2rem;
}
ul {
    padding: 2rem;
}
li {
    font-size: 1.3rem;
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
    width: 3.6rem;
    margin: 0 0.8rem;
    padding: 0.2rem;
}
`;