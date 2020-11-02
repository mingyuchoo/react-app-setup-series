import React from 'react';

import TodoItem from './TodoItem';

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="col">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
