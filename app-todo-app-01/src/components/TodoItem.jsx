import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';

import { FiCircle, FiCheckCircle, FiTrash2 } from 'react-icons/fi';

const StyledTodoItem = styled.ul`
  background-color: #f5e6ca;
  margin: 0.5rem;
  padding: 1.5rem;
  text-align: left;
`;

const StyledTodoItemColumn = styled.li`
  display: inline;
  margin: 0.5rem;
  padding: 1.5rem;
`;

const TodoItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;

  const onClickToggle = () => {
    onToggle(id);
  };
  const onClickRemove = () => {
    onRemove(id);
  };
  return (
    <StyledTodoItem>
      <StyledTodoItemColumn
        className={cn('col-1', 'checkbox', { checked })}
        onClick={onClickToggle}>
        {checked ? <FiCheckCircle /> : <FiCircle />}
      </StyledTodoItemColumn>
      <StyledTodoItemColumn>{text}</StyledTodoItemColumn>
      <StyledTodoItemColumn onClick={onClickRemove}>
        <FiTrash2 />
      </StyledTodoItemColumn>
    </StyledTodoItem>
  );
};

export default TodoItem;
