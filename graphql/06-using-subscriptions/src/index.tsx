import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import App from './App';
import { cache } from './cache';

import './index.scss';

// 1
import { ApolloClient, ApolloProvider, split, HttpLink } from '@apollo/client';
import { WebSocketLink, WebSocketLint } from '@apollo/client/link/ws'; // for subscription
import { persistCacheSync } from 'apollo3-cache-persist'; // Cache 때문에 사용한다.
import { getMainDefinition } from '@apollo/client/utilities';

// graphql server uri
const SERVER_URI = 'https://sleepy-plains-38954.herokuapp.com/graphql';

// TODO storage 타입을 제대로 선언해야 함.
// 참고: https://github.com/apollographql/apollo-cache-persist/issues/55
persistCacheSync({
  cache,
  storage: window.localStorage as any,
  debug: true,
});

if (localStorage['apoll-cache-persist']) {
  console.log(localStorage['apollo-cache-persist']);
  const cacheData = JSON.parse(localStorage['apollo-cache-persist']);
  cache.restore(cacheData);
}

// 2 - query, and mutation using HTTP Protocol
const httpLink = new HttpLink({
  uri: SERVER_URI,
});

// 3 - subscription using WebSocket Protocol
const wsLink = new WebSocketLink({
  uri: SERVER_URI,
  options: {
    reconnect: true,
  },
});

// 4
const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  },
  httpLink,
  wsLink
);

// 5
const client = new ApolloClient({
  link,
  cache: cache,
});

// 4
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
