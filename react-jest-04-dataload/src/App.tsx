import React, { ReactElement } from 'react'
import './App.css'

import { DataLoader } from './components/DataLoader'

const AppHeader: React.FC = (): ReactElement => {
  return (
    <div>
      <DataLoader />
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
