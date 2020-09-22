import React from 'react';
import './App.scss';

import UserListWithHOC from './components/UserListWithHOC';

function App() {
  return (
    <div className="App">
      <h1>Characters</h1>
      <UserListWithHOC />
    </div>
  );
}

export default App;
