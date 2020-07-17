import React from 'react';
import './App.scss';

import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <h1 className="title">News Post</h1>
      <UserList />
    </div>
  );
}

export default App;
