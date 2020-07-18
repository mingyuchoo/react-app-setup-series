import React from 'react';

import './App.scss'

import MyComponent from './components/MyComponent';

function App() {
  const name = 'React';
  return (
    <div className="App">
      <h1>{name || 'React'} App</h1>
      <MyComponent name={name} favoriteNumber={3}>
        리액트
      </MyComponent>
    </div>
  )};

export default App;
