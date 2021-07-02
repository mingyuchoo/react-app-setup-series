import React from 'react';
import styled from 'styled-components';

const StyledErrorMsg = styled.p`
  margin: auto;
  width: 100%;
  font-size: 3rem;
  color: red;
  text-align: center;
`;

const ErrorMsg = ({ children }) => {
  return <StyledErrorMsg>{children}</StyledErrorMsg>;
};

export default ErrorMsg;
