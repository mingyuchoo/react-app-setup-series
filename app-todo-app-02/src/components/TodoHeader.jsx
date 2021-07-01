import React from 'react';
import styled from 'styled-components';

const StyledTodoHeader = styled.h1`
  margin: 3rem;
  text-align: center;
`;

function TodoHeader() {
  const TITLE = 'TODO LIST';

  return <StyledTodoHeader>{TITLE}</StyledTodoHeader>;
}

export default TodoHeader;
