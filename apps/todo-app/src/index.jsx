import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import { debugContextDevtool } from 'react-context-devtool';  // for edge browser
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './App';
import rootReducer from './modules';

const store = createStore(rootReducer, composeWithDevTools());
const container = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
);

/* for edge browser */
// debugContextDevtool(container, {
//   disable: process.env.NODE_ENV === 'production',
// });
