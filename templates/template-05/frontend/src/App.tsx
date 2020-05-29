import React, { Component } from 'react'

import './App.css'

import Header from './components/Header'
import logo from './logo.svg'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header logo={logo} />
    </div>
  )
}

export default App;
