import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';

import { FiCircle, FiCheckCircle, FiTrash2 } from 'react-icons/fi';

const StyledTodoItem = styled.ul`
  text-align: center;
`;
const StyledTodoColumn = styled.li`
  display: inline;
  margin: 1rem;
  padding: 0.5rem;
  text-align: left;
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
      <StyledTodoColumn
        className={cn('checkbox', { checked })}
        onClick={onClickToggle}>
        {checked ? <FiCheckCircle /> : <FiCircle />}
      </StyledTodoColumn>
      <StyledTodoColumn>{text}</StyledTodoColumn>
      <StyledTodoColumn onClick={onClickRemove}>
        <FiTrash2 />
      </StyledTodoColumn>
    </StyledTodoItem>
  );
};

export default TodoItem;
