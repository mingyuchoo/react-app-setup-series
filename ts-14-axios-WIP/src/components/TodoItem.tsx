import './TodoItem.scss';

import React from 'react';

import useTodoActions from '../hooks/useTodoActions';
import { Todo } from '../reducers/todos';

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
