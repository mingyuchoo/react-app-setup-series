import { RouteComponentProps } from 'react-router-dom';

export interface User {
  id: string;
  name: string;
}

export type RouterProps = RouteComponentProps<User>;

export interface Member {
  email: string;
  password: string;
  name: string;
}
