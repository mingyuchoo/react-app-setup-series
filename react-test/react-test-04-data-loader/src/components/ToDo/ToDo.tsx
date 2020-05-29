import React, {
  useState,
  ChangeEvent,
  ReactElement,
  KeyboardEvent,
} from 'react';

import ToDoItem, { Item } from './ToDoItem';

import './ToDo.scss';

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
