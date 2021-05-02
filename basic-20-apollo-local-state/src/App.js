import './App.css';

import React from 'react';

import Page from './components/Page';
import logo from './logo.svg';
import { modifyTitle, useTitle } from './state/title';

function App() {
  const { loading, error, data } = useTitle();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  if (!data) return <div>No data</div>;

  const onClick = () => {
    modifyTitle('NEW TITLE');
  };
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <button onClick={onClick}>{data.title}</button>
    //   </header>
    // </div>
    <div>
      <Page />
    </div>
  );
}

export default App;
