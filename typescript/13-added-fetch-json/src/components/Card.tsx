import React from 'react';
import data from './data/data.json';

export function Card(): React.ReactElement {
  return (
    <ul>
      {data.map(element => (<li>{element.id} / {element.name} / {element.desc} / {element.url}</li>))}
    </ul>
  )
}