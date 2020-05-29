import React, { Component } from 'react';

import {
  MyHeader01,
  MyHeader02,
  MyHeader03,
} from './MyHeaders';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyHeader01 />
        <MyHeader02 />
        <MyHeader03 />
      </div>
    );
  }
}

export default App;
