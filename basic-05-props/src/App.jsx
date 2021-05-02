import React, { useState, useRef } from 'react';

import './App.scss';

import Calc from './components/Calc';
import List from './components/List';

const LAST_ID = 2;

function createBulkData() {
  const array = [];
  for (let i = 1; i <= LAST_ID; i++) {
    array.push({
      id: i,
      text: `Todo ${i}`,
      checked: false,
    });
  }
  return array;
}

function App() {
  const [message, setMessage] = useState('');
  const [items, setItems] = useState(createBulkData);
  const nextId = useRef(LAST_ID + 1);

  const onChangeInputMessage = (e) => {
    setMessage(e.target.value);
  };

  const onClickAddItem = () => {
    setItems(
      items.concat({
        id: nextId.current,
        text: `Todo ${nextId.current}`,
        checked: false,
      })
    );
    nextId.current += 1;
  };
  return (
    <div className="App">
      <h1 className="h1">React App</h1>
      <p>{message}</p>
      {/* 
      input component 의 변경은 message 상태(state)만 변경한다. 
      하지만, React Compoent는 state가 바뀔 때 자신을 re-rendering하는데
      자식인 component들도 같이 re-rendering된다.
      */}
      <input
        className="input"
        name="input-message"
        placeholder="Input some message here."
        onChange={onChangeInputMessage}
      />
      <button className="button" name="add-item" onClick={onClickAddItem}>
        Add Item
      </button>
      <hr />
      <Calc />
      <hr />
      {/* 
      List 내부적으로 memo를 호출하도록 했다.
      App에서 props로 전달하는 items가 바뀌지 않으면
      re-rendering 하지 않는다.
      */}
      <List items={items} />
    </div>
  );
}

export default App;
