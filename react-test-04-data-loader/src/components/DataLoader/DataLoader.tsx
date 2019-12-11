import React, { useState, ReactElement } from 'react';
import { useFetch } from './DataLoaderHooks';

/**
 * BUTTON
 */
export const Button = (): ReactElement => {
  const [buttonText, setButtonText] = useState('Click me, please');
  const handleClick = (): void => {
    setButtonText('Thanks, been clicked');
  };
  return <button onClick={handleClick}>{buttonText}</button>;
};

export interface Movie {
  id: number;
  title: string;
}

/**
 * DATA_LOADER
 */
export const DataLoader = (): ReactElement => {
  const data = useFetch();
  return (
    <div>
      <ul>
        {data.map((el: Movie) => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataLoader;
