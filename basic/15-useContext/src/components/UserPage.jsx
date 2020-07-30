import React, { useContext, useCallback, useRef } from 'react';

import UserContext from '../contexts/UserContext';

const UserPage = () => {
  const { state, actions } = useContext(UserContext);

  const inputName = useRef(null);
  const onChangeInputName = useCallback((event) => {
    console.log(event.target.value);
  });

  const onClickButtonAdd = useCallback(() => {
    actions.setName(inputName.current.value);
    inputName.current.value = '';
    inputName.current.focus();
  });

  return (
    <div>
      <input
        className="input"
        name="input-name"
        placeholder="name"
        ref={inputName}
        onChange={onChangeInputName}
      />
      <button className="button" name="button-add" onClick={onClickButtonAdd}>
        Add
      </button>
      <p>{state.name}</p>
    </div>
  );
};

export default UserPage;
