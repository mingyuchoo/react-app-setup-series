import React, { useState, useCallback } from 'react';
import { FiPlusCircle } from 'react-icons/fi';

const TodoInsert = ({ onInsert }) => {
  const [text, setText] = useState('');

  const onChangeTodoInsert = useCallback((event) => {
    setText(event.target.value);
  }, []);

  const onSubmitTodoInsert = useCallback(
    (event) => {
      event.preventDefault();
      console.log(text);
      onInsert(text);
      setText('');
    },
    [onInsert, text] // 사용하는 props, state 넣음
  );

  return (
    <form onSubmit={onSubmitTodoInsert}>
      <div className="row border">
        <input
          className="col-10 p-3"
          type="text"
          placeholder="할 일을 입력하세요."
          value={text}
          onChange={onChangeTodoInsert}
          required={true}
        />
        <button className="btn col-2 p-3" type="submit">
          <FiPlusCircle />
        </button>
      </div>
    </form>
  );
};

export default TodoInsert;
