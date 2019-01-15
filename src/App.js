import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";
import Navbarmenu from "./components/Navbarmenu";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import FooterPage from "./components/FooterPage";
import Home from "./components/Home";
import Blog from './components/Blog';
import './CSS/Style.css';


class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
        <Navbarmenu className= "Nav"/>
  
       
       
       <Route exact path="/" component={Home}/>
       <Route path="/about" component={About}/>
       <Route path="/contact" component={Contact}/>
       <Route path= "/resume" component={Resume} />
       <Route path="/blog" component={Blog} />
       <Route path="/projects" component={Projects} />
       <FooterPage/>
       </div>
     
    </Router>   
    );
  }
}
        

export default App;
