import React from 'react';

import './UserTitle.scss';

// Other way (1)
export interface TitleProps {
  title: string;
}

// // Other way (1)
// const Title: React.FC<TitleProps> = ({ title }: TitleProps): React.ReactElement => {

// // Other way (2)
function UserTitle({ title }: TitleProps): React.ReactElement {
  return (
    <div className="title">
      <h1>{title}</h1>
    </div>
  );
}

export default UserTitle;
