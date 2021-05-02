import React from 'react';
import './App.scss';
import * as Components from './components';

const App: React.FC = () => {
  return (
    <div data-testid="App" className="App">
      <Components.Hello1 compiler="TypeScript" framework="React" />
      <hr />
      <Components.Hello2 compiler="Demo" framework="Oak" />
      <hr />
      <Components.Counter />
      <hr />
      <div>
        <Components.TodoInsert />
        <Components.TodoList />
      </div>
      <hr />
      <Components.Card />
    </div>
  );
};

export default App;
