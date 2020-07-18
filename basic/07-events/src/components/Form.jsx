import React, { useState } from 'react';

import './Form.scss';

const Form = () => {
  const [username, setUsername] = useState('');

  const onChangeInputName = (event) => {
    setUsername(event.target.value);
  };

  const onKeyPressInputName = (event) => {
    if (event.key === 'Enter') {
      alert(username);
    }
  };
  return (
    <form>
      <input
        className="input"
        type="text"
        name="username"
        placeholder="Enter your name"
        onChange={onChangeInputName}
        onKeyPress={onKeyPressInputName}
      />
      <h1 className="output">Hello {username}</h1>
    </form>
  );
};

export default Form;
