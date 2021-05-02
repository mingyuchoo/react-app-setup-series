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
      <div className="col">
        <form className="row p-3 input-group-prepend" onSubmit={onSubmit}>
          <div className="col-10">
            <input
              className="form-control"
              type="text"
              placeholder="Recipient's username"
              value={input}
              onChange={onChange}
            />
          </div>
          <div className="col-2">
            <button className="btn btn-dark" type="submit">
              Submit
            </button>
          </div>
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
    </div>
  );
};

export default TodoList;
