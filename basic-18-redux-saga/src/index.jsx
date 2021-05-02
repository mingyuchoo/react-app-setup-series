import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import rootReducer, { rootSaga } from './redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import App from './App';

const logger = createLogger();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, sagaMiddleware)));

const container = document.getElementById('root');

sagaMiddleware.run(rootSaga);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
);
