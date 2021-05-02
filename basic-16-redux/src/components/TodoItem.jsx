import React from 'react';

const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div className="row">
      <div className="col-1">
        <input
          type="checkbox"
          onClick={() => onToggle(todo.id)}
          checked={todo.done}
          readOnly={true}
        />
      </div>
      <div className="col-10">
        <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
          {todo.text}
        </span>
      </div>
      <div className="col-1">
        <button
          className="btn btn-light"
          type="button"
          onClick={() => onRemove(todo.id)}
        >
          x
        </button>
      </div>
      {/* 
      
       */}
    </div>
  );
};

export default TodoItem;
