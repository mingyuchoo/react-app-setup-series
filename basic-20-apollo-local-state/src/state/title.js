import { gql, makeVar, useQuery } from '@apollo/client';

const titleVar = makeVar('NO TITLE');

// CACHE
// 주의: read() 부분을 title: {}로 감싸면 title.title로 뽑아야 하는 현상이 있다.
export const title = {
  read() {
    return titleVar();
  },
};

// TYPE
export const TITLE = gql`
  query Title {
    title @client
  }
`;

// QUERY
export const useTitle = () => {
  return useQuery(TITLE);
};

// MUTATION
export const modifyTitle = (function (titleVar) {
  return (title) => {
    titleVar(title);
  };
})(titleVar);
