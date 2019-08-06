import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

interface ImageProps {logo: any }
interface ImageState {}
class Image extends Component<ImageProps, ImageState> {
  constructor(props: ImageProps) {
    super(props);
  }
  render() {
    return (
      <img src={this.props.logo} className="Frontend" alt="logo" />
    );
  }
}

interface ParagraphProps {}
interface ParagraphState {}
class Paragraph extends Component<ParagraphProps, ParagraphState> {
  constructor(props: ParagraphProps) {
    super(props);
  }
  render() {
    return (
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
    );
  }
}

interface LinkProps {}
interface LinkState {}
class Link extends Component<LinkProps, LinkState> {
  constructor(props: LinkProps) {
    super(props);
  }
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

interface HeaderProps {logo: any }
interface HeaderState {}
class Header extends Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
  }
  render() {
    return (
      <header className="App-header">
        <Image logo={this.props.logo} />
        <Paragraph />
        <Link />
      </header>
    );
  }
}

const App: React.FC = () => {
  return (
    <div className="App">
      <Header logo={logo} />
    </div>
  );
}

export default App;
