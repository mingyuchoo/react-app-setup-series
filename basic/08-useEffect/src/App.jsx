import React from 'react';

import './App.scss';

import LifecycleComponent from './components/LifecycleComponent';
import LifecycleFunction1 from './components/LifecycleFunction1';
import LifecycleFunction2 from './components/LifecycleFunction2';
import LifecycleFunction3 from './components/LifecycleFunction3';

function App() {
  return (
    <div className="App">
      <h1>React Lifecycle</h1>
      <LifecycleComponent />
      <hr />
      <LifecycleFunction1 />
      <hr />
      <LifecycleFunction2 />
      <hr />
      <LifecycleFunction3 />
    </div>
  );
}

export default App;
