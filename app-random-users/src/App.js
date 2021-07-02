import React from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import UserList from './components/UserList';

const StyledApp = styled.div`
  margin: auto;
  width: 50%;
`;
const App = () => {
  return (
    <StyledApp className="App">
      <Header />
      <UserList />
    </StyledApp>
  );
};

export default App;
