import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Garage from './Garage';
import Train from './Train';
import Ship from './Ship';

// This is a element
const myElement = (
  <div>
    <h1>I am a header.</h1>
    <ul>
      <li>Apples</li>
      <li>Bananas</li>
      <li>Cherries</li>
    </ul>
    <Garage />
    <Train color="blue" />
    <Ship />
    <App />
  </div>
);

ReactDOM.render(
  myElement,
  document.getElementById('root')
);