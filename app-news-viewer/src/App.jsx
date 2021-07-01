import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import NewsContainer from './containers/NewsContainer';

const StyledApp = styled.body`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

function App() {
  const URL =
    'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3b1f065bc28b44ee8ad1be9e71e02092';
  let [data, setData] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(URL);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
    console.log('useEffect() is called');
    return () => {
      console.log('useEffect() return is called');
    };
  }, [fetchData]);

  return (
    <StyledApp>
      <NewsContainer data={data} />
    </StyledApp>
  );
}

export default App;
