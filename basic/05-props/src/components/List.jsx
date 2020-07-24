import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';

import './List.scss';

const List = (props) => {
  // 비구조화 할당(destructuring assignment)
  const { items } = props;
  const [count, setCount] = useState(items.length);

  const onClickButton = () => {
    setCount(count + 1);
  };

  return (
    <div className="list">
      <div>
        Total: {count} <button onClick={onClickButton}>+</button>
      </div>
      <ol>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ol>
    </div>
  );
};

// props 타입 설정
List.propTypes = {
  items: PropTypes.array.isRequired,
};

// memo를 이용하면 전달 받은 props가 바뀌지 않으면 re-rendering 하지 않는다.
// 하지만, 자신의 state가 바뀌는 것은 고려 대상이 아니다.
export default memo(List);
