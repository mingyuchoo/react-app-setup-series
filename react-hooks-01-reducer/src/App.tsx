import React, {
  createContext,
  ReactElement,
  useState,
  useReducer,
  useEffect,
} from 'react';
import axios from 'axios';

/**
 * https://github.com/mingyuchoo/hooks-state-management
 */

type HNResponse = {
  hits: {
    title: string;
    objectID: string;
    url: string;
  }[];
};

type State =
  | { status: 'empty' }
  | { status: 'loading' }
  | { status: 'error'; error: string }
  | { status: 'success'; data: HNResponse };

type Action =
  | { type: 'REQUEST' }
  | { type: 'SUCCESS'; results: HNResponse }
  | { type: 'FAILURE'; error: string };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'REQUEST':
      return { status: 'loading' };
    case 'SUCCESS':
      return { status: 'success', data: action.results };
    case 'FAILURE':
      return { status: 'error', error: action.error };
    default:
      throw new Error('Unhandled Action');
  }
}

const App: React.FC = (): ReactElement => {
  const [query, setQuery] = useState<string>();
  const [state, dispatch] = useReducer(reducer, { status: 'empty' });

  useEffect(() => {
    let ignore = false;

    dispatch({ type: 'REQUEST' });
    axios(`https://hn.algolia.com/api/v1/search?query=${query}`).then(
      results => {
        if (!ignore) dispatch({ type: 'SUCCESS', results: results.data });
      },
      error => dispatch({ type: 'FAILURE', error })
    );

    return (): void => {
      ignore = true;
    };
  }, [query]);

  return (
    <div>
      <input value={query} onChange={(e): void => setQuery(e.target.value)} />
      {state.status === 'loading' && <span>Loading...</span>}
      {state.status === 'success' && (
        <ul>
          {state.data &&
            state.data.hits &&
            state.data.hits.map(item => (
              <li key={item.objectID}>
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
        </ul>
      )}
      {state.status === 'error' && <span>Error: {state.error}</span>}
    </div>
  );
};

export default App;
