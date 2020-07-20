import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './Reservation.scss';

import Input from './Input';
import Button from './Button';
import List from './List';

const Reservation = ({ name }) => {
  const [accessCode, setAccessCode] = useState('');
  useEffect(() => {
    document.title = `${accessCode}`;
  }, [accessCode]);

  const [message, setMessage] = useState(name);
  useEffect(() => {
    console.log(message);
  }, [message]);

  const [color, setColor] = useState('#61dafb');

  const [items, setItems] = useState([]);

  const onChangeInput = (event) => {
    setAccessCode(event.target.value);
  };
  const onClickCheckIn = () => {
    if (accessCode) {
      setMessage("You're checked In. Access Code is " + accessCode);
      setColor('white');
    }
  };

  const onClickCheckOut = () => {
    if (accessCode) {
      setMessage("You're checked Out. Access Code was " + accessCode);
      setColor('gray');
    }
  };

  const onClickClearInput = () => {
    setAccessCode('');
    setMessage(name);
    setColor('#61dafb');
  };

  const onClickAddItem = () => {
    setItems(items.concat(items.length + 1));
  };

  const onClickResetItem = () => {
    setItems([]);
  };

  return (
    <div>
      <Input value={accessCode} handler={onChangeInput} />
      <br />
      <Button name={'Check In'} handler={onClickCheckIn} />
      <Button name={'Check Out'} handler={onClickCheckOut} />
      <Button name={'Clear Input'} handler={onClickClearInput} />

      <h2 style={{ color: color }}>{message}</h2>

      <Button name={'Add Item'} handler={onClickAddItem} />
      <Button name={'Reset Item'} handler={onClickResetItem} />
      <List items={items} />
    </div>
  );
};

Reservation.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Reservation;
