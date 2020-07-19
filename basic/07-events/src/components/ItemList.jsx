import React, { useState, useRef } from 'react';

import './ItemList.scss';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState('');
  const [inputId, setInputId] = useState(undefined);
  const [nextId, setNextId] = useState(1);
  const inputEl = useRef(null);

  const onChangeInput = (event) => {
    event.preventDefault();
    setInputText(event.target.value);
  };

  const onClickButton = () => {
    let newItems;
    if (inputId) {
      const filteredItems = items.filter((item) => item.id !== inputId);
      newItems = filteredItems.concat({
        id: inputId ? inputId : nextId,
        username: inputText,
      });
    } else {
      newItems = items.concat({
        id: inputId ? inputId : nextId,
        username: inputText,
      });
      setNextId(nextId + 1);
    }
    setItems(newItems);
    setInputText('');
    inputEl.current.focus();
  };

  const onKeyPressInput = (event) => {
    if (event.key === 'Enter') {
      onClickButton();
    }
  };

  const onClickLi = (id, event) => {
    event.preventDefault();
    const foundItem = items.find((item) => item.id === id);
    setInputText(foundItem.username);
    setInputId(foundItem.id);
  };

  const onDoubleClickLi = (id, event) => {
    event.preventDefault();
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    setInputText('');
  };

  return (
    <div>
      <input
        className="input"
        type="text"
        name="username"
        placeholder="Input your name, and type 'Enter' key"
        value={inputText}
        onChange={onChangeInput}
        onKeyPress={onKeyPressInput}
        ref={inputEl}
      />
      <button className="button" onClick={onClickButton}>
        Add
      </button>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={(event) => onClickLi(item.id, event)}
            onDoubleClick={(event) => onDoubleClickLi(item.id, event)} // 이벤트 핸들러에 인자를 넘길 때 사용하는 방법
          >
            {item.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
