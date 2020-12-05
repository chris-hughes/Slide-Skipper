import React, { Component } from 'react';
import './App.css';
import SlideNavButton from './Components/SlideNavButton'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Presentation">
          <p>Name of the presentation</p>
        </div>
        <div className="Controls">
          <SlideNavButton value="Forward"/>
          <SlideNavButton value="Back"/>
        </div>
      </div>
    );
  }
}

export default App;
