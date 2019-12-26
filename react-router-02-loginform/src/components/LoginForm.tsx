import React, { useContext, useState, ReactElement } from 'react';
import { Redirect, useLocation } from 'react-router-dom';

import { AuthContext } from '../App';

const LoginForm = (): ReactElement => {
  const { state, dispatch } = useContext(AuthContext);
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const doLogin = (): void => {
    dispatch({ type: 'LOGIN' });
  };

  const { from } = location.state || { from: { pathname: '/' } };
  if (state.isAuthenticated) return <Redirect to={from} />;

  return (
    <div>
      <h1>Login</h1>
      <input
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
        type="text"
        placeholder="email"
      />
      <br />
      <input
        value={password}
        onChange={({ target: { value } }) => setPassword(value)}
        type="password"
        placeholder="password"
      />
      <br />
      <button onClick={doLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
