import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Switch, Route, Link } from 'react-router-dom';

import NewsContainer from './containers/NewsContainer';

const StyledApp = styled.div`
  div {
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

const App = () => {
  const apiKey = '3b1f065bc28b44ee8ad1be9e71e02092';
  const country = 'us';
  const category = 'business';
  const [pageSize] = useState(5);
  const [page, setPage] = useState(1);
  const URL = `http://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&pageSize=${pageSize}&page=${page}`;

  let [articles, setArticles] = useState([]);

  const fetchArticles = useCallback(async () => {
    try {
      const response = await axios.get(URL);
      setArticles([...articles, ...response.data.articles]);
      console.log(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  }, [page]);

  useEffect(() => {
    fetchArticles();
    console.log('[Updated]');
    return () => {
      console.log('[Unmounting]');
    };
  }, [page, fetchArticles]);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/">
          <StyledApp>
            <NewsContainer articles={articles} page={page} setPage={setPage} />
          </StyledApp>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
