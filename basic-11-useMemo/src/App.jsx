import React from 'react';

import './App.scss';

import Reservation from './components/Reservation';

function App() {
  const name = "I'm waiting for your access code.";
  return (
    <div className="App">
      <h1> React Reservatio App</h1>
      <Reservation name={name} />
    </div>
  );
}

export default App;
