import './App.scss';

import React from 'react';

import Information from './components/Information';

const App: React.FC = (): React.ReactElement => {
  return (
    <div className="App">
      <Information />
    </div>
  );
};

export default App;
