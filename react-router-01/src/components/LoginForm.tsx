import React, { useState, ReactElement } from 'react';

const LoginForm = ({ authenticated, login, location }): ReactElement => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    try {
      login({ email, password });
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
