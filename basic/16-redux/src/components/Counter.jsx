import React from 'react';

const Counter = ({ number, onIncrease, onDecrease }) => {
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button className="btn btn-dark" onClick={onIncrease}>
          +1
        </button>
        <button className="btn btn-dark" onClick={onDecrease}>
          -1
        </button>
      </div>
    </div>
  );
};

export default Counter;
