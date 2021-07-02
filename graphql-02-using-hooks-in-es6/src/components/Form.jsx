import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { gql, useMutation } from '@apollo/client';

import Loading from './Loading';
import Success from './Success';
import Error from './Error';
import Input from './Input';
import Button from './Button';

const StyledForm = styled.form``;

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
  const [disable, setDiasble] = useState(false);
  const [addNewUser, { loading, error, data }] = useMutation(CREATE_USER_BY_EMAIL);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  if (data) {
    return <Success />;
  }

  useEffect(() => {
    name ? setDiasble(false) : setDiasble(true);
  }, [name]);
  const onSubmitForm = (event) => {
    event.preventDefault();
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
    event.preventDefault();
    setName('');
    setEmail('');
  };
  return (
    <StyledForm onSubmit={onSubmitForm}>
      <Input type="text" name="name" placeholder="Input your name" value={name} onChange={onChangeName} />
      <Input
        type="text"
        name="email"
        placeholder="Input your email address"
        value={email}
        onChange={onChangeEmail}
        onKeyPress={onKeyPressEmail}
      />
      <Button type="submit" disabled={disable}>
        Submit
      </Button>
      <Button onClick={onClickReset}>Reset</Button>
    </StyledForm>
  );
};

export default Form;
