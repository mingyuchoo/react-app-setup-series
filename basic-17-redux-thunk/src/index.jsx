import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

import App from './App';

const logger = createLogger();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

const container = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
);
