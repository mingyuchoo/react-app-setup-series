import React from 'react';

import useTodos from '../hooks/useTodos';
import { TodoItem } from './TodoItem';

export function TodoList(): React.ReactElement {
  const todos = useTodos();

  if (todos.length === 0) return <p>There is no item</p>;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}
