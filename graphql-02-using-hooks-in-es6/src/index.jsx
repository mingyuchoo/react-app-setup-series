import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import App from './App';
import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
  uri: 'https://sleepy-plains-38954.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
