import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import './Form.scss';

// https://www.apollographql.com/docs/react/data/mutations/

const CREATE_USER_BY_EMAIL = gql`
  mutation createUserByEmail($email: String!, $name: String!) {
    createUserByEmail(email: $email, name: $name) {
      id
      name
      email
    }
  }
`;

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [addNewUser, { loading, error, data }] = useMutation(
    CREATE_USER_BY_EMAIL
  );

  // loading
  if (loading) {
    return (
      <div className="App">
        <h2>Loading...</h2>
      </div>
    );
  }

  // error
  if (error) {
    return <div>Error</div>;
  }

  // data
  if (data) {
    return <div>Successfully added.</div>;
  }

  const onSubmitForm = (event) => {
    event.preventDefault(); // 원래 event 기본 동작을 못 하도록 막는다.
    addNewUser({ variables: { email, name } });
  };
  const onChangeName = (event) => {
    console.log(event.target.name + ': ' + event.target.value);
    setName(event.target.value);
  };

  const onChangeEmail = (event) => {
    console.log(event.target.name + ': ' + event.target.value);
    setEmail(event.target.value);
  };

  const onKeyPressEmail = (event) => {
    if (event.key === 'Enter') {
      console.log(event.target.name + ': ' + event.target.value);
    }
  };

  const onClickReset = (event) => {
    event.preventDefault(); // 원래 event 기본 동작을 못 하도록 막는다.
    setName('');
    setEmail('');
  };
  return (
    <form onSubmit={onSubmitForm}>
      <input
        className="input"
        type="text"
        name="name"
        placeholder="Input your name"
        value={name}
        onChange={onChangeName}
      />
      <input
        className="input"
        type="text"
        name="email"
        placeholder="Input your email address"
        value={email}
        onChange={onChangeEmail}
        onKeyPress={onKeyPressEmail}
      />
      <button className="button" type="submit">
        Submit
      </button>
      <button className="button" onClick={onClickReset}>
        Reset
      </button>
    </form>
  );
};

export default Form;
