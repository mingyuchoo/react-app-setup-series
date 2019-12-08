import React, { useState, ReactElement, useEffect } from 'react';

import './DataLoader.scss';

interface Movie {
  id: number;
  title: string;
}

// https://www.valentinog.com/blog/hooks/
const DataLoader: React.FC = (): ReactElement => {
  const [data, setData] = useState([]);

  const getDataFromFile = async (): Promise<void> => {
    const response = await fetch('/data/data.json');
    const data = await response.json();
    setData(data);
  };

  const getDataFromServer = async (): Promise<void> => {
    // response - [{"id": 1, "title": "Load of Rings" },{"id": 2, "title": "Mars" }]
    const response = await fetch('http://localhost:3001/links');
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getDataFromFile();
    // getDataFromServer();
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
