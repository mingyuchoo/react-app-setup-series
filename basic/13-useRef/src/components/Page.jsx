import React, { useState, useCallback, useEffect, useRef } from 'react';

import './Page.scss';

const Page = () => {
  // input-message 를 참조한다.
  const inputMessasge = useRef(null);
  const buttonReset = useRef(null);

  // 렌더링 안하고 바로 사용하는 변수
  const refCounter = useRef(0);

  // 렌더링하고 사용하는 상태값
  const [stateCounter, setStateCounter] = useState(0);

  // useEffect는 componentDidMount, componentDidUpdate 라이프사이클과 같은데
  // refCounter는 렌더링을 유발하지 않아 호출되지 않음 [refCounter]
  useEffect(() => {
    console.log('useEffect called: refCounter = ', refCounter.current);
    console.log('useEffect called: stateCounter = ', stateCounter);
  }, [refCounter]);

  // useCallback 을 사용해서 렌더링될 때 함수 재생성을 방지함
  const onClickButtonOK = useCallback((e) => {
    buttonReset.current.focus();
    refCounter.current += 1;
    setStateCounter(stateCounter + 1);
    console.log('ok-button is clicked: event.target.name =', e.target.name);
    console.log(
      'ok-button is clicked: refCounter.current =',
      refCounter.current
    );
    console.log('ok-button is clicked: stateCounter =', stateCounter);
  });

  // useCallback 을 사용해서 렌더링될 때 함수 재생성을 방지함
  const onClickButtonReset = useCallback((e) => {
    inputMessasge.current.focus();
  });

  // useCallback 을 사용 안하면 렌더링 될 때마다  함수를 재생성함
  const onChangeInputMessage = (e) => {
    console.log(
      'input-message is changed: event.target.value = ',
      e.target.value
    );
  };

  return (
    <div>
      <h2>
        <div>
          <input
            className="input"
            ref={inputMessasge}
            type="text"
            name="input-message"
            placeholder="Say any thing"
            onChange={onChangeInputMessage}
          />
          <button className="button" name="button-ok" onClick={onClickButtonOK}>
            OK
          </button>
          <button
            className="button"
            ref={buttonReset}
            name="button-reset"
            onClick={onClickButtonReset}
          >
            Reset
          </button>
          <p></p>
        </div>
      </h2>
    </div>
  );
};

export default Page;
