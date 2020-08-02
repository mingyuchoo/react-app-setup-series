import React from 'react';
import CounterContainer from './components/CounterContainer';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="container">
      <div>
        <CounterContainer />
      </div>
      <div>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
