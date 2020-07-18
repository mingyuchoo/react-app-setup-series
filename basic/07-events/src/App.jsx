import React from 'react';

import './App.scss';

import EventPractice from './components/EventPractice';
// import MyComponent from './components/MyComponent';

function App() {
  const name = 'I want to use hotel room';
  return (
    <div className="App">
      <h1> React App</h1>
      <EventPractice />
      {/* <MyComponent name={name} /> */}
    </div>
  );
}

export default App;
