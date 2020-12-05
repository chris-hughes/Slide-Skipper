import React, { Component } from 'react';
import './App.css';
import PresentationConnect from './Components/PresentationConnect'
import SlideNavButton from './Components/SlideNavButton'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uniqueCode: null,
      pageNumber: null
    };
  }

  render() {
    return (
      <div className="App">
        <PresentationConnect value="My brilliant presentation"/>
        <div className="Controls">
          <SlideNavButton value="Forward"/>
          <SlideNavButton value="Back"/>
        </div>
      </div>
    );
  }
}

export default App;
