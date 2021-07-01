import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';

import { FiCircle, FiCheckCircle, FiTrash2 } from 'react-icons/fi';

const StyledTodoItem = styled.ul`
  list-style-type: none;
  margin: auto;
  padding: 0;
  width: 100%;
`;
const StyledTodoColumn = styled.li.attrs((props) => ({
  width: props.width || '10%',
  align: props.align || 'none',
}))`
  display: inline-block;
  width: ${(props) => props.width};
  text-align: ${(props) => props.align};
  margin: 3px auto;
  padding: 2px;
  // border: solid 1px blue;
  cursor: pointer;
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
      <StyledTodoColumn width="75%">{text}</StyledTodoColumn>
      <StyledTodoColumn align="right" onClick={onClickRemove}>
        <FiTrash2 />
      </StyledTodoColumn>
    </StyledTodoItem>
  );
};

export default TodoItem;
