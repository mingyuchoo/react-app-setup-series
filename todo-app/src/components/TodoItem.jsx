import React from 'react';
import cn from 'classnames';
import { FiCircle, FiCheckCircle, FiTrash2 } from 'react-icons/fi';


const TodoItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;

  const onClickToggle = () => {
    onToggle({id})
  }
  const onClickRemove = () => {
    onRemove({id});
  }
  return (
    <div className="row p-3 border">
      <div
        className={cn('col-1', 'checkbox', { checked })}
        onClick={onClickToggle}>
        {checked ? <FiCheckCircle /> : <FiCircle />}
      </div>
      <div className="col-10">{text}</div>
      <div className="col-1" onClick={onClickRemove}>
        <FiTrash2 />
      </div>
    </div>
  );
};

export default TodoItem;
