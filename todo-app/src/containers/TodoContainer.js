import React from 'react';
import { connect } from 'react-redux';
import { insert, remove, toggle } from '../modules/redux-todos';
import TodoList from 'src/components/TodoList';

const TodoContainer = ({ todos, insert, remove, toggle }) => {
  return <TodoList onInsert={insert} onRemove={remove} onToggle={toggle} />;
};

export default connect(
  (todosReducer) => ({
    todos: todosReducer.todos,
  }),
  {
    insert,
    remove,
    toggle,
  }
)(TodoContainer);
