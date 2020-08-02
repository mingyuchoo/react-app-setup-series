import React, { useState, useEffect } from 'react';

const LifecycleFunction1 = () => {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState('');

  /**
   * 의존 배열 [deps]에는 사용하는 state나 props가 있다면 deps에 넣어 줘야 한다
   * 
   * 호출되는 시기: Mount > Update > Unmount
   * 
   * -- CASE  --
   * 의존 배열 [deps]를 [] 상태로 비워 놓으면, 
   * 컴포넌트가 처음 Mount(rendering)할 때에 1번
   * useEffect에 등록한 함수를 호출한다.
   * 
   * -- CASE 2 --
   * 의존 배열 [deps] 자체를 생략하면,
   * 컴포넌트가 처음 Mount(rendering)할 때에 1번
   * Update(re-rendering을 수반함)될 때 마다
   * useEffect에 등록한 함수를 호출한다.
   * 
   * -- CASE 3 --
   * 의존 배열 [deps] 에 특정 값이 있는 경우에,
   * 1) 컴포넌트가 처음 Mount(rendering)할 때 1번 호출되고,
   * 2) [deps] 배열에 지정한 값이 바뀔 때도 호출한다.
   * 
   * [deps] 배열에 지정한 값이 있다면,
   * 1) Unmount할 때도 호출하고,
   * 2) [deps] 배열에 지정한 값이 바뀌기 직전에도 호출한다.
   */
  useEffect(() => {
    console.log('LifecycleFunction1 - did mount with useEffect!');
    return () => {
      console.log("I'm cleanup function.");
    };
  }, []); // deps 배열을 비워 놓음

  return (
    <div>
      <h2>LifecycleFunction1 - number is {number}</h2>
      <button
        onClick={() => {
          setNumber(number + 1);
          setName((number + 1).toString());
        }}
      >
        Increment
      </button>
      <p>Name: {name}</p>
    </div>
  );
};

export default LifecycleFunction1;
