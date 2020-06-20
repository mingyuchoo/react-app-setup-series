import React from 'react';
import './App.scss';
import { Hello1, Hello2 } from './components/Hello';

const App: React.FC = () => {
  return (
    <div className="App">
      <Hello1 compiler="TypeScript" framework="React" />
      <Hello2 compiler="Demo" framework="Oak" />
    </div>
  );
};

export default App;
