import React from 'react';
import styled from 'styled-components';

import TodoItem from './TodoItem';

const StyledTodoList = styled.div`
  margin: auto;
  width: 50%;
`;

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <StyledTodoList>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </StyledTodoList>
  );
};

export default TodoList;
