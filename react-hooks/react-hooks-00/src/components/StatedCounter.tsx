import React, { useState, ReactElement, useEffect } from 'react';

const Counter: React.FC = (): ReactElement => {
  const [clicks, setClicks] = useState(0);
  const [name, setName] = useState('Stefan');

  useEffect(() => {
    document.title = `Hello, ${name}`;
  }, [name]);

  return (
    <>
      <p>Stated Counter: {clicks}</p>
      <button onClick={() => setClicks(clicks + 1)}>+</button>
      <button onClick={() => setClicks(clicks - 1)}>-</button>
    </>
  );
};

export default Counter;
