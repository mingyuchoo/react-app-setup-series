import React from 'react';

const TodoInsert = () => {
  return (
    <form className="todo-insert">
      <input
        className="todo-insert"
        type="text"
        placeholder="할 일을 입력하세요."
      />
      <button className="todo-button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default TodoInsert;
