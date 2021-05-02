import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Button from './components/Button';
import { Hello1, Hello2 } from './components/Hello';
import { theme } from './styles/theme';

const StyledDiv = styled.div`
  text-align: center;
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledDiv data-testid="App">
        <Hello1 compiler="TypeScript" framework="React" />
        <Hello2 compiler="Demo" framework="Oak" />
        <Button />
      </StyledDiv>
    </ThemeProvider>
  );
};

export default App;
