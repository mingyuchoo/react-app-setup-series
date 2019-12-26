import React, { ReactElement } from 'react';
import { AuthContext } from '../App';

const Home: React.FC = (): ReactElement => {
  const { state, dispatch } = React.useContext(AuthContext);
  const doLogout = (): void => dispatch({ type: 'LOGOUT' });
  return (
    <div>
      <h1>Home</h1>
      <div>
        {state.isAuthenticated && <button onClick={doLogout}>Logout</button>}
      </div>
    </div>
  );
};

export default Home;
