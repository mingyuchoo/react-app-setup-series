import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #61dafb;
  margin: 1rem;
  padding: 1rem 3rem;
  border: none;
  display: inline-block;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  &:hover:focus:active {
    color: block;
    background-color: white;
  }
  cursor: pointer;
`;

const Button = ({ type, disabled, onClick, children }) => {
  return (
    <StyledButton type={type} disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
