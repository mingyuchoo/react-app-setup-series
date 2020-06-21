import React from 'react';
import './App.scss';
import { Hello1, Hello2 } from './components/Hello';
import Counter from './components/Counter';

import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  return (
    <div data-testid="App" className="App">
      <Hello1 compiler="TypeScript" framework="React" />
      <hr />
      <Hello2 compiler="Demo" framework="Oak" />
      <hr />
      <Counter />
      <hr />
      <div>
        <TodoInsert />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
