import React from 'react';
import { connect } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/redux-todos';
import TodoList from '../components/TodoList';

const TodoContainer = ({
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove,
}) => {
  return (
    <TodoList
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};

export default connect(
  ({ todosReduceer }) => ({
    input: todosReduceer.input,
    todos: todosReduceer.todos,
  }),
  {
    changeInput,
    insert,
    toggle,
    remove,
  }
)(TodoContainer);
