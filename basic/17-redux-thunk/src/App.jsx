import React from 'react';
import CounterContainer from './containers/CounterContainer';
import PostUsersContainer from './containers/PostUsersContainer';

function App() {
  return (
    <div className="container mt-5">
      <CounterContainer />
      <hr />
      <PostUsersContainer />
    </div>
  );
}

export default App;
