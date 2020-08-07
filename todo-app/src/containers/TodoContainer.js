import React from 'react';
import { connect } from 'react-redux';
import { insert, remove, toggle } from '../modules/redux-todos';
import TodoInsert from '../components/TodoInsert';
import TodoList from '../components/TodoList';
import TodoTitle from 'src/components/TodoTitle';

const TodoContainer = ({ todos, insert, remove, toggle }) => {
  console.log(todos);
  return (
    <div className="container p-3">
      <TodoTitle />
      <TodoInsert onInsert={insert} />
      <TodoList todos={todos} onRemove={remove} onToggle={toggle} />
    </div>
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
