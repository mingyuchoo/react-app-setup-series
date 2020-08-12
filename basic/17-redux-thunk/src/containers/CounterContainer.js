import React from 'react';
import { connect } from 'react-redux';
import {
  increase,
  decrease,
  increaseAsync,
  decreaseAsync,
} from '../modules/redux-counter';
import Counter from '../components/Counter';

// const CounterContainer = ({ number, increase, decrease }) => {
const CounterContainer = ({ number, increaseAsync, decreaseAsync }) => {
  return (
    <div>
      <Counter
        number={number}
        onIncrease={increaseAsync}
        onDecrease={decreaseAsync}
      />
    </div>
  );
};

export default connect(
  (state) => ({
    number: state.counterReducer,
  }),
  {
    increaseAsync,
    decreaseAsync,
  }
)(CounterContainer);
