import React, { Component } from 'react';

import Car from './Car';

// This is a Class Component having Car class Component
class Garage extends Component {
  render() {
    return (
      <div>
        <h1>Who lives in my Garage?</h1>
        <Car />
      </div>
    );
  }
}

export default Garage;
