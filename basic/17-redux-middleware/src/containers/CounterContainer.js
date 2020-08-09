import React from 'react';
import { connect } from 'react-redux';
import { increase, decrease } from '../modules/redux-counter';
import Counter from '../components/Counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <div>
      <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    </div>
  );
};

export default connect(
  (state) => ({
    number: state.counterReducer,
  }),
  {
    increase,
    decrease,
  }
)(CounterContainer);
