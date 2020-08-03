import React from 'react';
import CounterContainer from './containers/CounterContainer';
import TodoList from './components/TodoList';

import './App.scss';

function App() {
  return (
    <div className="container">
      <CounterContainer />
      <TodoList />
    </div>
  );
}

export default App;
