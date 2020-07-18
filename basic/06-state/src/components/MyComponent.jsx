import React, { useState } from 'react';

import './MyComponent.scss';

const MyComponent = ({name}) => {
  const [message, setMessage ] = useState(name);
  const [color, setColor] = useState('aqua');
  const [items, setItems] = useState([]);


  const onClickCheckIn = () => {
    setMessage("I'm checked In.");
    setColor('white');
  }

  const onClickCheckOut = () => {
    setMessage("I'm checked Out.");
    setColor('gray');
  }

  const onClickAddItem = () => {
    setItems(items.concat(items.length+1));
  }
  return (
    <div>
      <button className="button" onClick={onClickCheckIn}>Check In</button>
      <button className="button" onClick={onClickCheckOut}>Check Out</button>
      <h2 style={{ color: color}}>{message}</h2>
      <button className="button" onClick={onClickAddItem}>Add Item</button>
      <div>
        <ul>
        {
          items.map((item) => (
            <li key={item}>{item}</li>
          ))
        }
        </ul>
      </div>
    </div>
  )
}
export default MyComponent;