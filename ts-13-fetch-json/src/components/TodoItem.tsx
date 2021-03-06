import React from 'react';
import './TodoItem.scss';
import { Todo } from '../reducers/todos';
import useTodoActions from '../hooks/useTodoActions';

export type TodoItemProps = {
  todo: Todo;
};

export function TodoItem({ todo }: TodoItemProps): React.ReactElement {
  const { onToggle, onRemove } = useTodoActions(todo.id);

  return (
    <li className={`TodoItem ${todo.done ? 'done' : ''}`}>
      <span className="text" onClick={onToggle}>
        {todo.text}
      </span>
      <span className="remove" onClick={onRemove}>
        (X)
      </span>
    </li>
  );
}
