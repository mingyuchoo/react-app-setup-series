import React, { ReactElement, useReducer } from 'react';
import Login from './components/Login';
import Home from './components/Home';

interface State {
  isAuthenticated: boolean;
  user: string | null;
  token: string | null;
}
type Action = {
  type: 'LOGIN' | 'LOGOUT';
};

const initialState: State = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: 'fakeUser',
        token: 'fakeToken',
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
      };
    default:
      throw new Error('Unhandled Action');
  }
};

interface AuthContextProps {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export const AuthContext = React.createContext({} as AuthContextProps);

const App: React.FC = (): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <div className="App">{!state.isAuthenticated ? <Login /> : <Home />}</div>
    </AuthContext.Provider>
  );
};

export default App;
