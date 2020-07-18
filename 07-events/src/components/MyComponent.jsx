import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './MyComponent.scss';

const MyComponent = ({ name }) => {
  const [accessCode, setAccessCode] = useState('');
  const [message, setMessage] = useState(name);
  const [color, setColor] = useState('aqua');
  const [items, setItems] = useState([]);

  const onChangeInputBox = (event) => {
    console.log(event.target.value);
    setAccessCode(event.target.value);
  };
  const onClickCheckIn = () => {
    if (accessCode) {
      setMessage("I'm checked In. Access Code is " + accessCode);
      setColor('white');
    }
  };

  const onClickCheckOut = () => {
    if (accessCode) {
      setMessage("I'm checked Out. Access Code was " + accessCode);
      setColor('gray');
    }
  };

  const onClickClearInput = () => {
    setAccessCode('');
    setMessage(name);
    setColor('aqua');
  };

  const onClickAddItem = () => {
    setItems(items.concat(items.length + 1));
  };

  const onClickResetItem = () => {
    setItems([]);
  };

  return (
    <div>
      <input
        className="input"
        type="text"
        name="accessCode"
        placeholder="My Access Code"
        value={accessCode}
        onChange={onChangeInputBox}
      />
      <br />
      <button className="button" onClick={onClickCheckIn}>
        Check In
      </button>
      <button className="button" onClick={onClickCheckOut}>
        Check Out
      </button>
      <button className="button" onClick={onClickClearInput}>
        Clear Input
      </button>
      <h2 style={{ color: color }}>{message}</h2>
      <button className="button" onClick={onClickAddItem}>
        Add Item
      </button>
      <button className="button" onClick={onClickResetItem}>
        Reset Item
      </button>
      <div>
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MyComponent;
