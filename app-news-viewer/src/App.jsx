import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import NewsContainer from './containers/NewsContainer';

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

  return <NewsContainer data={data} />;
}

export default App;
