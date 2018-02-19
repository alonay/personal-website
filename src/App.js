import React, { Component } from 'react';
import Contact from "./Contact"
import Bio from "./Bio"
import './App.css';
import Projects from "./Projects"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="hero" className="banner-image"></div>
        <div className="hero-text">
        <h1>ALONA</h1>
      </div>
      <h2 className="slogan">When You Love the Sound of Tech (and The City)</h2>
      <Contact/>
      <Bio/>
      <Projects/>
      </div>
    );
  }
}

export default App;
