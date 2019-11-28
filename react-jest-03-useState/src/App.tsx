import React, { Component, useState } from 'react'
import logo from './logo.svg'
import './App.css'

import {
  ButtonClass,
  ButtonFunction1,
  ButtonFunction2,
} from './components/UseStateExample'

const AppLink: React.FC = () => {
  const [link, setLink] = useState('https://reactjs.org')
  const [target, setTarget] = useState('_blank')
  const [rel, setRel] = useState('noopener noreferrer')

  return (
    <a className="App-link" href={link} target={target} rel={rel}>
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
    <div>
      <ButtonClass />
      <ButtonFunction1 />
      <ButtonFunction2 />
      <header className="App-header">
        <AppLogo />
        <AppParagraph />
        <AppLink />
      </header>
    </div>
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
