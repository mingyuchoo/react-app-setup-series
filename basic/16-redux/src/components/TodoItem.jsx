import React from 'react';

const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div className="input-group item">
      <input
        type="checkbox"
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly={true}
      />
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button
        className="btn btn-dark"
        type="button"
        onClick={() => onRemove(todo.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
