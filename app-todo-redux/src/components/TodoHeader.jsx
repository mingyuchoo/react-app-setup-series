import React from 'react';
import styled from 'styled-components';

const StyledTodoHeader = styled.h1`
  margin: auto;
  text-align: center;
  // border: dashed 1px red;
`;

function TodoHeader() {
  const TITLE = 'TODO LIST';

  return <StyledTodoHeader>{TITLE}</StyledTodoHeader>;
}

export default TodoHeader;
