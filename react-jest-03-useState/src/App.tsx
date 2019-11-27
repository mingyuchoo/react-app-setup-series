import React from 'react'
import logo from './logo.svg'
import './App.css'

const AppLink: React.FC = () => {
  return (
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  )
}

const AppParagraph: React.FC = () => {
  return (
    <p>
      Edit <code>src/App.tsx</code> and save to reload.
    </p>
  )
}

const AppLogo: React.FC = () => {
  return <img src={logo} className="App-logo" alt="logo" />
}

const AppHeader: React.FC = () => {
  return (
    <header className="App-header">
      <AppLogo />
      <AppParagraph />
      <AppLink />
    </header>
  )
}

const App: React.FC = () => {
  return (
    <div className="App">
      <AppHeader />
    </div>
  )
}

export default App
