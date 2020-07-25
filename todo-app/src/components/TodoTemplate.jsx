import React from 'react';

const TodoTemplate = (props) => {
  return (
    <div className="todo-template">
      <div className="todo-title">일정 관리</div>
      <div className="todo-content">{props.children}</div>
    </div>
  );
};

export default TodoTemplate;
