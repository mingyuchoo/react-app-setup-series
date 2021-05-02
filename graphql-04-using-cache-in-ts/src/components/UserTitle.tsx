import React from 'react';
import { useQuery, useReactiveVar } from '@apollo/client';

// cache
import { nameVar } from '../cache';

import './UserTitle.scss';

export interface TitleProps {
  title: string;
}

// // 구현 방법 (1)  - 콤포넌트를 arrow function으로 표현하는 방법
// const Title: React.FC<TitleProps> = ({ title }: TitleProps): React.ReactElement => {

// // 구현 방법 (2) - 콤포넌트를 일반 function으로 표현하는 방법
function UserTitle({ title }: TitleProps): React.ReactElement {
  // Reactive Variable 의 값을 가져와서 사용함
  const name = useReactiveVar(nameVar);

  return (
    <div className="title">
      <h1>
        {title} of {name}
      </h1>
    </div>
  );
}

export default UserTitle;
