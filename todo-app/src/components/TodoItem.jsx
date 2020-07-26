import React from 'react';

const TodoItem = (props) => {
  const { items } = props;
  return (
    <div className="todo-item">
      <div className="checkbox">
        <input type="checkbox" name="input-checkbox" />
        <div className="text">"text"</div>
      </div>
      <div className="remove">Remove</div>
    </div>
  );
};

export default TodoItem;
