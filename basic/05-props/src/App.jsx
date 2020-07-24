import React from 'react';

import './App.scss';

import List from './components/List';

function App() {
  const items = [1, 2, 3, 4];
  return (
    <div className="App">
      <h1>React App</h1>
      <List items={items} />
    </div>
  );
}

export default App;
