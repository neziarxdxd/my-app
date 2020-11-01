
import './App.css';
import React from 'react';
import MainTab from './MainTab/MainTab.js';
import NavBar from './Navbar/Navbar.js';
import Project from './ProjecTab/Project.js';
import ContactMe from './ContactMe/ContactMe.js';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import About from './About/About';
import Footer from './Footer/Footer';
function App() {
  return (
    <Router>
       
    <div className="App">
      <NavBar/>
     <Switch>
       <Route path="/main" component={MainTab}/>
       <Route path="/project" component={Project}/>
       <Route path="/contact" component={ContactMe}/>
       <Route path="/about" component={About}/>
       
      </Switch>
      <Footer/>

    
    </div> 
    </Router>
  
  );
}

export default App;
