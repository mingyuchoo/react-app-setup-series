import React, { Component } from 'react';

// This is a Class Compoent having props
class Train extends Component {
  render() {
    return <h2>Hi, I am a {this.props.color} Train!</h2>
  }
}

export default Train;