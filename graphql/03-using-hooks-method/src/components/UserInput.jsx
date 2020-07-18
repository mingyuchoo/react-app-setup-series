import React from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from 'react-apollo';

import './UserInput.scss';

// https://www.apollographql.com/docs/react/data/mutations/

const CREATE_USER_BY_EMAIL = gql`
  mutation {
    createUserByEmail(email: "patrick@email.com", name: "Patrick") {
      id
      name
      email
    }
  }
`;

const UserInput = () => {
  const onChangeName = (event) => {
    console.log(event.target.name + ': ' + event.target.value);
  };

  const onChangeEmail = (event) => {
    console.log(event.target.name + ': ' + event.target.value);
  };

  const onKeyPressEmail = (event) => {
    if (event.key === 'Enter') {
      console.log(event.target.name + ': ' + event.target.value);
    }
  };

  const onClickConfirm = () => {
    console.log('Confirm button clicked');
  };

  return (
    <div>
      <input
        className="input"
        type="text"
        name="name"
        placeholder="Input your name"
        value=""
        onChange={onChangeName}
      />
      <input
        className="input"
        type="text"
        name="email"
        placeholder="Input your email address"
        value=""
        onChange={onChangeEmail}
        onKeyPress={onKeyPressEmail}
      />
      <button className="button" onClick={onClickConfirm}>
        Confirm
      </button>
      <button className="button">Reset</button>
    </div>
  );
};

export default UserInput;
