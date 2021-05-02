import './index.css';

import { ApolloClient, ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import cache from './cache';
import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
  link: 'http://localhost:4000/graphq',
  cache: cache,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);

reportWebVitals();
