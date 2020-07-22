import React, { useState } from 'react';
import { AppContextProvider } from './contexts/AppContext';

import PostsPage from './components/PostsPage';

import './App.scss';

const initialState = {
  nickname: 'Charlie',
  isAdmin: true,
};

/* App */
const App = () => {
  const [user, setUser] = useState(initialState);

  return (
    <AppContextProvider value={[user, setUser]}>
      <div className="App">
        <PostsPage />
      </div>
    </AppContextProvider>
  );
};

export default App;
