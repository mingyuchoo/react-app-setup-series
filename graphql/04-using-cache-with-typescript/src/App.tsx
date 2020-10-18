import React from 'react';
import './App.scss';

import UserTitle from './components/UserTitle';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

// // 구현 방법 (1)
// const App: React.FC = ():React.ReactElement => {

// 구현 방법 (2)
function App(): React.ReactElement {
  const title = 'User Information';
  return (
    <div className="App">
      <UserTitle title={title} />
      <UserForm />
      <UserList />
    </div>
  );
}

export default App;
