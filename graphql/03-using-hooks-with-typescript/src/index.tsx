import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 1
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// 2
const client = new ApolloClient({
  uri: 'https://sleepy-plains-38954.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

// 3
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
