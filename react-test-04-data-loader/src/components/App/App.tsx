import React, { ReactElement } from 'react';
import logo from '../../logo.svg';
import './App.scss';

// link - https://medium.com/javascript-in-plain-english/i-tested-a-react-app-with-jest-testing-library-and-cypress-here-are-the-differences-3192eae03850

/**
 * AppLink
 */
export interface AppLinkProps {
  href: string;
  target: string;
  rel: string;
}

// function AppLink<AppLinkProps>(props: AppLinkProps): ReactElement {
export const AppLink: React.FC<AppLinkProps> = (
  props: AppLinkProps
): ReactElement => {
  return (
    <a
      className="App-link"
      href={props.href}
      target={props.target}
      rel={props.rel}
    >
      Learn React
    </a>
  );
};

/**
 * AppParagraph
 */
// function AppParagraph(): ReactElement {
export const AppParagraph: React.FC = (): ReactElement => {
  return (
    <p>
      Edit <code>src/App.tsx</code> and save to reload.
    </p>
  );
};

/**
 * AppLogo
 */
// function AppLogo(): ReactElement {
export const AppLogo: React.FC = (): ReactElement => {
  return <img src={logo} className="App-logo" alt="logo" />;
};

/**
 * AppHeader
 */
// function AppHeader(): ReactElement {
export const AppHeader: React.FC = (): ReactElement => {
  return (
    <header className="App-header">
      <AppLogo />
    </header>
  );
};

/**
 * AppBody
 */
// function AppBody(): ReactElement {
export const AppBody: React.FC = (): ReactElement => {
  return (
    <div className="App-body">
      <AppParagraph />
      <AppLink
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      />
    </div>
  );
};

/**
 * AppFooter
 */
// function AppFooter(): ReactElement {
export const AppFooter: React.FC = (): ReactElement => {
  return <footer></footer>;
};

/**
 * App
 */
// function App(): ReactElement {
export const App: React.FC = (): ReactElement => {
  return (
    <div className="App">
      <AppHeader />
      <AppBody />
      <AppFooter />
    </div>
  );
};

export default App;
