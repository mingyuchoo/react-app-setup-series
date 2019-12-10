import React, { useState, ReactElement, useEffect } from 'react';
import axios from 'axios';
import './DataLoader.scss';

const URL = 'http://localhost:3001/links';

interface Movie {
  id: number;
  title: string;
}

// https://www.valentinog.com/blog/hooks/
const DataLoader: React.FC = (): ReactElement => {
  const [data, setData] = useState([]);

  // This is same as Below function.
  /*
  useEffect((): void => {
    axios.get('http://localhost:3001/links').then(result => {
      setData(result.data);
    });
  }, []);
  */

  useEffect((): void => {
    const fetchData = async (): Promise<void> => {
      const result = await axios.get(URL);
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {data.map((item: Movie) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataLoader;
