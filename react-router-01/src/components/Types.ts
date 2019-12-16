import H from 'history';

export interface User {
  id: string;
  name: string;
}

interface Match<P> {
  params: P;
  isExact: boolean;
  path: string;
  url: string;
}

interface RouteComponentProps<P> {
  match: Match<P>;
  location: H.Location;
  history: H.History;
}

export type RouterProps = RouteComponentProps<User>;

export interface Member {
  email: string;
  password: string;
  name: string;
}
