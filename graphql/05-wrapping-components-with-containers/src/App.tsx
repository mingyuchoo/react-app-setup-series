import React from 'react';
import './App.scss';

import UserTitleContainer from './containers/UserTitleContainer';
import UserListContainer from './containers/UserListContainer';
import UserForm from './components/UserForm';

const App: React.FC = (): React.ReactElement => {
  return (
    <div className="App">
      <UserTitleContainer />
      <UserForm />
      <UserListContainer />
    </div>
  );
};

export default App;
