import React, { useState, useEffect, useCallback } from 'react';
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
  useEffect(() => {}, [message]);

  const [color, setColor] = useState('#61dafb');
  const [items, setItems] = useState([]);

  /* useCallback을 이용하여 리렌더링 방지로 최적화 후 */
  const onChangeInput = useCallback((event) => {
    setAccessCode(event.target.value);
  }, []);

  /* useCallback을 이용하여 리렌더링 방지로 최적화 후 */
  const onClickCheckIn = useCallback(() => {
    if (accessCode) {
      setMessage("You're checked In. Access Code is " + accessCode);
      setColor('white');
    }
  }, [accessCode]);

  /* useCallback을 이용하여 리렌더링 방지로 최적화 후 */
  const onClickCheckOut = useCallback(() => {
    if (accessCode) {
      setMessage("You're checked Out. Access Code was " + accessCode);
      setColor('gray');
    }
  }, [accessCode]);

  /* useCallback을 이용하여 리렌더링 방지로 최적화 후 */
  const onClickClearInput = useCallback(() => {
    setAccessCode('');
    setMessage(name);
    setColor('#61dafb');
  }, [name]);

  /* useCallback을 이용하여 리렌더링 방지로 최적화 후 */
  const onClickAddItem = useCallback(() => {
    setItems(items.concat(items.length + 1));
  }, [items]);

  /* useCallback을 이용하여 리렌더링 방지로 최적화 후 */
  const onClickResetItem = useCallback(() => {
    setItems([]);
  }, []);

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
