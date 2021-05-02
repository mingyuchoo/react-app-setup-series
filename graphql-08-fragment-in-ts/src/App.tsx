import './App.scss';

import React from 'react';

import City from './components/City';

const App: React.FC = (): React.ReactElement => {
  return (
    <div className="App">
      <City />
    </div>
  );
};

export default App;
