import React, { ReactElement } from 'react';

import './ToDoItem.scss';

export interface Item {
  id: number;
  title: string;
}

export interface ToDoItemProps {
  item: Item;
  deleteItem: (id: number) => void;
}

const ToDoItem: React.FC<ToDoItemProps> = (
  props: ToDoItemProps
): ReactElement => {
  return (
    <div className="ToDoItem" data-testid="todo-item">
      <p className="ToDoItem-Text" data-testid="todo-text">
        {props.item.title}
      </p>
      <button
        className="ToDoItem-Delete"
        data-testid="delete"
        onClick={(): void => {
          props.deleteItem(props.item.id);
        }}
      >
        -
      </button>
    </div>
  );
};

export default ToDoItem;
