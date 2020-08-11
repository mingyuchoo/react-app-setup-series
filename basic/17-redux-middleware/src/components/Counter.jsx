import React from 'react';

const Counter = ({ number, onIncrease, onDecrease }) => {
  const onClickIncrease = () => {
    onIncrease();
  };
  const onClickDecrease = () => {
    onDecrease();
  };
  return (
    <div>
      <h1>{number}</h1>
      <button className="btn btn-light" onClick={onClickDecrease}>
        Decrease
      </button>
      <button className="btn btn-light" onClick={onClickIncrease}>
        Increase
      </button>
    </div>
  );
};

export default Counter;
