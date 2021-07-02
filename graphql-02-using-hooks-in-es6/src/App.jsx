import React from 'react';
import styled from 'styled-components';
import Title from './components/Title';
import Form from './components/Form';
import UserList from './components/UserList';

const StyledApp = styled.div`
  margin: auto;
  width: 70%;
  padding: 1rem;
  color: #61dafb;
  background-color: #282c34;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #20232a;
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;

function App() {
  const title = 'User Information';
  return (
    <StyledApp>
      <Title title={title} />
      <Form />
      <UserList />
    </StyledApp>
  );
}

export default App;
