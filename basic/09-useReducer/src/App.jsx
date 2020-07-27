import React from 'react';

import './App.scss';

import Reservation from './components/Reservation';
import Example from './components/Example';

function App() {
  return (
    <div className="App">
      <h1> React Reservation App</h1>
      <hr />
      <Example />
      <hr />
      <Reservation />
    </div>
  );
}

export default App;
