import React, { Component } from 'react';

import './MyHeaders.css';
import styles from './myheaders.module.css';

class MyHeader01 extends Component {
  render() {
    return (
      <div>
        <h1 style={{color: "red", background: "lightblue"}}>Hello Style!</h1>
        <p>Add a little style!</p>
      </div>
    )
  }
}


class MyHeader02 extends Component {
  render() {
    const mystyle = {
      color: "White",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };
    return (
      <div>
        <h1 style={mystyle}>Hello2 Style!</h1>
        <p>Add a little style!</p>
      </div>
    )
  }
}

class MyHeader03 extends Component {
  render() {
    return <h1 className={styles.bigblue}>Hello Car!</h1>
  }
}

export {
  MyHeader01,
  MyHeader02,
  MyHeader03,
}