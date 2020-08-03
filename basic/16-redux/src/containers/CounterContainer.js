import React from 'react';
import { connect } from 'react-redux';

import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  {
    // 액션 생성함수로 이루어진 객체 형태로 넘겨주면
    // connect 함수가 내부적으로 bindActionCreators 작업을 대신 해준다.
    increase,
    decrease,
  }
)(CounterContainer);
