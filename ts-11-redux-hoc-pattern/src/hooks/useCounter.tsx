import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers';
import { increase, decrease, increaseBy } from '../reducers/counter';
import { useCallback } from 'react';

function useCounter() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  const onIncreaseBy = useCallback(
    (diff: number) => dispatch(increaseBy(diff)),
    [dispatch]
  );

  return {
    count,
    onIncrease,
    onDecrease,
    onIncreaseBy,
  };
}
export default useCounter;
