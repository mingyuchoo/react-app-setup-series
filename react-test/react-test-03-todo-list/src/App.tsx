import React, { ReactElement } from 'react';

import ToDo from './components/ToDo/ToDo';

/**
 * App
 * link - https://medium.com/javascript-in-plain-english/i-tested-a-react-app-with-jest-testing-library-and-cypress-here-are-the-differences-3192eae03850
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
