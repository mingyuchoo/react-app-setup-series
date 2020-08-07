import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';

const TodoInsert = ({ onInsert }) => {
  const [text, setText] = useState('');

  const onChangeTodoInsert = useCallback((event) => {
    setText(event.target.value);
  }, []);

  const onSubmitTodoInsert = useCallback(
    (event) => {
      event.preventDefault();
      console.log(text);
      onInsert({ text });
      setText('');
    },
    [onInsert, text] // 사용하는 props, state 넣음
  );

  return (
    <div className="row border">
      <form onSubmit={onSubmitTodoInsert}>
        <input
          type="text"
          placeholder="할 일을 입력하세요."
          text={text}
          onChange={onChangeTodoInsert}
        />
        <button type="submit">
          <MdAdd />
        </button>
      </form>
    </div>
  );
};

export default TodoInsert;
