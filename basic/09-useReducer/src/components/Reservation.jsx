import React, { useReducer, useEffect } from 'react';

import './Reservation.scss';

const userReducer = (state, action) => {
  switch (action.type) {
    case 'RESET': {
      return {
        nickname: '',
        email: '',
        isAdmin: false,
      };
    }
    case 'TOGGLE_TO_BE_ADMIN': {
      return { ...state, isAdmin: !state.isAdmin };
    }
    case 'UPDATE_NICKNAME': {
      return { ...state, nickname: action.nickname };
    }
    case 'UPDATE_EMAIL': {
      return { ...state, email: action.email };
    }
    default: {
      throw new Error(`unexpeted action.type: ${action.type}`);
    }
  }
};

const Reservation = () => {
  const [user, dispatchUser] = useReducer(userReducer, {
    nickname: '',
    email: '',
    isAdmin: false,
  });
  useEffect(() => {
    console.log('user is changed');
  }, [user]);

  let label = 'user';
  if (user.isAdmin) {
    label = 'admin';
  }

  const reset = () => dispatchUser({ type: 'RESET' });
  const toggleToBeAdmin = () => dispatchUser({ type: 'TOGGLE_TO_BE_ADMIN' });
  const updateNickname = (event) =>
    dispatchUser({ type: 'UPDATE_NICKNAME', nickname: event.target.value });
  const updateEmail = (event) =>
    dispatchUser({ type: 'UPDATE_EMAIL', email: event.target.value });

  return (
    <div>
      <label>{label}</label>
      <h1>{user.nickname}</h1>
      <h3>{user.email}</h3>
      <button className="button" onClick={reset}>
        RESET
      </button>
      <button className="button" onClick={toggleToBeAdmin}>
        관리자 모드 전환
      </button>
      <input
        className="input"
        type="text"
        placeholder="별명"
        onChange={updateNickname}
      />
      <input
        className="input"
        type="text"
        placeholder="이메일"
        onChange={updateEmail}
      />
    </div>
  );
};

export default Reservation;
