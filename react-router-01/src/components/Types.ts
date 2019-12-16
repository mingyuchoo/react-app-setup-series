import H from 'history';

export interface User {
  id: string;
  name: string;
}

export interface match<P> {
  params: P;
  isExact: boolean;
  path: string;
  url: string;
}
// from typings
export interface RouteComponentProps<P> {
  match: match<P>;
  location: H.Location;
  history: H.History;
  staticContext?: any;
}

export type RouterProps = RouteComponentProps<User>;

export interface Member {
  email: string;
  password: string;
  name: string;
}
