import React, { useContext, ReactElement } from 'react';
import { AuthContext } from '../App';

const LogoutButton = (): ReactElement => {
  const { dispatch } = useContext(AuthContext);
  const doLogout = (): void => dispatch({ type: 'LOGOUT' });
  return <button onClick={doLogout}>Logout</button>;
};

export default LogoutButton;
