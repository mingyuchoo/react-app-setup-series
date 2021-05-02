import React from 'react';
import './App.scss';

import UserTitleContainer from './containers/UserTitleContainer';
import UserListContainer from './containers/UserListContainer';
import UserFormConatiner from './containers/UserFormContainer';

const App: React.FC = (): React.ReactElement => {
  return (
    <div className="App">
      <UserTitleContainer />
      <UserFormConatiner />
      <UserListContainer />
    </div>
  );
};

export default App;
