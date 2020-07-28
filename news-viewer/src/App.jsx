import React, { useState } from 'react';
import axios from 'axios';

import './App.scss';

function App() {
  const [contents, setContents ] = useState(null);

  const onClickButton = async () => {
    try {
      const news = await axios.get("http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3b1f065bc28b44ee8ad1be9e71e02092")
      console.log(news.data.articles)
      setContents(news.data)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      <button className="button" onClick={onClickButton}>
        Click Me
      </button>
      <p>{JSON.stringify(contents)}</p>  
    </div>
  );
}

export default App;
