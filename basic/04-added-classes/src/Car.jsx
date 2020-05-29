import React, { Component } from 'react';

// This is a Class Component having state
class Car extends Component {
  // constructor
  constructor() {
    super();
    this.state = {color: "red"};
  }
  render() {
    return <h2>Hi, I'm a {this.state.color} Car!</h2>
  }
}

export default Car;