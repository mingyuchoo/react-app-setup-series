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
    <>
      <TodoHeader />
      <section id="main">
        <div className="inner">
          <section id="one" class="wrapper style1">
            <header class="special">
              <TodoInsert onInsert={onInsert} />
              <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
            </header>
          </section>
        </div>
      </section>
    </>
  );
};

export default TodoContainer;
