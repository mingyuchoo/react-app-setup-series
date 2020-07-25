import React from 'react';

const TodoItem = () => {
  return (
    <div className="todo-item">
      <div className="checkbox">
        <div className="text">할 일</div>
      </div>
      <div className="remove">Remove</div>
    </div>
  );
};

export default TodoItem;
