import React, { useState, ReactElement } from 'react';
import { Redirect } from 'react-router-dom';

import { Member } from './Types';

interface LoginFormProps {
  authenticated: boolean;
  login: (member: Member) => void;
  location: any;
}
const LoginForm = ({
  authenticated,
  login,
  location,
}: LoginFormProps): ReactElement => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const name: string = '';

  const handleClick = () => {
    try {
      login({ email, password, name });
    } catch (e) {
      alert('Failed to login');
      setEmail('');
      setPassword('');
    }
  };

  const { from } = location.state || { from: { pathname: '/' } };
  if (authenticated) return <Redirect to={from} />;

  return (
    <div>
      <h1>Login</h1>
      <input
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
        type="text"
        placeholder="email"
      />
      <input
        value={password}
        onChange={({ target: { value } }) => setPassword(value)}
        type="password"
        placeholder="password"
      />
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default LoginForm;
