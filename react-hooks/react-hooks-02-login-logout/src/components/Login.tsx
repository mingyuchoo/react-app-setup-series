import React, { ReactElement } from 'react';
import { AuthContext } from '../App';

const Login: React.FC = (): ReactElement => {
  const { dispatch } = React.useContext(AuthContext);

  const doLogin = (): void => dispatch({ type: 'LOGIN' });
  return (
    <div>
      <h1>Login</h1>
      <div>
        <button onClick={doLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
