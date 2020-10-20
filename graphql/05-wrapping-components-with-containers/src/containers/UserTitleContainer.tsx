import React from 'react';
import { useReactiveVar } from '@apollo/client';

// cache
import { nameVar } from '../cache';

import UserTitle from '../components/UserTitle';

export default function UserTitleContainer(): React.ReactElement {
  const title = 'Title';

  // Reactive Variable 의 값을 가져와서 사용함
  const name = useReactiveVar(nameVar);

  return <UserTitle title={title} name={name} />;
}
