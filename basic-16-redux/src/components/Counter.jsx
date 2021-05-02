import React from 'react';

const Counter = ({ number, onIncrease, onDecrease }) => {
  return (
    <div className="row">
      <h1>{number}</h1>
      <div className="input-group">
        <button className="btn btn-dark" onClick={onDecrease}>
          - One
        </button>
        <button className="btn btn-dark" onClick={onIncrease}>
          + One
        </button>
      </div>
    </div>
  );
};

export default Counter;
