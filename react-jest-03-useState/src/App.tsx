import React, { useState, ReactElement } from 'react'
import logo from './logo.svg'
import './App.css'

import { Counter } from './components/Counter'
import { DataLoader } from './components/DataLoader'

const AppLink: React.FC = (): ReactElement => {
  const [link, setLink] = useState('https://reactjs.org')
  const [target, setTarget] = useState('_blank')
  const [rel, setRel] = useState('noopener noreferrer')

  return (
    <a className="App-link" href={link} target={target} rel={rel}>
      Learn React
    </a>
  )
}

const AppParagraph: React.FC = (): ReactElement => {
  return (
    <p>
      Edit <code>src/App.tsx</code> and save to reload.
    </p>
  )
}

const AppLogo: React.FC = (): ReactElement => {
  return <img src={logo} className="App-logo" alt="logo" />
}

const AppHeader: React.FC = (): ReactElement => {
  return (
    <div>
      <Counter initial={1} />
      <header className="App-header">
        <AppLogo />
        <AppParagraph />
        <AppLink />
      </header>
    </div>
  )
}

const App: React.FC = (): ReactElement => {
  return (
    <div className="App">
      <AppHeader />
    </div>
  )
}

export default App
