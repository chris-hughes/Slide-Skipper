import React, { Component } from 'react';
import './App.css';
import PresentationName from './Components/PresentationName'
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
        <PresentationName value="My brilliant presentation"/>
        <div className="Controls">
          <SlideNavButton value="Forward"/>
          <SlideNavButton value="Back"/>
        </div>
      </div>
    );
  }
}

export default App;
