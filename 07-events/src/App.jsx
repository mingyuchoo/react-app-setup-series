import React from 'react';

import './App.scss';

// import EventPractice from './components/EventPractice';
// import MyComponent from './components/MyComponent';
import Form from './components/Form';

function App() {
  const name = 'I want to use hotel room';
  return (
    <div className="App">
      <h1> React App</h1>
      {/* <EventPractice /> */}
      {/* <MyComponent name={name} /> */}
      <Form />
    </div>
  );
}

export default App;
