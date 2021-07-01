import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import { FiPlusCircle } from 'react-icons/fi';

const StyledTodoForm = styled.form`
  margin: 1rem;
`;

const StyledInput = styled.input`
  display: inline;
  width: 35rem;
  margin-right: 0.5rem;
  padding 1rem;
`;
const StyledButton = styled.button`
  display: inline;
  width: 15rem;
  margin-left: 0.5rem;
  padding 1rem;
`;

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
    <StyledTodoForm onSubmit={onSubmitTodoInsert}>
      <StyledInput
        type="text"
        placeholder="할 일을 입력하세요."
        value={text}
        onChange={onChangeTodoInsert}
        required={true}
      />
      <StyledButton type="submit">
        <FiPlusCircle />
      </StyledButton>
    </StyledTodoForm>
  );
};

export default TodoInsert;
