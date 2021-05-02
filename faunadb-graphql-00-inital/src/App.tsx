import './App.scss';

import React from 'react';

import ListContainer from './containers/ListContainer';

const App: React.FC = (): React.ReactElement => {
  return (
    <div className="App">
      <ListContainer />
    </div>
  );
};

export default App;
