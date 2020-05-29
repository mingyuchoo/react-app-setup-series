import React, { Component } from 'react';

class MyForm01 extends Component {
  render() {
    return (
      <form>
        <h1>Hello</h1>
        <p>Enter your name:</p>
        <input type='text' />
      </form>
    )
  }
}

class MyForm02 extends Component {
  constructor(props) {
    super(props);
    this.state = {username: ''};
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  render() {
    return (
      <form>
        <h1>Hello {this.state.username}</h1>
        <p>Enter your name:</p>
        <input type='text' onChange={this.myChangeHandler} />
      </form>
    );
  }
}

class MyForm03 extends Component {
  constructor(props) {
    super(props);
    this.state = {username: ''};
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  render() {
    let header = '';
    if (this.state.username) {
      header = <h1>Hello {this.state.username}</h1>
    } else {
      header = '';
    }
    return (
      <form>
        {header}
        <p>Enter your name:</p>
        <input type='text' onChange={this.myChangeHandler} />
      </form>
    )
  }
}

class MyForm04 extends Component {
  constructor(props) {
    super(props);
    this.state = {username: ''};
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting " + this.state.username);
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
        <h1>Hello {this.state.username}</h1>
        <p>Enter your name, and submit:</p>
        <input type='text' onChange={this.myChangeHandler} />
        <input type='submit' />
      </form>
    )
  }
}

class MyForm05 extends Component {
  constructor(props) {
    super(props);
    this.state = {username: '', age: null};
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form>
        <h1>Hello {this.state.username} {this.state.age}</h1>
        <p>Enter your name:</p>
        <input type='text' name='username' onChange={this.myChangeHandler} />
        <p>Enter your age:</p>
        <input type='text' name='age' onChange={this.myChangeHandler} />
      </form>
    )
  }
}

class MyForm06 extends Component {
  constructor(props) {
    super(props);
    this.state = {username: '', age: null,};
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    if (nam === "age") {
      if (!Number(val)) {
        alert("Your age must be a number");
      }
    }
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form>
        <h1>Hello {this.state.username} {this.state.age}</h1>
        <h2>{this.state.error}</h2>
        <p>Enter your name:</p>
        <input type='text' name='username' onChange={this.myChangeHandler} />
        <p>Enter your age:</p>
        <input type='text' name='age' onChange={this.myChangeHandler} />
      </form>
    )
  }
}

class MyForm07 extends Component {
  constructor(props) {
    super(props);
    this.state = {username: '', age: null,};
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    let age = this.state.age;
    if (!Number(age)) {
      alert("Your age must be a number");
    }
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
        <h1>Hello {this.state.username} {this.state.age}</h1>
        <h2>{this.state.error}</h2>
        <p>Enter your name:</p>
        <input type='text' name='username' onChange={this.myChangeHandler} />
        <p>Enter your age:</p>
        <input type='text' name='age' onChange={this.myChangeHandler} />
        <br/><br/>
        <input type='submit' />
      </form>
    )
  }
}

class MyForm08 extends Component {
  constructor(props) {
    super(props);
    this.state = {username: '', age: null, errormessage: ''};
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = '';
    if (nam === "age") {
      if (val != "" && !Number(val)) {
        err = <strong>Your age must be a number</strong>;
      }
    }
    this.setState({errormessage: err});
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form>
        <h1>Hello {this.state.username} {this.state.age}</h1>
        <p>Enter your name:</p>
        <input type='text' name='username' onChange={this.myChangeHandler} />
        <p>Enter your age:</p>
        <input type='text' name='age' onChange={this.myChangeHandler} />
        {this.state.errormessage}
      </form>
    );
  }
}

class MyForm09 extends Component {
  constructor(props) {
    super(props);
    this.state = {description: 'The content of a textarea goes in the value attribute'};
  }
  render() {
    return (
      <form>
        <textarea value={this.state.description} />
      </form>
    );
  }
}

class MyForm10 extends Component {
  constructor(props) {
    super(props);
    this.state = {mycar: 'Volvo'};
  }
  render() {
    return (
      <form>
        <select value={this.state.mycar}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>
      </form>
    )
  }
}

export {
  MyForm01,
  MyForm02,
  MyForm03,
  MyForm04,
  MyForm05,
  MyForm06,
  MyForm07,
  MyForm08,
  MyForm09,
  MyForm10,
}