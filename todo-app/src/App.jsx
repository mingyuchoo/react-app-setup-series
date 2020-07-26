import React from 'react';
import './App.scss';

import TodoContainer from './components/TodoContainer';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <TodoContainer>
        <TodoInsert />
        <TodoList />
      </TodoContainer>
    </div>
  );
}

export default App;
