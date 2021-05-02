import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext({
  state: { name: '', email: '', password: '' },
  actions: { setName: () => {}, setEmail: () => {}, setPassword: () => {} },
});

export const UserProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const value = {
    state: { name, email, password },
    actions: { setName, setEmail, setPassword },
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
UserProvider.propTypes = {
  children: PropTypes.any,
};

export default UserContext;
