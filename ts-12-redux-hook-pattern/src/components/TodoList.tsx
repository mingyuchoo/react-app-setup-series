import React from 'react';
import TodoItem from './TodoItem';
import useTodos from '../hooks/useTodos';

function TodoList(): React.ReactElement {
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

export default TodoList;
