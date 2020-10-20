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

export const localMutations = {
  updateName: updateName(nameVar),
  updateEmail: updateEmail(emailVar),
};

export default localMutations;
