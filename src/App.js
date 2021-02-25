import React from 'react';
import Nav from './components/Nav';
//Pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import GlobalStyle from './components/GlobalStyle';
import StickerMulePage from './pages/StickerMulePage';
import { Switch, Route, useLocation } from 'react-router-dom';
import CaseSticker from './components/CaseSticker';
import ProjectHair from './pages/ProjectHair';


function App() {
  const location = useLocation();
  console.log(location); //find you key

  return (
    <div className="App">
    <GlobalStyle />
    <Nav />
    <Switch location={location} key={location.pathname}>
    <Route path="/" exact>
      <Home />
    </Route>
    <Route path="/case-study" exact>
      <CaseSticker />
    </Route>
    <Route path="/hairtoppers" exact>
      <ProjectHair />
    </Route>
    <Route path="/contact" exact>
      <Contact />
    </Route>
    </Switch>
    </div>
  );
}

export default App;
