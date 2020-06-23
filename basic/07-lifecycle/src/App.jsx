import React, { Component } from 'react';

import * as Headers from './Headers'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Headers.Header01 />
        <Headers.Header02 favcol="yellow" />
        <Headers.Header03 />
        <Headers.Header04 />
        <Headers.Header05 />
        <Headers.Header06 />
        <Headers.Container />
      </div>
    );
  }
}

export default App;
