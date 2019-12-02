import React, { ReactElement } from 'react';

import ToDo from './components/ToDo';

/**
 * App
 */
// function App(): ReactElement {
const App: React.FC = (): ReactElement => {
  return (
    <div className="App">
      <ToDo />
    </div>
  );
};

export default App;
