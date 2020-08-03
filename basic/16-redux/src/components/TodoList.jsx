import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="row">
      <form className="input-group-prepend" onSubmit={onSubmit}>
        <input
          className="form-control"
          type="text"
          placeholder="Recipient's username"
        />
        <button className="btn btn-dark" type="submit">
          Submit
        </button>
      </form>

      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
};

export default TodoList;
