import React, {
  useState,
  ChangeEvent,
  ReactElement,
  KeyboardEvent,
} from 'react';

import './ToDo.css';

export interface Item {
  id: number;
  title: string;
}

export interface ToDoItemProps {
  item: Item;
  deleteItem: (id: number) => void;
}
export const ToDoItem: React.FC<ToDoItemProps> = (
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

export const generateId = (list: Array<Item>): number => {
  if (list && list.length > 1) {
    return Math.max(...list.map((item: Item) => item.id)) + 1;
  } else {
    return 1;
  }
};

const ToDo: React.FC = (): ReactElement => {
  const [toDoList, setToDoList] = useState([
    { id: 1, title: 'clean the house' },
    { id: 2, title: 'buy milk' },
  ]);
  const [itemTitle, setItemTitle] = useState('');

  const createNewToDoItem = (): void => {
    if (!itemTitle) {
      alert('Please enter a todo!');
      return;
    }
    const newId = generateId(toDoList);
    const newToDoItem = { id: newId, title: itemTitle };
    setToDoList([newToDoItem, ...toDoList]);
    setItemTitle('');
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      createNewToDoItem();
    }
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setItemTitle(event.target.value);
  };

  const deleteToDoItem = (id: number): void => {
    setToDoList(toDoList.filter((toDoItem: Item) => toDoItem.id !== id));
  };

  return (
    <div className="ToDo">
      <h1 className="ToDo-Header">React To Do</h1>
      <div className="ToDo-Container">
        <div className="ToDoInput">
          <input
            data-testid="todo-input"
            type="text"
            value={itemTitle}
            onChange={handleInput}
            onKeyPress={handleKeyPress}
          />
          <button
            className="ToDo-Add"
            data-testid="add"
            onClick={createNewToDoItem}
          >
            +
          </button>
        </div>
        <div>
          {toDoList.map(toDoItem => {
            return (
              <ToDoItem
                key={toDoItem.id}
                item={toDoItem}
                deleteItem={deleteToDoItem}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ToDo;
