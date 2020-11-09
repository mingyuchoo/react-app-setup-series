import React, { useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { insert, remove, toggle } from '../redux/redux-todos';

import TodoHeader from 'src/components/TodoHeader';
import TodoInsert from '../components/TodoInsert';
import TodoList from '../components/TodoList';

const TodoContainer = () => {
  const todos = useSelector((state) => state.todosReducer.todos);
  const dispatch = useDispatch();
  const onInsert = useCallback((text) => dispatch(insert(text)), [dispatch]);
  const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);
  const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);

  return (
    <div className="container p-3">
      <TodoHeader />
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </div>
  );
};

export default TodoContainer;
