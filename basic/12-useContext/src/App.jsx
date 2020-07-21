import React from 'react';
import { AppContextProvider } from './contexts/AppContext';

import PostsPage from './components/PostsPage';

import './App.scss';

/* App */
const App = () => {
  const user = {
    nickname: 'danuel',
    isAdmin: true,
  };

  return (
    <AppContextProvider value={user}>
      <div>
        <PostsPage />
      </div>
    </AppContextProvider>
  );
};

export default App;
