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

  useEffect(() => {
    name ? setDiasble(false) : setDiasble(true);
  }, [name]);
  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onSubmitForm = (event) => {
    event.preventDefault();
    addNewUser({ variables: { email, name } }).catch((error) => {
      console.log(error);
    });
  };

  const onClickReset = (event) => {
    event.preventDefault();
    setName('');
    setEmail('');
  };
  return (
    <StyledForm onSubmit={onSubmitForm}>
      {loading && <Loading />}
      {error && <Error error={error} />}
      {data && <Success />}
      <Input type="text" name="name" placeholder="Input your name" value={name} onChange={onChangeName} />
      <Input type="text" name="email" placeholder="Input your email address" value={email} onChange={onChangeEmail} />
      <Button type="submit" disabled={disable}>
        Submit
      </Button>
      <Button onClick={onClickReset}>Reset</Button>
    </StyledForm>
  );
};

export default Form;
