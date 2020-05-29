import React, { Component } from 'react';

import shoot from './shoot';
import {
  Football01,
  Football02,
  Football02OldVersion,
  Football03,
} from './Footballs';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* shoot.jsx */}
        <button onClick={shoot}>
          Take the shot!
        </button>
        <Football01 />
        <Football02 />
        <Football02OldVersion />
        <Football03 />
      </div>
    );
  }
}

export default App;
