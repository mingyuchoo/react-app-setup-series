import React from 'react';
import './App.scss';

import TodoContainer from './components/TodoContainer';
import TodoTitle from './components/TodoTitle';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <TodoContainer>
        <TodoTitle />
        <TodoInsert />
        <TodoList />
      </TodoContainer>
    </div>
  );
}

export default App;
