import React, { useState, ReactElement } from 'react';

const LogoutButton = ({ logout, history }) => {
  const handleClick = () => {
    logout();
    history.push('/');
  };
  return <button onClick={handleClick}>Logout</button>;
};

export default LogoutButton;
