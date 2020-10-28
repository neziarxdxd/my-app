
import './App.css';
import React from 'react';
import MainTab from './MainTab/MainTab.js';
import NavBar from './Navbar/Navbar.js';
import Project from './ProjecTab/Project.js';
import ContactMe from './ContactMe/ContactMe.js';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
     <Switch>
       <Route path="/main" component={MainTab}/>
       <Route path="/project" component={Project}/>
       <Route path="/contact" component={ContactMe}/>
     </Switch>

    </div>
    </Router>
  );
}

export default App;
