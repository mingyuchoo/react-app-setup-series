import React, { Component } from 'react';

import {
  Header01,
  Header02,
  Header03,
  Header04,
  Header05,
  Header06,
  Container

} from './Headers'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header01 />
        <Header02 favcol="yellow" />
        <Header03 />
        <Header04 />
        <Header05 />
        <Header06 />
        <Container />
      </div>
    );
  }
}

export default App;
