import React, { useState, ReactElement, useEffect } from 'react';

const Counter: React.FC = (): ReactElement => {
  let [clicks, setClicks] = useState(0);
  let [name, setName] = useState('Stefan');

  useEffect(() => {
    document.title = `Hello, ${name}`;
  }, [name]);

  return (
    <>
      <p>Clicks: {clicks}</p>
      <button onClick={() => setClicks(clicks + 1)}>+</button>
      <button onClick={() => setClicks(clicks - 1)}>-</button>
    </>
  );
};

export default Counter;
