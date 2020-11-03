import './App.scss';

import React from 'react';

import UserFormConatiner from './containers/UserFormContainer';
import UserListContainer from './containers/UserListContainer';
import UserNotiContainer from './containers/UserNotiContainer';
import UserTitleContainer from './containers/UserTitleContainer';

const App: React.FC = (): React.ReactElement => {
  return (
    <div className="App">
      <UserTitleContainer />
      <UserNotiContainer />
      <UserFormConatiner />
      <UserListContainer />
    </div>
  );
};

export default App;
