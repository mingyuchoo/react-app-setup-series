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
    onInsert(input);
    onChangeInput('');
  };
  const onChange = (event) => {
    onChangeInput(event.target.value);
  };

  return (
    <div className="row">
      <form className="input-group-prepend" onSubmit={onSubmit}>
        <input
          className="form-control"
          type="text"
          placeholder="Recipient's username"
          value={input}
          onChange={onChange}
        />
        <button className="btn btn-dark" type="submit">
          Submit
        </button>
      </form>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default TodoList;
