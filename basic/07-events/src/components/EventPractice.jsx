import React, { useState } from 'react';

import './EventPractice.scss';

const EventPractice = () => {

  const [form, setForm] = useState({
    username: '',
    message: ''
  })

  const { username, message } = form;

  const onChangeInput = (event) => {

    console.log(event.target.name + ': ' + event.target.value);

    const nextForm = {
      ...form, [event.target.name]: event.target.value
    };
    setForm(nextForm);
  }

  const onKeyPressInput = (event) => {
    if(event.key === 'Enter') {
      onClickButton();
    }
  }

  const onClickButton = () => {
    alert(username + ': ' + message);
    setForm({
      username: '',
      message: ''
    });
  };

  return (
    <div>
      <h2>Event Practice</h2>
      <input
        className="input"
        type="text"
        name="username"
        placeholder="Input your username"
        value={username}
        onChange={onChangeInput}
      />
      <input
        className="input"
        type="text"
        name="message"
        placeholder="Say anything you want"
        value={message}
        onChange={onChangeInput}
        onKeyPress={onKeyPressInput}
      />
      <button className="button" onClick={onClickButton}>Confirm</button>
    </div>
  );
};

export default EventPractice;
