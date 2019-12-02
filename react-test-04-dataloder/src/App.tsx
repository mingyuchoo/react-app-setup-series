import React, { ReactElement } from 'react'
import logo from './logo.svg'
import './App.css'

import { Counter } from './components/Counter'
import { DataLoader } from './components/DataLoader'

/**
 * AppLink
 */
interface AppLinkProps {
  href: string
  target: string
  rel: string
}

// function AppLink<AppLinkProps>(props: AppLinkProps): ReactElement {
const AppLink: React.FC<AppLinkProps> = (props: AppLinkProps): ReactElement => {
  return (
    <a
      className="App-link"
      href={props.href}
      target={props.target}
      rel={props.rel}
    >
      Learn React
    </a>
  )
}

/**
 * AppParagraph
 */
// function AppParagraph(): ReactElement {
const AppParagraph: React.FC = (): ReactElement => {
  return (
    <p>
      Edit <code>src/App.tsx</code> and save to reload.
    </p>
  )
}

/**
 * AppLogo
 */
// function AppLogo(): ReactElement {
const AppLogo: React.FC = (): ReactElement => {
  return <img src={logo} className="App-logo" alt="logo" />
}

/**
 * AppHeader
 */
// function AppHeader(): ReactElement {
const AppHeader: React.FC = (): ReactElement => {
  return (
    <header className="App-header">
      <AppLogo />
    </header>
  )
}

/**
 * AppBody
 */
// function AppBody(): ReactElement {
const AppBody: React.FC = (): ReactElement => {
  return (
    <div className="App-body">
      <AppParagraph />
      <AppLink
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      />
      <Counter initial={1} />
      <DataLoader />
    </div>
  )
}

/**
 * AppFooter
 */
// function AppFooter(): ReactElement {
const AppFooter: React.FC = (): ReactElement => {
  return <footer></footer>
}

/**
 * App
 */
// function App(): ReactElement {
const App: React.FC = (): ReactElement => {
  return (
    <div className="App">
      <AppHeader />
      <AppBody />
      <AppFooter />
    </div>
  )
}

export default App
