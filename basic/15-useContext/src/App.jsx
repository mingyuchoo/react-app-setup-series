import React from 'react';
import { UserProvider } from './contexts/UserContext';

import UserPage from './components/UserPage';

import './App.scss';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <UserPage />
      </div>
    </UserProvider>
  );
}

export default App;
