import React, { Component } from 'react';


// This is a Class Component having state
class Car extends Component {
  // constructor needs to be changed
  constructor() {
    super();
    this.state = {color: "red"};
  }
  render() {
    return <h2>Hi, I'm a {this.state.color} {this.props.brand.model} Car!</h2>
  }
}

// This is a class compoent using props in constructor
class SportsCar extends Component {
  // constructor
  constructor(props) {
    super(props);
  }
  render() {
    return <h2>I am a Sports Car!</h2>;
  }
}

// This is a Class Component having Car class Component having props
class Garage extends Component {
  render() {
    const carinfo = {
      name: "Ford",
      model: "Mustang"
    };
    return (
      <div>
        <h1>Who lives in my Garage?</h1>
        <Car brand={carinfo} />
        <SportsCar />
      </div>
    );
  }
}

export default Garage;
