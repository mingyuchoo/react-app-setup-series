import React, { useReducer, ReactElement } from 'react';

interface State {
  count: number;
}

type Action = {
  type: 'RESET' | 'DECREMENT' | 'INCREMENT';
};

const initialState = { count: 0 };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'RESET':
      return initialState;
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      throw new Error('Unhandled action');
  }
};

type ReducedCounterProps = {
  initialCount: number;
};
const ReducedCounter: React.FC<ReducedCounterProps> = ({
  initialCount = 0,
}: ReducedCounterProps): ReactElement => {
  const [state, dispatch] = useReducer(reducer, { count: initialCount });

  const onReset = (): void => dispatch({ type: 'RESET' });
  const onIncrement = (): void => dispatch({ type: 'INCREMENT' });
  const onDecrement = (): void => dispatch({ type: 'DECREMENT' });

  return (
    <div>
      Reduced Counter: {state.count}
      <button onClick={onReset}>Reset</button>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
};

export default ReducedCounter;
