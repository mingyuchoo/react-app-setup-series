import React from 'react';

import TodoItem from './TodoItem';

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="row border">
      <div className="col border">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
