import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Juniormun from './components/Pages/Juniormun';
import Workshop from './components/Pages/Workshop';
import Team from './components/Team';
import Articles from './components/Pages/Articles';
import Apply from './components/Pages/Apply';
import Notfound from './components/Pages/Notfound';
import Navbarmenu from './components/menu/Navbarmenu';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router basename="/">
        {/* Add Menu Component */}
        <Navbarmenu />
        <Switch> 
          <Route exact path="/" component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/Juniormun" component={Juniormun}/>
          <Route path="/Workshop" component={Workshop}/>
          <Route path="/Team" component={Team} />
          <Route path="/Articles" component={Articles} />
          <Route path="/Apply" component={Apply} />
          <Route path="*"> <Notfound /></Route>
        </Switch>
        <ScrollToTop />
      </Router>
      <Footer />
    </div>
  );
}
export default App;
