import React from 'react';
import CounterContainer from './containers/CounterContainer';
import TodoContainer from './containers/TodosContainer';

import './App.scss';

function App() {
  return (
    <div className="container">
      <CounterContainer />
      <TodoContainer />
    </div>
  );
}

export default App;
