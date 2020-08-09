import React from 'react';
import ReactDOM from 'react-dom';

import { debugContextDevtool } from 'react-context-devtool';  // for edge browser
import { composeWithDevTools } from 'redux-devtools-extension'; // for google-chrome

import App from './App';


const container = document.getElementById('root');

ReactDOM.render(
    <App />,
  container
);

/* for edge browser */
debugContextDevtool(container, {
  disable: process.env.NODE_ENV === 'production',
});
