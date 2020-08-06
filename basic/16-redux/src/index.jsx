import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { debugContextDevtool } from 'react-context-devtool';

import App from './App';
import rootReducer from './modules';

const store = createStore(
  rootReducer
);

const container = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
);


debugContextDevtool(container, {
  disable: process.env.NODE_ENV === "production"
});
