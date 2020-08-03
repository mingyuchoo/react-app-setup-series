import React from 'react';

const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div className="input-group item">
      <input type="checkbox" />
      <input className="form-control" type="text" />
      <button className="btn btn-dark" type="button">
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
