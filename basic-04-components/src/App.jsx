import React from 'react';

import './App.scss';

import MyComponent from './components/MyComponent';

function App() {
  const name = 'React';
  return (
    <div className="App">
      <h1>{name || 'React'} App</h1>
      <MyComponent />
    </div>
  );
}

export default App;
