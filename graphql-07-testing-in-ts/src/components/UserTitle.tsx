import './UserTitle.scss';

import React from 'react';

export interface UserTitleProps {
  title: string;
  name: string;
  email: string;
}

const UserTitle: React.FC<UserTitleProps> = ({ title, name, email }: UserTitleProps): React.ReactElement => {
  return (
    <div className="title">
      <h1>
        {title} of {name} ({email})
      </h1>
    </div>
  );
};

export default UserTitle;
