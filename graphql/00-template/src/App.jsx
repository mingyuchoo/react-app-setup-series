import React from 'react';
import './App.css';
import CharacterWithHOC from './CharacterWithHOC';
import MutationWithHOC from './MutationWithHOC';

function App() {
  return (
    <div className="App">
      <h1>Characters</h1>
      <CharacterWithHOC />
    </div>
  );
}

export default App;
