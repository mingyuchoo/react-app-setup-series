import React from 'react';
import './App.scss';
import { Hello1, Hello2 } from './components/Hello';
import Counter from './components/Counter';

const App: React.FC = () => {
  return (
    <div data-testid="App" className="App">
      <Hello1 compiler="TypeScript" framework="React" />
      <hr />
      <Hello2 compiler="Demo" framework="Oak" />
      <hr />
      <Counter />
      <hr />
    </div>
  );
};

export default App;
