import React from 'react';

const TodoItem = () => {
  return (
    <div>
      <div>
        <div>
          <input type="checkbox" />
        </div>
      </div>
      <input type="text" />
      <div>
        <button className="btn btn-dark" type="button">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
