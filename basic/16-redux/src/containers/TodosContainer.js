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
    // 액션 생성함수로 이루어진 객체 형태로 넘겨주면
    // connect 함수가 내부적으로 bindActionCreators 작업을 대신 해준다.
    changeInput,
    insert,
    toggle,
    remove,
  }
)(TodoContainer);
