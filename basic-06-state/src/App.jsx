import React from 'react';

import './App.scss';

import MyComponent from './components/MyComponent';

function App() {
  const name = 'MyComponent';
  return (
    <div className="App">
      <h1> React App</h1>
      <MyComponent name={name} />
    </div>
  );
}

export default App;
