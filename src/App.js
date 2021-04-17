import React from 'react';
import Nav from './components/Nav';
//Pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import GlobalStyle from './components/GlobalStyle';
import Footer from './components/Footer';
import StickerMulePage from './pages/StickerMulePage';
import AboutMePage from './pages/AboutMePage';
import { Switch, Route, useLocation } from 'react-router-dom';
import ProjectHair from './pages/ProjectHair';
import RelayPage from './pages/RelayPage';
import TopOfPage from './components/TopOfPage';
import Pannier from './components/pannier/pannier.component';


function App() {
  const location = useLocation();
  // console.log(location); //find key

  return (
    <div className="App">
    <TopOfPage />
    <GlobalStyle />
    <Nav />
  
    <Switch location={location} key={location.pathname}>
    <Route path="/" exact>
      <Home />
    </Route>
    <Route path="/case-study" exact>
      <StickerMulePage />
    </Route>
    <Route path="/hairtoppers" exact>
      <ProjectHair />
    </Route>

    <Route path="/relay" exact>
      <RelayPage />
    </Route>
    <Route path="/design" exact>
      <Pannier />
    </Route>
    <Route path="/about-me" exact>
      <AboutMePage />
    </Route>
    
    <Route path="/contact" exact>
      <Contact />
      
    </Route>
    
    </Switch>
    <Footer />
    </div>
  );
}

export default App;
