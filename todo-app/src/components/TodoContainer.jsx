import React from 'react';

const TodoContainer = (props) => {
  return (
    <div className="todo-container">
      <div className="todo-content">{props.children}</div>
    </div>
  );
};

export default TodoContainer;
