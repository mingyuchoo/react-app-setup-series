import React, { useState, useEffect } from 'react';

const LifecycleFunction2 = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log('LifecycleFunction2 - did mount with useEffect!');
    return () => {
      console.log("I'm dying...");
    };
  }, [number]);

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

export default LifecycleFunction2;
