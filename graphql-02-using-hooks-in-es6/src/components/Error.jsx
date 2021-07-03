import React from 'react';
import styled from 'styled-components';

const StyledError = styled.div``;

const Error = ({ error }) => {
  return <StyledError>Error: {error.message}</StyledError>;
};

export default Error;
