import React, { useState, useEffect } from 'react';

const LifecycleFunction1 = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log('LifecycleFunction1 - did mount with useEffect!');
  });

  return (
    <div>
      <h2>number is {number}</h2>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default LifecycleFunction1;
