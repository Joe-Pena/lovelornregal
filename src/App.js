import React, { Component } from 'react';
import TopBar from './components/TopBar';
import MiddleBar from './components/MiddleBar';
import BottomBar from './components/BottomBar';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <TopBar />
        <MiddleBar />
        <BottomBar />
      </React.Fragment>
    );
  }
}

export default App;
