import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from "./Pages/About"
import Navbar from "./Components/NavBar/NavBar"
import Footer from "./Components/Footer/Footer"
import Home from "./Pages/Home"

import Portfolio from "./Pages/Portfolio"
import Contact from "./Pages/Contact"
import Skills from "./Pages/Skills"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";




function App() {


  const style = {
    backgroundImage: "url(" + "https://www.jpl.nasa.gov/spaceimages/images/wallpaper/PIA14156-1920x1200.jpg" +")",
    marginTop:"64px",
     marginBottom:"100px",
    color:"peach",
    fontFamily: "'Piedra', cursive"
  }

  return (
    <Router>
    <div  >
        <Navbar />
        <Switch>
          <main style={style} >
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Contact" component={Contact} />
          </main>
          
        </Switch>
        <Footer/>
    </div>
  </Router>
  );
}

export default App;
