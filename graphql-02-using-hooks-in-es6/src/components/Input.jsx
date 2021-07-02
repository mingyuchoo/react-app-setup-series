import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  margin: auto;
  width: 100%;
  padding: 1rem 2rem;
  box-sizing: border-box;
  display: inline-block;
  font-size: 1rem;
`;

const Input = ({ type, name, placeholder, value, onChange, onKeyPress }) => {
  return (
    <StyledInput
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  );
};

export default Input;
