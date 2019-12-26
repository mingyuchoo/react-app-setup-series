import React from 'react';

import { Member } from '../components/Types';
import { memberList } from '../data/memberList';

const signIn = (user: Member): any => {
  const member = memberList.find(
    member => member.email === user.email && member.password === user.password
  );
  if (member === undefined) throw new Error();
  return user;
};

export default signIn;
