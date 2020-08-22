import React, { useCallback } from 'react';

import { connect, useSelector, useDispatch } from 'react-redux';
import { insert, remove, toggle } from '../modules/redux-todos';

import TodoInsert from '../components/TodoInsert';
import TodoList from '../components/TodoList';
import TodoTitle from 'src/components/TodoTitle';

// const TodoContainer = ({ todos, insert, remove, toggle }) => {
const TodoContainer = () => {
  const todos = useSelector((state) => state.todosReducer.todos);
  const dispatch = useDispatch();
  const onInsert = useCallback((text) => dispatch(insert(text)), [dispatch]);
  const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);
  const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);

  return (
    <div className="container p-3">
      <TodoTitle />
      {/* <TodoInsert onInsert={insert} /> */}
      {/* <TodoList todos={todos} onRemove={remove} onToggle={toggle} /> */}
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </div>
  );
};

// export default connect(
//   ({ todosReducer }) => ({
//     todos: todosReducer.todos,
//   }),
//   {
//     insert,
//     remove,
//     toggle,
//   }
// )(TodoContainer);

export default TodoContainer;
