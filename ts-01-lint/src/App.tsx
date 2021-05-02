import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/theme';

import TodoList from './components/TodoList';
const App = () => (
  <ThemeProvider theme={lightTheme}>
    <TodoList />
  </ThemeProvider>
);

export default App;
