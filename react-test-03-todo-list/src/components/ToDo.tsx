import React, { useState, ChangeEvent, ReactElement } from 'react';

interface Item {
  id: number;
  title: string;
}

interface ToDoItemProps {
  item: Item;
}
const ToDoItem: React.FC<ToDoItemProps> = ({ item }): ReactElement => {
  return (
    <div>
      <p>{item.title}</p>
      <button>-</button>
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

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      createNewToDoItem();
    }
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setItemTitle(event.target.value);
  };

  const deleteToDoItem = (id: number) => {
    setToDoList(toDoList.filter(toDoItem => toDoItem.id !== id));
  };

  return (
    <div>
      <h1>React To Do</h1>
      <div>
        <div>
          <input type="text" />
          <button>+</button>
        </div>
        <div>
          {toDoList.map(toDoItem => {
            return <ToDoItem key={toDoItem.id} item={toDoItem} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ToDo;
