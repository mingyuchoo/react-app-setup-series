import './index.scss';

import { ApolloClient, ApolloProvider, HttpLink, split } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { WebSocketLink } from '@apollo/client/link/ws'; // for subscription
import { getMainDefinition } from '@apollo/client/utilities';
import { initializeIcons } from '@uifabric/icons';
import { persistCacheSync } from 'apollo3-cache-persist'; // Cache 때문에 사용한다.
import dotenv from 'dotenv';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { cache } from './cache';
import * as serviceWorker from './serviceWorker';

dotenv.config();
initializeIcons();

const SERVER_URI = process.env.REACT_APP_SERVER_URI;

// TODO: storage 타입을 제대로 선언해야 함.
// 참고 - https://github.com/apollographql/apollo-cache-persist/issues/55
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

const httpLink = new HttpLink({
  uri: SERVER_URI ? `https://${SERVER_URI}` : 'http://localhost:4000/graphql',
  credentials: 'same-origin', // 참고 - https://www.apollographql.com/docs/react/networking/authentication/
});

const authLink = setContext((_, { headers }) => {
  const token = process.env.REACT_APP_AUTH_TOKEN || localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '', // security token here
    },
  };
});

const wsLink = new WebSocketLink({
  uri: SERVER_URI ? `ws://${SERVER_URI}` : 'ws://localhost:4000/graphql',
  options: {
    reconnect: true,
    lazy: true, //  prevents our link from connecting to the web socket until the client has been asked to subscribe.
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  },
  wsLink,
  authLink.concat(httpLink)
);

const client = new ApolloClient({
  link: splitLink,
  cache: cache,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// serviceWorker.unregister();
