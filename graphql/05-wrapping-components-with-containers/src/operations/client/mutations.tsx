import { ReactiveVar } from '@apollo/client';
import { nameVar, emailVar } from '../../cache';

export function updateName(nameVar: ReactiveVar<string>) {
  return (name: string) => {
    nameVar(name);
  };
}

export function updateEmail(emailVar: ReactiveVar<string>) {
  return (email: string) => {
    emailVar(email);
  };
}

// 함수를 속성으로 가지는f 객체 생성
export const localMutations = {
  updateName: updateName(nameVar),
  updateEmail: updateEmail(emailVar),
};

export default localMutations;
