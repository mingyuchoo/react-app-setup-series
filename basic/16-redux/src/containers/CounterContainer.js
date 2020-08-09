import React, { memo, useCallback } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';

import Counter from '../components/Counter';
import { increase, decrease } from '../modules/redux-counter';

const CounterContainer = () => {
  const number = useSelector((state) => state.counterReducer.number);
  const dispatch = useDispatch();

  const onIncrease = useCallback(() => {
    dispatch(increase());
  }, [dispatch]);

  const onDecrease = useCallback(() => {
    dispatch(decrease());
  }, [dispatch]);

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default memo(CounterContainer);
