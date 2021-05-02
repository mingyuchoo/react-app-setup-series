import React from 'react';
import styled from 'styled-components';

function TodoList() {
  return <TodoListBox>Hello, World</TodoListBox>;
}

const TodoListBox = styled.div`
  position: relative;
  height: 100%;
  background-color: ${(props) => props.theme.primaryColor};
  overflow-y: scroll;
`;

export default TodoList;
