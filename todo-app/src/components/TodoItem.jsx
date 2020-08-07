import React from 'react';

import { FiCircle, FiCheckCircle, FiTrash2 } from 'react-icons/fi';

import cn from 'classnames';

const TodoItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;
  return (
    <div className="row m-3 border">
      <div
        className={cn('col', 'checkbox', { checked })}
        onClick={() => onToggle(id)}>
        {checked ? <FiCheckCircle /> : <FiCircle />}
      </div>
      <div className="col">{text}</div>
      <div className="col" onClick={() => onRemove(id)}>
        <FiTrash2 />
      </div>
    </div>
  );
};

export default TodoItem;
