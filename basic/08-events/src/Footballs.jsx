import React, { Component } from 'react';

class Football01 extends Component {
  shoot = () => {
    // alert("Great Shot!");
    alert(this);
  }
  render() {
    return (
      <button onClick={this.shoot}>
        Take the shot!
      </button>
    );
  }
}

class Football02 extends Component {
  shoot = (arg) =>  {
    alert("Shot " + arg);
  }
  render() {
    return (
      <button onClick={() => this.shoot("Goal")}>
        Take the shot!
      </button>
    )
  }
}

class Football02OldVersion extends Component {
  shoot (arg) {
    alert("Shot " + arg);
  }
  render() {
    return (
      <button onClick={this.shoot.bind(this, "Goal")}>
        Take the shot!
      </button>
    )
  }
}
class Football03 extends Component {
  shoot = (a, b) => {
    alert(b.type);
    /*
    'b' represents the React event that triggered the function,
    in this case the 'cick' event
     */
  }
  render() {
    return (
      // <button onClick={this.shoot.bind(this, "Goal")}>
      <button onClick={(event) => this.shoot("Goal", event)}>
        Take the shot!
      </button>
    );
  }
}

export {
  Football01,
  Football02,
  Football02OldVersion,
  Football03,
}