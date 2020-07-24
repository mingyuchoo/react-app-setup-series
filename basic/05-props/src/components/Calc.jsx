import React, { useState, useMemo } from 'react';

const Calc = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const getAverage = (numbers) => {
    console.log('calculating average...');
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
  };

  // 부모 Component가 re-rendering되거나,
  // 자신 Component의 props, state 가 바뀌거나 하면
  // re-rendering하는데 선언부가 아닌 실제 구현부는 실행하게 된다.
  // 매 re-rendering하면서 구현부도 다시 실행하게 되는데
  // useMemo 를 사용하면 값이 변경될 때만 실행하게 할 수 있다.

  // const average = getAverage(list);
  const average = useMemo(() => getAverage(list), [list]);

  const onChangeInputNumber = (e) => {
    console.log('onChangeInputNumber is called.');
    setNumber(e.target.value);
  };

  const onClickButtonAdd = () => {
    console.log('onClickButtonAdd is called.');
    if (parseInt(number)) {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
    }
    setNumber('');
  };

  const onClickButtonReset = () => {
    console.log('onClickButtonReset is called.');
    setNumber('');
    setList([]);
  };

  return (
    <div>
      <input
        className="input"
        type="text"
        name="input-number"
        placeholder="Input a number"
        value={number}
        onChange={onChangeInputNumber}
      />
      <button className="button" onClick={onClickButtonAdd}>
        Add
      </button>
      <button className="button" onClick={onClickButtonReset}>
        Reset
      </button>
      <p>Average: {average}</p>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default Calc;
