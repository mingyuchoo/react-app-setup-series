import React from 'react';
import './App.scss';

import Title from './components/Title';
import Form from './components/Form';
import UserList from './components/UserList';

/**
 * // Other way (1)
 *
 * const App: React.FC = ():React.ReactElement => {
 */

// Other way (2)
function App(): React.ReactElement {
  const title = 'User Information';
  return (
    <div className="App">
      <Title title={title} />
      <Form />
      <UserList />
    </div>
  );
}

export default App;
