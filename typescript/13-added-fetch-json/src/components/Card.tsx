import React from 'react';
import data from './data/data.json';

export function Card(): React.ReactElement {
  return (
    <ul>
      {data.map((book) => (
        <li key={book.id}>
          {book.name} / {book.desc} / {book.url}
        </li>
      ))}
    </ul>
  );
}
