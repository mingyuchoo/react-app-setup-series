import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { insert, remove, toggle } from '../redux/redux-todos';
import TodoInsert from '../components/TodoInsert';
import TodoList from '../components/TodoList';
import TodoTitle from '../components/TodoTitle';

const StyledTodoContainer = styled.div`
  text-align: center;
  margin: 1rem;
  $.outer {
    display: flex;
  }
  $.inner {
    margin: auto;
  }
`;

const TodoContainer = ({ todos, insert, remove, toggle }) => {
  return (
    <StyledTodoContainer>
      <TodoTitle />
      <TodoInsert onInsert={insert} />
      <TodoList todos={todos} onRemove={remove} onToggle={toggle} />
    </StyledTodoContainer>
  );
};

export default connect(
  ({ todosReducer }) => ({
    todos: todosReducer.todos,
  }),
  {
    insert,
    remove,
    toggle,
  }
)(TodoContainer);
