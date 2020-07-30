import React from 'react';
import { ColorProvider } from './contexts/ColorContext';
import ColorBox from './components/ColorBox';
import SelectColors from './components/SelectColors';

import './App.scss';

function App() {
  return (
    <ColorProvider>
      <div className="App">
        <SelectColors />
        <hr />
        <ColorBox />
      </div>
    </ColorProvider>
  );
}

export default App;
