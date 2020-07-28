import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import './App.scss';

function App() {
  let [data, setData] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3b1f065bc28b44ee8ad1be9e71e02092'
      );
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
    console.log('useEffect() is called');
    return () => {
      console.log('useEffect() return is called');
    };
  }, [fetchData]);

  return (
    <div className="App">
      <h1>News</h1>
      <h2>{data && data.totalResults} articles</h2>
      <h3>Articles</h3>
      <div>
        {data &&
          data.articles.map((article, index) => (
            <div key={index}>
              <h4>
                {article.author} - {article.title}
              </h4>
              <p>{article.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
