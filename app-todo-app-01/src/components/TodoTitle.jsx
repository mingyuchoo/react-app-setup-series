import React from 'react';
import styled from 'styled-components';

const StyledTodoTitle = styled.h1`
  margin: 1rem;
  text-align: center;
`;

function TodoTitle() {
  const TITLE = 'TODO LIST';
  return <StyledTodoTitle>{TITLE}</StyledTodoTitle>;
}

export default TodoTitle;
