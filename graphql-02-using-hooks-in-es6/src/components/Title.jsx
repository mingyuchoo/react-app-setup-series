import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  color: #61dafb;
  background-color: #20232a;
  padding: 2rem;
`;

const Title = ({ title }) => {
  return <StyledTitle>{title}</StyledTitle>;
};

export default Title;
