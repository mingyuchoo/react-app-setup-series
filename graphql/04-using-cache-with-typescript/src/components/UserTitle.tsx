import React from 'react';
import { useQuery } from '@apollo/client';

// cache
import { cache, nameVar } from '../cache';

import './UserTitle.scss';

// Other way (1)
export interface TitleProps {
  title: string;
}

// // Other way (1)
// const Title: React.FC<TitleProps> = ({ title }: TitleProps): React.ReactElement => {

// // Other way (2)
function UserTitle({ title }: TitleProps): React.ReactElement {
  // TODO 동작하지 않아 수정해야함
  const name = nameVar();
  console.log('>>>>>>>>>>>');
  console.log(name);

  return (
    <div className="title">
      <h1>
        {title} of {name}
      </h1>
    </div>
  );
}

export default UserTitle;
