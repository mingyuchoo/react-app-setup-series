import React from 'react';
import './App.scss';

import Title from './components/Title';
import UserInput from './components/UserInput';
import UserList from './components/UserList';

function App() {
  const title = 'User Information';
  return (
    <div className="App">
      <Title title={title} />
      <UserInput />
      <UserList />
    </div>
  );
}

export default App;
