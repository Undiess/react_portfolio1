import React from 'react';
import Navbar from "./components/navbar/navbar.js";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/home.js";
import Portfolio from "./components/pages/portfolio.js";
import Contact from "./components/pages/contact.js";
import Footer from "./components/navbar/footer.js"



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Route exact path="/" component = {Home}/>
        <Route exact path="/portfolio" component={Portfolio}/>
        <Route exact path="/contact" component = {Contact}/>
        <Footer/>
      </Router>
        
    </div>
  );
}

export default App;
