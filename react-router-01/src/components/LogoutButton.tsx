import React, { ReactElement } from 'react';

import { withRouter } from 'react-router-dom';

const LogoutButton = ({ logout, history }): ReactElement => {
  const handleClick = () => {
    logout();
    history.push('/');
  };
  return <button onClick={handleClick}>Logout</button>;
};

export default withRouter(LogoutButton);
