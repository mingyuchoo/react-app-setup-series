import React from 'react';

import './App.scss'

function App() {
  // const name = 'React';
  const name = undefined;
  return (
    <div className="App">
      <h1>{name || 'React'} App</h1>
      <h2>Is this working well?</h2>
      <div>
        {
          name === 'React' || 'React' ?
          (<p>This is a React App.</p>):
          (<p>This is not a React App.</p>)
        }
      </div>
      <input />
    </div>
  );
}
export default App;
