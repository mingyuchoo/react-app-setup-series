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
export const ToDoItem: React.FC<ToDoItemProps> = ({
  item,
  deleteItem,
}): ReactElement => {
  return (
    <div className="ToDoItem" data-testid="todo-item">
      <p className="ToDoItem-Text" data-testid="todo-text">
        {item.title}
      </p>
      <button
        className="ToDoItem-Delete"
        data-testid="delete"
        onClick={() => {
          deleteItem(item.id);
        }}
      >
        -
      </button>
    </div>
  );
};

const ToDo: React.FC = (): ReactElement => {
  const [toDoList, setToDoList] = useState([
    { id: 1, title: 'clean the house' },
    { id: 2, title: 'buy milk' },
  ]);
  const [itemTitle, setItemTitle] = useState('');

  const generateId = () => {
    if (toDoList && toDoList.length > 1) {
      return Math.max(...toDoList.map(toDoItem => toDoItem.id)) + 1;
    } else {
      return 1;
    }
  };

  const createNewToDoItem = () => {
    if (!itemTitle) {
      alert('Please enter a todo!');
      return;
    }
    const newId = generateId();
    const newToDoItem = { id: newId, title: itemTitle };
    setToDoList([newToDoItem, ...toDoList]);
    setItemTitle('');
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      createNewToDoItem();
    }
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('event.occurred');
    setItemTitle(event.target.value);
  };

  const deleteToDoItem = (id: number): void => {
    setToDoList(toDoList.filter(toDoItem => toDoItem.id !== id));
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
