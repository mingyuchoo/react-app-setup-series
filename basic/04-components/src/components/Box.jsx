import React from 'react';
import styled, { css } from 'styled-components';

const Box = styled.div`
  background: ${(props) => props.color || 'blue'};
  padding: 1rem;
  display: flex;
  margin: 0 auto;
`;

export default Box;
