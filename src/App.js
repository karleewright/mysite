import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";
import Navbarmenu from "./components/Navbarmenu";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Home from "./components/Home";
class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
        <Navbarmenu />
       
       
       
    
      
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={Projects} />
      </div>
    </Router>
    );
  }
}

export default App;
