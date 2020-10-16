import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 1
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { persistCacheSync } from 'apollo3-cache-persist'; // Cache 때문에 사용한다.

const cache = new InMemoryCache({
  addTypename: true,
  resultCaching: true,
  typePolicies: {},
});

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

// 2
const client = new ApolloClient({
  uri: 'https://sleepy-plains-38954.herokuapp.com/graphql',
  cache: cache,
});

// 3
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
