import React from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  return (
    <div>
      <form action="">
        <div>
          <input type="text" placeholder="Recipient's username" />
          <div>
            <button className="btn btn-dark" type="submit">
              Submit
            </button>
          </div>
        </div>
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
