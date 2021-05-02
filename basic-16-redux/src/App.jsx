import React from 'react';
import CounterContainer from './containers/CounterContainer';
import TodoContainer from './containers/TodosContainer';

import BooksContainer from './containers/BooksContainer';

import './App.scss';

function App() {
  return (
    <div className="container">
      <CounterContainer />
      <hr />
      <TodoContainer />
      <hr />
      <BooksContainer />
    </div>
  );
}

export default App;
