import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';


class Image extends Component {
  render() {
    return (
      <img src={logo} className="Frontend" alt="logo" />
    );
  }
}

class Paragraph extends Component {
  state = {echo: null}
  componentDidMount() {
    fetch('http://localhost/api/echo')
    .then(response => response.json())
    .then(data => this.setState({echo: data.echo}))
  }
  render() {
    return (
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
        {" "}
        {this.state.echo}
      </p>
    );
  }
}

class Link extends Component {
  render() {
    return (
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer">
        Learn React
      </a>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <Image />
        <Paragraph />
        <Link />
      </header>
    );
  }
}

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
