import React, { ReactElement } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { History } from 'history';

interface LogoutButtonProps extends RouteComponentProps {
  logout: () => void;
  history: History;
}
const LogoutButton = (props: LogoutButtonProps): ReactElement => {
  const handleClick = () => {
    props.logout();
    props.history.push('/');
  };
  return <button onClick={handleClick}>Logout</button>;
};

export default withRouter(LogoutButton);
