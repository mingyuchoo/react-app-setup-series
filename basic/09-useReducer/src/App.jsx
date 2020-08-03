import React from 'react';

import './App.scss';

import Reservation from './components/Reservation';
import Confirmation from './components/Confirmation';

function App() {
  return (
    <div className="App">
      <h1> React Reservation App</h1>
      <hr />
      <Reservation />
      <hr />
      <Confirmation />
    </div>
  );
}

export default App;
